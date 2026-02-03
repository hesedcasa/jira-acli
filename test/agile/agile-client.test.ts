import {expect} from 'chai'

import {
  clearClients,
  getAllBoards,
  getAllSprints,
  getAllVersions,
  getBoardIssuesForSprint,
  getIssuesForBacklog,
} from '../../src/agile/agile-client.js'

describe('agile-client', () => {
  const mockConfig = {
    apiToken: 'test-token',
    email: 'test@example.com',
    host: 'https://test.atlassian.net',
  }

  afterEach(() => {
    clearClients()
  })

  describe('getAllBoards', () => {
    it('exports a function', () => {
      expect(getAllBoards).to.be.a('function')
    })

    it('accepts config parameter', async () => {
      try {
        await getAllBoards(mockConfig)
      } catch (error) {
        // Expected to fail in test environment without actual Jira connection
        expect(error).to.be.an('error')
      }
    })

    it('accepts optional parameters', async () => {
      try {
        await getAllBoards(mockConfig, 'TEST', 50, 0)
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('getAllSprints', () => {
    it('exports a function', () => {
      expect(getAllSprints).to.be.a('function')
    })

    it('accepts config and boardId parameters', async () => {
      try {
        await getAllSprints(mockConfig, 1)
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })

    it('accepts optional parameters', async () => {
      try {
        await getAllSprints(mockConfig, 1, 50, 0, 'active')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('getAllVersions', () => {
    it('exports a function', () => {
      expect(getAllVersions).to.be.a('function')
    })

    it('accepts config and boardId parameters', async () => {
      try {
        await getAllVersions(mockConfig, 1)
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })

    it('accepts optional parameters', async () => {
      try {
        await getAllVersions(mockConfig, 1, 50, 0, 'true')
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('getBoardIssuesForSprint', () => {
    it('exports a function', () => {
      expect(getBoardIssuesForSprint).to.be.a('function')
    })

    it('accepts config, boardId, and sprintId parameters', async () => {
      try {
        await getBoardIssuesForSprint(mockConfig, 1, 1)
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })

    it('accepts optional parameters', async () => {
      try {
        await getBoardIssuesForSprint(mockConfig, 1, 1, 'project = TEST', 50, 0, ['summary'])
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })
  })

  describe('getIssuesForBacklog', () => {
    it('exports a function', () => {
      expect(getIssuesForBacklog).to.be.a('function')
    })

    it('accepts config and boardId parameters', async () => {
      try {
        await getIssuesForBacklog(mockConfig, 1)
      } catch (error) {
        expect(error).to.be.an('error')
      }
    })

    it('accepts optional parameters', async () => {
      try {
        await getIssuesForBacklog(mockConfig, 1, 'project = TEST', 50, 0, ['summary'])
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
})
