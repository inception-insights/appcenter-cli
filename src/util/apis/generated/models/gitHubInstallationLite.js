/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The GitHub Installation
 *
 */
class GitHubInstallationLite {
  /**
   * Create a GitHubInstallationLite.
   * @property {number} [id] GitHub Installation Id
   * @property {object} [account]
   * @property {string} [account.id] GitHub Account Id
   * @property {string} [account.login] GitHub Account Login Name
   * @property {string} [account.type] GitHub Account Type
   * @property {string} [account.url] GitHub Account Url
   * @property {number} [appId] GitHub Installation App Id
   */
  constructor() {
  }

  /**
   * Defines the metadata of GitHubInstallationLite
   *
   * @returns {object} metadata of GitHubInstallationLite
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GitHubInstallationLite',
      type: {
        name: 'Composite',
        className: 'GitHubInstallationLite',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          account: {
            required: false,
            serializedName: 'account',
            type: {
              name: 'Composite',
              className: 'GitHubAccountLite'
            }
          },
          appId: {
            required: false,
            serializedName: 'app_id',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = GitHubInstallationLite;
