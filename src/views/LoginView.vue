<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">로그인</div>
          <div class="card-body">
            <form>
              <div class="form-group d-flex align-items-center">
                <label for="username" class="mr-2">사용자이름:</label>
                <input
                  type="text"
                  class="form-control flex-grow-1"
                  id="username"
                  v-model="username"
                  required
                />
              </div>
              <div class="form-group d-flex align-items-center">
                <label for="password" class="mr-2">비밀번호:</label>
                <input
                  type="text"
                  class="form-control flex-grow"
                  id="password"
                  v-model="password"
                  required
                />
              </div>
              <button type="button" class="btn btn-primary" @click="login">
                로그인
              </button>
              <p v-if="loginError" class="text-danger">{{ loginError }}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      username: "",
      password: "",
      loginError: "",
    };
  },
  methods: {
    login() {
      this.$store.commit("loginUser", {
        username: this.username,
        password: this.password,
      });
      console.log("결과", this.$store.state.user);
      // 롤그인 결과 처리
      if (this.$store.state.user === null) {
        this.username = "";
        this.password = "";
        this.loginError = "아이디나 비밀번호가 올바르지 않습니다.";
      } else {
        // 로그인 성공 시 페이지 이동 등의 처리
        this.$router.push("/");
      }
    },
  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
  },
  created() {
    // 컴포넌트가 생성될 때 실행될 로직을 작성합니다.
  },
  mounted() {
    // 컴포넌트가 DOM에 마운트된 직후 실행될 로직을 작성합니다.
  },
  unmounted() {
    // 컴포넌트가 파괴되기 전 실행될 로직을 작성합니다.
  },
};
</script>

<style scoped>
/* form-group 스타일 조정 */
.form-group {
  margin-bottom: 1rem;
}

/* 비밀번호 입력란을 수평으로 배치 */
.form-group.d-flex {
  display: flex;
  align-items: center;
  gap: 10px; /* 레이블과 입력란 사이에 일정 간격을 추가합니다. */
}

/* 비밀번호 입력란의 스타일 조정 */
.form-group input[type="password"] {
  flex: 1; /* 입력란이 남은 공간을 차지하도록 설정합니다. */
  min-width: 0; /* 입력란의 최소 너비를 설정합니다. */
  width: 100%; /* 입력란의 너비를 100%로 설정합니다. */
  box-sizing: border-box; /* padding 및 border를 포함하여 너비를 설정합니다. */
}
</style>
