/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a Status.
 */
class Status {
  /**
   * Create a Status.
   * @property {string} status
   */
  constructor() {
  }

  /**
   * Defines the metadata of Status
   *
   * @returns {object} metadata of Status
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Status',
      type: {
        name: 'Composite',
        className: 'Status',
        modelProperties: {
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Status;
