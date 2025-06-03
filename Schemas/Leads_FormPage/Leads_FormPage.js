define("Leads_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "move",
				"name": "LeadDisqualifyReason",
				"parentName": "FlexContainer_df49ngg",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "remove",
				"name": "Status",
				"properties": [
					"layoutConfig"
				]
			},
			{
				"operation": "merge",
				"name": "Status",
				"values": {
					"visible": false,
					"readonly": false
				}
			},
			{
				"operation": "move",
				"name": "Status",
				"parentName": "FlexContainer_df49ngg",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileFieldGridContainer"
			},
			{
				"operation": "remove",
				"name": "LeadTypeDetails",
				"properties": [
					"layoutConfig"
				]
			},
			{
				"operation": "merge",
				"name": "LeadTypeDetails",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "move",
				"name": "LeadTypeDetails",
				"parentName": "FlexContainer_df49ngg",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "PredictiveScore",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "move",
				"name": "PredictiveScore",
				"parentName": "FlexContainer_df49ngg",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "remove",
				"name": "LeadType",
				"properties": [
					"layoutConfig"
				]
			},
			{
				"operation": "move",
				"name": "LeadType",
				"parentName": "FlexContainer_df49ngg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "QualifiedContact",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "QualifiedContact",
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "LeadName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "LeadName",
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "Group",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "Group",
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FlexContainer_df49ngg",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_5ipg8tz",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrPreferredLocation_a3xs2nh",
					"labelPosition": "auto",
					"control": "$PDS_UsrPreferredLocation_a3xs2nh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "FlexContainer_df49ngg",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_4c5p1ij",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4c5p1ij_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_5ipg8tz",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_oj02y5a",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_oj02y5a_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_ujeax6q",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_oj02y5a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_h7wmd7s",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Gender_lxicclj",
					"labelPosition": "auto",
					"control": "$PDS_Gender_lxicclj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_ujeax6q",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_lsc3xpg",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lsc3xpg_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_h7wmd7s",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_szuwvzm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrMaritalStatus_4wyle3r",
					"labelPosition": "auto",
					"control": "$PDS_UsrMaritalStatus_4wyle3r",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_ujeax6q",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_pk8wi0y",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_pk8wi0y_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_szuwvzm",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_rfdfg8m",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrNoOfPeopleStay_12i1o0i",
					"labelPosition": "auto",
					"control": "$PDS_UsrNoOfPeopleStay_12i1o0i"
				},
				"parentName": "GridContainer_ujeax6q",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_t571ls4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_Address_weqmud6",
					"labelPosition": "auto",
					"control": "$PDS_Address_weqmud6"
				},
				"parentName": "GridContainer_ujeax6q",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_poxaih8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_FullJobTitle_e9lewvp",
					"labelPosition": "auto",
					"control": "$PDS_FullJobTitle_e9lewvp"
				},
				"parentName": "GridContainer_ujeax6q",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_slvwhcw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrAnnualIncome_56h7fhb",
					"labelPosition": "auto",
					"control": "$PDS_UsrAnnualIncome_56h7fhb"
				},
				"parentName": "GridContainer_ujeax6q",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Checkbox_pex2arv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrIsResidentOfLondon_9u3997j",
					"labelPosition": "auto",
					"control": "$PDS_UsrIsResidentOfLondon_9u3997j"
				},
				"parentName": "GridContainer_ujeax6q",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_UsrPreferredLocation_a3xs2nh": {
						"modelConfig": {
							"path": "PDS.UsrPreferredLocation"
						}
					},
					"PDS_Address_weqmud6": {
						"modelConfig": {
							"path": "PDS.Address"
						}
					},
					"PDS_FullJobTitle_e9lewvp": {
						"modelConfig": {
							"path": "PDS.FullJobTitle"
						}
					},
					"PDS_Gender_lxicclj": {
						"modelConfig": {
							"path": "PDS.Gender"
						}
					},
					"PDS_UsrIsResidentOfLondon_9u3997j": {
						"modelConfig": {
							"path": "PDS.UsrIsResidentOfLondon"
						}
					},
					"PDS_UsrAnnualIncome_56h7fhb": {
						"modelConfig": {
							"path": "PDS.UsrAnnualIncome"
						}
					},
					"PDS_UsrMaritalStatus_4wyle3r": {
						"modelConfig": {
							"path": "PDS.UsrMaritalStatus"
						}
					},
					"PDS_UsrNoOfPeopleStay_12i1o0i": {
						"modelConfig": {
							"path": "PDS.UsrNoOfPeopleStay"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});