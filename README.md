# bitbucket-acli

CLI for Bitbucket API interaction

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [bitbucket-acli](#bitbucket-acli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g bitbucket-acli
$ bitbucket-acli COMMAND
running command...
$ bitbucket-acli (--version)
bitbucket-acli/0.1.0 linux-x64 node-v22
$ bitbucket-acli --help [COMMAND]
USAGE
  $ bitbucket-acli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->

## Authentication

- `bitbucket-acli auth add` - Add Atlassian authentication (email + app password)
- `bitbucket-acli auth test` - Test authentication and connection
- `bitbucket-acli auth update` - Update existing authentication

## Workspaces

- `bitbucket-acli workspace list` - List all accessible workspaces
- `bitbucket-acli workspace get WORKSPACE` - Get details of a specific workspace

## Repositories

- `bitbucket-acli repo list WORKSPACE` - List repositories in a workspace
- `bitbucket-acli repo get WORKSPACE REPO_SLUG` - Get details of a specific repository
- `bitbucket-acli repo create WORKSPACE REPO_SLUG` - Create a new repository
- `bitbucket-acli repo delete WORKSPACE REPO_SLUG` - Delete a repository

## Pull Requests

- `bitbucket-acli pr list WORKSPACE REPO_SLUG` - List pull requests for a repository
- `bitbucket-acli pr get WORKSPACE REPO_SLUG PR_ID` - Get details of a specific pull request
- `bitbucket-acli pr create WORKSPACE REPO_SLUG` - Create a new pull request
- `bitbucket-acli pr update WORKSPACE REPO_SLUG PR_ID` - Update a pull request
- `bitbucket-acli pr merge WORKSPACE REPO_SLUG PR_ID` - Merge a pull request
- `bitbucket-acli pr decline WORKSPACE REPO_SLUG PR_ID` - Decline a pull request
- `bitbucket-acli pr approve WORKSPACE REPO_SLUG PR_ID` - Approve a pull request
- `bitbucket-acli pr unapprove WORKSPACE REPO_SLUG PR_ID` - Remove approval from a pull request

## Pipelines

- `bitbucket-acli pipeline list WORKSPACE REPO_SLUG` - List pipelines for a repository
- `bitbucket-acli pipeline get WORKSPACE REPO_SLUG PIPELINE_UUID` - Get details of a specific pipeline
- `bitbucket-acli pipeline trigger WORKSPACE REPO_SLUG` - Trigger a pipeline run

<!-- commandsstop -->
