/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a IntuneStoreResponse.
 */
class IntuneStoreResponse {
  /**
   * Create a IntuneStoreResponse.
   * @property {object} [targetAudience]
   * @property {string} [targetAudience.name] display name for the target
   * audience/group
   * @property {string} [targetAudience.id] ID for the target audience/group.
   * @property {object} [appCategory]
   * @property {string} [appCategory.name] display name for the app category
   * @property {string} [appCategory.id] ID for the category.
   */
  constructor() {
  }

  /**
   * Defines the metadata of IntuneStoreResponse
   *
   * @returns {object} metadata of IntuneStoreResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IntuneStoreResponse',
      type: {
        name: 'Composite',
        className: 'IntuneStoreResponse',
        modelProperties: {
          targetAudience: {
            required: false,
            serializedName: 'target_audience',
            type: {
              name: 'Composite',
              className: 'IntuneTargetAudienceResponse'
            }
          },
          appCategory: {
            required: false,
            serializedName: 'app_category',
            type: {
              name: 'Composite',
              className: 'IntuneAppCategoryResponse'
            }
          }
        }
      }
    };
  }
}

module.exports = IntuneStoreResponse;
