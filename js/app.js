var v = new Vue({
    el: '#app',
    data: {
        planets: [],
        cari: ''
    },
    mounted() {
        axios.get('https://swapi.co/api/planets/')
            .then(res => {
                this.planets = res.data.results;
                console.log(this.planets)
            })
            .catch(function (error) {
                this.error = error;
                console.log(this.error)
            })
    },
    computed: {
        filterdata: function(){
            return this.planets.filter((a) => {
                return a.name.toLowerCase().match(this.cari.toLowerCase());
            })
        }
    },
})