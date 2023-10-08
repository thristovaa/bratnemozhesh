
<template>
  <!--<img src="logo.png" alt="logo">-->
    <img src="logo.png" alt="logo">

    <!--modal-->
    <template v-if="firstVisit">
      <div :class="[
        'h-[50vh] w-[60vw] md:w-[50vw] border-white white border-[1px] rounded-[25px] flex flex-col align-start justify-between p-[24px] md:p-[52px] ',
        bgCard ? 'bg-popup' : ''
      ]">
        <div v-html="rules[ruleCurrent]"></div>
        <div class="flex flex-col gap-5" v-if="ruleCurrent == rules.length - 1">
          <p class="text-[18px]">Преди да приключим ще те<br>помолим да се съгласиш с нашите<br>общи условия.</p>
          <div>
            <input type="checkbox" id="consent" v-model="ruleConsent" class="me-2" /> 
            <label for="consent" class="text-[12px] font-medium underline">Общи условия</label>
          </div>
        </div>

        <template v-if="ruleCurrent + 1 < rules.length">
          <div class="flex items-center gap-x-[20vw] md:gap-x-[200px] justify-between">
            <button @click="rulePrev" class="blue-color-text font-extrabold underline underline-offset-2 text-[17px] md:text-[22px]">
              Назад
            </button>
            <button @click="ruleNext" class="blue-color-text font-extrabold underline underline-offset-2 text-[17px] md:text-[22px]">
              Напред
            </button>
          </div>
        </template>
        <template v-else>
          <div class="flex items-center gap-x-[200px] justify-between">
            <button @click="rulePrev" class="invisible cursor-default blue-color-text font-extrabold underline underline-offset-2 text-[17px] md:text-[22px]">
              Назад
            </button>
            <button @click="startPlaying" class="blue-color-text font-extrabold underline underline-offset-2 text-[17px] md:text-[22px]">
              Напред
            </button>
          </div>
        </template>
      </div>
      <div class="flex items-center gap-x-[200px] justify-between">
        <button>
          <ion-icon name="chevron-back-circle" class="text-white text-[100px] transition-all ease-in duration-300 opacity-5 hover:scale-[1.1]" :class="additionalClassObject" id="previous"></ion-icon>
        </button>
        <button>
          <ion-icon name="chevron-forward-circle" class="text-white text-[100px] transition-all ease-in duration-300 opacity-5 hover:scale-[1.1]" :class="additionalClassObject" id="next"></ion-icon>
        </button>
      </div>
    </template>
    <!--modal-->

    <template v-else>
      <template v-if="start">
        <div :class="'h-[350px] w-[250px] border-white border-[1px] rounded-[25px] flex flex-col align-start justify-between p-[22px] ' + (randomItem ? randomItem.color : main[0].color)">
          <div class="text-[18px] leading-[20px] text-start text-white !font-extrabold font-montserrat" v-html="randomItem ? randomItem.content : main[0].content"></div>
          <div class="text-[16px] text-start text-white font-black" v-html="randomItem ? randomItem.smallText : main[0].smallText"></div>
        </div>
        <div class="flex items-center gap-x-[200px] justify-between">
          <button @click="getPreviousCard" :class="!left ? 'opacity-5' : ''">
            <ion-icon name="chevron-back-circle" class="text-white text-[100px] transition-all ease-in duration-300 hover:scale-[1.1]" id="next"></ion-icon>
          </button>
          <button @click="getRandomCard">
            <ion-icon name="chevron-forward-circle" class="text-white text-[100px] transition-all ease-in duration-300 hover:scale-[1.1]" id="next"></ion-icon>
          </button>
        </div>
      </template>
      <template v-else>
        <button class="text-[30px] py-7 px-20 rounded-[25px] white font-extrabold" @click="startGame">Започни</button>
        <div class="flex items-center gap-x-[200px] justify-between">
          <button @click="getPreviousCard">
            <ion-icon name="chevron-back-circle" class="text-white text-[100px] transition-all ease-in duration-300 opacity-5 hover:scale-[1.1]" :class="additionalClassObject" id="previous"></ion-icon>
          </button>
          <button @click="getRandomCard">
            <ion-icon name="chevron-forward-circle" class="text-white text-[100px] transition-all ease-in duration-300 opacity-5 hover:scale-[1.1]" id="next"></ion-icon>
          </button>
        </div>
      </template>
    </template>


</template>

<script>

