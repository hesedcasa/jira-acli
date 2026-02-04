import {Args, Command, Flags} from '@oclif/core'

import {readConfig} from '../../config.js'
import {formatAsToon} from '../../format.js'
import {addAttachment, clearClients} from '../../jira/jira-client.js'

export default class IssueAttachment extends Command {
  static override args = {
    file: Args.string({description: 'Path to the file to upload', required: true}),
    issueKey: Args.string({description: 'Issue ID or issue key', required: true}),
  }
  static override description = 'Add an attachment to a Jira issue'
  static override examples = [
    '<%= config.bin %> <%= command.id %> ./document.pdf PROJ-123',
    '<%= config.bin %> <%= command.id %> ./image.png PROJ-456 --authToken YOUR_TOKEN --baseUrl https://your-domain.atlassian.net',
  ]
  static override flags = {
    authToken: Flags.string({description: 'Jira API token (optional, uses config if not provided)', required: false}),
    baseUrl: Flags.string({description: 'Jira instance URL (optional, uses config if not provided)', required: false}),
    toon: Flags.boolean({description: 'Format output as toon', required: false}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(IssueAttachment)

    // Determine configuration: use flags if provided, otherwise use config file
    let config
    if (flags.baseUrl && flags.authToken) {
      // Use flags for configuration
      config = {
        auth: {
          apiToken: flags.authToken,
          email: '', // Email not required for API token auth
          host: flags.baseUrl,
        },
      }
    } else if (flags.baseUrl || flags.authToken) {
      // If only one flag is provided, show error
      this.error('Both --baseUrl and --authToken must be provided together, or use config file')
    } else {
      // Use config file
      const configFromFile = await readConfig(this.config.configDir, this.log.bind(this))
      if (!configFromFile) {
        return
      }

      config = configFromFile
    }

    this.log(`Uploading attachment "${args.file}" to issue ${args.issueKey}...`)

    const result = await addAttachment(config.auth, args.issueKey, args.file)
    clearClients()

    if (flags.toon) {
      this.log(formatAsToon(result))
    } else {
      this.logJson(result)
    }

    if (result.success) {
      this.log(`✓ Successfully uploaded attachment to ${args.issueKey}`)
    } else {
      this.error(`Failed to upload attachment: ${result.error}`)
    }
  }
}
