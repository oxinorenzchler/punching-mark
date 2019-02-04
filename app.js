//Create new instance
new Vue({
	el:'#vue-app',
	data:{
		health:100,
		gameover: false,
	},
	methods:{
		punch:function(){
			this.health -= 10;
			if (this.health <= 0) {
				this.gameover = true;
			}
		},
		restart:function(){
			this.health = 100;
			this.gameover = false;
		}	
	},
	computed:{
		
	}
});