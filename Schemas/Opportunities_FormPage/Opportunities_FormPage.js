define("Opportunities_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "CloseReason"
			},
			{
				"operation": "remove",
				"name": "Winner"
			},
			{
				"operation": "remove",
				"name": "ListAction_eslrggs"
			},
			{
				"operation": "remove",
				"name": "DecisionMaker"
			},
			{
				"operation": "remove",
				"name": "addRecord_0hxbi4r"
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileFieldGridContainer"
			},
			{
				"operation": "remove",
				"name": "Amount"
			},
			{
				"operation": "remove",
				"name": "DueDate"
			},
			{
				"operation": "remove",
				"name": "ForecastCommit"
			},
			{
				"operation": "remove",
				"name": "IsPrimary"
			},
			{
				"operation": "remove",
				"name": "PredictiveProbability"
			},
			{
				"operation": "remove",
				"name": "CustomerNeed"
			},
			{
				"operation": "remove",
				"name": "CreatedOn",
				"properties": [
					"layoutConfig"
				]
			},
			{
				"operation": "move",
				"name": "CreatedOn",
				"parentName": "FlexContainer_ucw3sxg",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "merge",
				"name": "Contact",
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
				"operation": "merge",
				"name": "Account",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "Title",
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
				"operation": "merge",
				"name": "OpportunityType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
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
				"operation": "remove",
				"name": "Owner",
				"properties": [
					"layoutConfig"
				]
			},
			{
				"operation": "move",
				"name": "Owner",
				"parentName": "FlexContainer_ucw3sxg",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "remove",
				"name": "Description",
				"properties": [
					"layoutConfig"
				]
			},
			{
				"operation": "merge",
				"name": "Description",
				"values": {
					"label": "#ResourceString(Description_label)#",
					"readonly": false
				}
			},
			{
				"operation": "move",
				"name": "Description",
				"parentName": "FlexContainer_ucw3sxg",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "ClosingDetails",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "TimelineFilter_Entity",
				"values": {
					"type": "TimelineFilter_Entity"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineFilter_Date",
				"values": {
					"type": "TimelineFilter_Date"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineFilter_Owner",
				"values": {
					"type": "TimelineFilter_Owner"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineFilter_SystemMessages",
				"values": {
					"type": "TimelineFilter_SystemMessages"
				}
			},
			{
				"operation": "remove",
				"name": "OrdersSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "OrdersSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "OrdersSearchFilter_GridDetail_h0s6i43",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_h0s6i43"
										]
									}
								]
							}
						],
						"from": [
							"OrdersSearchFilter_SearchValue",
							"OrdersSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "InvoicesSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "InvoicesSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "InvoicesSearchFilter_DataGrid_o1m7u6h",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"DataGrid_o1m7u6h"
										]
									}
								]
							}
						],
						"from": [
							"InvoicesSearchFilter_SearchValue",
							"InvoicesSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "DocumentsSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "DocumentsSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "DocumentsSearchFilter_GridDetail_zuuqj1c",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_zuuqj1c"
										]
									}
								]
							}
						],
						"from": [
							"DocumentsSearchFilter_SearchValue",
							"DocumentsSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ucw3sxg",
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
				"name": "Input_q77q1ib",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_Title_jd5y8ao",
					"labelPosition": "auto",
					"control": "$PDS_Title_jd5y8ao"
				},
				"parentName": "FlexContainer_ucw3sxg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_vlx09i6",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_qhnb3mw",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_qhnb3mw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "FlexContainer_ucw3sxg",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_fgds8b1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fgds8b1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_vlx09i6",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_u5yj4gz",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Stage_96gbwbr",
					"labelPosition": "auto",
					"control": "$PDS_Stage_96gbwbr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer_ucw3sxg",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabContainer_xqobnky",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_xqobnky_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_yydefw1",
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
				"parentName": "TabContainer_xqobnky",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_x01pgqa",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_x01pgqa_title)#",
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
				"parentName": "TabContainer_xqobnky",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_k0pqnu8",
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
				"parentName": "ExpansionPanel_x01pgqa",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_81lnyop",
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
				"parentName": "GridContainer_k0pqnu8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_czlcwur",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "ExpansionPanel_x01pgqa",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_691mptx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_Budget_me14k2r",
					"labelPosition": "auto",
					"control": "$PDS_Budget_me14k2r"
				},
				"parentName": "GridContainer_czlcwur",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_zuuamk0",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrProperty_m9b75hi",
					"labelPosition": "auto",
					"control": "$PDS_UsrProperty_m9b75hi",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_czlcwur",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_e6regu6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_e6regu6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_zuuamk0",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_zx6sans",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrStartDate_z3irzea",
					"labelPosition": "auto",
					"control": "$PDS_UsrStartDate_z3irzea",
					"pickerType": "date"
				},
				"parentName": "GridContainer_czlcwur",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_jmmjfyw",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrEndDate_8lh80ta",
					"labelPosition": "auto",
					"control": "$PDS_UsrEndDate_8lh80ta",
					"pickerType": "date"
				},
				"parentName": "GridContainer_czlcwur",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_twovrgh",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_twovrgh_label)#",
					"labelPosition": "auto",
					"control": "$PDS_UsrStayDuration_qe8f02g",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_czlcwur",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Checkbox_cp1icq9",
				"values": {
					"type": "crt.Checkbox",
					"label": "#ResourceString(Checkbox_cp1icq9_label)#",
					"labelPosition": "auto",
					"control": "$PDS_UsrIsNonResident_axt5hvm",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_czlcwur",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_xk7tnez",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_xk7tnez_title)#",
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
				"parentName": "TabContainer_xqobnky",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_5x4awhw",
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
				"parentName": "ExpansionPanel_xk7tnez",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ncn8vx6",
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
				"parentName": "GridContainer_5x4awhw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_un8l23a",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				"parentName": "ExpansionPanel_xk7tnez",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ztmdifh",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrIdentityType_ac8ykdp",
					"labelPosition": "auto",
					"control": "$PDS_UsrIdentityType_ac8ykdp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_un8l23a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_h2n0eoy",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ComboBox_h2n0eoy_label)#",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_6farh70",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_un8l23a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_mcl5u96",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mcl5u96_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_h2n0eoy",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_v29qedx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrIdentityNumber_45wv1ru",
					"labelPosition": "auto",
					"control": "$PDS_UsrIdentityNumber_45wv1ru",
					"multiline": false
				},
				"parentName": "GridContainer_un8l23a",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Checkbox_grhpfzd",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 2
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrIsHavingRecommendation_eiu45p5",
					"labelPosition": "auto",
					"control": "$PDS_UsrIsHavingRecommendation_eiu45p5",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_un8l23a",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_snvvsgj",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_snvvsgj_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "large",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_xk7tnez",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_pigkgu1",
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
				"parentName": "ExpansionPanel_snvvsgj",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_q16buxr",
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
				"parentName": "GridContainer_pigkgu1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_oewo5sb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_oewo5sb_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "FileList_n6s87bc"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_q16buxr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_xx9ejys",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_xx9ejys_caption)#",
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
							"dataSourceName": "FileList_n6s87bcDS"
						}
					}
				},
				"parentName": "FlexContainer_q16buxr",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_qiyxf1z",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_qiyxf1z_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_qiyxf1z_FileList_n6s87bc",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"FileList_n6s87bc"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_qiyxf1z_SearchValue",
							"GridDetailSearchFilter_qiyxf1z_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_q16buxr",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_re4w3if",
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
				"parentName": "ExpansionPanel_snvvsgj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileList_n6s87bc",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "RecordId",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"items": "$FileList_n6s87bc",
					"primaryColumnName": "FileList_n6s87bcDS_Id",
					"columns": [
						{
							"id": "65c93204-ba19-efb2-53cf-1659fb5d7654",
							"code": "FileList_n6s87bcDS_Name",
							"caption": "#ResourceString(FileList_n6s87bcDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "5bf97c55-abb0-77d6-7387-b8612df43967",
							"code": "FileList_n6s87bcDS_CreatedOn",
							"caption": "#ResourceString(FileList_n6s87bcDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "c412b49d-9bc8-ac05-b171-b10d036bcd80",
							"code": "FileList_n6s87bcDS_CreatedBy",
							"caption": "#ResourceString(FileList_n6s87bcDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "9a005fa8-eb2c-145d-5aa4-4fd71006eca3",
							"code": "FileList_n6s87bcDS_Size",
							"caption": "#ResourceString(FileList_n6s87bcDS_Size)#",
							"dataValueType": 4
						}
					],
					"visible": true,
					"tag": "identity document",
					"viewType": "gallery",
					"tileSize": "medium"
				},
				"parentName": "GridContainer_re4w3if",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_d6yjfoh",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_d6yjfoh_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_eqgyeq2",
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
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_d6yjfoh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_g6n28z9",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_g6n28z9_title)#",
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
				"parentName": "TabContainer_d6yjfoh",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_bltry3x",
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
				"parentName": "ExpansionPanel_g6n28z9",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_xbgbux8",
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
				"parentName": "GridContainer_bltry3x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_fjv8s2h",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				"parentName": "ExpansionPanel_g6n28z9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_gonj04z",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPledgeAmount_40kers1",
					"labelPosition": "auto",
					"control": "$PDS_UsrPledgeAmount_40kers1"
				},
				"parentName": "GridContainer_fjv8s2h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_w6tupbj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRefundStatus_hdgkwcn",
					"labelPosition": "auto",
					"control": "$PDS_UsrRefundStatus_hdgkwcn",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_fjv8s2h",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_xw35jdq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xw35jdq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_w6tupbj",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_bjfn64g",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_bjfn64g_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_g8x87o4",
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
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_bjfn64g",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_mtx0by2",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_mtx0by2_title)#",
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
				"parentName": "TabContainer_bjfn64g",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_q4drb0u",
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
				"parentName": "ExpansionPanel_mtx0by2",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_hzwcl16",
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
				"parentName": "GridContainer_q4drb0u",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_wwe70oe",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				"parentName": "ExpansionPanel_mtx0by2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_at3rhsv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ComboBox_at3rhsv_label)#",
					"labelPosition": "auto",
					"control": "$PDS_UsrRecommender_xejqojl",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_wwe70oe",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_p94mzyc",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_p94mzyc_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_at3rhsv",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_nyt0gp2",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_nyt0gp2_title)#",
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
					"alignItems": "stretch",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_wwe70oe",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_96v9ok6",
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
				"parentName": "ExpansionPanel_nyt0gp2",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_4pdoxjv",
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
				"parentName": "GridContainer_96v9ok6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_6fee71z",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_6fee71z_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "FileList_vzu1m6d"
						}
					}
				},
				"parentName": "FlexContainer_4pdoxjv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_z7s80kk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_z7s80kk_caption)#",
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
							"dataSourceName": "FileList_vzu1m6dDS"
						}
					}
				},
				"parentName": "FlexContainer_4pdoxjv",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ew052zw",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ew052zw_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_ew052zw_FileList_vzu1m6d",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"FileList_vzu1m6d"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_ew052zw_SearchValue",
							"GridDetailSearchFilter_ew052zw_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_4pdoxjv",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_fl7wjm5",
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
				"parentName": "ExpansionPanel_nyt0gp2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileList_vzu1m6d",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "RecordId",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"items": "$FileList_vzu1m6d",
					"primaryColumnName": "FileList_vzu1m6dDS_Id",
					"columns": [
						{
							"id": "933671b6-5b3e-47ea-8c47-33f694a87997",
							"code": "FileList_vzu1m6dDS_Name",
							"caption": "#ResourceString(FileList_vzu1m6dDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "efe1aad2-cc85-157f-f180-f1c135a78495",
							"code": "FileList_vzu1m6dDS_CreatedOn",
							"caption": "#ResourceString(FileList_vzu1m6dDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "68b5f1ee-c609-e566-9ca0-1381212368f7",
							"code": "FileList_vzu1m6dDS_CreatedBy",
							"caption": "#ResourceString(FileList_vzu1m6dDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "365c08a5-768e-16dd-9f69-0731fde41b76",
							"code": "FileList_vzu1m6dDS_Size",
							"caption": "#ResourceString(FileList_vzu1m6dDS_Size)#",
							"dataValueType": 4
						}
					],
					"visible": true,
					"tag": "recommendation letter",
					"viewType": "gallery",
					"tileSize": "medium"
				},
				"parentName": "GridContainer_fl7wjm5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_ndvaqs6",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_ndvaqs6_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_n0r4yee",
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
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_ndvaqs6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_j6xdc3e",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_j6xdc3e_title)#",
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
				"parentName": "TabContainer_ndvaqs6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_e42t83u",
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
				"parentName": "ExpansionPanel_j6xdc3e",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_p76w0u8",
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
				"parentName": "GridContainer_e42t83u",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_xuayoxa",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_xuayoxa_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrQuote",
							"defaultValues": [
								{
									"attributeName": "UsrOpportunity",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_p76w0u8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_bdmeh79",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_bdmeh79_caption)#",
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
							"dataSourceName": "GridDetail_83wsv9cDS"
						}
					}
				},
				"parentName": "FlexContainer_p76w0u8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_t7iu71p",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_t7iu71p_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_p76w0u8",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_rp4ymcw",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_rp4ymcw_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_83wsv9c"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_t7iu71p",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_668l8gd",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_668l8gd_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrQuote"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_t7iu71p",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_mkbbfxi",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_mkbbfxi_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_mkbbfxi_GridDetail_83wsv9c",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_83wsv9c"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_mkbbfxi_SearchValue",
							"GridDetailSearchFilter_mkbbfxi_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_p76w0u8",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_293xujb",
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
				"parentName": "ExpansionPanel_j6xdc3e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_83wsv9c",
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
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_83wsv9c",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_83wsv9cDS_Id",
					"columns": [
						{
							"id": "c10bbe9a-816d-edbc-7680-ecc3c9fafd35",
							"code": "GridDetail_83wsv9cDS_UsrQuotationCode",
							"caption": "#ResourceString(GridDetail_83wsv9cDS_UsrQuotationCode)#",
							"dataValueType": 27,
							"width": 213.00001525878906
						},
						{
							"id": "1b399301-589d-8a61-30fb-66648ca430a9",
							"code": "GridDetail_83wsv9cDS_UsrAmount",
							"caption": "#ResourceString(GridDetail_83wsv9cDS_UsrAmount)#",
							"dataValueType": 32,
							"width": 145.00000762939453
						},
						{
							"id": "d164be38-583b-0904-f13f-0617f2de8ef6",
							"code": "GridDetail_83wsv9cDS_UsrProperty",
							"caption": "#ResourceString(GridDetail_83wsv9cDS_UsrProperty)#",
							"dataValueType": 10,
							"width": 165.00001525878906
						},
						{
							"id": "25857331-1e4f-090b-3948-813b8efb46ff",
							"code": "GridDetail_83wsv9cDS_UsrStatus",
							"caption": "#ResourceString(GridDetail_83wsv9cDS_UsrStatus)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_293xujb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_d63ukad",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_d63ukad_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_wiabdb8",
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
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_d63ukad",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_yy6nkqz",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_yy6nkqz_title)#",
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
				"parentName": "TabContainer_d63ukad",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_itnoly4",
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
				"parentName": "ExpansionPanel_yy6nkqz",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_vwz6589",
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
				"parentName": "GridContainer_itnoly4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_crz0b4e",
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
				"parentName": "ExpansionPanel_yy6nkqz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_rofbudt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrContract_tdd0nv4",
					"labelPosition": "auto",
					"control": "$PDS_UsrContract_tdd0nv4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_crz0b4e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_zrobv3m",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_zrobv3m_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_rofbudt",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_at2272s",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrContractState_laekzvp",
					"labelPosition": "auto",
					"control": "$PDS_UsrContractState_laekzvp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true
				},
				"parentName": "GridContainer_crz0b4e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_kgu6gzj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_kgu6gzj_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_at2272s",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_3kyzzhc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrContractStartDate_4qiz0nw",
					"labelPosition": "auto",
					"control": "$PDS_UsrContractStartDate_4qiz0nw",
					"readonly": true,
					"pickerType": "date"
				},
				"parentName": "GridContainer_crz0b4e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_94n04pc",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrContractEndDate_3qk6pwn",
					"labelPosition": "auto",
					"control": "$PDS_UsrContractEndDate_3qk6pwn",
					"readonly": true,
					"pickerType": "date"
				},
				"parentName": "GridContainer_crz0b4e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_szsw2jm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrContractAmount_hjq0x1a",
					"labelPosition": "auto",
					"control": "$PDS_UsrContractAmount_hjq0x1a",
					"readonly": true
				},
				"parentName": "GridContainer_crz0b4e",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_h2q74vf",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrContractType_8lg5vne",
					"labelPosition": "auto",
					"control": "$PDS_UsrContractType_8lg5vne",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true
				},
				"parentName": "GridContainer_crz0b4e",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_rpe0wvl",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rpe0wvl_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_h2q74vf",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_j8i4hnu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_ClosingDetails_itmgjax",
					"labelPosition": "auto",
					"control": "$PDS_ClosingDetails_itmgjax",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_crz0b4e",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Document_4obsnim",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Opportunity",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Type",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "State",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Document",
						"schemaType": null,
						"isDefault": true
					}
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Invoice_1klh4s2",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Opportunity",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Contact",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "PaymentStatus",
								"columnLayout": "{\"column\": 7,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Amount",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "DueDate",
								"columnLayout": "{\"column\": 4,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Invoice",
						"schemaType": null,
						"isDefault": true
					}
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Order_isgn8br",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Opportunity",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Contact",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Status",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Amount",
								"columnLayout": "{\"column\": 4,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Order",
						"schemaType": null,
						"isDefault": true
					}
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Contract_njbyuuv",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "UsrOpportunity",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Contact",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "State",
								"columnLayout": "{\"column\": 7,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "StartDate",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "EndDate",
								"columnLayout": "{\"column\": 2,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Contract",
						"schemaType": null,
						"isDefault": true
					}
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 9
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_Title_jd5y8ao": {
						"modelConfig": {
							"path": "PDS.Title"
						}
					},
					"PDS_UsrCountry_qhnb3mw": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrIsNonResident_axt5hvm": {
						"modelConfig": {
							"path": "PDS.UsrIsNonResident"
						}
					},
					"PDS_Budget_me14k2r": {
						"modelConfig": {
							"path": "PDS.Budget"
						}
					},
					"PDS_UsrProperty_m9b75hi": {
						"modelConfig": {
							"path": "PDS.UsrProperty"
						}
					},
					"PDS_UsrStartDate_z3irzea": {
						"modelConfig": {
							"path": "PDS.UsrStartDate"
						}
					},
					"PDS_UsrEndDate_8lh80ta": {
						"modelConfig": {
							"path": "PDS.UsrEndDate"
						}
					},
					"PDS_UsrStayDuration_qe8f02g": {
						"modelConfig": {
							"path": "PDS.UsrStayDuration"
						}
					},
					"PDS_UsrIdentityType_ac8ykdp": {
						"modelConfig": {
							"path": "PDS.UsrIdentityType"
						}
					},
					"PDS_UsrCountry_6farh70": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrIdentityNumber_45wv1ru": {
						"modelConfig": {
							"path": "PDS.UsrIdentityNumber"
						}
					},
					"FileList_n6s87bc": {
						"isCollection": true,
						"modelConfig": {
							"path": "FileList_n6s87bcDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_qiyxf1z_FileList_n6s87bc",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"FileList_n6s87bcDS_Name": {
									"modelConfig": {
										"path": "FileList_n6s87bcDS.Name"
									}
								},
								"FileList_n6s87bcDS_CreatedOn": {
									"modelConfig": {
										"path": "FileList_n6s87bcDS.CreatedOn"
									}
								},
								"FileList_n6s87bcDS_CreatedBy": {
									"modelConfig": {
										"path": "FileList_n6s87bcDS.CreatedBy"
									}
								},
								"FileList_n6s87bcDS_Size": {
									"modelConfig": {
										"path": "FileList_n6s87bcDS.Size"
									}
								},
								"FileList_n6s87bcDS_Id": {
									"modelConfig": {
										"path": "FileList_n6s87bcDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrIsHavingRecommendation_eiu45p5": {
						"modelConfig": {
							"path": "PDS.UsrIsHavingRecommendation"
						}
					},
					"PDS_UsrRecommender_xejqojl": {
						"modelConfig": {
							"path": "PDS.UsrRecommender"
						}
					},
					"FileList_vzu1m6d": {
						"isCollection": true,
						"modelConfig": {
							"path": "FileList_vzu1m6dDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_ew052zw_FileList_vzu1m6d",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"FileList_vzu1m6dDS_Name": {
									"modelConfig": {
										"path": "FileList_vzu1m6dDS.Name"
									}
								},
								"FileList_vzu1m6dDS_CreatedOn": {
									"modelConfig": {
										"path": "FileList_vzu1m6dDS.CreatedOn"
									}
								},
								"FileList_vzu1m6dDS_CreatedBy": {
									"modelConfig": {
										"path": "FileList_vzu1m6dDS.CreatedBy"
									}
								},
								"FileList_vzu1m6dDS_Size": {
									"modelConfig": {
										"path": "FileList_vzu1m6dDS.Size"
									}
								},
								"FileList_vzu1m6dDS_Id": {
									"modelConfig": {
										"path": "FileList_vzu1m6dDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrPledgeAmount_40kers1": {
						"modelConfig": {
							"path": "PDS.UsrPledgeAmount"
						}
					},
					"PDS_UsrRefundStatus_hdgkwcn": {
						"modelConfig": {
							"path": "PDS.UsrRefundStatus"
						}
					},
					"PDS_Stage_96gbwbr": {
						"modelConfig": {
							"path": "PDS.Stage"
						}
					},
					"GridDetail_83wsv9c": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_83wsv9cDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_mkbbfxi_GridDetail_83wsv9c",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_83wsv9cDS_UsrQuotationCode": {
									"modelConfig": {
										"path": "GridDetail_83wsv9cDS.UsrQuotationCode"
									}
								},
								"GridDetail_83wsv9cDS_UsrAmount": {
									"modelConfig": {
										"path": "GridDetail_83wsv9cDS.UsrAmount"
									}
								},
								"GridDetail_83wsv9cDS_UsrProperty": {
									"modelConfig": {
										"path": "GridDetail_83wsv9cDS.UsrProperty"
									}
								},
								"GridDetail_83wsv9cDS_UsrStatus": {
									"modelConfig": {
										"path": "GridDetail_83wsv9cDS.UsrStatus"
									}
								},
								"GridDetail_83wsv9cDS_Id": {
									"modelConfig": {
										"path": "GridDetail_83wsv9cDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrContract_tdd0nv4": {
						"modelConfig": {
							"path": "PDS.UsrContract"
						}
					},
					"PDS_UsrContractState_laekzvp": {
						"modelConfig": {
							"path": "PDS.UsrContractState_laekzvp"
						}
					},
					"PDS_UsrContractStartDate_4qiz0nw": {
						"modelConfig": {
							"path": "PDS.UsrContractStartDate_4qiz0nw"
						}
					},
					"PDS_UsrContractEndDate_3qk6pwn": {
						"modelConfig": {
							"path": "PDS.UsrContractEndDate_3qk6pwn"
						}
					},
					"PDS_UsrContractAmount_hjq0x1a": {
						"modelConfig": {
							"path": "PDS.UsrContractAmount_hjq0x1a"
						}
					},
					"PDS_UsrContractType_8lg5vne": {
						"modelConfig": {
							"path": "PDS.UsrContractType_8lg5vne"
						}
					},
					"PDS_ClosingDetails_itmgjax": {
						"modelConfig": {
							"path": "PDS.ClosingDetails"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_h0s6i43",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "QuickFilterShowAllOrders_GridDetail_h0s6i43",
							"loadOnChange": true
						},
						{
							"name": "OrdersSearchFilter_GridDetail_h0s6i43",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"DataGrid_o1m7u6h",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "DataGrid_o1m7u6h_PredefinedFilter"
						},
						{
							"name": "QuickFilterShowAllInvoices_DataGrid_o1m7u6h",
							"loadOnChange": true
						},
						{
							"name": "InvoicesSearchFilter_DataGrid_o1m7u6h",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_zuuqj1c",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "QuickFilterShowAllDocuments_GridDetail_zuuqj1c",
							"loadOnChange": true
						},
						{
							"name": "DocumentsSearchFilter_GridDetail_zuuqj1c",
							"loadOnChange": true
						}
					]
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
					"FileList_n6s87bcDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysFile",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"Size": {
									"path": "Size"
								}
							}
						}
					},
					"FileList_vzu1m6dDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysFile",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"Size": {
									"path": "Size"
								}
							}
						}
					},
					"GridDetail_83wsv9cDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrQuote",
							"attributes": {
								"UsrQuotationCode": {
									"path": "UsrQuotationCode"
								},
								"UsrAmount": {
									"path": "UsrAmount"
								},
								"UsrProperty": {
									"path": "UsrProperty"
								},
								"UsrStatus": {
									"path": "UsrStatus"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config",
					"attributes"
				],
				"values": {
					"UsrContractState_laekzvp": {
						"path": "UsrContract.State",
						"type": "ForwardReference"
					},
					"UsrContractStartDate_4qiz0nw": {
						"path": "UsrContract.StartDate",
						"type": "ForwardReference"
					},
					"UsrContractEndDate_3qk6pwn": {
						"path": "UsrContract.EndDate",
						"type": "ForwardReference"
					},
					"UsrContractAmount_hjq0x1a": {
						"path": "UsrContract.Amount",
						"type": "ForwardReference"
					},
					"UsrContractType_8lg5vne": {
						"path": "UsrContract.Type",
						"type": "ForwardReference"
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"GridDetail_83wsv9cDS": [
						{
							"attributePath": "UsrOpportunity",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
            request:"crt.HandleViewModelAttributeChangeRequest",
            handler: async (request,next) => {

			 const startDate = request.$context.attributes.PDS_UsrStartDate_z3irzea;			
             const endDate =  request.$context.attributes.PDS_UsrEndDate_8lh80ta;
			var noOfWeeks = 0;

			function calculateWeeks(start, end) {
		      const oneDay = 24 * 60 * 60 * 1000;
		      const diffInMs = new Date(end) - new Date(start);
		      const diffInDays = diffInMs / oneDay;
		
		      if (diffInDays <= 0) {
		        return 1; // treat same-day or negative gap as 1 week
		      }
		
		      const roundedWeeks = Math.round(diffInDays / 7);
		      return Math.max(1, roundedWeeks); // minimum 1 week
		    }

			if(request.attributeName === "PDS_UsrStartDate_z3irzea" && !request.silent){
			        if (endDate != null){
                         if (startDate>endDate){
                                                                  
			               Terrasoft.showInformation("Start date cannot be greater than end date");
			               request.$context.PDS_UsrStartDate_z3irzea = null;
			               return;
						 }else{
							 noOfWeeks = calculateWeeks(startDate,endDate);
							 request.$context.PDS_UsrStayDuration_qe8f02g = noOfWeeks;
						 }

					}

				
			}

			if(request.attributeName === "PDS_UsrEndDate_8lh80ta" && !request.silent){
		         if (startDate != null){
		             if (startDate >endDate){
		               Terrasoft.showInformation("End date cannot be less than start date");
		               request.$context.PDS_UsrEndDate_8lh80ta= null;
		               return;
					 }else{
						 noOfWeeks = calculateWeeks(startDate,endDate);
					     request.$context.PDS_UsrStayDuration_qe8f02g = noOfWeeks;
					 }
				 }
			}

			// if((request.attributeName === "PDS_UsrIsNonResident_axt5hvm" && !request.silent) || (request.attributeName === "PDS_UsrStayDuration_qe8f02g" && !request.silent) ){
			// 	const stayDuration = request.$context.attributes.PDS_UsrStayDuration_qe8f02g;
			// 	const isNonResident = request.$context.attributes.PDS_UsrIsNonResident_axt5hvm;

			// 	if(isNonResident == true && stayDuration < 2){
			// 		request.$context.HasRecommendationVisibility = false;
			// 	}else{
			// 		request.$context.HasRecommendationVisibility = true;
			// 	}
				
			// }

			
				
				return await next?.handle(request);
            }
				 
          },
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});