define("Leads_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "move",
				"name": "LeadDisqualifyReason",
				"parentName": "FlexContainer_df49ngg",
				"propertyName": "items",
				"index": 5
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
				"index": 6
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
				"index": 7
			},
			{
				"operation": "remove",
				"name": "ContactSource"
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
				"index": 8
			},
			{
				"operation": "merge",
				"name": "JobTitle",
				"values": {
					"visible": false
				}
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
				"name": "LeadType",
				"values": {
					"readonly": true
				}
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
				"operation": "merge",
				"name": "ContactChannel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
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
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
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
				"name": "ComboBox_qldalcx",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Owner_6rbhq2t",
					"labelPosition": "auto",
					"control": "$PDS_Owner_6rbhq2t",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer_df49ngg",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_4w5k6lb",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4w5k6lb_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_qldalcx",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_xw70e21",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_CreatedOn_iq75mih",
					"labelPosition": "auto",
					"control": "$PDS_CreatedOn_iq75mih"
				},
				"parentName": "FlexContainer_df49ngg",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_zzz6te6",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrReasonForDisqualification_hh5jlfw",
					"labelPosition": "auto",
					"control": "$PDS_UsrReasonForDisqualification_hh5jlfw",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer_df49ngg",
				"propertyName": "items",
				"index": 4
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
				"name": "ComboBox_51la1hn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn13_flm66sx",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn13_flm66sx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_ujeax6q",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_9w1cjhv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_9w1cjhv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_51la1hn",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_pex2arv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
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
				"index": 7
			},
			{
				"operation": "insert",
				"name": "TabContainer_j382w3y",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_j382w3y_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_8w1oboq",
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
				"parentName": "TabContainer_j382w3y",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_jkze45l",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ComboBox_jkze45l_label)#",
					"labelPosition": "auto",
					"control": "$PDS_UsrContactMethod_sq9sowq",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_8w1oboq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_7r8fwv2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_7r8fwv2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_jkze45l",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_up5wwz9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_UsrContactDate_ikofdf2",
					"labelPosition": "auto",
					"control": "$PDS_UsrContactDate_ikofdf2"
				},
				"parentName": "GridContainer_8w1oboq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_80seype",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrBudgetRange_5xoz0zv",
					"labelPosition": "auto",
					"control": "$PDS_UsrBudgetRange_5xoz0zv"
				},
				"parentName": "GridContainer_8w1oboq",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_3tzbac3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_UsrPreferredMoveInDate_p2i5c36",
					"labelPosition": "auto",
					"control": "$PDS_UsrPreferredMoveInDate_p2i5c36"
				},
				"parentName": "GridContainer_8w1oboq",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_1m8ij90",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrPropertyVisitedDate_xlwked4",
					"labelPosition": "auto",
					"control": "$PDS_UsrPropertyVisitedDate_xlwked4",
					"pickerType": "date"
				},
				"parentName": "GridContainer_8w1oboq",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TabContainer_gv481q5",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_gv481q5_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_d4uks4q",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
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
				"parentName": "TabContainer_gv481q5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_pcwcda1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_pcwcda1_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_d4uks4q",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_od1nr2h",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_pcwcda1",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_mnchhvh",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_od1nr2h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_dc90a3g",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_dc90a3g_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrSelectedProperties",
							"defaultValues": [
								{
									"attributeName": "UsrLead",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_mnchhvh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_foowzgc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_foowzgc_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_gu3u9tvDS"
						}
					}
				},
				"parentName": "FlexContainer_mnchhvh",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_e6vrzzd",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_e6vrzzd_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_mnchhvh",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_7n9kjov",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_7n9kjov_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_gu3u9tv"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_e6vrzzd",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_e1ivlrm",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_e1ivlrm_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrSelectedProperties"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_e6vrzzd",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_2sofadw",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_2sofadw_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_2sofadw_GridDetail_gu3u9tv",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_gu3u9tv"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_2sofadw_SearchValue",
							"GridDetailSearchFilter_2sofadw_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_mnchhvh",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_zts1bio",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_pcwcda1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gu3u9tv",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_gu3u9tv",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_gu3u9tvDS_Id",
					"columns": [
						{
							"id": "5bfa341f-2fb8-e5be-f5bf-cd61a58d6e19",
							"code": "GridDetail_gu3u9tvDS_UsrFinalizedProperty",
							"caption": "#ResourceString(GridDetail_gu3u9tvDS_UsrFinalizedProperty)#",
							"dataValueType": 12
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_zts1bio",
				"propertyName": "items",
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
					},
					"PDS_CreatedOn_iq75mih": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_Owner_6rbhq2t": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"PDS_UsrContactMethod_sq9sowq": {
						"modelConfig": {
							"path": "PDS.UsrContactMethod"
						}
					},
					"PDS_UsrContactDate_ikofdf2": {
						"modelConfig": {
							"path": "PDS.UsrContactDate"
						}
					},
					"PDS_UsrBudgetRange_5xoz0zv": {
						"modelConfig": {
							"path": "PDS.UsrBudgetRange"
						}
					},
					"PDS_UsrPreferredMoveInDate_p2i5c36": {
						"modelConfig": {
							"path": "PDS.UsrPreferredMoveInDate"
						}
					},
					"PDS_UsrColumn13_flm66sx": {
						"modelConfig": {
							"path": "PDS.UsrColumn13"
						}
					},
					"PDS_UsrPropertyVisitedDate_xlwked4": {
						"modelConfig": {
							"path": "PDS.UsrPropertyVisitedDate"
						}
					},
					"GridDetail_gu3u9tv": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_gu3u9tvDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_2sofadw_GridDetail_gu3u9tv",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_gu3u9tvDS_UsrFinalizedProperty": {
									"modelConfig": {
										"path": "GridDetail_gu3u9tvDS.UsrFinalizedProperty"
									}
								},
								"GridDetail_gu3u9tvDS_Id": {
									"modelConfig": {
										"path": "GridDetail_gu3u9tvDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrReasonForDisqualification_hh5jlfw": {
						"modelConfig": {
							"path": "PDS.UsrReasonForDisqualification"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"GridDetail_gu3u9tvDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrSelectedProperties",
							"attributes": {
								"UsrFinalizedProperty": {
									"path": "UsrFinalizedProperty"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"GridDetail_gu3u9tvDS": [
						{
							"attributePath": "UsrLead",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});