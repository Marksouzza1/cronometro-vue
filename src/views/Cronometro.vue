<template>

<div class="relogio">
    
    <div>
        <span id="minutos">{{minutes}}</span>
        <span class="tempo">minutos</span>    
    </div>


    <div>
        <span id="segundos">{{seconds}}</span>
        <span class="tempo">segundos</span>

    </div>

    <div>
        <span id="segundos">{{milliseconds}}</span>
        <span class="tempo">Milisegundos</span>
      
    </div>
</div>

 <div class="botao">
    <div>
        <button id="botao" @click="iniciarCronometro()" >play</button>
    </div>

    <div>
        <button id="botao" @click="pausarCronometro()">pause</button>
    </div>

    <div>
        <button id="botao" @click="resetarCronometro()">reset</button>
    </div>


    
 </div>


</template>

<script>
    export default {
        name: 'Cronometro',

        data(){
            
            return {
                horaAtual:new Date(),
                pausado: true,
                seconds: 0,
                milliseconds: 0,
                minutes: 0
            }

        },

        mounted() {
            
            setInterval(() =>{
                if (!this.pausado) {
                this.horaAtual = new Date();
                    this.milliseconds +=10;

                   }   if(this.milliseconds ===1000){
                        this.seconds++;
                        this.milliseconds = 0;
                    } if (this.seconds === 60){
                        this.minutes ++;
                        this.seconds = 0;
                    }



            }, 10)



        },

        methods:{

            iniciarCronometro(){
                this.pausado = false;
            },

            pausarCronometro(){

                this.pausado = true
            },

            resetarCronometro(){
                this.pausado = true
                this.seconds = 0
                this.milliseconds = 0
                this.minutes = 0
            }

        }



        

    
    }
</script>


<style scoped>

.botao {

    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 24px;
    border-radius: 10px;
    

}

#botao {
    border: none;
    border-radius: 3pxpx;
    color:#fff;
    background-color: blue;
    width: 65px;
    height: 30px;
    background: rgba(5, 5, 5, .9);
    box-shadow: 0px 8px 10px rgba(0,0,0,.5);
    cursor: pointer;

}



.relogio {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 200px;
    width: 550px;    
    border-radius: 3px;
    box-shadow: 0px 8px 10px rgba(0,0,0,.5);
    
}

.relogio div {
    height: 170px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: rgba(5, 5, 5, .9);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .7);
    border-radius: 7px;
    letter-spacing: 3px;
}

.relogio span {
    font-weight: bolder;
    font-size: 60px;

}

.relogio span.tempo {
    font-size: 10px;
}

button{
        border-radius: 3px;
        align-items: flex-end;
       justify-content: flex-end

}

</style>