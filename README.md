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
jira-acli/0.2.0 linux-x64 node-v20.20.0
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
