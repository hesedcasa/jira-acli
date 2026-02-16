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
jira-acli/0.2.4 linux-x64 node-v20.20.0
$ jira-acli --help [COMMAND]
USAGE
  $ jira-acli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`jira-acli commands`](#jira-acli-commands)
* [`jira-acli help [COMMAND]`](#jira-acli-help-command)
* [`jira-acli jira auth add`](#jira-acli-jira-auth-add)
* [`jira-acli jira auth test`](#jira-acli-jira-auth-test)
* [`jira-acli jira auth update`](#jira-acli-jira-auth-update)
* [`jira-acli jira board backlogs BOARDID [JQL]`](#jira-acli-jira-board-backlogs-boardid-jql)
* [`jira-acli jira board list [PROJECTID]`](#jira-acli-jira-board-list-projectid)
* [`jira-acli jira board sprint-issues BOARDID SPRINTID [JQL]`](#jira-acli-jira-board-sprint-issues-boardid-sprintid-jql)
* [`jira-acli jira board sprints BOARDID`](#jira-acli-jira-board-sprints-boardid)
* [`jira-acli jira board versions BOARDID`](#jira-acli-jira-board-versions-boardid)
* [`jira-acli jira issue assign ISSUEID ACCOUNTID`](#jira-acli-jira-issue-assign-issueid-accountid)
* [`jira-acli jira issue attachment ISSUEID FILE`](#jira-acli-jira-issue-attachment-issueid-file)
* [`jira-acli jira issue attachment-download ISSUEID ATTACHMENTID [OUTPUTPATH]`](#jira-acli-jira-issue-attachment-download-issueid-attachmentid-outputpath)
* [`jira-acli jira issue comment ISSUEID BODY`](#jira-acli-jira-issue-comment-issueid-body)
* [`jira-acli jira issue comment-delete ISSUEID ID`](#jira-acli-jira-issue-comment-delete-issueid-id)
* [`jira-acli jira issue create`](#jira-acli-jira-issue-create)
* [`jira-acli jira issue delete ISSUEID`](#jira-acli-jira-issue-delete-issueid)
* [`jira-acli jira issue get ISSUEID`](#jira-acli-jira-issue-get-issueid)
* [`jira-acli jira issue search JQL`](#jira-acli-jira-issue-search-jql)
* [`jira-acli jira issue transition ISSUEID TRANSITIONID`](#jira-acli-jira-issue-transition-issueid-transitionid)
* [`jira-acli jira issue transitions ISSUEID`](#jira-acli-jira-issue-transitions-issueid)
* [`jira-acli jira issue update ISSUEID`](#jira-acli-jira-issue-update-issueid)
* [`jira-acli jira issue update-comment ISSUEID ID BODY`](#jira-acli-jira-issue-update-comment-issueid-id-body)
* [`jira-acli jira issue worklog ISSUEID STARTED TIMESPENT [COMMENT]`](#jira-acli-jira-issue-worklog-issueid-started-timespent-comment)
* [`jira-acli jira issue worklog-delete ISSUEID ID`](#jira-acli-jira-issue-worklog-delete-issueid-id)
* [`jira-acli jira issue worklogs ISSUEID`](#jira-acli-jira-issue-worklogs-issueid)
* [`jira-acli jira project get PROJECTID`](#jira-acli-jira-project-get-projectid)
* [`jira-acli jira project list`](#jira-acli-jira-project-list)
* [`jira-acli jira user get [ACCOUNTID]`](#jira-acli-jira-user-get-accountid)
* [`jira-acli jira user list-assignable ISSUEID`](#jira-acli-jira-user-list-assignable-issueid)
* [`jira-acli update [CHANNEL]`](#jira-acli-update-channel)
* [`jira-acli version`](#jira-acli-version)

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

## `jira-acli jira auth add`

Add Atlassian authentication

```
USAGE
  $ jira-acli jira auth add -e <value> -t <value> -u <value> [--json]

FLAGS
  -e, --email=<value>  (required) Account email:
  -t, --token=<value>  (required) API Token:
  -u, --url=<value>    (required) Atlassian URL (start with https://):

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Add Atlassian authentication

EXAMPLES
  $ jira-acli jira auth add
```

_See code: [src/commands/jira/auth/add.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/auth/add.ts)_

## `jira-acli jira auth test`

Test authentication and connection

```
USAGE
  $ jira-acli jira auth test [--json]

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Test authentication and connection

EXAMPLES
  $ jira-acli jira auth test
```

_See code: [src/commands/jira/auth/test.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/auth/test.ts)_

## `jira-acli jira auth update`

Update existing authentication

```
USAGE
  $ jira-acli jira auth update -e <value> -t <value> -u <value> [--json]

FLAGS
  -e, --email=<value>  (required) Account email
  -t, --token=<value>  (required) API Token
  -u, --url=<value>    (required) Atlassian instance URL (start with https://)

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Update existing authentication

EXAMPLES
  $ jira-acli jira auth update
```

_See code: [src/commands/jira/auth/update.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/auth/update.ts)_

## `jira-acli jira board backlogs BOARDID [JQL]`

Get all issues from the board's backlog

```
USAGE
  $ jira-acli jira board backlogs BOARDID [JQL] [--fields <value>] [--max <value>] [--start <value>] [--toon]

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
  $ jira-acli jira board backlogs 123 'summary ~ "Error saving file" AND status IN ("ready", "in progress")'

  $ jira-acli jira board backlogs 123 'assignee="john@email.com" AND type=Bug' --max 5 --start 2

  $ jira-acli jira board backlogs 123 'timeestimate > 4h' --fields comment,creator,timeestimate
```

_See code: [src/commands/jira/board/backlogs.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/board/backlogs.ts)_

## `jira-acli jira board list [PROJECTID]`

Get all boards

```
USAGE
  $ jira-acli jira board list [PROJECTID] [--max <value>] [--start <value>] [--toon]

ARGUMENTS
  [PROJECTID]  Project ID or project key

FLAGS
  --max=<value>    Maximum number of items per page
  --start=<value>  Index of the first item to return
  --toon           Format output as toon

DESCRIPTION
  Get all boards

EXAMPLES
  $ jira-acli jira board list

  $ jira-acli jira board list PROJ
```

_See code: [src/commands/jira/board/list.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/board/list.ts)_

## `jira-acli jira board sprint-issues BOARDID SPRINTID [JQL]`

Get all issues belong to the sprint from the board

```
USAGE
  $ jira-acli jira board sprint-issues BOARDID SPRINTID [JQL] [--fields <value>] [--max <value>] [--start <value>]
  [--toon]

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
  $ jira-acli jira board sprint-issues 123 3068 'summary ~ "Error saving file" AND status IN ("ready", "in progress")'

  $ jira-acli jira board sprint-issues 123 3068 'assignee="john@email.com" AND type=Bug' --max 5 --start 2

  $ jira-acli jira board sprint-issues 123 3068 'timeestimate > 4h' --fields comment,creator,timeestimate
```

_See code: [src/commands/jira/board/sprint-issues.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/board/sprint-issues.ts)_

## `jira-acli jira board sprints BOARDID`

Get all sprints from a board

```
USAGE
  $ jira-acli jira board sprints BOARDID [--max <value>] [--start <value>] [--state <value>] [--toon]

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
  $ jira-acli jira board sprints 123

  $ jira-acli jira board sprints 123 --state active
```

_See code: [src/commands/jira/board/sprints.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/board/sprints.ts)_

## `jira-acli jira board versions BOARDID`

Get all sprints from a board

```
USAGE
  $ jira-acli jira board versions BOARDID [--max <value>] [--released <value>] [--start <value>] [--toon]

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
  $ jira-acli jira board versions 123

  $ jira-acli jira board versions 123 --released false
```

_See code: [src/commands/jira/board/versions.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/board/versions.ts)_

## `jira-acli jira issue assign ISSUEID ACCOUNTID`

Assigns an issue to a user

```
USAGE
  $ jira-acli jira issue assign ISSUEID ACCOUNTID

ARGUMENTS
  ISSUEID    Issue ID or issue key
  ACCOUNTID  Account ID of the user

DESCRIPTION
  Assigns an issue to a user

EXAMPLES
  $ jira-acli jira issue assign 5b10ac8d82e05b22cc7d4ef5 PROJ-123
```

_See code: [src/commands/jira/issue/assign.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/assign.ts)_

## `jira-acli jira issue attachment ISSUEID FILE`

Add an attachment to a Jira issue

```
USAGE
  $ jira-acli jira issue attachment ISSUEID FILE [--toon]

ARGUMENTS
  ISSUEID  Issue ID or issue key
  FILE     Path to the file to upload

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Add an attachment to a Jira issue

EXAMPLES
  $ jira-acli jira issue attachment ./document.pdf PROJ-123
```

_See code: [src/commands/jira/issue/attachment.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/attachment.ts)_

## `jira-acli jira issue attachment-download ISSUEID ATTACHMENTID [OUTPUTPATH]`

Download attachment from an issue

```
USAGE
  $ jira-acli jira issue attachment-download ISSUEID ATTACHMENTID [OUTPUTPATH] [--toon]

ARGUMENTS
  ISSUEID       Issue ID or issue key
  ATTACHMENTID  Attachment ID
  [OUTPUTPATH]  Output file path

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Download attachment from an issue

EXAMPLES
  $ jira-acli jira issue attachment-download 123 PROJ-123

  $ jira-acli jira issue attachment-download 123 PROJ-123 ~/Desktop/test.jpg
```

_See code: [src/commands/jira/issue/attachment-download.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/attachment-download.ts)_

## `jira-acli jira issue comment ISSUEID BODY`

Add a comment to an issue

```
USAGE
  $ jira-acli jira issue comment ISSUEID BODY [--toon]

ARGUMENTS
  ISSUEID  Issue ID or issue key
  BODY     Comment text content

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Add a comment to an issue

EXAMPLES
  $ jira-acli jira issue comment "
  # Header
  ## Sub-header
  - Item 1
  - Item 2
  ```bash
  ls -a
  ```" PROJ-123

  $ jira-acli jira issue comment "$(cat content.md)" PROJ-123
```

_See code: [src/commands/jira/issue/comment.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/comment.ts)_

## `jira-acli jira issue comment-delete ISSUEID ID`

Delete a comment

```
USAGE
  $ jira-acli jira issue comment-delete ISSUEID ID

ARGUMENTS
  ISSUEID  Issue ID or issue key
  ID       Comment ID to delete

DESCRIPTION
  Delete a comment

EXAMPLES
  $ jira-acli jira issue comment-delete 123 PROJ-123
```

_See code: [src/commands/jira/issue/comment-delete.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/comment-delete.ts)_

## `jira-acli jira issue create`

Create a new issue

```
USAGE
  $ jira-acli jira issue create --fields <value>... [--toon]

FLAGS
  --fields=<value>...  (required) Issue fields in key=value format
  --toon               Format output as toon

DESCRIPTION
  Create a new issue

EXAMPLES
  $ jira-acli jira issue create --fields project='{"key":"PROJ"}' summary="New summary" description="New description" issuetype='{"name":"Dev Task"}'

  $ jira-acli jira issue create --fields project='{"key":"PROJ"}' summary="New summary" timetracking='{"originalEstimate": "5h"}' issuetype='{"name":"Task"}' description='
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

_See code: [src/commands/jira/issue/create.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/create.ts)_

## `jira-acli jira issue delete ISSUEID`

Delete an issue

```
USAGE
  $ jira-acli jira issue delete ISSUEID

ARGUMENTS
  ISSUEID  Issue ID or issue key to delete

DESCRIPTION
  Delete an issue

EXAMPLES
  $ jira-acli jira issue delete
```

_See code: [src/commands/jira/issue/delete.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/delete.ts)_

## `jira-acli jira issue get ISSUEID`

Get details of a specific issue

```
USAGE
  $ jira-acli jira issue get ISSUEID [--toon]

ARGUMENTS
  ISSUEID  Issue ID or issue key

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Get details of a specific issue

EXAMPLES
  $ jira-acli jira issue get PROJ-123
```

_See code: [src/commands/jira/issue/get.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/get.ts)_

## `jira-acli jira issue search JQL`

Searches for issues using JQL

```
USAGE
  $ jira-acli jira issue search JQL [--fields <value>] [--max <value>] [--next <value>] [--toon]

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
  $ jira-acli jira issue search 'project=PROJ AND summary ~ "Error saving file" AND status IN ("ready", "in progress")'

  $ jira-acli jira issue search 'assignee="john@email.com" AND type=Bug' --max 5 --next CiEjU3RyaW5nJlUwRlVTRkpGUlE9PSVJbnQmTkRFd05qST0QAhiQqtD4wTMiKGFzc2lnbmVlPSJhbGxlbkBpbmN1YmU4LnNnIiBBTkQgdHlwZT1CdWcqAltd

  $ jira-acli jira issue search 'timeestimate > 4h' --fields comment,creator,timeestimate
```

_See code: [src/commands/jira/issue/search.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/search.ts)_

## `jira-acli jira issue transition ISSUEID TRANSITIONID`

Performs an issue transition

```
USAGE
  $ jira-acli jira issue transition ISSUEID TRANSITIONID

ARGUMENTS
  ISSUEID       Issue ID or issue key
  TRANSITIONID  Issue transition ID

DESCRIPTION
  Performs an issue transition

EXAMPLES
  $ jira-acli jira issue transition PROJ-123 123
```

_See code: [src/commands/jira/issue/transition.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/transition.ts)_

## `jira-acli jira issue transitions ISSUEID`

Get transitions that can be performed by the user on an issue

```
USAGE
  $ jira-acli jira issue transitions ISSUEID [--toon]

ARGUMENTS
  ISSUEID  Issue ID or issue key

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Get transitions that can be performed by the user on an issue

EXAMPLES
  $ jira-acli jira issue transitions PROJ-123
```

_See code: [src/commands/jira/issue/transitions.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/transitions.ts)_

## `jira-acli jira issue update ISSUEID`

Update an existing issue

```
USAGE
  $ jira-acli jira issue update ISSUEID --fields <value>...

ARGUMENTS
  ISSUEID  Issue ID or issue key

FLAGS
  --fields=<value>...  (required) Issue fields to update in key=value format

DESCRIPTION
  Update an existing issue

EXAMPLES
  $ jira-acli jira issue update PROJ-123 --fields summary='New summary' description='New description'

  $ jira-acli jira issue update PROJ-123 --fields description='
  # Header
  ## Sub-header
  - Item 1
  - Item 2
  ```bash
  ls -a
  ```'

  $ jira-acli jira issue update PROJ-123 --fields description="$(cat content.md)"

  $ jira-acli jira issue update PROJ-123 --fields timetracking='{"originalEstimate": "5h"}'
```

_See code: [src/commands/jira/issue/update.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/update.ts)_

## `jira-acli jira issue update-comment ISSUEID ID BODY`

Update a comment

```
USAGE
  $ jira-acli jira issue update-comment ISSUEID ID BODY [--toon]

ARGUMENTS
  ISSUEID  Issue ID or issue key
  ID       Comment ID to delete
  BODY     Comment text content

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Update a comment

EXAMPLES
  $ jira-acli jira issue update-comment "
  # Header
  ## Sub-header
  - Item 1
  - Item 2
  ```bash
  ls -a
  ```" 123 PROJ-123

  $ jira-acli jira issue update-comment "$(cat content.md)" 123 PROJ-123
```

_See code: [src/commands/jira/issue/update-comment.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/update-comment.ts)_

## `jira-acli jira issue worklog ISSUEID STARTED TIMESPENT [COMMENT]`

Add a worklog to an issue

```
USAGE
  $ jira-acli jira issue worklog ISSUEID STARTED TIMESPENT [COMMENT] [--toon]

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
  $ jira-acli jira issue worklog PROJ-123 2026-02-03T12:34:00.000+0000 "1d 4h" "
  # Header
  ## Sub-header"

  $ jira-acli jira issue worklog PROJ-123 $(date +"%Y-%m-%dT%H:%M:%S.000%z") 6h "Fix test"

  $ jira-acli jira issue worklog PROJ-123 $(date +"%Y-%m-%dT08:30:00.000%z") 6h
```

_See code: [src/commands/jira/issue/worklog.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/worklog.ts)_

## `jira-acli jira issue worklog-delete ISSUEID ID`

Delete a worklog

```
USAGE
  $ jira-acli jira issue worklog-delete ISSUEID ID

ARGUMENTS
  ISSUEID  Issue ID or issue key
  ID       Worklog ID to delete

DESCRIPTION
  Delete a worklog

EXAMPLES
  $ jira-acli jira issue worklog-delete 123 PROJ-123
```

_See code: [src/commands/jira/issue/worklog-delete.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/worklog-delete.ts)_

## `jira-acli jira issue worklogs ISSUEID`

List all boards

```
USAGE
  $ jira-acli jira issue worklogs ISSUEID [--max <value>] [--start <value>] [--toon]

ARGUMENTS
  ISSUEID  Issue ID or issue key

FLAGS
  --max=<value>    Maximum number of items per page
  --start=<value>  Index of the first item to return
  --toon           Format output as toon

DESCRIPTION
  List all boards

EXAMPLES
  $ jira-acli jira issue worklogs PROJ-123
```

_See code: [src/commands/jira/issue/worklogs.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/issue/worklogs.ts)_

## `jira-acli jira project get PROJECTID`

Get details of a specific project

```
USAGE
  $ jira-acli jira project get PROJECTID [--toon]

ARGUMENTS
  PROJECTID  Project ID or project key

FLAGS
  --toon  Format output as toon

DESCRIPTION
  Get details of a specific project

EXAMPLES
  $ jira-acli jira project get
```

_See code: [src/commands/jira/project/get.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/project/get.ts)_

## `jira-acli jira project list`

List all accessible projects

```
USAGE
  $ jira-acli jira project list [--toon]

FLAGS
  --toon  Format output as toon

DESCRIPTION
  List all accessible projects

EXAMPLES
  $ jira-acli jira project list
```

_See code: [src/commands/jira/project/list.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/project/list.ts)_

## `jira-acli jira user get [ACCOUNTID]`

Get user information

```
USAGE
  $ jira-acli jira user get [ACCOUNTID] [-q <value>] [--toon]

ARGUMENTS
  [ACCOUNTID]  User account ID

FLAGS
  -q, --query=<value>  Query string that matches user attributes
      --toon           Format output as toon

DESCRIPTION
  Get user information

EXAMPLES
  $ jira-acli jira user get

  $ jira-acli jira user get 5b10ac8d82e05b22cc7d4ef5

  $ jira-acli jira user get -query john

  $ jira-acli jira user get -q john@email.com
```

_See code: [src/commands/jira/user/get.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/user/get.ts)_

## `jira-acli jira user list-assignable ISSUEID`

List users that can be assigned to an issue

```
USAGE
  $ jira-acli jira user list-assignable ISSUEID [-q <value>] [--toon]

ARGUMENTS
  ISSUEID  Issue ID or issue key

FLAGS
  -q, --query=<value>  Query string that matches user attributes
      --toon           Format output as toon

DESCRIPTION
  List users that can be assigned to an issue

EXAMPLES
  $ jira-acli jira user list-assignable PROJ-123

  $ jira-acli jira user list-assignable PROJ-123 -q john
```

_See code: [src/commands/jira/user/list-assignable.ts](https://github.com/hesedcasa/jira-acli/blob/v0.2.4/src/commands/jira/user/list-assignable.ts)_

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

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v4.7.19/src/commands/update.ts)_

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
