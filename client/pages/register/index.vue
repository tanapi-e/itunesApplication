<template>
    <div id="form">
        <Register />
    </div>
</template>

<script>
import Register from "@/components/Register";
export default {
    components: {
        Register
    }
}
</script>

<style scoped>
#form {
    width: 700px;
    height: 700px;
    margin: 30px auto;
    padding: 200px;
    border: 1px solid #555;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: 0px 1px 10px #488a9e;
    -moz-box-shadow: 0px 1px 10px #488a9e;
    box-shadow: 0px 1px 10px #488a9e;
    border: solid #4eb4c2 1px;
    background: #fafafa;
}

.text {
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
</style>
