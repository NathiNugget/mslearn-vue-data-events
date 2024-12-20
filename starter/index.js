const app = Vue.createApp({
    data() {
        return {
            product: {
                name: 'Cruise to the moon',
                description: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
                image: {
                    src: 'assets/cruise.jpg',
                    description: 'An astronaut floats outside the window while you sit in comfort',
                    style: { 'border-radius': '15px' },
                },
                cabins: [
                    { name: 'Coach', price: 125000 },
                    { name: 'Business', price: 275000 },
                    { name: 'First', price: 430000 },
                ]
            },
            booking: {
                cabinIndex: 0,
                notes: '',
                completed: false
            },
            varstatus: "Hej",
            isChecked: false,
            selectedIndex: 0, 
            arrayOfStrings: [
                "First", "Second", "Third", "Final"
            ],
            selectedValue: "Coach",
        }
        
    },

    computed: {
        bookingCabinDisplay() {
            const cabin = this.product.cabins[this.booking.cabinIndex];
            return `${cabin.name}: $ ${cabin.price.toLocaleString('en-US')}`
        }
    },

    methods: {
        displayPrice(){
            console.log(this.product.cabins[this.booking.cabinIndex].price); 
        },

        submitBooking(){
            this.booking.completed = true; 
        },
    }, 

    

    



});
