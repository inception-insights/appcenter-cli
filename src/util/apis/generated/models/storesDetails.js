/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a StoresDetails.
 */
class StoresDetails {
  /**
   * Create a StoresDetails.
   * @property {string} [id] ID identifying a unique distribution store.
   * @property {string} [name] A name identifying a unique distribution store.
   * @property {string} [type] A type identifying the type of distribution
   * store. Possible values include: 'googleplay', 'intune', 'apple'
   * @property {string} [publishingStatus] A status identifying the status of
   * release in the distribution store.
   * @property {boolean} [isLatest] Is the containing release the latest one in
   * this distribution store.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StoresDetails
   *
   * @returns {object} metadata of StoresDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StoresDetails',
      type: {
        name: 'Composite',
        className: 'StoresDetails',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          publishingStatus: {
            required: false,
            serializedName: 'publishing_status',
            type: {
              name: 'String'
            }
          },
          isLatest: {
            required: false,
            serializedName: 'is_latest',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = StoresDetails;
