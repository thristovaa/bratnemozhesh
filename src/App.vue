
<template>
  <!--<img src="logo.png" alt="logo">-->
    <img src="logo.png" alt="logo">
    <div :class="'h-[350px] w-[250px] border-white border-[1px] rounded-[25px] flex flex-col align-start justify-between p-[22px] ' + (randomItem ? randomItem.color : cardContentBlack[0].color)">
      <div class="text-[18px] leading-[20px] text-start text-white !font-extrabold font-montserrat">
        {{ randomItem ? randomItem.content : cardContentBlack[0].content }}
      </div>
      <div class="text-[16px] text-start text-white font-black">
        {{ randomItem ? randomItem.smallText : cardContentBlack[0].smallText }}
      </div>
    </div>
    <div class="flex items-center gap-x-[200px] justify-between">
      <button>
        <ion-icon name="chevron-back-circle" class="text-white text-[100px] transition-all ease-in duration-300 hover:scale-[1.1]" :class="additionalClassObject" id="previous"></ion-icon>
      </button>
      <button @click="getRandomCard">
        <ion-icon name="chevron-forward-circle" class="text-white text-[100px] transition-all ease-in duration-300 hover:scale-[1.1]" id="next"></ion-icon>
      </button>
    </div>

</template>

<script>

export default {
  data() {
    return {
      currentIndex: 0,
      posts: [1,2,3],
      autoMoveInterval: null,
      cardContentBlack: [
        { content: "Брат, не можеш да махнеш чорапите си със зъби. Ако не можеш - пий два пъти.", smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: "Брат, не можеш да бъркаш из кошчето и да назовеш всичко, което намериш. Ако не можеш - пий два пъти.", smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: "Брат, не можеш да сложиш бельото си върху панталоните си до края на играта. Ако не можеш - пий три пъти.", smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: "Брат, не можеш да подушиш подмишницата на човека отдясно и да опишеш как мирише на цялата компания. Ако не можеш - пий два пъти.", smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: "Брат, не можеш да направиш снимка на тампон и да я публикуваш в инстаграм. Ако не можеш - довърши си питието.", smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да ce обадиш в пицария и да поръчаш пица c "Путешко месо". Ако не можеш - пий три пъти.', smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да ce обадиш в автокъща и да попиташ дали може да си закупиш каруца. Ако не можеш - довърши си питието.', smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да пееш вместо да говориш през следващите два рунда на играта. Ако не можеш - пий два пъти.', smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да се обадиш случаен номер и да му изпееш „Честит рожден ден“. Ако не можеш - пий три пъти.', smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да дадеш на някой да сложи лед в панталоните ти.  Ако не можеш - пий два пъти.', smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да харесаш всички постове и акценти на първия човек, който ти излезе в инстаграм.  Ако не можеш - пий два пъти.', smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да свалиш чорапите от краката на човека отдясно и да ги носиш като ръкавици до следващия си ред. Ако не можеш - довърши си питието.', smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да опишеш подробно какво е усещането при оргазъм. Ако не можеш - пий два пъти.', smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да направиш 25 лицеви опори. Ако не можеш - пий три пъти.', smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да качиш 20-тата си снимка от галерията си на стори. Ако не можеш - пий три пъти.', smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да целунеш човека отдясно. Ако не можеш - довърши си питието.', smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да потопиш чорапите си в тоалетната и да ги носиш до края на играта. Ако не можеш - пий два пъти.', smallText: "Тази карта носи 1 точка", color: "purple" },
        { content: 'Брат, не можеш да се опиташ да счупиш световен рекорд по твой избор. Ако не можеш - пий три пъти.', smallText: "Тази карта носи 1 точка", color: "purple" },

        { content: 'Брат, не можеш да целунеш долната част на обувката на играча срещу теб. Направи го, пий два шота или излез от играта.', smallText: "Тази карта носи 2 точки", color: "black" },
        { content: 'Брат, не можеш да махаш дреха всеки път, когато получиш известие на телефона. Направи го, пий два шота или излез от играта.', smallText: "Тази карта носи 2 точки", color: "black" },
        { content: 'Брат, не можеш да оближеш майонеза от пръста на крака на човека отляво. Направи го, пий два шота или излез от играта.', smallText: "Тази карта носи 2 точки", color: "black" },
        { content: 'Брат, не можеш да попиташ съседа си кога се плащаше таксата за асансьора, но с бельо на лицето ти. Направи го, пий два шота или излез от играта.', smallText: "Тази карта носи 2 точки", color: "black" },
        { content: 'Брат, не можеш да потопиш пръста си в тоалетната и след това го целунеш. Направи го, пий два шота или излез от играта.', smallText: "Тази карта носи 2 точки", color: "black" },
        { content: 'Брат, не можеш да влезеш в контейнер за боклук. Направи го, пий два шота или излез от играта.', smallText: "Тази карта носи 2 точки", color: "black" },
        { content: 'Брат, не можеш да повървиш из квартала по бельо. Направи го, пий два шота или излез от играта.', smallText: "Тази карта носи 2 точки", color: "black" },
        { content: 'Брат, не можеш да оставиш всеки човек в групата да те удари по задника. Направи го, пий два шота или излез от играта.', smallText: "Тази карта носи 2 точки", color: "black" },
        { content: 'Брат, не можеш да оближеш гума на кола. Направи го, пий два шота или излез от играта.', smallText: "Тази карта носи 2 точки", color: "black" },
      ],
      cardContentWhite: [
        { content: 'Гласувайте кой от компанията е най-вероятно да спи с някой над 60-годишна възраст. Който е с най-много гласове - пие веднъж.', smallText: '#bratnemozhesh...', color: 'yellow' },
        { content: 'Гласувайте кой от компанията е най-вероятно да си напише името грешно. Който е с най-много гласове - пие веднъж.', smallText: '#bratnemozhesh...', color: 'yellow' },
        { content: 'Гласувайте кой от компанията е най-вероятно да участва в оргия. Който е с най-много гласове - пие веднъж.', smallText: '#bratnemozhesh...', color: 'yellow' },
        { content: 'Гласувайте кой от компанията е най-вероятно да пише на бившия/та си, когато е пиян. Който е с най-много гласове - пие веднъж.', smallText: '#bratnemozhesh...', color: 'yellow' },
        { content: 'Гласувайте кой от компанията е най-вероятно да се сбие в дискотека. Който е с най-много гласове - пие веднъж.', smallText: '#bratnemozhesh...', color: 'yellow' },
        { content: 'Гласувайте кой от компанията е най-вероятно да има фетиш към крака? Който е с най-много гласове - пие веднъж.', smallText: '#bratnemozhesh...', color: 'yellow' },

        { content: 'Избери си някого, с когото да се състезаваш на "Кой ще мигне пръв". Който спечели, получава една точка, който загуби - пие шот.', smallText: '#bratnemozhesh...', color: 'red' },
        { content: 'Избери си някого, с когото да се състезаваш кой ще се съблече по-бързо. Който спечели, получава една точка, който загуби - пие шот.', smallText: '#bratnemozhesh...', color: 'red' },
        { content: 'Избери си някого, с когото да се състезаваш кой ще намери скрит от компанията предмет първи. Който спечели, получава една точка, който загуби - пие шот.', smallText: '#bratnemozhesh...', color: 'red' },
        { content: 'Избери си някого, с когото да се състезаваш кой ще нарисува по-добре някого от компанията. Който спечели, получава една точка, който загуби - пие шот.', smallText: '#bratnemozhesh...', color: 'red' },
        { content: 'Избери си някого, с когото да се състезаваш кой ще издържи повече на "Планк". Който спечели, получава една точка, който загуби - пие шот.', smallText: '#bratnemozhesh...', color: 'red' },
        { content: 'Избери си някого, с когото да се състезаваш кой ще качи по-тъпо стори в инстаграм. Който спечели, получава една точка, който загуби - пие шот.', smallText: '#bratnemozhesh...', color: 'red' },

        { content: 'Брат, няма да повярваш - всички, които имат сини очи пият веднъж. Ако никой няма сини очи, всички пият.', smallText: '#bratnemozhesh...', color: 'teal' },
        { content: 'Брат, няма да повярваш - всички, които са бягали от полицията пият веднъж. Ако никой не е бягал от полицията, всички пият.', smallText: '#bratnemozhesh...', color: 'teal' },
        { content: 'Брат, няма да повярваш - всеки, който е правил секс на плажа пие веднъж. Ако никой не е правил секс на плажа, всички пият.', smallText: '#bratnemozhesh...', color: 'teal' },
        { content: 'Брат, няма да повярваш - всеки, който е бачкал това лято пие веднъж. Ако никой не е бачкал това лято, всички пият.', smallText: '#bratnemozhesh...', color: 'teal' },
        { content: 'Брат, няма да повярваш - всички жени пият.', smallText: '#bratnemozhesh...', color: 'teal' },
        { content: 'Брат, няма да повярваш - всички мъже пият.', smallText: '#bratnemozhesh...', color: 'teal' },

        { content: 'Запази тази карта и я използвай когато не ти се пие. Тя те защитава от пиене.', smallText: '#bratnemozhesh...', color: 'green' },
        { content: 'Запази тази карта и я използвай, ако искаш да изтеглиш ново предизвикателство.', smallText: '#bratnemozhesh...', color: 'green' },
      ],
      switch: [
        { content: 'SWITCH', smallText: "#bratnemozhesh", color: "black" },
        { content: 'SWITCH', smallText: "#bratnemozhesh", color: "white" },
      ],
      additionalClassObject: {
        'opacity-5': true
      },
      usedCards: [],
      randomItem: null,
      counter: 0,
      black: true
    };
  },
  methods: {
    getRandomCard() {
      if(this.usedCards.length == 0){
        this.additionalClassObject['opacity-5'] = true;
      } else {
        this.additionalClassObject['opacity-5'] = false;
      }

      console.log(this.black);

      if(this.cardContentBlack.length > 0 && this.black){
        let randomCard = Math.floor(Math.random() * this.cardContentBlack.length);
        console.log("random: " + randomCard)
        this.randomItem = this.cardContentBlack[randomCard];
        this.cardContentBlack.splice(randomCard, 1);
        this.counter++;
        console.log(this.counter)
        if(this.counter == 12){
          this.randomItem = this.switch[0]
          this.black = false;
          this.counter = 0;
        }
      } else if(this.cardContentWhite.length > 0 && !this.black){
        let randomCard = Math.floor(Math.random() * this.cardContentWhite.length);
        this.randomItem = this.cardContentWhite[randomCard];
        this.cardContentWhite.splice(randomCard, 1);
        this.counter++;
        console.log(this.counter)
        if(this.counter == 12){
          this.randomItem = this.switch[0]
          this.black = true;
          this.counter = 0;
        }
      }      
      else {
        this.randomItem = null;
      }
    }
  }
};

</script>
