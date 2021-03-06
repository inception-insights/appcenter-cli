/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Status of the usage record creation
 *
 */
class UsageRecordStatus {
  /**
   * Create a UsageRecordStatus.
   * @property {boolean} [expectedLatestBuildExists] Is the age of the most
   * recent Build service usage record within expected limits
   * @property {boolean} [expectedLatestTestExists] Is the age of the most
   * recent Test service usage record within expected limits
   * @property {string} [latestBuildUsageRecordTime] The time of the most
   * recent Build service usage record
   * @property {string} [latestTestUsageRecordTime] The time of the most recent
   * Test service usage record
   */
  constructor() {
  }

  /**
   * Defines the metadata of UsageRecordStatus
   *
   * @returns {object} metadata of UsageRecordStatus
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UsageRecordStatus',
      type: {
        name: 'Composite',
        className: 'UsageRecordStatus',
        modelProperties: {
          expectedLatestBuildExists: {
            required: false,
            serializedName: 'expectedLatestBuildExists',
            type: {
              name: 'Boolean'
            }
          },
          expectedLatestTestExists: {
            required: false,
            serializedName: 'expectedLatestTestExists',
            type: {
              name: 'Boolean'
            }
          },
          latestBuildUsageRecordTime: {
            required: false,
            serializedName: 'latestBuildUsageRecordTime',
            type: {
              name: 'String'
            }
          },
          latestTestUsageRecordTime: {
            required: false,
            serializedName: 'latestTestUsageRecordTime',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UsageRecordStatus;
