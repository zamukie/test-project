<template>
<div>
    <h1 class="title">Tourist Information</h1>
    <div class="button">
        <router-link to="/add">
            <button>ADD</button>
        </router-link>
    </div>
    <div class="attraction">
        <section class="gird-container">
            <div v-for="(att, i) in attraction" :key="i">
                <div class="card">
                    <img src='../assets/1.jpg' id="foodpicture" alt="Avatar" />
                    <div class="detail">
                        <div class="description">
                            <h3>Attraction Name: {{ att.name }} </h3>
                            <p>Description: {{ att.description }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            attraction: [{
                    id: '1',
                    provinceId: 'A1',
                    attractionTypeId: 'B1',
                    imageUrl: '',
                    name: 'AAA',
                    description: 'test data',
                },
                {
                    id: '2',
                    provinceId: 'A2',
                    attractionTypeId: 'B2',
                    imageUrl: '',
                    name: 'BBB',
                    description: 'test data2',
                },
                {
                    id: '3',
                    provinceId: 'A3',
                    attractionTypeId: 'B3',
                    imageUrl: '',
                    name: 'CCC',
                    description: 'test data3',
                },
                {
                    id: '4',
                    provinceId: 'A4',
                    attractionTypeId: 'B4',
                    imageUrl: '',
                    name: 'DDD',
                    description: 'test data4',
                },
                {
                    id: '5',
                    provinceId: 'A5',
                    attractionTypeId: 'B5',
                    imageUrl: '',
                    name: 'EEE',
                    description: 'test data5',
                },
            ]
        }
    }
}
</script>

<style scoped>
.title {
    text-align: center;
}
.button {
    text-align: end;
    margin-right: 30px;
    margin-bottom: 20px;
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

/* Information */
.gird-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin: 0 24px;
}

.text {
    color: #fff;
    font-size: 50px;
    font-weight: bold;
    margin: 10px 0;
}

.card {
    box-shadow: 0px 0px 12px #000;
    border-radius: 16px;
    padding: 5px;
    border: 3px solid #783833;
    margin: 6px;
    color: #000;
}

.card .detail {
    display: flex;
    flex-direction: row;
}

.card .detail .description {
    flex: 1;
    flex-direction: column;
    margin: 0 0 0 20%;
}

.card img {
    /* border-radius: 16px; */
    height: 240px;
    width: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}
</style>
