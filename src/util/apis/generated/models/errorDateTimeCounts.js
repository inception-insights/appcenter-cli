/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ErrorDateTimeCounts.
 */
class ErrorDateTimeCounts {
  /**
   * Create a ErrorDateTimeCounts.
   * @property {string} [datetime] the ISO 8601 datetime
   * @property {number} [count] count of the object
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorDateTimeCounts
   *
   * @returns {object} metadata of ErrorDateTimeCounts
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorDateTimeCounts',
      type: {
        name: 'Composite',
        className: 'ErrorDateTimeCounts',
        modelProperties: {
          datetime: {
            required: false,
            serializedName: 'datetime',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorDateTimeCounts;
