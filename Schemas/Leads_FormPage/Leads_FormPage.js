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