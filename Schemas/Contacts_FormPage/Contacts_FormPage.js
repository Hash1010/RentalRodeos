define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "BulkEmailSubscriptionSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "BulkEmailSubscriptionSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "BulkEmailSubscriptionSearchFilter_GridDetail_guswpo0",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_guswpo0"
										]
									}
								]
							}
						],
						"from": [
							"BulkEmailSubscriptionSearchFilter_SearchValue",
							"BulkEmailSubscriptionSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "OrderSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "OrderSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "OrderSearchFilter_OrderList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"OrderList"
										]
									}
								]
							}
						],
						"from": [
							"OrderSearchFilter_SearchValue",
							"OrderSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "RecommendedProductSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "RecommendedProductSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "RecommendedProductSearchFilter_RecommendedProductList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"RecommendedProductList"
										]
									}
								]
							}
						],
						"from": [
							"RecommendedProductSearchFilter_SearchValue",
							"RecommendedProductSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "OpportunitySearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "OpportunitySearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "OpportunitySearchFilter_OpportunityList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"OpportunityList"
										]
									}
								]
							}
						],
						"from": [
							"OpportunitySearchFilter_SearchValue",
							"OpportunitySearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "MrktLeadSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "MrktLeadSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "MrktLeadSearchFilter_GridDetail_6o3sfr4",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_6o3sfr4"
										]
									}
								]
							}
						],
						"from": [
							"MrktLeadSearchFilter_SearchValue",
							"MrktLeadSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "BulkEmailSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "BulkEmailSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "BulkEmailSearchFilter_BulkEmailList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"BulkEmailList"
										]
									}
								]
							}
						],
						"from": [
							"BulkEmailSearchFilter_SearchValue",
							"BulkEmailSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "SubmittedFormSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SubmittedFormSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SubmittedFormSearchFilter_GridDetail_dm1myag",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_dm1myag"
										]
									}
								]
							}
						],
						"from": [
							"SubmittedFormSearchFilter_SearchValue",
							"SubmittedFormSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "Checkbox_656cas9",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrResidentOfLondon_kjhbel6",
					"labelPosition": "auto",
					"control": "$PDS_UsrResidentOfLondon_kjhbel6"
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_UsrResidentOfLondon_kjhbel6": {
						"modelConfig": {
							"path": "PDS.UsrResidentOfLondon"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_dm1myag",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "SubmittedFormSearchFilter_GridDetail_dm1myag",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"BulkEmailList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "BulkEmailSearchFilter_BulkEmailList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_guswpo0",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "BulkEmailSubscriptionSearchFilter_GridDetail_guswpo0",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_6o3sfr4",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "MrktLeadSearchFilter_GridDetail_6o3sfr4",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"RecommendedProductList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "RecommendedProductList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "RecommendedProductSearchFilter_RecommendedProductList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"OpportunityList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "OpportunityList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "OpportunitySearchFilter_OpportunityList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"OrderList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "OrderList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "OrderSearchFilter_OrderList",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});