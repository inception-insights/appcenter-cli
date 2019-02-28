/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DataDeletionRequest.
 */
class DataDeletionRequest {
  /**
   * Create a DataDeletionRequest.
   * @property {string} [dataDeletionType] Type of data to delete
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataDeletionRequest
   *
   * @returns {object} metadata of DataDeletionRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataDeletionRequest',
      type: {
        name: 'Composite',
        className: 'DataDeletionRequest',
        modelProperties: {
          dataDeletionType: {
            required: false,
            serializedName: 'data_deletion_type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DataDeletionRequest;
