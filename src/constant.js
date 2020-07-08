export const MODE = {
    TEST: 0, // 只需要验证通不通过即可，效率最高
    REPLACE: 1, // 将脏词替换成某个特定的字符 如 *， 支持配置
    MATCH: 2, // 返回匹配到的脏词和位置
    REPLACE_MATCH: 3 // 1+2
};