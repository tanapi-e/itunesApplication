<template>
    <div>
        <p class="form-title">Login</p>
        <p class="text">Email</p>
        <p class="mail">
            <input type="email" v-model="email" />
            <span class="validate" v-for="item in errors.emailErr">{{item}}</span>
        </p>
        <p class="text">Password</p>
        <p class="pass">
            <input type="password" v-model="password" />
            <span class="validate" v-for="item in errors.passErr">{{item}}</span>
        </p>
        <p class="check">
            <a @click="$router.push('/register')">会員登録</a>
        </p>
        <p class="submit">
            <input type="submit" value="Login" @click="clickLogin" />
        </p>
        {{users}}
    </div>
</template>

<script>
import axios from 'axios';
import {mapActions, mapState} from 'vuex';

export default {
    data() {
        return {
            email: '',
            password: '',
            params: []
        }
    },
    computed: {
        ...mapState({
            users: state => state.lists,
            errors: state => state.errors
        })
    },
    methods: {
        clickLogin() {
            // paramsに値が存在する時
            if (this.params.length > 0) {
                // 中身を空にする
                this.params = [];
            }

            // クエリストリング設定
            this.params.push({
                email: this.email,
                password: this.password
            });

            this.$store.dispatch('getLoginUser', this.params);
            const aaa = this.users;
            this.$store.commit('setLoginUser', this.users);

            if (this.users.user_id != undefined || this.users.user_id != null) {
                this.$router.push('/');
            }
        }
    }
}
</script>

<style scoped>
text {
    font-size: 14px;
    padding-bottom: 10px;
}

.form-title {
    text-align: center;
}

.mail,
.pass {
    margin-bottom: 20px;

    text-align: center;
}

input[type='email'],
input[type='password'] {
    width: 300px;
    padding: 4px;
    font-size: 14px;
}

.submit {
    text-align: right;
}

.submit input {
    font-family: Arial;
    color: #333333;
    font-size: 16px;
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    text-decoration: none;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 8px 6px #e3e3e3;
    -moz-box-shadow: 0px 8px 6px #e3e3e3;
    box-shadow: 0px 8px 6px #e3e3e3;
    border: solid #f5fdff 4px;
    background: -webkit-gradient(
        linear,
        0 0,
        0 100%,
        from(#61c7e0),
        to(#418da8)
    );
    background: -moz-linear-gradient(top, #61c7e0, #418da8);
}

#form .form-title {
    padding-bottom: 6px;
    border-bottom: 2px solid #4eb4c2;
    margin-bottom: 20px;
}

.submit input:hover {
    background: #37a4bf;
    color: #ffffff;
}

.validate {
    color: red;
}

a {
    text-decoration: underline;
}

a:hover {
    color: #37a4bf;
}
</style>
