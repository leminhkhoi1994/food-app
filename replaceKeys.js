const fs = require('fs');
const path = require('path');

const directoryPath = path.join(
  __dirname,
  'src',
);

const keyMap = new Map([
  ['TERM_ADD', 'BTN_ADD'],
  ['TERM_ADD_NEW_DEFINITION', 'BTN_ADD_NEW_DEFN'],
  ['TERM_APPLY', 'BTN_APPLY'],
  ['TERM_CLOSE_ALL', 'BTN_CLOS_ALL'],
  ['TERM_CANCEL', 'BTN_CNCL'],
  ['BTN_REPORT_FRAMEWORK_CREATE', 'BTN_CREAT_NEW'],
  ['TERM_CREATE_USER', 'BTN_CREAT_USER'],
  ['TERM_DELETE', 'BTN_DEL'],
  ['TERM_DELETE_ALL', 'BTN_DEL_ALL'],
  ['TERM_DOWNLOAD', 'BTN_DWLD'],
  ['TERM_EDIT_CONTENTS', 'BTN_EDIT_CONT'],
  ['BTN_GUIDE', 'BTN_GUIDE'],
  ['TERM_LOGIN', 'BTN_LOGIN'],
  ['TERM_NEW', 'BTN_NEW'],
  ['TERM_ADD_NEW', 'BTN_NEW'],
  ['BTN_REPORT_FRAMEWORK_NEXT', 'BTN_NEXT'],
  ['TERM_N', 'BTN_NO'],
  ['TERM_NO', 'BTN_NO'],
  ['TERM_OPEN_ALL', 'BTN_OPEN_ALL'],
  ['TERM_PREVIEW', 'BTN_PREVW'],
  ['TERM_REGISTER', 'BTN_REG'],
  ['TERM_INITIALIZATION', 'BTN_RESET'],
  ['TERM_SAVE', 'BTN_SAVE'],
  ['BTN_STORING', 'BTN_SAVE'],
  ['TERM_SEARCH', 'BTN_SRCH'],
  ['TERM_TEMPLATE', 'BTN_TPLT'],
  ['TERM_EDIT', 'BTN_UP'],
  ['TERM_MODIFY', 'BTN_UP'],
  ['TERM_MODIFIED', 'BTN_UP'],
  ['TERM_UPLOAD', 'BTN_UPLD'],
  ['TERM_Y', 'BTN_YES'],
  ['TERM_YES', 'BTN_YES'],
  ['MESG_APPROVAL_FAIL', 'ERR_APR_FAIL'],
  ['MESG_ERR_NOT_ALLOW_BLANK_APPROVER', 'ERR_APR_REQ'],
  ['MESG_ERR_AT_LEAST_ONE_APPROVER', 'ERR_APR_REQ'],
  ['MESG_GHG_CANT_DELETE', 'ERR_CANT_DEL_IN_USE'],
  ['NOTI_CREATE_FAILED_DESC', 'ERR_CREAT_FAIL'],
  ['NOTI_DELETE_FAILED_DESC', 'ERR_DEL_FAIL'],
  ['TERM_DEPT_EXISTED', 'ERR_DEPT_EXIST'],
  ['MESG_ERR_DUPLICATE_APPROVER', 'ERR_DUPLI_APR'],
  ['MESG_ERR_EMAIL', 'ERR_EMAIL_INVLD'],
  ['TERM_EMP_NO_EXISTED', 'ERR_EMP_NO_EXIST'],
  ['TERM_ERROR', 'ERR_ERR'],
  ['TERM_INVALID', 'ERR_ERR'],
  ['LABL_ERROR_NOTICE_DEFAULT', 'ERR_ERR_OCCUR'],
  ['MESG_PROCESS_FAIL', 'ERR_FAIL_PROC'],
  ['TERM_FILESIZE_EXCEED', 'ERR_FILE_SIZE_EXCEED'],
  ['MESG_ERR_LENGTH_INPUT', 'ERR_INPUT_LENGTH'],
  ['MESG_ERR_MAXINPUT', 'ERR_INPUT_MAX'],
  ['MESG_ERR_MININPUT', 'ERR_INPUT_MIN'],
  ['MESG_ERR_EMPTYINPUT', 'ERR_INPUT_REQ'],
  ['ESG_CALENDAR_MANAGEMENT_EMPTY', 'ERR_NO_EVENT_SELCT_YMD'],
  ['TERM_NUM_INVALID', 'ERR_NO_INVLD'],
  ['TERM_REQUIRED', 'ERR_REQ'],
  ['MESG_REJECT_FAIL', 'ERR_RJCT_FAIL'],
  ['TERM_INVALID_ROLE', 'ERR_ROLE_INVLD_COPY_MENU'],
  ['ESG_CALENDAR_MANAGEMENT_INFO', 'ERR_SCHD_AFT_SELCT_YMD'],
  ['LABL_PLEASE_SELECT', 'ERR_SELCT'],
  ['TERM_SUCCESS', 'ERR_SUCC'],
  ['NOTI_UPDATE_FAILED_DESC', 'ERR_UP_FAIL'],
  ['ESG000101', 'ESG000101'],
  ['ESG000102', 'ESG000102'],
  ['ESG01', 'ESG010000'],
  ['ESG0101', 'ESG010100'],
  ['ESG010101', 'ESG010101'],
  ['ESG010102', 'ESG010102'],
  ['ESG010103', 'ESG010103'],
  ['ESG010104', 'ESG010104'],
  ['ESG010201', 'ESG010201'],
  ['ESG0103', 'ESG010300'],
  ['ESG010301', 'ESG010301'],
  ['ESG010302', 'ESG010302'],
  ['ESG010303', 'ESG010303'],
  ['ESG010401', 'ESG010401'],
  ['ESG010501', 'ESG010501'],
  ['ESG0106', 'ESG010600'],
  ['ESG010601', 'ESG010601'],
  ['ESG010602', 'ESG010602'],
  ['ESG010604', 'ESG010604'],
  ['ESG010605', 'ESG010605'],
  ['ESG010606', 'ESG010606'],
  ['ESG0201', 'ESG020000'],
  ['ESG020101', 'ESG020101'],
  ['ESG020201', 'ESG020201'],
  ['ESG040', 'ESG040000'],
  ['ESG040101', 'ESG040101'],
  ['ESG040201', 'ESG040201'],
  ['ESG020', 'ESG050000'],
  ['ESG050101', 'ESG050101'],
  ['ESG050201', 'ESG050201'],
  ['ESG050301', 'ESG050301'],
  ['ESG0504', 'ESG050400'],
  ['ESG050403', 'ESG050403'],
  ['ESG030', 'ESG060000'],
  ['ESG0601', 'ESG060100'],
  ['ESG060101', 'ESG060101'],
  ['ESG060102', 'ESG060102'],
  ['ESG060201', 'ESG060201'],
  ['ESG035', 'ESG070000'],
  ['ESG0701', 'ESG070100'],
  ['ESG070101', 'ESG070101'],
  ['ESG070103', 'ESG070103'],
  ['ESG070104', 'ESG070104'],
  ['ESG070105', 'ESG070105'],
  ['ESG0702', 'ESG070200'],
  ['ESG070201', 'ESG070201'],
  ['ESG052', 'ESG070300'],
  ['ESG053', 'ESG070301'],
  ['ESG070302', 'ESG070302'],
  ['ESG0704', 'ESG070400'],
  ['ESG054', 'ESG070401'],
  ['ESG050', 'ESG070402'],
  ['ESG051', 'ESG070403'],
  ['ESG080', 'ESG080000'],
  ['ESG080101', 'ESG080000'],
  ['ESG080102', 'ESG080101'],
  ['ESG080201', 'ESG080201'],
  ['ESG080202', 'ESG080202'],
  ['ESG010404', 'ESG080301'],
  ['ESG090101', 'ESG090101'],
  ['TB_ACCOUNT', 'LAB_ACCT'],
  ['TERM_ACCOUNT', 'LAB_ACCT'],
  ['LAND_BUSSINESS_ACCOUNT', 'LAB_ACCT'],
  ['TERM_MODIFY_INFO', 'LAB_ACT'],
  ['NOTI_FAILED_TITLE', 'LAB_ACT_FAIL'],
  ['TERM_ACTIVATION', 'LAB_ACT_PERIOD'],
  ['NOTI_SUCCESS_TITLE', 'LAB_ACT_SUCC'],
  ['TB_ACTUAL', 'LAB_ACTUL'],
  ['TB_ACTUAL_AREA', 'LAB_ACTUL_AREA'],
  ['TB_ADD', 'LAB_ADD'],
  ['TERM_ADDRESS', 'LAB_ADDR'],
  ['ROLE_ADMIN', 'LAB_ADM'],
  ['TERM_ADMIN', 'LAB_ADM'],
  ['LAND_BUSSINESS_AFFILIATE', 'LAB_AFFIL'],
  ['TERM_AI_POWERED_DIAGNOSTICS', 'LAB_AI_DIAG'],
  ['TERM_ALL', 'LAB_ALL'],
  ['CD_ALL', 'LAB_ALL'],
  ['LAND_COMMUNITY_ANNO', 'LAB_ANNC'],
  ['TERM_ANNUAL_MANAGE', 'LAB_ANNUA_IMPL_MN'],
  ['LABL_ANOMALY_DETECTION', 'LAB_ANOM_DTEC'],
  ['TERM_APPROVAL', 'LAB_APR'],
  ['TERM_APPROVE', 'LAB_APR'],
  ['TERM_APPROVAL_CODE', 'LAB_APR_CD'],
  ['PER_APPROVAL_DATE_AND_TIME', 'LAB_APR_DT'],
  ['TERM_APPROVAL_DATE_AND_TIME', 'LAB_APR_DT'],
  ['PER_APPROVAL_INFO', 'LAB_APR_INFO'],
  ['LABL_APPROVAL_INFORMATION', 'LAB_APR_INFO'],
  ['TERM_APPROVAL_INFOR', 'LAB_APR_INFO'],
  ['TERM_APPROVAL_INFO', 'LAB_APR_INFO'],
  ['TERM_APPROVAL_LIST', 'LAB_APR_LIST'],
  ['TB_APP_OR_REJ_DATE', 'LAB_APR_RJCT_YMD'],
  ['TB_APP_REJ_DT', 'LAB_APR_RJCT_YMD'],
  ['TB_APPROVAL_REQUEST', 'LAB_APR_RQST'],
  ['PER_APPROVAL_REQUEST', 'LAB_APR_RQST'],
  ['STEP_5_WRITING_REPORT', 'LAB_APR_RQST'],
  ['TERM_REQ_HISTORY', 'LAB_APR_RQST_CONT'],
  ['LABL_APPROVAL_REQUEST_DETAILS', 'LAB_APR_RQST_DETAIL'],
  ['TERM_APPROVAL_REQUEST_HISTORY', 'LAB_APR_RQST_HIST'],
  ['TB_APPROVAL_STAGE', 'LAB_APR_STAGE'],
  ['PER_APPROVAL_STATUS', 'LAB_APR_STATUS'],
  ['TB_APPROVAL_STATUS', 'LAB_APR_STATUS'],
  ['TERM_APPROVAL_STATUS', 'LAB_APR_STATUS'],
  ['MESG_APPROVAL_SUCCESS', 'LAB_APR_SUCC'],
  ['LABL_REPORT_FRAMEWORK_APPROVAL', 'LAB_APR_TRGT'],
  ['TB_ELIGIBILITY_FOR_APPROVAL', 'LAB_APR_TRGT'],
  ['PER_APPROVER', 'LAB_APR_USER'],
  ['TB_APPROVER', 'LAB_APR_USER'],
  ['TERM_APPROVER', 'LAB_APR_USER'],
  ['TB_APPROVAL_DATE', 'LAB_APR_YMD'],
  ['TERM_APR', 'LAB_APRIL'],
  ['TB_APR', 'LAB_APRIL'],
  ['LAND_INFO_SUB_TITLE', 'LAB_AS_OF_YM'],
  ['TERM_AS_IS', 'LAB_ASIS'],
  ['TERM_ASIGN_TYPE', 'LAB_ASSIGN_TYPE'],
  ['TERM_FILE_EXISTS', 'LAB_ATTA'],
  ['TERM_KOR_ATT_FILES', 'LAB_ATTA_FILE'],
  ['TB_ATT_COMM', 'LAB_ATTA_FILE'],
  ['TERM_ENG_ATT_FILES', 'LAB_ATTA_FILE_ENG'],
  ['TERM_KOR_ATT_FILES_HISTORY', 'LAB_ATTA_FILE_HIST'],
  ['TERM_ENG_ATT_FILES_HISTORY', 'LAB_ATTA_FILE_HIST_ENG'],
  ['TB_ATT_PDF', 'LAB_ATTA_FILE_PDF'],
  ['TB_ATT_PPT', 'LAB_ATTA_FILE_PPT'],
  ['MEDIA_COLM_LINK_PLACE_HOLDER', 'LAB_ATTA_LINK_ADDR'],
  ['TERM_AUG', 'LAB_AUG'],
  ['TB_AUG', 'LAB_AUG'],
  ['TB_AUTH_SUB', 'LAB_AUTH_SUBJ'],
  ['MEDIA_COLM_AUTHOR', 'LAB_AUTHR'],
  ['LABL_AUTO_BATCH_DATA', 'LAB_AUTO_BATCH_DATA_SET'],
  ['LABL_BACK', 'LAB_BACK'],
  ['LABL_APPROVE_BASIC_INFORMATION', 'LAB_BASIC_INFO'],
  ['TERM_BASIC_INFOR', 'LAB_BASIC_INFO'],
  ['TERM_BASIC_INFO', 'LAB_BASIC_INFO'],
  ['TB_BAU', 'LAB_BAU'],
  ['LAND_BUSSINESS_AREAS', 'LAB_BIZ_AREA'],
  ['LAND_BUSSINESS_ESTABLISHMENT', 'LAB_BIZ_ESTA'],
  ['LABL_REPORT_FRAMEWORK_IMAGE_BROWSE', 'LAB_BROWS_FILE'],
  ['TB_BASE_PLAN', 'LAB_BS_PLAN'],
  ['TERM_BY_MENU', 'LAB_BY_MENU'],
  ['TERM_BY_MENU_USER', 'LAB_BY_MENU_USER'],
  ['TERM_BY_USER', 'LAB_BY_USER'],
  ['LABL_CALC', 'LAB_CALC'],
  ['LABL_CATEGORY', 'LAB_CATE'],
  ['LABL_CLASSIFICATION', 'LAB_CATE'],
  ['PLACEHOLDER_CODE', 'LAB_CD'],
  ['TERM_SYSTEM_TYPE_CODE', 'LAB_CD'],
  ['TERM_CODE', 'LAB_CD'],
  ['LABL_CH4', 'LAB_CH4'],
  ['TERM_CHECK', 'LAB_CHECK'],
  ['CD_CITY', 'LAB_CITY'],
  ['TB_CITY', 'LAB_CITY'],
  ['LABL_CITY_PROVINCE', 'LAB_CITY_PROV'],
  ['LABL_CP', 'LAB_CITY_PROV'],
  ['TB_CLASS_CHANGE', 'LAB_CLASS_CHANGE'],
  ['CD_CLOSE_DATE', 'LAB_CLOS_YMD'],
  ['TB_CLASSIFICATION', 'LAB_CLSF'],
  ['TERM_CLEANUP', 'LAB_CLUP'],
  ['LAND_COMMUNITY', 'LAB_CMNT'],
  ['LABL_COMPLETE', 'LAB_CMPL'],
  ['TB_COMPARE_TO_LAST_YEAR', 'LAB_CMPR_LAST_YYYY'],
  ['TB_COMPARE_TO_PLAN', 'LAB_CMPR_PLAN'],
  ['TB_COMPARE_PREV_YEAR', 'LAB_CMPR_PREV_YYYY'],
  ['TERM_COMPONENT_ID', 'LAB_CMPT_ID'],
  ['LABL_COUNT', 'LAB_CNT'],
  ['CD_COUNT_BASE', 'LAB_CNT_BS'],
  ['LABL_CO2', 'LAB_CO2'],
  ['LABL_COMMONS', 'LAB_COMM'],
  ['TERM_DEFI_STATUS_CONFIRM', 'LAB_CONF'],
  ['TERM_CONFIRM', 'LAB_CONF'],
  ['CD_CONFIRMED', 'LAB_CONF_CMPL'],
  ['TERM_CONFIRM_DATE', 'LAB_CONF_YMD'],
  ['TERM_CONTENTS', 'LAB_CONT'],
  ['LABL_REPORT_FRAMEWORK_TABLE_CONTENTS', 'LAB_CONT'],
  ['TB_REPORT_CONTENT', 'LAB_CONT'],
  ['LABL_TABLE_OF_CONTENTS', 'LAB_CONT'],
  ['LABL_REPORT_TABLE_OF_CONTENTS', 'LAB_CONT'],
  ['CD_CONTINENTS', 'LAB_CONTN'],
  ['LABL_CONTRACTOR', 'LAB_CONTR'],
  ['TERM_COPY_MENU', 'LAB_COPY_MENU'],
  ['CD_COUNTRY', 'LAB_COUNR'],
  ['TB_COUNTRY', 'LAB_COUNR'],
  ['LABL_COUNTRY', 'LAB_COUNR'],
  ['LABL_CREATOR', 'LAB_CREAT'],
  ['TITLE_CREATE_NEW', 'LAB_CREAT_NEW'],
  ['LABL_REPORT_FRAMEWORK_STEP_SU_TEMPLATE', 'LAB_CREAT_TPLT'],
  ['TERM_CREATE_DATE', 'LAB_CREAT_YMD'],
  ['TB_DATE_CREATED', 'LAB_CREAT_YMD'],
  ['TERM_REG_DT', 'LAB_CREAT_YMD'],
  ['TB_CREATE_DATE', 'LAB_CREAT_YMD'],
  ['TERM_CUMULATIVE', 'LAB_CUMUL'],
  ['TERM_ACCUMULATED', 'LAB_CUMUL'],
  ['TERM_CURRENT', 'LAB_CURNT'],
  ['TERM_CURRENT_MONTH', 'LAB_CURNT_MM'],
  ['TB_DATA_CHANGE_LOG', 'LAB_DATA_CHANGE_LOG'],
  ['TB_DATA_CYCLE', 'LAB_DATA_LOAD_CYCLE'],
  ['LABL_DEADLINE_MANAGEMENT', 'LAB_DDLN_MN'],
  ['TERM_DEC', 'LAB_DEC'],
  ['TB_DEC', 'LAB_DEC'],
  ['TB_DECELERATION_DATE', 'LAB_DECEL_YMD'],
  ['CD_DELETE', 'LAB_DEL'],
  ['LABL_REPORT_FRAMEWORK_STEP_DEPLOYMENT', 'LAB_DEPLOY'],
  ['CD_SELECT_DEPT', 'LAB_DEPT'],
  ['TB_DEPARTMENT', 'LAB_DEPT'],
  ['TERM_REG_USER_DEPT', 'LAB_DEPT'],
  ['TERM_DEPARTMENT', 'LAB_DEPT'],
  ['TERM_TEAM', 'LAB_DEPT'],
  ['TB_DEPARTMENT_CODE', 'LAB_DEPT_CD'],
  ['TB_TEAM_CODE', 'LAB_DEPT_CD'],
  ['TERM_SELECT_DEPT', 'LAB_DEPT_IN_CHARG'],
  ['TERM_MASTER_DEPARTMENT_NODE_LIST', 'LAB_DEPT_LIST'],
  ['CD_DEPARTMENT_NAME', 'LAB_DEPT_NM'],
  ['TERM_DEPARTMENT_NAME', 'LAB_DEPT_NM'],
  ['LABL_TEAM_NAME', 'LAB_DEPT_NM'],
  ['TB_DEPARTMENT_ENG', 'LAB_DEPT_NM_ENG'],
  ['LABL_DEPT_TEAM', 'LAB_DEPT_TEAM'],
  ['LABL_REPORT_FRAMEWORK_DESCRIPTION', 'LAB_DESC'],
  ['LABL_EXPLANATION', 'LAB_DESC'],
  ['TERM_RULE_NOTE', 'LAB_DETAIL'],
  ['LABL_DETAILED_INFORMATION', 'LAB_DETAIL_INFO'],
  ['TERM_DETAIL_INFOR', 'LAB_DETAIL_INFO'],
  ['TERM_DETAIL_INFO', 'LAB_DETAIL_INFO'],
  ['TERM_DEV', 'LAB_DEV'],
  ['TB_DIFFERENCE', 'LAB_DIFF'],
  ['TB_DISPLAY_UNIT', 'LAB_DISP_UNIT'],
  ['LABL_SCREEN_UNIT', 'LAB_DISP_UNIT'],
  ['LABL_DIVISION', 'LAB_DIV'],
  ['TERM_DIVISION', 'LAB_DIV'],
  ['TERM_RULE_NAME', 'LAB_DIV'],
  ['TB_DOMESTIC', 'LAB_DOMES'],
  ['TERM_DEFI_STATUS_TEMPORARY', 'LAB_DRAFT'],
  ['CD_TEMPORARY', 'LAB_DRAFT'],
  ['TERM_DRAFT', 'LAB_DRAFT'],
  ['LABL_REPORT_FRAMEWORK_IMAGE_DRAG', 'LAB_DRAG_DROP'],
  ['DEADLINE_DUE_DATE', 'LAB_DUE_YMD'],
  ['LABL_REPORT_FRAMEWORK_EDIT', 'LAB_EDIT'],
  ['MEDIA_EDIT', 'LAB_EDIT_MEDIA'],
  ['LAND_BUSSINESS_EDIT', 'LAB_EDIT_MN_STATUS'],
  ['ESG_CALENDAR_MANAGEMENT_SCHEDULE_EDIT', 'LAB_EDIT_SCHD'],
  ['TB_ELECTRICITY_USAGE', 'LAB_ELEC_USE'],
  ['TB_EMAIL', 'LAB_EMAIL'],
  ['TB_EMISSION', 'LAB_EMIS'],
  ['TERM_EMISSIONS', 'LAB_EMIS'],
  ['TB_EMISSION_AFTER_REDUCTION', 'LAB_EMIS_AFT_REDC'],
  ['TERM_EMISSION_BASE', 'LAB_EMIS_BS'],
  ['LABL_EMISSION_COEFFICIENT', 'LAB_EMIS_COEF'],
  ['TB_EMISSION_CO2', 'LAB_EMIS_TCO2EQ'],
  ['LAND_BUSSINESS_EMPLOYEES', 'LAB_EMP'],
  ['TB_EMPLOYEE_ID', 'LAB_EMP_ID'],
  ['TB_EMP_NO', 'LAB_EMP_NO'],
  ['TERM_EMPLOYMENT', 'LAB_EMPLO'],
  ['LAND_BUSSINESS_SUB_TITLE', 'LAB_END_OF_YM'],
  ['TERM_END_DATE', 'LAB_END_YMD'],
  ['TB_END_DATE', 'LAB_END_YMD'],
  ['TERM_ENGLISH', 'LAB_ENG'],
  ['LABL_EN', 'LAB_ENG'],
  ['LABL_ENERGY', 'LAB_ENGY'],
  ['TB_ENERYGY_ACCOUNT', 'LAB_ENGY_ACCT'],
  ['LAND_INFO_ENERGY', 'LAB_ENGY_USE'],
  ['PLACEHOLDER_ENTER_CODE', 'LAB_ENTER_CD'],
  ['PLACEHOLDER_ENTER_TABLE_OF_CONTENTS', 'LAB_ENTER_CONT'],
  ['PLACEHOLDER_ENTER_DATA_ORDER', 'LAB_ENTER_DATA_ORDER'],
  ['PLACEHOLDER_ENTER_DEPARTMENT_IN_CHARGE', 'LAB_ENTER_DIC'],
  ['PLACEHOLDER_ENTER_NAME', 'LAB_ENTER_NM'],
  ['PLACEHOLDER_ENTER_ORDER', 'LAB_ENTER_ORDER'],
  ['PLACEHOLDER_ENTER_REPORT_REPRESENTATIVE', 'LAB_ENTER_PIC'],
  ['PLACEHOLDER_ENTER_REMARK', 'LAB_ENTER_RMK'],
  ['PLACEHOLDER_ENTER_VALUE', 'LAB_ENTER_VALUE'],
  ['TERM_ENTIRE', 'LAB_ENTIR'],
  ['LAND_INFO_ENV', 'LAB_ENVR'],
  ['NOTI_ERROR', 'LAB_ERR'],
  ['LAND_CALENDAR', 'LAB_ESG_CALEN'],
  ['ESG_CALENDAR_MANAGEMENT', 'LAB_ESG_CALEN'],
  ['LAND_INFO_TITLE', 'LAB_ESG_INFO'],
  ['TERM_ESG_TEAM', 'LAB_ESG_TEAM'],
  ['TERM_EXECUTIVE', 'LAB_EXECU'],
  ['TB_EXECUTIVE', 'LAB_EXECU_ESG'],
  ['TERM_FAIL', 'LAB_FAIL'],
  ['TERM_COPY_MENU_FAIL', 'LAB_FAIL_COPY_MENU'],
  ['TERM_FAVORITE_PAGE', 'LAB_FAVOR_PAGE'],
  ['TERM_FEB', 'LAB_FEB'],
  ['TB_FEB', 'LAB_FEB'],
  ['LABL_FEMALE', 'LAB_FEMAL'],
  ['TERM_FIGURE', 'LAB_FIGUR'],
  ['TERM_FILE_UPLOAD', 'LAB_FILE_UPLD'],
  ['LABL_REPORT_FRAMEWORK_STEP_FILE_UPLOADED', 'LAB_FILE_UPLD_CMPL'],
  ['TB_FOCUS_AREA', 'LAB_FOCUS_AREA'],
  ['LABL_FUEL', 'LAB_FUEL'],
  ['LABL_FULLTIME_EMPLOYEE', 'LAB_FUTM_EMP'],
  ['LABL_GAS', 'LAB_GAS'],
  ['TB_GAS_INPUT_QUANTITY', 'LAB_GAS_INPUT_QNQT_KG'],
  ['LABL_GAS_USED', 'LAB_GAS_USED'],
  ['LABL_GENDER', 'LAB_GENDER'],
  ['LABL_GET_DATA', 'LAB_GET_DATA'],
  ['LABL_GLOBAL_WARMING_POTENTIAL', 'LAB_GLOB_WARM_POTN'],
  ['LAND_SEARCH_HEADER_AFTERNOON', 'LAB_GOOD_AFTN'],
  ['LAND_SEARCH_HEADER_EVENING', 'LAB_GOOD_EVENI'],
  ['LAND_SEARCH_HEADER_MORNING', 'LAB_GOOD_MORN'],
  ['LABL_TIER', 'LAB_GRAD'],
  ['TB_GHG_EMISSION', 'LAB_GRHS_GAS_EMIS'],
  ['LAND_INFO_GREENHOUSE', 'LAB_GRHS_GAS_EMIS'],
  ['TERM_GHG_EMISSION_HEATMAP', 'LAB_GRHS_GAS_EMIS_HEATM'],
  ['TB_GHG_REDUCTION', 'LAB_GRHS_GAS_REDC'],
  ['LAND_BUSSINESS_GROUP_NAME', 'LAB_GROUP_NM'],
  ['LAND_INFO_UNIT_GWH', 'LAB_GWH'],
  ['SELECT_HALF', 'LAB_HALF_YYYY'],
  ['CD_HEADCOUNT', 'LAB_HDCT'],
  ['TB_HEAD_COUNT', 'LAB_HDCT'],
  ['LABL_HEATING_LEVEL', 'LAB_HEAT_LVL'],
  ['TB_APP_DEPARTMENT', 'LAB_HQ_APR_DEPT'],
  ['TB_APP_PIC', 'LAB_HQ_APR_PIC'],
  ['TERM_RESC_ID', 'LAB_ID'],
  ['TERM_I_F_STATUS', 'LAB_IF_STATUS'],
  ['LABL_IMPORTED', 'LAB_IMPO'],
  ['LABL_IMPORTED_RATE', 'LAB_IMPO_RATE'],
  ['TERM_IMPORTANCE', 'LAB_IMPT'],
  ['PER_IN_APPROVAL', 'LAB_IN_APR'],
  ['TERM_IN_APPROVAL', 'LAB_IN_APR'],
  ['LABL_IN_CHARGE', 'LAB_IN_CHARG'],
  ['TB_IN_CHARGE_OF_DEPT', 'LAB_IN_CHARG_OF_DEPT'],
  ['TB_IN_CHARGE_OF_ME', 'LAB_IN_CHARG_OF_ME'],
  ['TERM_IN', 'LAB_IN_PROG'],
  ['LABL_IN_PROGRESS', 'LAB_IN_PROG'],
  ['TB_INCLUSIONS', 'LAB_INCL'],
  ['LABL_INCLUDED_IN​', 'LAB_INCL_IN'],
  ['TB_INDICATOR', 'LAB_IND'],
  ['CD_INDICATOR', 'LAB_IND'],
  ['TB_INDICATORS', 'LAB_IND'],
  ['LABL_INDICATOR_CATEGORY', 'LAB_IND_CATE'],
  ['TERM_IND_DEF_ENG', 'LAB_IND_DEFN_ENG'],
  ['LABL_INDICATOR_DETAILED_TYPE_CODE', 'LAB_IND_DETAIL_TYPE'],
  ['TERM_INDICATOR_LIST', 'LAB_IND_LIST'],
  ['LABL_INDICATOR_LIST', 'LAB_IND_LIST'],
  ['TERM_INDI_NAME_KO', 'LAB_IND_NM'],
  ['LABL_INDICATOR_NAME', 'LAB_IND_NM'],
  ['TERM_INDI_NAME_EN', 'LAB_IND_NM_ENG'],
  ['TERM_INDICATOR_STATUS', 'LAB_IND_STATUS'],
  ['TERM_GHG_EMISSION_TREND', 'LAB_IND_TREND'],
  ['LABL_INDICATOR_TYPE', 'LAB_IND_TYPE'],
  ['TERM_INDICATOR_VALUE', 'LAB_IND_VALUE'],
  ['TERM_INDICATOR_WARNING', 'LAB_IND_WARN'],
  ['NOTI_INFO', 'LAB_INFO'],
  ['LABL_INPUT_ACCOUNT', 'LAB_INPUT_ACCT'],
  ['LABL_INPUT_ITEMS', 'LAB_INPUT_ITEM'],
  ['MEDIA_COLM_OWNER_PLACE_HOLDER', 'LAB_INPUT_MEDIA_OWNER'],
  ['MEDIA_COLM_TITLE_PLACE_HOLDER', 'LAB_INPUT_MEDIA_TITLE'],
  ['LABL_REPORT_FRAMEWORK_INPUT_TARGET', 'LAB_INPUT_TRGT'],
  ['TB_REPORT_INPUT_TARGET', 'LAB_INPUT_TRGT'],
  ['LABL_ELIGIBILITY_FOR_INPUT', 'LAB_INPUT_TRGT'],
  ['CD_INPUT_TYPE', 'LAB_INPUT_TYPE'],
  ['CD_INPUT', 'LAB_INPUT_VALUE'],
  ['TB_INPUT_DATE', 'LAB_INPUT_YMD'],
  ['TB_INPUT_YN', 'LAB_INPUT_YN'],
  ['LABL_INQUIRY_STATUS', 'LAB_INQ_YN'],
  ['CD_INSERT', 'LAB_INSRT'],
  ['TERM_INTEGRITY_VERIFICATION', 'LAB_INTEG_VERIF_NO_ABNOR'],
  ['TERM_IT_TEAM', 'LAB_IT_TEAM'],
  ['TERM_IT_OR_NOT', 'LAB_IT_YN'],
  ['TERM_YSE_NO', 'LAB_IT_YN'],
  ['TERM_JAN', 'LAB_JAN'],
  ['TB_JAN', 'LAB_JAN'],
  ['TB_POSITION', 'LAB_JOB_TITLE'],
  ['TERM_RANK', 'LAB_JOB_TITLE'],
  ['TB_JOB_TITLE', 'LAB_JOB_TITLE'],
  ['TERM_JUL', 'LAB_JUL'],
  ['TB_JUL', 'LAB_JUL'],
  ['TERM_JUN', 'LAB_JUN'],
  ['TB_JUN', 'LAB_JUN'],
  ['TERM_KOREAN', 'LAB_KR'],
  ['LABL_KO', 'LAB_KR'],
  ['LABL_KOREA', 'LAB_KR'],
  ['LABL_LAST_YEAR_REPORT_CONTENTS', 'LAB_LAST_YYYY_RPRT_CONT'],
  ['TERM_LEADER_DEPT', 'LAB_LEADER'],
  ['TERM_LEAVE_OF_ABSENCE', 'LAB_LEAVE_ABSNC'],
  ['TERM_LESS_THAN', 'LAB_LESS_THAN'],
  ['MEDIA_COLM_LINK', 'LAB_LINK'],
  ['TERM_LIST', 'LAB_LIST'],
  ['NOTI_LOADING', 'LAB_LOAD'],
  ['TERM_LOG_HISTORY', 'LAB_LOG_HIST'],
  ['LABL_MALE', 'LAB_MALE'],
  ['TERM_MAR', 'LAB_MAR'],
  ['TB_MAR', 'LAB_MAR'],
  ['TB_MAX', 'LAB_MAX'],
  ['LABL_REPORT_FRAMEWORK_IMAGE_MAXIMUM_SIZE', 'LAB_MAX_UPLD_FILE_SIZE'],
  ['TERM_MAY', 'LAB_MAY'],
  ['TB_MAY', 'LAB_MAY'],
  ['MEDIA_COLM_MEDIA_OWNER', 'LAB_MEDIA_OWNER'],
  ['TERM_MENU', 'LAB_MENU'],
  ['TERM_MENU_CODE', 'LAB_MENU_CD'],
  ['TERM_COPY_MENU_SUCCESS', 'LAB_MENU_COPY_SUCC'],
  ['TERM_MENU_DESCRIPTION', 'LAB_MENU_DESC'],
  ['TERM_MENU_ID', 'LAB_MENU_ID'],
  ['TB_MENU_ID', 'LAB_MENU_ID'],
  ['TERM_MENU_NODE_LIST', 'LAB_MENU_LIST'],
  ['TERM_MENU_NAME', 'LAB_MENU_NM'],
  ['CD_MENU_NODE', 'LAB_MENU_NODE'],
  ['TB_MIN', 'LAB_MIN'],
  ['TERM_MONTH', 'LAB_MM'],
  ['SELECT_MONTH', 'LAB_MM'],
  ['TB_MONTH_ON_YEAR_RATIO', 'LAB_MM_ON_MM_PRCT'],
  ['TERM_MONTHLY', 'LAB_MM_PLAN'],
  ['LAND_BUSSINESS_TITLE', 'LAB_MN_STATUS'],
  ['TB_MGN_UNIT', 'LAB_MN_UNIT'],
  ['LABL_MNG_UNIT', 'LAB_MN_UNIT'],
  ['TERM_MORE_THAN', 'LAB_MORE_THAN'],
  ['LABL_MY_REPORT_PROGRESS', 'LAB_MY_RPRT'],
  ['LABL_N2O', 'LAB_N2O'],
  ['LABL_NET_HEATING_LEVEL', 'LAB_NET_HEAT_LVL'],
  ['MEDIA_NEW', 'LAB_NEW_MEDIA'],
  ['LABL_REPORT_FRAMEWORK_NEW_REPORT_FRAMEWORK', 'LAB_NEW_RPFW'],
  ['ESG_CALENDAR_MANAGEMENT_SCHEDULE_NEW', 'LAB_NEW_SCHD'],
  ['LABL_NEXT', 'LAB_NEXT'],
  ['ESG_CALENDAR_MANAGEMENT_NEXT', 'LAB_NEXT_MM'],
  ['TERM_NAME', 'LAB_NM'],
  ['TB_NAME', 'LAB_NM'],
  ['PLACEHOLDER_NAME', 'LAB_NM'],
  ['TERM_SYSTEM_TYPE_NAME', 'LAB_NM'],
  ['CD_USER_EN', 'LAB_NM_ENG'],
  ['CD_USER_KO', 'LAB_NM_KOR'],
  ['TB_NO', 'LAB_NO'],
  ['TERM_NO_DATA', 'LAB_NO_DATA'],
  ['LABL_NO_ENTERED', 'LAB_NO_ENTER'],
  ['TERM_NUMBER_ENTERED', 'LAB_NO_OF_ENTER_INPUT'],
  ['LABL_NUM_OPERATING', 'LAB_NO_OF_PTCP_BIZ'],
  ['OPT_NO_PARENT', 'LAB_NO_PARENT'],
  ['CD_USER_NUMBER', 'LAB_NO_USER'],
  ['CD_NON_IT', 'LAB_NON_IT_USER'],
  ['LABL_NORMAL_INTERVAL', 'LAB_NORML_INTER_CMPR'],
  ['TB_NORMAL_COMPARE', 'LAB_NORML_INTER_CMPR_PREV'],
  ['TERM_NOT_APPROVAL', 'LAB_NOT_APR'],
  ['LABL_NOT_IMPORTED', 'LAB_NOT_IMPO_IMPO_RATE'],
  ['TERM_NOT_IN_PROGRESS', 'LAB_NOT_IN_PROG'],
  ['LABL_NOT_MANA_OBJ', 'LAB_NOT_MN'],
  ['TERM_NOT_SELECTED', 'LAB_NOT_SELCT'],
  ['TERM_NOTICE_DIRECTION', 'LAB_NOTI_DIRCT'],
  ['TERM_NOV', 'LAB_NOV'],
  ['TB_NOV', 'LAB_NOV'],
  ['TERM_OCT', 'LAB_OCT'],
  ['TB_OCT', 'LAB_OCT'],
  ['TERM_OK', 'LAB_OK'],
  ['PER_OPINION', 'LAB_OPINI'],
  ['TERM_OPINION', 'LAB_OPINI'],
  ['TB_OPINION', 'LAB_OPINI'],
  ['LABL_OPERATING', 'LAB_OPRT_SITE'],
  ['PER_OPERATING_SITE_SUBJECT', 'LAB_OPRT_SITE_SUBJ'],
  ['TB_OPERATE_SITE_SUB', 'LAB_OPRT_SITE_SUBJ'],
  ['TERM_AFF_COMPANY', 'LAB_ORG'],
  ['TERM_COMPANY', 'LAB_ORG'],
  ['LABL_AFFILIATE', 'LAB_ORG'],
  ['TERM_HOLD_COMPANY', 'LAB_ORG'],
  ['TERM_WORKPLACE', 'LAB_ORG'],
  ['TERM_ORG_DEPART', 'LAB_ORG'],
  ['TERM_ORGANIZATION', 'LAB_ORG'],
  ['TERM_AFFLIATE', 'LAB_ORG'],
  ['TERM_MENU_ORG', 'LAB_ORG'],
  ['TERM_ORG_BOUNDARY_INFO', 'LAB_ORG_BOUND'],
  ['TERM_ORG_BOUNDARY', 'LAB_ORG_BOUND'],
  ['TERM_ORGANIZATION_BOUNDARIES', 'LAB_ORG_BOUND'],
  ['TB_ORG_BOUNDARY', 'LAB_ORG_BOUND'],
  ['LABL_ORGANIZATIONAL_BOUNDARY', 'LAB_ORG_BOUND'],
  ['LABL_ORG_BOUNDARY', 'LAB_ORG_BOUND'],
  ['CD_ORG_BOUNDARY', 'LAB_ORG_BOUND'],
  ['LABL_INPUT_UNIT', 'LAB_ORG_BOUND'],
  ['LABL_ORGANIZATIONAL_BOUNDARIES', 'LAB_ORG_BOUND'],
  ['TERM_ORG_BOUNDARY_LEVEL', 'LAB_ORG_BOUND_LVL'],
  ['SELECT_LVL_0', 'LAB_ORG_BOUND_LVL0'],
  ['SELECT_LVL_1', 'LAB_ORG_BOUND_LVL1'],
  ['CD_SUBSIDIARY', 'LAB_ORG_BOUND_LVL1'],
  ['LABL_ORG_LVF', 'LAB_ORG_BOUND_LVL1'],
  ['TERM_SUBSIDIARY', 'LAB_ORG_BOUND_LVL1'],
  ['LAND_BUSSINESS_SUBSIDIARIES', 'LAB_ORG_BOUND_LVL1'],
  ['LABL_ORG_LVS', 'LAB_ORG_BOUND_LVL2'],
  ['TB_ORG_CATEGORY', 'LAB_ORG_CATE'],
  ['TERM_AFFILIATE', 'LAB_ORG_LVL1'],
  ['TB_ORG_NM', 'LAB_ORG_NM'],
  ['LABL_OTHER', 'LAB_OTHER'],
  ['CD_OVERALL_INDICATOR', 'LAB_OVERA_IND'],
  ['TB_OVERSEAS', 'LAB_OVERS'],
  ['LABL_REPORT_FRAMEWORK_OVERVIEW', 'LAB_OVERW'],
  ['LABL_REPORT_FRAMEWORK_STEP_OVERVIEW', 'LAB_OVERW'],
  ['MEDIA_OWNER', 'LAB_OWNER'],
  ['LABL_OXIDATION_COEFFICIENT', 'LAB_OXID_COEF'],
  ['LABL_PARAMETER', 'LAB_PARAM'],
  ['LABL_TABLE_OF_CONTENTS_PARENT', 'LAB_PARENT_CONT'],
  ['TERM_DEPARTMENT_PARENT', 'LAB_PARENT_DEPT'],
  ['LABL_TOP_INDICATOR', 'LAB_PARENT_IND'],
  ['CD_UPPER_MENU', 'LAB_PARENT_MENU'],
  ['TB_PARENT_ORG', 'LAB_PARENT_ORG'],
  ['CD_PARENT_ORG_BOUNDARY', 'LAB_PARENT_ORG_BOUND'],
  ['LABL_PARTNER', 'LAB_PARTN'],
  ['CD_POSTCODE', 'LAB_PC'],
  ['TERM_PDF_FILE', 'LAB_PDF_FILE'],
  ['TERM_DISAPPROVAL', 'LAB_PEND'],
  ['TERM_ACT_PERMISSION', 'LAB_PER_ACT'],
  ['PER_AUTH_DETAIL', 'LAB_PER_DETAIL'],
  ['TB_AUTH_DETAIL', 'LAB_PER_DETAIL'],
  ['PER_AUTH_SETTING', 'LAB_PER_SET'],
  ['TERM_AUTHORIZATION_SETTING', 'LAB_PER_SET'],
  ['TERM_AUTH_SETTING', 'LAB_PER_SET'],
  ['PER_AUTH_SUBJECT', 'LAB_PER_SUBJ'],
  ['LABL_PERIOD_VALUE', 'LAB_PERIOD'],
  ['ESG_CALENDAR_MANAGEMENT_SCHEDULE_PERIOD', 'LAB_PERIOD'],
  ['LABL_PERIOD_TYPE', 'LAB_PERIOD_TYPE'],
  ['TERM_PHASE_APPROVAL', 'LAB_PHASE_APR'],
  ['TB_PHASE_APPROVAL', 'LAB_PHASE_APR'],
  ['CD_SELECT_PIC', 'LAB_PIC'],
  ['LABL_CONTACT_PERSON', 'LAB_PIC'],
  ['TB_REPORT_REPRESENTATIVE', 'LAB_PIC'],
  ['LABL_REPORT_REPRESENTATIVE', 'LAB_PIC'],
  ['LABL_RESPONSIBLE', 'LAB_PIC'],
  ['TERM_PIC_INFO', 'LAB_PIC_INFO'],
  ['TERM_SELECT_PIC_MAIN', 'LAB_PIC_MAIN'],
  ['TB_PIC_MAIN', 'LAB_PIC_MAIN'],
  ['LABL_MAIN_PIC', 'LAB_PIC_MAIN'],
  ['TERM_SELECT_PIC_SUB', 'LAB_PIC_SUB'],
  ['TB_PIC_SUB', 'LAB_PIC_SUB'],
  ['LABL_SUB_PIC', 'LAB_PIC_SUB'],
  ['TERM_PLAN_TO_ACTUAL', 'LAB_PLAC_PRFM'],
  ['TB_PLAN', 'LAB_PLAN'],
  ['LAND_INFO_PLAN_AHEAD', 'LAB_PLAN_AHEAD'],
  ['TERM_POSTING_DATE', 'LAB_POSTI_END_YMD'],
  ['TERM_POST_PERIOD', 'LAB_POSTI_PERIOD'],
  ['TERM_PPT_FILE', 'LAB_PPT_FILE'],
  ['LABL_PREVIOUS', 'LAB_PREV'],
  ['TERM_PREVIOS_MONTH', 'LAB_PREV_MM'],
  ['ESG_CALENDAR_MANAGEMENT_PREV', 'LAB_PREV_MM'],
  ['TERM_PREVIOS_YEAR', 'LAB_PREV_YYYY'],
  ['LABL_TO_PREV', 'LAB_PREV_YYYY_PRCT'],
  ['TERM_PERFORMANCE_APPROVAL_REQUEST', 'LAB_PRFM_APR_RQST'],
  ['TB_PERF_PERIOD', 'LAB_PRFM_PERIOD'],
  ['LABL_PROCESS_GAS', 'LAB_PROC_GAS'],
  ['TB_PROCESS_GAS_ITEMS', 'LAB_PROC_GAS_ITEM'],
  ['LABL_PROCESS_GAS_ITEM_SEARCH', 'LAB_PROC_GAS_ITEM_SRCH'],
  ['LAND_BUSSINESS_UNIT_PERSON', 'LAB_PRSN'],
  ['LABL_PURITY', 'LAB_PURT'],
  ['TERM_PASSWORD', 'LAB_PWRD'],
  ['TERM_QUANTITY', 'LAB_QNQT'],
  ['SELECT_QUARTER', 'LAB_QUART'],
  ['LAND_QUICK_LINK', 'LAB_QUICK_LINK'],
  ['TERM_ROADMAP', 'LAB_RDMP'],
  ['TERM_ROADMAP_MANAGE', 'LAB_RDMP_MN'],
  ['TERM_READ', 'LAB_READ'],
  ['LABL_READY_TO_REVIEW', 'LAB_READY_RVEW'],
  ['PER_REASON', 'LAB_REASN_FOR_RQST'],
  ['TERM_REASON_FOR_REQUEST', 'LAB_REASN_FOR_RQST'],
  ['TERM_REASON_FOR_REQ', 'LAB_REASN_FOR_RQST'],
  ['LABL_RECENT', 'LAB_RECEN_PAGE'],
  ['TB_REDUCTION', 'LAB_REDC'],
  ['TB_REDUCTION_COMPARE', 'LAB_REDC_CMPR_BS'],
  ['LABL_REDUCTION_EFFICIENCY', 'LAB_REDC_EFFC'],
  ['TERM_REDUCTION_IMPL_RATE', 'LAB_REDC_IMPL_RATE'],
  ['TB_REDUCTION_IMPL_RATE', 'LAB_REDC_IMPL_RATE_PRCT'],
  ['TB_REDUCTION_RATE', 'LAB_REDC_RATE_PRCT'],
  ['LAND_COMMUNITY_REFER', 'LAB_REFER_ROOM'],
  ['LABL_REFLECT', 'LAB_REFLE'],
  ['TERM_REG_DEL_REASON', 'LAB_REG_DEL_REASN'],
  ['LABL_REGION', 'LAB_REGION'],
  ['TERM_AREA', 'LAB_REGION'],
  ['TB_RELATED_INDICATORS_REPORT', 'LAB_RELA_IND'],
  ['TB_RELATED_CONTENT_REPORT', 'LAB_RELA_RPRT_CONT'],
  ['TERM_RE_ENTER', 'LAB_RENTER'],
  ['TERM_REQ_PERMISSION_FOR', 'LAB_REQ_YN'],
  ['LABL_RESIDUAL_RATE_IN_GAS_BOMBE', 'LAB_RESD_RATE_GAS_BMBE'],
  ['STEP_2_WRITING_REPORT', 'LAB_RESET_TBCT_ASSIGN'],
  ['TERM_RESIGNMENT', 'LAB_RESIG'],
  ['TB_RESULT', 'LAB_RESULT'],
  ['LAND_SEARCH_RESULT', 'LAB_RESULT_FOR_KEYW'],
  ['REUSE_RATE', 'LAB_REUSE_RATE'],
  ['TB_REVISION_PLAN', 'LAB_REVIS_PLAN'],
  ['TERM_REWORK', 'LAB_REWOR'],
  ['TERM_REJECT_APPROVAL', 'LAB_RJCT'],
  ['TERM_REJECT', 'LAB_RJCT'],
  ['MESG_REJECT_SUCCESS', 'LAB_RJCT_SUCC'],
  ['CD_REMARK', 'LAB_RMK'],
  ['TB_RENEWABLE_ENERGY_USAGE', 'LAB_RNEW_ENGY_USE'],
  ['CD_SELECT_ROLE', 'LAB_ROLE'],
  ['TERM_ROLE', 'LAB_ROLE'],
  ['TB_PERMISSION', 'LAB_ROLE'],
  ['TERM_AUTHORITY', 'LAB_ROLE'],
  ['TERM_ROLE_CODE', 'LAB_ROLE_CD'],
  ['TERM_AUTHORITY_CODE', 'LAB_ROLE_CD'],
  ['TERM_ROLE_DESC', 'LAB_ROLE_DESC'],
  ['TERM_PERMISSION_DESC', 'LAB_ROLE_DESC'],
  ['TERM_ROLE_ID', 'LAB_ROLE_ID'],
  ['TERM_ROLE_LIST', 'LAB_ROLE_LIST'],
  ['TERM_AUTHORITY_LIST', 'LAB_ROLE_LIST'],
  ['TERM_ROLE_NAME', 'LAB_ROLE_NM'],
  ['TERM_AUTHORITY_NAME', 'LAB_ROLE_NM'],
  ['TERM_PERMISSION_PROP', 'LAB_ROLE_PRPT'],
  ['TERM_ROLE_TREE', 'LAB_ROLE_TREE'],
  ['TERM_AD_PERMISSION_TYPE', 'LAB_ROLE_TYPE'],
  ['TB_ROUTE', 'LAB_ROUTE'],
  ['UPDATED_ITEMS', 'LAB_ROW_UP'],
  ['LABL_REPORT_FRAMEWORK_NAME', 'LAB_RPFW_NM'],
  ['LABL_REPORT_FRAMEWORK_TYPE', 'LAB_RPFW_TYPE'],
  ['LABL_REPORT_NAME', 'LAB_RPRT'],
  ['STEP_1_WRITING_REPORT', 'LAB_RPRT_BASIC'],
  ['TERM_REPORT_LINK', 'LAB_RPRT_LINK'],
  ['LABL_REPORT_WRITING', 'LAB_RPRT_WRTE'],
  ['TERM_REQUEST', 'LAB_RQST'],
  ['TERM_REQUEST_APPROVAL', 'LAB_RQST_APR'],
  ['TERM_CANCEL_REQUEST', 'LAB_RQST_CNCL'],
  ['TERM_REQUEST_DATE_TIME', 'LAB_RQST_DT'],
  ['LABL_REQUEST_NO', 'LAB_RQST_NO'],
  ['TERM_REQUEST_NUMBER', 'LAB_RQST_NO'],
  ['TB_REQUEST_NO', 'LAB_RQST_NO'],
  ['TB_REQ_NUM', 'LAB_RQST_NO'],
  ['PER_REQUESTER', 'LAB_RQST_USER'],
  ['LABL_REQUESTER', 'LAB_RQST_USER'],
  ['TERM_REQUESTER', 'LAB_RQST_USER'],
  ['TB_REQUESTER', 'LAB_RQST_USER'],
  ['CD_BASE_DATE', 'LAB_RQST_YMD'],
  ['LABL_REQUEST_DATE', 'LAB_RQST_YMD'],
  ['TERM_REQUEST_DATE', 'LAB_RQST_YMD'],
  ['TERM_REQ_DATE', 'LAB_RQST_YMD'],
  ['TERM_RULE_BASED_DIAGNOSTICS', 'LAB_RULE_DIAG'],
  ['LABL_REVIEW_COMPLETE_DATE', 'LAB_RVEW_CMPL_YMD'],
  ['LAND_BUSSINESS_SALE', 'LAB_SALE'],
  ['TERM_PREVIOS_MONTH_YEAR', 'LAB_SAME_MM_LAST_YYYY'],
  ['LABL_SUBMIT', 'LAB_SBMS'],
  ['TERM_SUBMISSION_COMPLETED', 'LAB_SBMS_CMPL'],
  ['LABL_SUBMIT_DEADLINE', 'LAB_SBMS_DDLN'],
  ['STEP_6_WRITING_REPORT', 'LAB_SBMS_RPRT'],
  ['ESG_CALENDAR_MANAGEMENT_SCHEDULE_NAME', 'LAB_SCHD'],
  ['TERM_SCREEN_ID', 'LAB_SCR_ID'],
  ['LAND_SEE_MORE', 'LAB_SEE_MORE'],
  ['TB_SELECTED', 'LAB_SELCT'],
  ['PLACEHOLDER_ENTER_AVAILABILITY', 'LAB_SELCT_AVAIL'],
  ['TERM_SELECT_FILE', 'LAB_SELCT_FILE'],
  ['PLACEHOLDER_ENTER_ELIGIBILITY_FOR_INPUT', 'LAB_SELCT_INPUT_TRGT'],
  ['STEP_3_WRITING_REPORT', 'LAB_SELCT_TBCT'],
  ['PLACEHOLDER_ENTER_TABLE_OF_CONTENTS_PARENT', 'LAB_SELCT_TBCT_PARENT'],
  ['TERM_SEP', 'LAB_SEP'],
  ['TB_SEP', 'LAB_SEP'],
  ['LABL_REPORT_FRAMEWORK_STEP_SU_TABLE_CONTENT', 'LAB_SETUP_CONT_AND_PIC'],
  ['TERM_SETUP_REPORT_FRAMEWORK_TABLE_CONTENT', 'LAB_SETUP_CONT_PIC'],
  ['LAND_BUSSINESS_UNIT_SEVERAL_ITEM', 'LAB_SEVER_ITEM'],
  ['ESG_CALENDAR_MANAGEMENT_SCHEDULE_SHARE', 'LAB_SHARE'],
  ['TERM_ORG_CLASS', 'LAB_SHARE_RANG'],
  ['LABL_SITE_NAME', 'LAB_SITE_NM'],
  ['LABL_TEAM_SKIP', 'LAB_SKIP_FOR_TODAY'],
  ['TERM_ORDER', 'LAB_SORT_ORDER'],
  ['TERM_SEQUENCE', 'LAB_SORT_ORDER'],
  ['TB_DATA_ORDER', 'LAB_SORT_ORDER'],
  ['LABL_DATA_ORDER', 'LAB_SORT_ORDER'],
  ['TERM_SYSPARAM_ORDER', 'LAB_SORT_ORDER'],
  ['CD_SORT_ORDER', 'LAB_SORT_ORDER'],
  ['TERM_SORT_ORDER', 'LAB_SORT_ORDER'],
  ['TERM_ORDER_DATA', 'LAB_SORT_ORDER'],
  ['TB_SUPPORTING_FILE', 'LAB_SPPT_FILE'],
  ['PLACEHOLDER_SEARCH_USER', 'LAB_SRCH_BY_USER_INFO'],
  ['TERM_SEARCH_CONDITION', 'LAB_SRCH_COND'],
  ['LABL_SEARCH_TEAM', 'LAB_SRCH_DEPT'],
  ['LABL_SEARCH_ENERGY/ACCOUNT', 'LAB_SRCH_ENGY_ACCT'],
  ['LABL_SEARCH_PERSON', 'LAB_SRCH_USER'],
  ['TERM_START_DATE', 'LAB_ST_YMD'],
  ['TB_START_DATE', 'LAB_ST_YMD'],
  ['CD_STATE', 'LAB_STATE'],
  ['TERM_STATISTICS_BASED_DIAGNOSTICS', 'LAB_STATI_DIAG'],
  ['LABL_STATUS', 'LAB_STATUS'],
  ['TB_STATUS', 'LAB_STATUS'],
  ['TB_TEMPLATE_AUTHORING_STATUS', 'LAB_STATUS'],
  ['TB_SUBJECT_AREA', 'LAB_SUBJ_AREA'],
  ['NOTI_SUCCESS', 'LAB_SUCC'],
  ['TERM_SUPER', 'LAB_SUPER'],
  ['TB_SYSTEM_PARAMS', 'LAB_SYS_PARAM'],
  ['TERM_SYSPARAM_CODE', 'LAB_SYS_PARAM_CD'],
  ['TERM_SYSTYPE', 'LAB_SYS_TYPE'],
  ['TERM_SYSTYPE_CODE', 'LAB_SYS_TYPE_CD'],
  ['TERM_SYSTYPE_NAME', 'LAB_SYS_TYPE_NM'],
  ['LAND_INFO_UNIT_CO2', 'LAB_THSD_TCO2EQ'],
  ['TERM_SUBJECT', 'LAB_TITLE'],
  ['PER_SUBJECT', 'LAB_TITLE'],
  ['TERM_TITLE', 'LAB_TITLE'],
  ['TERM_SUBJECTS', 'LAB_TITLE'],
  ['TERM_SUB', 'LAB_TITLE'],
  ['MEDIA_COLM_TITLE', 'LAB_TITLE'],
  ['TERM_TO_BE', 'LAB_ToBe'],
  ['LABL_TODO', 'LAB_TODO'],
  ['APPROVE_STATUS_WORKING_TOOLTIP', 'LAB_TOOLT_DESC_WORK_STATUS'],
  ['TB_TOTAL', 'LAB_TOTL'],
  ['LABL_TOTAL', 'LAB_TOTL'],
  ['TERM_TOTAL', 'LAB_TOTL'],
  ['LABL_TOTAL_COUNT', 'LAB_TOTL_CNT'],
  ['LABL_TOTAL_HEATING_LEVEL', 'LAB_TOTL_HEAT_LVL'],
  ['TB_CREATE_TEMPLATE_GUIDE', 'LAB_TPLT_GUIDE'],
  ['TB_TRANSITION_RATE', 'LAB_TRANS_RATE'],
  ['TB_TARGET', 'LAB_TRGT'],
  ['LABL_TARGET_PERIOD', 'LAB_TRGT_PERIOD'],
  ['LABL_TARGET_YEAR', 'LAB_TRGT_YYYY'],
  ['LAND_BUSSINESS_UNIT_WON', 'LAB_TRIL_WON'],
  ['PLACEHOLDER_TYPE', 'LAB_TYPE'],
  ['TB_MUNIT', 'LAB_UNIT'],
  ['TERM_UNIT', 'LAB_UNIT'],
  ['LABL_UNIT', 'LAB_UNIT'],
  ['LAND_BUSSINESS_UNIT', 'LAB_UNIT'],
  ['CD_UPDATE', 'LAB_UP'],
  ['TERM_MODIFY_USER', 'LAB_UP_USER'],
  ['TB_EDITOR', 'LAB_UP_USER'],
  ['TB_MODIFIER', 'LAB_UP_USER'],
  ['DEADLINE_EDITOR', 'LAB_UP_USER'],
  ['TB_TYPED_BY', 'LAB_UP_USER'],
  ['TB_REPORT_FINAL_MODIFIED', 'LAB_UP_USER'],
  ['TERM_MODIFY_DATE', 'LAB_UP_YMD'],
  ['TB_REVISION_DATE', 'LAB_UP_YMD'],
  ['TB_MODIFY_DATE', 'LAB_UP_YMD'],
  ['TERM_MODIFIED_DATE', 'LAB_UP_YMD'],
  ['DEADLINE_EDIT_DATE', 'LAB_UP_YMD'],
  ['TB_REPORT_LAST_MODIFIED', 'LAB_UP_YMD'],
  ['TERM_UPLOAD_FILE', 'LAB_UPLD_FILE'],
  ['MEDIA_COLM_LINK_REQUIRED', 'LAB_URL_INVLD'],
  ['CD_USAGE_INDICATOR', 'LAB_USE_IND'],
  ['LABL_USAGE_RATIO_IN_PROCESS', 'LAB_USE_RTIO_PROC'],
  ['TB_USE_YN', 'LAB_USE_YN'],
  ['TB_USE', 'LAB_USE_YN'],
  ['TERM_USE_OR_NOT', 'LAB_USE_YN'],
  ['LABL_USE', 'LAB_USE_YN'],
  ['TERM_USAGE', 'LAB_USE_YN'],
  ['TB_REPORT_AVAILABILITY', 'LAB_USE_YN'],
  ['TB_REPORT_USAGE', 'LAB_USE_YN'],
  ['ROLE_USER', 'LAB_USER'],
  ['CD_USER', 'LAB_USER'],
  ['TERM_USER_LIST', 'LAB_USER_LIST'],
  ['CD_USER_NAME', 'LAB_USER_NM'],
  ['TB_USER_NAME', 'LAB_USER_NM'],
  ['TERM_SYSPARAM_VALUE', 'LAB_VALUE'],
  ['LAND_BUSSINESS_VALUE', 'LAB_VALUE'],
  ['TERM_VERSION', 'LAB_VER'],
  ['TB_VERSION', 'LAB_VER'],
  ['TERM_HITS', 'LAB_VIEW'],
  ['TERM_VIEW_FILE', 'LAB_VIEW_FILE'],
  ['LABL_VOLUMN_FRACTION', 'LAB_VOL_FRAC'],
  ['TB_VOLUME_FRACTION', 'LAB_VOL_FRAC'],
  ['TB_VOLUME_USAGE', 'LAB_VOL_USE'],
  ['NOTI_WARNING', 'LAB_WARN'],
  ['LAND_SEARCH_HEADER_WELCOME', 'LAB_WELCO'],
  ['LAND_SEARCH_CONTENT', 'LAB_WELCO_ESG_INTEL_SYS'],
  ['LABL_WHETHER_BY_PRODUCT_GAS_IS_GENERATED', 'LAB_WETH_BYPD_GAS_GNRT'],
  ['TB_WHETHER_BY_PRODUCT_GAS_IS_GENERATED', 'LAB_WETH_BYPD_GAS_GNRT'],
  ['TERM_WRITE', 'LAB_WRITE'],
  ['TERM_WRITER', 'LAB_WRITER'],
  ['TERM_WRITING_DEPT', 'LAB_WRTE_DEPT'],
  ['LABL_REPORT_FRAMEWORK_WRITING_GUIDE', 'LAB_WRTE_GUIDE'],
  ['LABL_WRITING_GUIDE', 'LAB_WRTE_GUIDE'],
  ['LABL_REPORT_FRAMEWORK_WRITING_REPORT', 'LAB_WRTE_RPRT'],
  ['STEP_4_WRITING_REPORT', 'LAB_WRTE_RPRT'],
  ['TERM_YEAR_MONTH', 'LAB_YM'],
  ['DEADLINE_YEAR_MONTH', 'LAB_YM'],
  ['TERM_YEAR_AND_MONTH', 'LAB_YM'],
  ['TERM_YEAR', 'LAB_YYYY'],
  ['SELECT_YEAR', 'LAB_YYYY'],
  ['TB_YEAR', 'LAB_YYYY'],
  ['LABL_PERIOD', 'LAB_YYYY'],
  ['TB_YEAR_ON_YEAR', 'LAB_YYYY_ON_YYYY'],
  ['TB_YEAR_ON_YEAR_RATIO', 'LAB_YYYY_ON_YYYY_PRCT'],
  ['MESG_APPROVER_EXISTED', 'MSG_APR_EXIST'],
  ['APPROVER_NOT_ALLOW_EDITED_TOOLTIP', 'MSG_APR_INFO_CANT_EDIT'],
  ['MESG_APPROVER_NOT_EMPTY', 'MSG_APR_REQ'],
  ['MSG_CATEGORY_GAS_REQUIRED', 'MSG_CATE_GAS_REQ'],
  ['MESG_CHOOSE_PERIOD_VALUE', 'MSG_CHOOSE_PERIOD'],
  ['MESG_CONFIRM', 'MSG_CONF'],
  ['MESG_CONFIRM_SUCCESS', 'MSG_CONF_SUCC'],
  ['MESG_DEL', 'MSG_DEL'],
  ['MESG_DEL_NOTI', 'MSG_DEL_NOTI'],
  ['MESG_DELETE_SUCCESS', 'MSG_DEL_SUCC'],
  ['NOTI_DELETE_SUCCESS_DESC', 'MSG_DEL_SUCC'],
  ['MESG_DISTRIBUTE', 'MSG_DISTN_ITEM'],
  ['MESG_DUPLICATE_ENERGY', 'MSG_DUPLI_FUEL'],
  ['MESG_DUPLICATE_GAS', 'MSG_DUPLI_GAS'],
  ['MESG_DUPLICATE_TEAM', 'MSG_DUPLI_TEAM'],
  ['MESG_DOWNLOAD_SUCCESS', 'MSG_DWLD_SUCC'],
  ['TERM_EMPTY_VALIDATOR', 'MSG_EMPTY_VALID'],
  ['MESG_INPUT_BUSINESS_ENERGY_DATA_WARNING', 'MSG_ENGY_GHGS_IND_CLOS'],
  ['MESG_ENERGY_ITEM_REQUIRED', 'MSG_ENGY_ITEM_REQ'],
  ['MESG_ENTER_THE_DEPARTMENT_NAME', 'MSG_ENTER_DEPT_NM'],
  ['MESG_ENTER_THE_NAME', 'MSG_ENTER_NM'],
  ['TERM_NUMBER_VALIDATOR', 'MSG_ENTER_NO_LARGE_0'],
  ['TERM_NUMBER_VALIDATOR_MIN', 'MSG_ENTER_NO_LARSM_0'],
  ['LAND_SEARCH_PLACE_HOLDER', 'MSG_ENTER_SRCH'],
  ['MESG_CONFIRM_FAIL', 'MSG_FAIL_CONF'],
  ['MESG_REPORT_FRAMEWORK_CREATE_FAILED', 'MSG_FAIL_CREAT_RPFW'],
  ['MESG_DELETE_FAIL', 'MSG_FAIL_DEL'],
  ['MESG_REPORT_FRAMEWORK_DELETE_FAILED', 'MSG_FAIL_DEL_RPFW'],
  ['MESG_DOWNLOAD_FAIL', 'MSG_FAIL_DWLD'],
  ['MESG_CREATE_FAIL', 'MSG_FAIL_REG'],
  ['MESG_SAVE_FAIL', 'MSG_FAIL_SAVE'],
  ['MESG_MODIFY_FAIL', 'MSG_FAIL_UP'],
  ['MESG_UPDATE_GUIDE_FAILED', 'MSG_FAIL_UP_GUIDE'],
  ['MESG_REPORT_FRAMEWORK_UPDATE_FAILED', 'MSG_FAIL_UP_RPFW'],
  ['MESG_REPORT_FRAMEWORK_TEMPLATE_UPDATE_FAILED', 'MSG_FAIL_UP_TPLT'],
  ['MESG_UPLOAD_FAIL', 'MSG_FAIL_UPLD'],
  ['MESG_REPORT_FRAMEWORK_IMAGE_UPLOAD_FAILED', 'MSG_FAIL_UPLD'],
  ['MESG_REPORT_FRAMEWORK_IMAGE_UPLOAD_SUCCESS', 'MSG_FILE_UPLD_SUCC'],
  ['MESG_GAS_ITEM_REQUIRED', 'MSG_GAS_ITEM_REQ'],
  ['MSG_GAS_REQUIRED', 'MSG_GAS_REQ'],
  ['MESG_UPDATE_GUIDE_SUCCESS', 'MSG_GUIDE_UP_SUCC'],
  ['MESG_AUTHENTICATION_FAIL', 'MSG_INCOR_USER_ID_OR'],
  ['MESG_REPORT_FRAMEWORK_IMAGE_SIZE', 'MSG_LARGE_THAN_2MB'],
  ['TERM_NEED_TO_CONFIRM', 'MSG_NEED_CONF'],
  ['MESG_NO_CHANGE', 'MSG_NO_CHANGE'],
  ['MSG_NO_DATA_TO_SAVE', 'MSG_NO_DATA_SAVE'],
  ['MESG_NO_DATA_TO_SAVE', 'MSG_NO_DATA_SAVE'],
  ['MESG_REPORT_FRAMEWORK_IMAGE_TYPE', 'MSG_NOT_IMAGE_FILE'],
  ['TERM_NO_FILE', 'MSG_NOTH_PREVW'],
  ['MESG_PROCESS_SUCCESS', 'MSG_PROC_SUCC'],
  ['MESG_RECORDING_ENERGY_PARAMATERS', 'MSG_RECDN_ENGY_PARAM'],
  ['MESG_CREATE_SUCCESS', 'MSG_REG_SUCC'],
  ['NOTI_CREATE_SUCCESS_DESC', 'MSG_REG_SUCC'],
  ['MESG_REPORT_FRAMEWORK_CREATE_SUCCESS', 'MSG_RPFW_REG_SUCC'],
  ['PER_REQUEST_CONFIRM', 'MSG_RQST_APR'],
  ['MESG_REQUEST_APPROVAL_SUCCESS', 'MSG_RQST_APR_SUCC'],
  ['MESG_WARNING_SAVE_DATA', 'MSG_SAVE_DATA_CHANGE'],
  ['MESG_SAVE_DRAFT_SUCCESS', 'MSG_SAVE_DRAFT_SUCC'],
  ['MESG_SAVE_ITEM', 'MSG_SAVE_ITEM'],
  ['MESG_SAVE_NEW_ITEM', 'MSG_SAVE_ITEM'],
  ['MESG_SAVE_NEW_ITEM_NOTI', 'MSG_SAVE_ITEM'],
  ['MESG_SAVE_SUCCESS', 'MSG_SAVE_SUCC'],
  ['MSG_CATEGORY_REQUIRED', 'MSG_SELCT_CATE'],
  ['MSG_TEAM_REQUIRED', 'MSG_SELCT_DEPT_FIRST'],
  ['MESG_REQUIRED_SELECT', 'MSG_SELCT_FIRST'],
  ['MSG_FUEL_REQUIRED', 'MSG_SELCT_FUEL'],
  ['MSG_INPUT_ACCOUNT_REQUIRED', 'MSG_SELCT_INPUT_ACCT'],
  ['MESG_MENU_REQUIRED', 'MSG_SELCT_MENU_SAVE'],
  ['MSG_OPERATING_REQUIRED', 'MSG_SELCT_OPRT_SITE'],
  ['MEDIA_SEARCH_PLACE_HOLDER', 'MSG_SRCH_MEDIA'],
  ['MESG_SURE_PROCEED', 'MSG_SURE_PROC'],
  ['MESG_REPORT_FRAMEWORK_TEMPLATE_UPDATE_SUCCESS', 'MSG_TPLT_UPLD_SUCC'],
  ['MESG_MODIFY_SUCCESS', 'MSG_UP_SUCC'],
  ['NOTI_UPDATE_SUCCESS_DESC', 'MSG_UP_SUCC'],
  ['MESG_UPLOAD_SUCCESS', 'MSG_UPLD_SUCC'],
  ['MESG_SELECT_PER', 'MSG_USELCT_WRITE_PER_FIRST'],
  ['MESG_ACCOUNT_TEMP_BLOCKED', 'MSG_USER_TEMP_BLOCK'],
  ['TITLE_CREATE_TEMPLATE', 'TITLE_CREAT_TPLT'],
]);


function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Thay thế tất cả các key cũ bằng key mới
  keyMap.forEach((newKey, oldKey) => {
    const regex = new RegExp(`\\b${oldKey}\\b`, 'g');
    content = content.replace(regex, newKey);
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

function traverseDirectory(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dir}:`, err);
      return;
    }
    files.forEach(file => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stat) => {
        if (stat && stat.isDirectory()) {
          traverseDirectory(filePath);
        } else if (file.endsWith('.tsx')) {
          replaceInFile(filePath);
        }
      });
    });
  });
}

traverseDirectory(directoryPath);
