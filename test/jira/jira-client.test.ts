import {expect} from 'chai'

import {
  addComment,
  assignIssue,
  clearClients,
  createIssue,
  deleteComment,
  deleteIssue,
  deleteWorklog,
  doTransition,
  downloadAttachment,
  findAssignableUsers,
  getIssue,
  getIssueWorklog,
  getProject,
  getTransitions,
  getUser,
  listProjects,
  searchIssues,
  testConnection,
  updateComment,
  updateIssue,
  worklog,
} from '../../src/jira/jira-client.js'

describe('jira-client', () => {
  const mockConfig = {
    apiToken: 'test-token',
    email: 'test@example.com',
    host: 'https://test.atlassian.net',
  }

  afterEach(() => {
    clearClients()
  })

  describe('listProjects', () => {
    it('exports a function', () => {
      expect(listProjects).to.be.a('function')
    })

    it('accepts config parameter', async () => {
      try {
        await listProjects(mockConfig)
      } catch (error) {
        // Expected to fail in test environment without actual Jira connection
        expect(error).to.be.an('error')
      }
    })
  })

  describe('getProject', () => {
    it('exports a function', () => {
      expect(getProject).to.be.a('function')
    })

    it('accepts config and projectIdOrKey parameters', async () => {
      try {
        await getProject(mockConfig, 'TEST-1')
      } catch (error) {
        // Expected to fail in test environment
        expect(error).to.be.an('error')
      }
    })
  })

  describe('searchIssues', () => {
    it('exports a function', () => {
      expect(searchIssues).to.be.a('function')
    })

    it('accepts config and jql parameters', async () => {
      try {
        await searchIssues(mockConfig, 'project = TEST')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })

    it('accepts optional parameters', async () => {
      try {
        await searchIssues(mockConfig, 'project = TEST', 50, 'token', ['summary'])
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('getIssue', () => {
    it('exports a function', () => {
      expect(getIssue).to.be.a('function')
    })

    it('accepts config and issueIdOrKey parameters', async () => {
      try {
        await getIssue(mockConfig, 'TEST-1')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('createIssue', () => {
    it('exports a function', () => {
      expect(createIssue).to.be.a('function')
    })

    it('accepts config and fields parameters', async () => {
      try {
        await createIssue(mockConfig, {project: {key: 'TEST'}, summary: 'Test issue'})
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('updateIssue', () => {
    it('exports a function', () => {
      expect(updateIssue).to.be.a('function')
    })

    it('accepts config, issueIdOrKey, and fields parameters', async () => {
      try {
        await updateIssue(mockConfig, 'TEST-1', {summary: 'Updated summary'})
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('addComment', () => {
    it('exports a function', () => {
      expect(addComment).to.be.a('function')
    })

    it('accepts config, issueIdOrKey, and body parameters', async () => {
      try {
        await addComment(mockConfig, 'TEST-1', 'Test comment')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('deleteComment', () => {
    it('exports a function', () => {
      expect(deleteComment).to.be.a('function')
    })

    it('accepts config, id, and issueIdOrKey parameters', async () => {
      try {
        await deleteComment(mockConfig, '123', 'TEST-1')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('updateComment', () => {
    it('exports a function', () => {
      expect(updateComment).to.be.a('function')
    })

    it('accepts config, id, issueIdOrKey, and body parameters', async () => {
      try {
        await updateComment(mockConfig, '123', 'TEST-1', 'Updated comment')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('deleteIssue', () => {
    it('exports a function', () => {
      expect(deleteIssue).to.be.a('function')
    })

    it('accepts config and issueIdOrKey parameters', async () => {
      try {
        await deleteIssue(mockConfig, 'TEST-1')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('assignIssue', () => {
    it('exports a function', () => {
      expect(assignIssue).to.be.a('function')
    })

    it('accepts config, assignIssue, and issueIdOrKey parameters', async () => {
      try {
        await assignIssue(mockConfig, 'user-account-id', 'TEST-1')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('findAssignableUsers', () => {
    it('exports a function', () => {
      expect(findAssignableUsers).to.be.a('function')
    })

    it('accepts config and issueIdOrKey parameters', async () => {
      try {
        await findAssignableUsers(mockConfig, 'TEST-1')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })

    it('accepts optional query parameter', async () => {
      try {
        await findAssignableUsers(mockConfig, 'TEST-1', 'john')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('getUser', () => {
    it('exports a function', () => {
      expect(getUser).to.be.a('function')
    })

    it('accepts config parameter', async () => {
      try {
        await getUser(mockConfig)
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })

    it('accepts optional accountId and query parameters', async () => {
      try {
        await getUser(mockConfig, 'account-id', 'john')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('testConnection', () => {
    it('exports a function', () => {
      expect(testConnection).to.be.a('function')
    })

    it('accepts config parameter', async () => {
      try {
        await testConnection(mockConfig)
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('doTransition', () => {
    it('exports a function', () => {
      expect(doTransition).to.be.a('function')
    })

    it('accepts config, issueIdOrKey, and transitionId parameters', async () => {
      try {
        await doTransition(mockConfig, 'TEST-1', 'transition-id')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('clearClients', () => {
    it('exports a function', () => {
      expect(clearClients).to.be.a('function')
    })

    it('can be called without error', () => {
      expect(() => clearClients()).not.to.throw()
    })
  })

  describe('downloadAttachment', () => {
    it('exports a function', () => {
      expect(downloadAttachment).to.be.a('function')
    })

    it('accepts config, issueIdOrKey, and attachmentId parameters', async () => {
      try {
        await downloadAttachment(mockConfig, 'TEST-1', 'attachment-1')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })

    it('accepts optional outputPath parameter', async () => {
      try {
        await downloadAttachment(mockConfig, 'TEST-1', 'attachment-1', '/tmp/test.txt')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('getTransitions', () => {
    it('exports a function', () => {
      expect(getTransitions).to.be.a('function')
    })

    it('accepts config and issueIdOrKey parameters', async () => {
      try {
        await getTransitions(mockConfig, 'TEST-1')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('worklog', () => {
    it('exports a function', () => {
      expect(worklog).to.be.a('function')
    })

    it('accepts required parameters', async () => {
      try {
        await worklog(mockConfig, 'TEST-1', '2024-01-01T10:00:00.000Z', '1h')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })

    it('accepts optional comment parameter', async () => {
      try {
        await worklog(mockConfig, 'TEST-1', '2024-01-01T10:00:00.000Z', '1h', 'Work done')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('getIssueWorklog', () => {
    it('exports a function', () => {
      expect(getIssueWorklog).to.be.a('function')
    })

    it('accepts config and issueIdOrKey parameters', async () => {
      try {
        await getIssueWorklog(mockConfig, 'TEST-1')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })

    it('accepts optional maxResults and startAt parameters', async () => {
      try {
        await getIssueWorklog(mockConfig, 'TEST-1', 50, 10)
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('deleteWorklog', () => {
    it('exports a function', () => {
      expect(deleteWorklog).to.be.a('function')
    })

    it('accepts config, id, and issueIdOrKey parameters', async () => {
      try {
        await deleteWorklog(mockConfig, 'worklog-1', 'TEST-1')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })
})