export default {
  data() {
    return {
      firstVisit: true,
      start: false,
      currentIndex: 0,
      autoMoveInterval: null,

      rules: [
        '<div class="text-[17px] md:text-[24px]"><p>Здравей!</p><p>В момента ти си в дигиталната версия на “Брат, не можеш...”. Тук ще усетиш истинското чувство да играеш най-дивата парти игра на планетата <strong>преди всички останали</strong>. Изключително благодарни сме и се радваме, че ни се довери да направим вечерите ти неповторими, а ние обещаваме, че няма да те разочароваме.</p><p>Натисни <strong>“Напред”</strong> и нека заедно се потопим в купона... </p></div>',
        '<div class="text-[17px] md:text-[24px]"><p>Вече навлизаме в играта. Тук ще намерите изключително <strong>диви</strong> и в повечето случаи <strong>нечовешки предизвикателства</strong> и още други забавни карти.</p><p>Съдържа <strong>две тестета</strong> - едното с предизвикателства и другото със съответните забавни карти, за които тъпите създатели на играта така и не успяха да измислят име</p></div>',
        '<div class="text-[17px] md:text-[24px]"><p>Когато приключиш с този досаден tutorial, натисни бутона <strong>“Започни”</strong>. Ще започнат да ти излизат карти с предизвикателства. От там нататък общо взето всичко, което трябва да правиш е да цъкаш <strong>“<”</strong> или <strong>“>”</strong> в зависимост от това дали искаш да видиш <strong>предишната</strong> или </strong>следващата</strong> карта.</p></div>',
        '<div class="text-[17px] md:text-[24px]"><p>Това е switch карта:</p><div class="flex justify-start align-center gap-5"><img alt="switch white" src="switch/white_switch.png"><img alt="switch black" src="switch/black_switch.png"></div><p>Когато се падне, автоматично ще започнат да се показват карти от другото тесте и така всеки път като се покаже тази карта. На всяка друга карта е написано какво прави, така че нямаме намерение да се обясняваме. Знаем, че си достатъчно умен 😘</p></div>',
        '<div class="text-[17px] md:text-[24px] flex flex-col justify-between align-start"><p>Пожелаваме ти приятна и отговорна игра.</p><p>Помни - консумацията на алкохол не е нужна за целите на играта.</p><p>Забавлявай се и умната!</p></div>',
      ],

      ruleCurrent: 0,

      ruleConsent: false,

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
      main: [
        { content: '<img alt="logo white" src="logo_white.png">', smallText: '<img alt="hashtag" src="hashtag.png">', color: "black-main" },
      ],

      usedCards: [],

      randomItem: null,

      counter: 0,
      counterAll: 0,

      black: true,

      bgCard: false,

      left: false,
      right: false
    };
  },
  mounted() {
    this.showModal = false
  },
  methods: {

    getRandomCard() {
      if(this.counterAll == this.usedCards.length){
        this.counterAll++;
        console.log("counter: " + this.counterAll);

        console.log(this.black);

        if(this.counterAll > 0){
          this.left = true;
        }

        if(this.cardContentBlack.length > 0 && this.black){
          let randomCard = Math.floor(Math.random() * this.cardContentBlack.length);
          console.log("random: " + randomCard)
          this.randomItem = this.cardContentBlack[randomCard];

          let previousCard = this.cardContentBlack.splice(randomCard, 1);
          this.usedCards.push(previousCard);

          if(this.usedCards.length > 0) console.log("There are used cards");
          //console.log(JSON.stringify(this.usedCards, null, 2));

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
          
          let previousCard = this.cardContentWhite.splice(randomCard, 1);
          this.usedCards.previousCard = previousCard;

          console.log(this.usedCards[0]);
          this.counter++;

          console.log(this.counter)
          if(this.counter == 12){
            this.randomItem = this.switch[1]
            this.black = true;
            this.counter = 0;
          }
        }      
        else {
          this.randomItem = null;
        }
      }
      else{
        this.counterAll++;
        console.log(JSON.stringify(this.usedCards, null, 2));
        const nextCard = this.usedCards[this.counterAll - 1];
        this.randomItem = nextCard[0];
        console.log(this.randomItem);
      }
    },


    getPreviousCard() {
      if (this.usedCards.length > 0) {
        if (this.counterAll > 0) {
          this.counterAll--;
          console.log("counter: " + this.counterAll);
        }
        const previousCard = this.usedCards[this.counterAll - 1];
        this.randomItem = previousCard[0];
        console.log(JSON.stringify(this.usedCards, null, 2));
      }
    },


    ruleNext() {
      console.log(this.ruleCurrent)
      if (this.ruleCurrent + 1 < this.rules.length) {
        this.ruleCurrent ++;
      }
      if(this.ruleCurrent == 2){
        this.bgCard = true;
      }
      else{
        this.bgCard = false;
      }
    },


    rulePrev() {
      if (this.ruleCurrent > 0) {
        this.ruleCurrent--;
      }
      if(this.ruleCurrent == 2){
        this.bgCard = true;
      }
      else{
        this.bgCard = false;
      }
    },


    startPlaying() {
      if (!this.ruleConsent) {
        alert('You need to agreeeee!');
        return;
      }
      this.firstVisit = false;
    },


    startGame() {
      this.start = true;
      this.right = true;
    },
  }
};

</script>
