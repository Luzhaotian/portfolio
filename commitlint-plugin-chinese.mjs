/** 校验 commit subject 仅含中文、数字与中文标点 */
const CHINESE_SUBJECT_PATTERN =
  /^[\u4e00-\u9fa50-9，。！？、：；（）【】《》「」『』·—…\s]+$/;

const chineseSubjectRule = (parsed) => {
  const { subject } = parsed;

  if (!subject) {
    return [true];
  }

  const valid = CHINESE_SUBJECT_PATTERN.test(subject);

  return [valid, "提交说明只能使用中文、数字和中文标点，不能包含英文或其他字符"];
};

const chinesePlugin = {
  rules: {
    "chinese-subject": chineseSubjectRule,
  },
};

export default chinesePlugin;
