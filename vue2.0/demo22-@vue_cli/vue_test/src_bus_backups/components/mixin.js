export const getNow = {
  methods: {
    handleClick() {
      console.log(Date.now(), "<<<MIXIN");
    },
  },
};

export const now = {
  data() {
    return {
      // 如果文件中也定义了now则被替换
      now: Date.now(),
    };
  },
};
