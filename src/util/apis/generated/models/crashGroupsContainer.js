/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a CrashGroupsContainer.
 */
class CrashGroupsContainer {
  /**
   * Create a CrashGroupsContainer.
   * @property {boolean} limitedResultSet
   * @property {string} [continuationToken] Cassandra request continuation
   * token. The token is used for pagination.
   * @property {array} crashGroups
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashGroupsContainer
   *
   * @returns {object} metadata of CrashGroupsContainer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrashGroupsContainer',
      type: {
        name: 'Composite',
        className: 'CrashGroupsContainer',
        modelProperties: {
          limitedResultSet: {
            required: true,
            serializedName: 'limited_result_set',
            type: {
              name: 'Boolean'
            }
          },
          continuationToken: {
            required: false,
            serializedName: 'continuation_token',
            type: {
              name: 'String'
            }
          },
          crashGroups: {
            required: true,
            serializedName: 'crash_groups',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CrashGroupElementType',
                  type: {
                    name: 'Composite',
                    className: 'CrashGroup'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CrashGroupsContainer;
