# jira-acli

CLI for Jira API interaction

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/jira-acli.svg)](https://npmjs.org/package/jira-acli)
[![Downloads/week](https://img.shields.io/npm/dw/jira-acli.svg)](https://npmjs.org/package/jira-acli)

<!-- toc -->
* [jira-acli](#jira-acli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g jira-acli
$ jira-acli COMMAND
running command...
$ jira-acli (--version)
jira-acli/0.1.0 darwin-arm64 node-v22.14.0
$ jira-acli --help [COMMAND]
USAGE
  $ jira-acli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`jira-acli auth add`](#jira-acli-auth-add)
* [`jira-acli auth update`](#jira-acli-auth-update)
* [`jira-acli board backlogs BOARDID [JQL]`](#jira-acli-board-backlogs-boardid-jql)
* [`jira-acli board list [PROJECTID]`](#jira-acli-board-list-projectid)
* [`jira-acli board sprint-issues BOARDID SPRINTID [JQL]`](#jira-acli-board-sprint-issues-boardid-sprintid-jql)
* [`jira-acli board sprints BOARDID`](#jira-acli-board-sprints-boardid)
* [`jira-acli board versions BOARDID`](#jira-acli-board-versions-boardid)
* [`jira-acli commands`](#jira-acli-commands)
* [`jira-acli help [COMMAND]`](#jira-acli-help-command)
* [`jira-acli issue add-comment BODY ISSUEID`](#jira-acli-issue-add-comment-body-issueid)
* [`jira-acli issue assign ACCOUNTID ISSUEID`](#jira-acli-issue-assign-accountid-issueid)
* [`jira-acli issue attachment [FILE]`](#jira-acli-issue-attachment-file)
* [`jira-acli issue create`](#jira-acli-issue-create)
* [`jira-acli issue delete ISSUEID`](#jira-acli-issue-delete-issueid)
* [`jira-acli issue delete-comment ID ISSUEID`](#jira-acli-issue-delete-comment-id-issueid)
* [`jira-acli issue delete-worklog ID ISSUEID`](#jira-acli-issue-delete-worklog-id-issueid)
* [`jira-acli issue download-attachment ATTACHMENTID ISSUEID [OUTPUTPATH]`](#jira-acli-issue-download-attachment-attachmentid-issueid-outputpath)
* [`jira-acli issue get ISSUEID`](#jira-acli-issue-get-issueid)
* [`jira-acli issue get-transitions ISSUEID`](#jira-acli-issue-get-transitions-issueid)
* [`jira-acli issue get-worklogs ISSUEID`](#jira-acli-issue-get-worklogs-issueid)
* [`jira-acli issue search JQL`](#jira-acli-issue-search-jql)
* [`jira-acli issue transition ISSUEID TRANSITIONID`](#jira-acli-issue-transition-issueid-transitionid)
* [`jira-acli issue update ISSUEID`](#jira-acli-issue-update-issueid)
* [`jira-acli issue update-comment BODY ID ISSUEID`](#jira-acli-issue-update-comment-body-id-issueid)
* [`jira-acli issue worklog ISSUEID STARTED TIMESPENT [COMMENT]`](#jira-acli-issue-worklog-issueid-started-timespent-comment)
* [`jira-acli project get PROJECTID`](#jira-acli-project-get-projectid)
* [`jira-acli project list`](#jira-acli-project-list)
* [`jira-acli update [CHANNEL]`](#jira-acli-update-channel)
* [`jira-acli user get [ACCOUNTID]`](#jira-acli-user-get-accountid)
* [`jira-acli user list-assignable ISSUEID`](#jira-acli-user-list-assignable-issueid)
* [`jira-acli version`](#jira-acli-version)

## `jira-acli auth add`

Add Atlassian authentication

```
USAGE
  $ jira-acli auth add [--json] [-e <value>] [-t <value>] [-u <value>]

FLAGS
  -e, --email=<value>  Account email:
  -t, --token=<value>  API Token:
  -u, --url=<value>    Atlassian URL (start with https://):

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Add Atlassian authentication

EXAMPLES
  $ jira-acli auth add
```

_See code: [src/commands/auth/add.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/auth/add.ts)_

## `jira-acli auth update`

Update existing authentication

```
USAGE
  $ jira-acli auth update [--json] [-e <value>] [-t <value>] [-u <value>]

FLAGS
  -e, --email=<value>  Account email
  -t, --token=<value>  API Token
  -u, --url=<value>    Atlassian instance URL (start with https://)

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Update existing authentication

EXAMPLES
  $ jira-acli auth update
```

_See code: [src/commands/auth/update.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/auth/update.ts)_

## `jira-acli board backlogs BOARDID [JQL]`

Get all issues from the board's backlog

```
USAGE
  $ jira-acli board backlogs BOARDID [JQL] [--fields <value>] [--max <value>] [--start <value>] [--toon]

ARGUMENTS
  BOARDID  Board ID
  [JQL]    JQL expression

FLAGS
  --fields=<value>  Extra list of fields to return
  --max=<value>     Maximum number of items per page
  --start=<value>   Index of the first item to return
  --toon            Format output as toon

DESCRIPTION
  Get all issues from the board's backlog

EXAMPLES
  $ jira-acli board backlogs 123 'summary ~ "Error saving file" AND status IN ("ready", "in progress")'

  $ jira-acli board backlogs 123 'assignee="john@email.com" AND type=Bug' --max 5 --start 2

  $ jira-acli board backlogs 123 'timeestimate > 4h' --fields comment,creator,timeestimate
```

_See code: [src/commands/board/backlogs.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/board/backlogs.ts)_

## `jira-acli board list [PROJECTID]`

describe the command here

```
USAGE
  $ jira-acli board list [PROJECTID] [--max <value>] [--start <value>] [--toon]

ARGUMENTS
  [PROJECTID]  Project ID or project key

FLAGS
  --max=<value>    Maximum number of items per page
  --start=<value>  Index of the first item to return
  --toon           Format output as toon

DESCRIPTION
  describe the command here

EXAMPLES
  $ jira-acli board list

  $ jira-acli board list PROJ
```

_See code: [src/commands/board/list.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/board/list.ts)_

## `jira-acli board sprint-issues BOARDID SPRINTID [JQL]`

Get all issues belong to the sprint from the board

```
USAGE
  $ jira-acli board sprint-issues BOARDID SPRINTID [JQL] [--fields <value>] [--max <value>] [--start <value>] [--toon]

ARGUMENTS
  BOARDID   Board ID
  SPRINTID  Sprint ID
  [JQL]     JQL expression

FLAGS
  --fields=<value>  Extra list of fields to return
  --max=<value>     Maximum number of items per page
  --start=<value>   Index of the first item to return
  --toon            Format output as toon

DESCRIPTION
  Get all issues belong to the sprint from the board

EXAMPLES
  $ jira-acli board sprint-issues 123 3068 'summary ~ "Error saving file" AND status IN ("ready", "in progress")'

  $ jira-acli board sprint-issues 123 3068 'assignee="john@email.com" AND type=Bug' --max 5 --start 2

  $ jira-acli board sprint-issues 123 3068 'timeestimate > 4h' --fields comment,creator,timeestimate
```

_See code: [src/commands/board/sprint-issues.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/board/sprint-issues.ts)_

## `jira-acli board sprints BOARDID`

Get all sprints from a board

```
USAGE
  $ jira-acli board sprints BOARDID [--max <value>] [--start <value>] [--state <value>] [--toon]

ARGUMENTS
  BOARDID  Board ID

FLAGS
  --max=<value>    Maximum number of items per page
  --start=<value>  Index of the first item to return
  --state=<value>  Filters sprints in specified states (future, active, closed)
  --toon           Format output as toon

DESCRIPTION
  Get all sprints from a board

EXAMPLES
  $ jira-acli board sprints 123

  $ jira-acli board sprints 123 --state active
```

_See code: [src/commands/board/sprints.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/board/sprints.ts)_

## `jira-acli board versions BOARDID`

Get all sprints from a board

```
USAGE
  $ jira-acli board versions BOARDID [--max <value>] [--released <value>] [--start <value>] [--toon]

ARGUMENTS
  BOARDID  Board ID

FLAGS
  --max=<value>       Maximum number of items per page
  --released=<value>  Filters versions release state (true, false)
  --start=<value>     Index of the first item to return
  --toon              Format output as toon

DESCRIPTION
  Get all sprints from a board

EXAMPLES
  $ jira-acli board versions 123

  $ jira-acli board versions 123 --released false
```

_See code: [src/commands/board/versions.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/board/versions.ts)_

## `jira-acli commands`

List all jira-acli commands.

```
USAGE
  $ jira-acli commands [--json] [-c id|plugin|summary|type... | --tree] [--deprecated] [-x | ] [--hidden]
    [--no-truncate | ] [--sort id|plugin|summary|type | ]

FLAGS
  -c, --columns=<option>...  Only show provided columns (comma-separated).
                             <options: id|plugin|summary|type>
  -x, --extended             Show extra columns.
      --deprecated           Show deprecated commands.
      --hidden               Show hidden commands.
      --no-truncate          Do not truncate output.
      --sort=<option>        [default: id] Property to sort by.
                             <options: id|plugin|summary|type>
      --tree                 Show tree of commands.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List all jira-acli commands.
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v4.1.39/src/commands/commands.ts)_

## `jira-acli help [COMMAND]`

Display help for jira-acli.

```
USAGE
  $ jira-acli help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for jira-acli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.37/src/commands/help.ts)_

## `jira-acli issue add-comment BODY ISSUEID`

Add a comment to an issue

```
USAGE
  $ jira-acli issue add-comment BODY ISSUEID [--toon]

ARGUMENTS
  BODY     Comment text content
  ISSUEID  Issue ID or issue key

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Add a comment to an issue

EXAMPLES
  $ jira-acli issue add-comment "
  # Header
  ## Sub-header
  - Item 1
  - Item 2
  ```bash
  ls -a
  ```" PROJ-123

  $ jira-acli issue add-comment "$(cat content.md)" PROJ-123
```

_See code: [src/commands/issue/add-comment.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/add-comment.ts)_

## `jira-acli issue assign ACCOUNTID ISSUEID`

Assigns an issue to a user

```
USAGE
  $ jira-acli issue assign ACCOUNTID ISSUEID

ARGUMENTS
  ACCOUNTID  Account ID of the user
  ISSUEID    Issue ID or issue key

DESCRIPTION
  Assigns an issue to a user

EXAMPLES
  $ jira-acli issue assign 5b10ac8d82e05b22cc7d4ef5 PROJ-123
```

_See code: [src/commands/issue/assign.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/assign.ts)_

## `jira-acli issue attachment [FILE]`

describe the command here

```
USAGE
  $ jira-acli issue attachment [FILE] [-f] [-n <value>]

ARGUMENTS
  [FILE]  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ jira-acli issue attachment
```

_See code: [src/commands/issue/attachment.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/attachment.ts)_

## `jira-acli issue create`

Create a new issue

```
USAGE
  $ jira-acli issue create --fields <value>... [--toon]

FLAGS
  --fields=<value>...  (required) Issue fields in key=value format
  --toon               Format output as toon

DESCRIPTION
  Create a new issue

EXAMPLES
  $ jira-acli issue create --fields project='{"key":"PROJ"}' summary="New summary" description="New description" issuetype='{"name":"Dev Task"}'

  $ jira-acli issue create --fields project='{"key":"PROJ"}' summary="New summary" timetracking='{"originalEstimate": "5h"}' issuetype='{"name":"Task"}' description='
  # Header
  ## Sub-header
  - Item 1
  - Item 2
  ```bash
  ls -a
  ```'

FLAG DESCRIPTIONS
  --fields=<value>...  Issue fields in key=value format

    Minimum fields required: project, summary, description & issuetype
```

_See code: [src/commands/issue/create.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/create.ts)_

## `jira-acli issue delete ISSUEID`

Delete an issue

```
USAGE
  $ jira-acli issue delete ISSUEID

ARGUMENTS
  ISSUEID  Issue ID or issue key to delete

DESCRIPTION
  Delete an issue

EXAMPLES
  $ jira-acli issue delete
```

_See code: [src/commands/issue/delete.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/delete.ts)_

## `jira-acli issue delete-comment ID ISSUEID`

Delete a comment

```
USAGE
  $ jira-acli issue delete-comment ID ISSUEID

ARGUMENTS
  ID       Comment ID to delete
  ISSUEID  Issue ID or issue key

DESCRIPTION
  Delete a comment

EXAMPLES
  $ jira-acli issue delete-comment 123 PROJ-123
```

_See code: [src/commands/issue/delete-comment.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/delete-comment.ts)_

## `jira-acli issue delete-worklog ID ISSUEID`

Delete a worklog

```
USAGE
  $ jira-acli issue delete-worklog ID ISSUEID

ARGUMENTS
  ID       Worklog ID to delete
  ISSUEID  Issue ID or issue key

DESCRIPTION
  Delete a worklog

EXAMPLES
  $ jira-acli issue delete-worklog 123 PROJ-123
```

_See code: [src/commands/issue/delete-worklog.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/delete-worklog.ts)_

## `jira-acli issue download-attachment ATTACHMENTID ISSUEID [OUTPUTPATH]`

Download attachment from an issue

```
USAGE
  $ jira-acli issue download-attachment ATTACHMENTID ISSUEID [OUTPUTPATH] [--toon]

ARGUMENTS
  ATTACHMENTID  Attachment ID
  ISSUEID       Issue ID or issue key
  [OUTPUTPATH]  Output file path

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Download attachment from an issue

EXAMPLES
  $ jira-acli issue download-attachment 123 PROJ-123

  $ jira-acli issue download-attachment 123 PROJ-123 ~/Desktop/test.jpg
```

_See code: [src/commands/issue/download-attachment.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/download-attachment.ts)_

## `jira-acli issue get ISSUEID`

Get details of a specific issue

```
USAGE
  $ jira-acli issue get ISSUEID [--toon]

ARGUMENTS
  ISSUEID  Issue ID or issue key

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Get details of a specific issue

EXAMPLES
  $ jira-acli issue get PROJ-123
```

_See code: [src/commands/issue/get.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/get.ts)_

## `jira-acli issue get-transitions ISSUEID`

Get transitions that can be performed by the user on an issue

```
USAGE
  $ jira-acli issue get-transitions ISSUEID [--toon]

ARGUMENTS
  ISSUEID  Issue ID or issue key

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Get transitions that can be performed by the user on an issue

EXAMPLES
  $ jira-acli issue get-transitions PROJ-123
```

_See code: [src/commands/issue/get-transitions.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/get-transitions.ts)_

## `jira-acli issue get-worklogs ISSUEID`

List all boards

```
USAGE
  $ jira-acli issue get-worklogs ISSUEID [--max <value>] [--start <value>] [--toon]

ARGUMENTS
  ISSUEID  Issue ID or issue key

FLAGS
  --max=<value>    Maximum number of items per page
  --start=<value>  Index of the first item to return
  --toon           Format output as toon

DESCRIPTION
  List all boards

EXAMPLES
  $ jira-acli issue get-worklogs PROJ-123
```

_See code: [src/commands/issue/get-worklogs.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/get-worklogs.ts)_

## `jira-acli issue search JQL`

Searches for issues using JQL

```
USAGE
  $ jira-acli issue search JQL [--fields <value>] [--max <value>] [--next <value>] [--toon]

ARGUMENTS
  JQL  JQL expression

FLAGS
  --fields=<value>  Extra list of fields to return
  --max=<value>     Maximum number of items per page
  --next=<value>    Token for next page
  --toon            Format output as toon

DESCRIPTION
  Searches for issues using JQL

EXAMPLES
  $ jira-acli issue search 'project=PROJ AND summary ~ "Error saving file" AND status IN ("ready", "in progress")'

  $ jira-acli issue search 'assignee="john@email.com" AND type=Bug' --max 5 --next CiEjU3RyaW5nJlUwRlVTRkpGUlE9PSVJbnQmTkRFd05qST0QAhiQqtD4wTMiKGFzc2lnbmVlPSJhbGxlbkBpbmN1YmU4LnNnIiBBTkQgdHlwZT1CdWcqAltd

  $ jira-acli issue search 'timeestimate > 4h' --fields comment,creator,timeestimate
```

_See code: [src/commands/issue/search.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/search.ts)_

## `jira-acli issue transition ISSUEID TRANSITIONID`

Performs an issue transition

```
USAGE
  $ jira-acli issue transition ISSUEID TRANSITIONID

ARGUMENTS
  ISSUEID       Issue ID or issue key
  TRANSITIONID  Issue transition ID

DESCRIPTION
  Performs an issue transition

EXAMPLES
  $ jira-acli issue transition PROJ-123 123
```

_See code: [src/commands/issue/transition.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/transition.ts)_

## `jira-acli issue update ISSUEID`

Update an existing issue

```
USAGE
  $ jira-acli issue update ISSUEID --fields <value>...

ARGUMENTS
  ISSUEID  Issue ID or issue key

FLAGS
  --fields=<value>...  (required) Issue fields to update in key=value format

DESCRIPTION
  Update an existing issue

EXAMPLES
  $ jira-acli issue update PROJ-123 --fields summary='New summary' description='New description'

  $ jira-acli issue update PROJ-123 --fields description='
  # Header
  ## Sub-header
  - Item 1
  - Item 2
  ```bash
  ls -a
  ```'

  $ jira-acli issue update PROJ-123 --fields description="$(cat content.md)"

  $ jira-acli issue update PROJ-123 --fields timetracking='{"originalEstimate": "5h"}'
```

_See code: [src/commands/issue/update.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/update.ts)_

## `jira-acli issue update-comment BODY ID ISSUEID`

Update a comment

```
USAGE
  $ jira-acli issue update-comment BODY ID ISSUEID [--toon]

ARGUMENTS
  BODY     Comment text content
  ID       Comment ID to delete
  ISSUEID  Issue ID or issue key

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Update a comment

EXAMPLES
  $ jira-acli issue update-comment "
  # Header
  ## Sub-header
  - Item 1
  - Item 2
  ```bash
  ls -a
  ```" 123 PROJ-123

  $ jira-acli issue update-comment "$(cat content.md)" 123 PROJ-123
```

_See code: [src/commands/issue/update-comment.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/update-comment.ts)_

## `jira-acli issue worklog ISSUEID STARTED TIMESPENT [COMMENT]`

Add a worklog to an issue

```
USAGE
  $ jira-acli issue worklog ISSUEID STARTED TIMESPENT [COMMENT] [--toon]

ARGUMENTS
  ISSUEID    Issue ID or issue key
  STARTED    Datetime the worklog effort started
  TIMESPENT  Time spent working on the issue
  [COMMENT]  Comment text content

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Add a worklog to an issue

EXAMPLES
  $ jira-acli issue worklog PROJ-123 2026-02-03T12:34:00.000+0000 "1d 4h" "
  # Header
  ## Sub-header"

  $ jira-acli issue worklog PROJ-123 $(date +"%Y-%m-%dT%H:%M:%S.000%z") 6h "Fix test"

  $ jira-acli issue worklog PROJ-123 $(date +"%Y-%m-%dT08:30:00.000%z") 6h
```

_See code: [src/commands/issue/worklog.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/issue/worklog.ts)_

## `jira-acli project get PROJECTID`

Get details of a specific project

```
USAGE
  $ jira-acli project get PROJECTID [--toon]

ARGUMENTS
  PROJECTID  Project ID or project key

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Get details of a specific project

EXAMPLES
  $ jira-acli project get
```

_See code: [src/commands/project/get.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/project/get.ts)_

## `jira-acli project list`

List all accessible projects

```
USAGE
  $ jira-acli project list [--toon]

FLAGS
  --toon  Format output as toon

DESCRIPTION
  List all accessible projects

EXAMPLES
  $ jira-acli project list
```

_See code: [src/commands/project/list.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/project/list.ts)_

## `jira-acli update [CHANNEL]`

update the jira-acli CLI

```
USAGE
  $ jira-acli update [CHANNEL] [--force |  | [-a | -v <value> | -i]] [-b ]

FLAGS
  -a, --available        See available versions.
  -b, --verbose          Show more details about the available versions.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
      --force            Force a re-download of the requested version.

DESCRIPTION
  update the jira-acli CLI

EXAMPLES
  Update to the stable channel:

    $ jira-acli update stable

  Update to a specific version:

    $ jira-acli update --version 1.0.0

  Interactively select version:

    $ jira-acli update --interactive

  See available versions:

    $ jira-acli update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v4.7.18/src/commands/update.ts)_

## `jira-acli user get [ACCOUNTID]`

Get user information

```
USAGE
  $ jira-acli user get [ACCOUNTID] [-q <value>] [--toon]

ARGUMENTS
  [ACCOUNTID]  User account ID

FLAGS
  -q, --query=<value>  Query string that matches user attributes
      --toon           Format output as toon

DESCRIPTION
  Get user information

EXAMPLES
  $ jira-acli user get

  $ jira-acli user get 5b10ac8d82e05b22cc7d4ef5

  $ jira-acli user get -query john

  $ jira-acli user get -q john@email.com
```

_See code: [src/commands/user/get.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/user/get.ts)_

## `jira-acli user list-assignable ISSUEID`

List users that can be assigned to an issue

```
USAGE
  $ jira-acli user list-assignable ISSUEID [-q <value>] [--toon]

ARGUMENTS
  ISSUEID  Issue ID or issue key

FLAGS
  -q, --query=<value>  Query string that matches user attributes
      --toon           Format output as toon

DESCRIPTION
  List users that can be assigned to an issue

EXAMPLES
  $ jira-acli user list-assignable PROJ-123

  $ jira-acli user list-assignable PROJ-123 -q john
```

_See code: [src/commands/user/list-assignable.ts](https://github.com/hesed/jira-acli/blob/v0.1.0/src/commands/user/list-assignable.ts)_

## `jira-acli version`

```
USAGE
  $ jira-acli version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v2.2.36/src/commands/version.ts)_
<!-- commandsstop -->
