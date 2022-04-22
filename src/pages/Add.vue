<template>
<div class="contain">
    <div class="add">
        <h1>Torist Information</h1>
            <form class="container" @submit.prevent="submit">
             <select class="textbox" placeholder="Province">
                   <option hidden>Province</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <select class="textbox" placeholder="type">
                    <option hidden>Type</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <input class="textbox" v-model="name" type="text" placeholder="Name" required>
                <input class="textbox" v-model="description" type="text" placeholder="Descrioption" required>
                <div class="button">
                    <button>Submit</button>
                    <router-link to="/">
                        <button>Back</button>
                    </router-link>
                </div>
        </form>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            description: '',
            province: [{
                text: 'Bankok',
                value: 'BKK'
            },
            {
                text: 'Chiang Mai',
                value: 'CM'
            },]
        }
    },
    methods: {
        submit() {
            console.log(this.name);
            console.log(this.description);
        }
    }
}
</script>

<style scoped>
.contain {
    margin: 0;
    padding: 0
}

.contain .add {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

form.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* p {
    text-align: center;
    font-size: 50px;
    color: #000;
    font-weight: 300;
} */

input {
    border: none;
    height: 50px;
    width: 250px;
    margin: 10px 0;
    padding: 0 10px;
    font-size: 1rem;
    outline: none;
    text-align: center;
    border-radius: 5px;
    transition: .5s;
    cursor: pointer;
}

select {
    border: none;
    height: 50px;
    width: 250px;
    margin: 10px 0;
    padding: 0 10px;
    font-size: 1rem;
    outline: none;
    text-align: center;
    border-radius: 5px;
    transition: .5s;
    cursor: pointer;
}

/* option {
    color: #000;
} */

.textbox {
    color: #000;
    margin: 15px;
    background: rgba(24, 17, 24, 0.2);
    border: 1px solid rgb(71, 16, 16);
}

.textbox::placeholder {
    color: #000;
}

.textbox:hover,
.textbox:focus {
    background: #fff;
    width: 300px;
    color: #1abc9c;
}

.button button {
    color: #D7CAC5;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 18px;
    border-radius: 50px;
    margin-left: 10px;
    background-color: #783833;
    width: 150px;
    border: 3px solid #aaa;
}

.button button:hover {
    background-color: #D7CAC5;
    color: #783833;
}
</style>
