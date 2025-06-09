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
				"name": "Checkbox_cp1icq9",
				"values": {
					"type": "crt.Checkbox",
					"label": "#ResourceString(Checkbox_cp1icq9_label)#",
					"labelPosition": "auto",
					"control": "$PDS_UsrIsNonResident_axt5hvm",
					"visible": true,
					"readonly": false,
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
					"expanded": false,
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
					"visible": false,
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
							"id": "edc7a83d-5b34-5869-a31e-ccd96aa01ed5",
							"code": "FileList_n6s87bcDS_Name",
							"caption": "#ResourceString(FileList_n6s87bcDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "9e44ce6b-fd58-16e4-346e-443ac019b943",
							"code": "FileList_n6s87bcDS_CreatedOn",
							"caption": "#ResourceString(FileList_n6s87bcDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "586ffdf6-adc9-2767-343d-022ac50be3e0",
							"code": "FileList_n6s87bcDS_CreatedBy",
							"caption": "#ResourceString(FileList_n6s87bcDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "d40d6d5b-020d-e9a6-59e6-a3a3dbf73d16",
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
							"id": "25732572-64a8-bb94-a6ea-56367069ccfe",
							"code": "FileList_vzu1m6dDS_Name",
							"caption": "#ResourceString(FileList_vzu1m6dDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "139a8cd2-db37-a9bb-94ed-34dfc8fdc209",
							"code": "FileList_vzu1m6dDS_CreatedOn",
							"caption": "#ResourceString(FileList_vzu1m6dDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "f3cbdfee-5fe3-f8d2-7b77-f710a4207686",
							"code": "FileList_vzu1m6dDS_CreatedBy",
							"caption": "#ResourceString(FileList_vzu1m6dDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "759e9680-17a7-1be3-eb71-a37f1b73ca87",
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
					}
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
			      const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
			      const diffInMs = new Date(end) - new Date(start);
			      const diffInDays = diffInMs / oneDay;
			      return Math.floor(diffInDays / 7); // use Math.floor if you want only full weeks
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

			
				
				return await next?.handle(request);
            }
				 
          },
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});