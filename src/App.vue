
<template>
  <!--<img src="logo.png" alt="logo">-->
    <img src="./assets/logo.png" alt="logo">

    <!--modal-->
    <template v-if="firstVisit">
        <div :class="[
          'h-[50vh] w-[80vw] md:w-[60vw] border-white white border-[1px] rounded-[25px] flex flex-col align-start justify-between p-[24px] md:p-[52px] ',
          bgCard ? 'bg-popup' : ''
        ]">
          <template v-if="!terms">
            <div v-html="rules[ruleCurrent]"></div>
            <div class="flex flex-col gap-5" v-if="ruleCurrent == rules.length - 1">
              <p class="text-[13px] md:text-[18px]">Преди да приключим ще те<br>помолим да се съгласиш с нашите<br><a @click="goToTerms" class="blue-color-text underline hover:cursor-pointer">общи условия</a> 👈</p>
              <div>
                <input type="checkbox" id="consent" v-model="consent"  class="me-2" /> 
                <label for="consent" class="text-[13px] md:text-[15px] blue-color-text font-medium underline">Съгласявам се с общите условия и продължавам</label>
                <div class="flex items-center gap-x-[15vw] md:gap-x-[200px] justify-between">
                  <button @click="rulePrev" class="invisible blue-color-text font-extrabold underline underline-offset-2 text-[15px] md:text-[22px]">
                    Назад
                  </button>
                  <button @click="ruleNext" class="blue-color-text font-extrabold underline underline-offset-2 text-[15px] md:text-[22px]">
                    Напред
                  </button>
                </div>
              </div>
            </div>

            <template v-if="ruleCurrent + 1 < rules.length">
              <div class="flex items-center gap-x-[15vw] md:gap-x-[200px] justify-between">
                <button @click="rulePrev" class="blue-color-text font-extrabold underline underline-offset-2 text-[15px] md:text-[22px]">
                  Назад
                </button>
                <button @click="ruleNext" class="blue-color-text font-extrabold underline underline-offset-2 text-[15px] md:text-[22px]">
                  Напред
                </button>
              </div>
            </template>
          </template>
          <template v-else>
            <div class="overflow-y-scroll">
              <p class="text-[15px] md:text-[18px]"><strong>Дата на влизане в сила: 27.09.2023</strong></p>
              <p class="text-[15px] md:text-[18px]">Моля, внимателно прочетете тези условия за ползване преди да използвате играта ни. С достъпа или използването на играта вие се съгласявате да спазвате и бъдете обвързани от тези Условия. Ако не сте съгласни с тези Условия, моля, не използвайте Играта.</p>
              <p class="text-[15px] md:text-[18px]"><strong>Правоспособност:</strong>Трябва да сте на законната възраст за консумация на алкохол според вашата юрисдикция(за България 18 години), за да използвате играта. С използването на играта потвърждавате, че сте на законната възраст за консумация на алкохол и сте отговорни за действията си по време на играта.</p>
              <p class="text-[15px] md:text-[18px]"><strong>Потребителски профили:</strong>Може да бъде необходимо да създадете потребителски профил, за да получите достъп до определени функции на играта. Вие носите отговорност за поддържането на поверителността на данните за вашия профил и се съгласявате да не споделяте информацията за вашия профил с други. Вие носите изключителна отговорност за всички дейности, които се извършват под вашия профил.</p>
              <p class="text-[15px] md:text-[18px]"><strong>Правила и насоки за играта:</strong>Играта е предназначена за развлекателни цели, специално за партита. С използването на Играта вие се съгласявате да спазвате правилата и насоките, предоставени в Играта, и разбирате, че прекомерната консумация на алкохол може да бъде вредна за вашето здраве. Моля, пийте отговорно.</p>
              <p class="text-[15px] md:text-[18px]"><strong>Потребителско поведение:</strong>Съгласявате се да използвате Играта по законен и отговорен начин. Нямате право да: 1. Участвате в незаконни или вредни дейности по време на използване на Играта. 2. Качвате, споделяте или създавате съдържание, което е обидно, клеветническо или нарушава правата на другите. 3. Използвате играта за рекламиране или участие в незаконни дейности или консумация на алкохол от непълнолетни.</p>
              <p class="text-[15px] md:text-[18px]"><strong>Поверителност:</strong>Политиката ни за поверителност урежда събирането и използването на вашата лична информация. С използването на играта вие се съгласявате с условията, изложени в нашата политика за поверителност.</p>
              <p class="text-[15px] md:text-[18px]"><strong>Откази:</strong> Използвате Играта на ваш риск. Ние не носим отговорност за вреди, произтичащи от използването на играта, включително, но не само последиците от консумацията на алкохол.</p>
              <p class="text-[15px] md:text-[18px]"><strong>Ограничение на отговорността:</strong>В никакъв случай „Брат, не можеш..“ или свързани с бранда лица не носят отговорност за непряка или случайна вреда от използването на играта или каквито и да било действия, свързани с играта.</p>
              <p class="text-[15px] md:text-[18px]"><strong>Промени в условията:</strong> Запазваме правото си да променяме тези условия по всяко време. Всякакви промени ще бъдат публикувани на тази страница. Вашето продължаващо използване на играта след публикуването на промените се счита за приемане на актуализираните условия.</p>
              <p class="text-[15px] md:text-[18px]">Ако имате въпроси или притеснения относно тези условия, моля, свържете се с нас на:</p>
              <p class="text-[15px] md:text-[18px] blue-color-text">bratnemozhesh@gmail.com; +359 88 469 9814.</p>
              <p class="text-[15px] md:text-[18px]">С използването на играта вие признавате, че сте прочели, разбрали и се съгласили с тези условия за ползване.</p>
              <button @click="goBack" class="px-10 py-2 mt-5 border-2 border-black rounded-[20px]">Назад</button>
            </div>
          </template>
        </div>
      


      <div class="flex items-center gap-x-[30vw] md:gap-x-[200px] justify-between">
        <button>
          <ion-icon name="chevron-back-circle" class="text-white text-[100px] transition-all ease-in duration-300 opacity-5 hover:scale-[1.1]" :class="additionalClassObject" id="previous"></ion-icon>
        </button>
        <button>
          <ion-icon name="chevron-forward-circle" class="text-white text-[100px] transition-all ease-in duration-300 opacity-5 hover:scale-[1.1]" :class="additionalClassObject" id="next"></ion-icon>
        </button>
      </div>
    </template>
    <!--modal-->

    <template v-else-if="end">
      <div class="h-[50vh] w-[80vw] md:w-[50vw] border-white white border-[1px] rounded-[25px] flex flex-col align-start justify-between p-[24px] md:p-[52px]">
        <div class="text-[15px] md:text-[24px]">
          <p>Честито!</p>
          <p>Изигра всички карти, мръсна пияницо.</p>
          <p>Надяваме се да си се забавлявал с приятелите си. Много скоро идва и цялата игра, която е с 6 пъти повече различни карти от тази. Не си готов за това 😈</p>
        </div>
        <div class="flex justify-center items-center flex-col gap-5">
          <button @click="reloadWebsite" class="text-[15px] md:text-[18px] underline blue-color-text font-black">Играй отново!</button>
          <a class="text-[15px] md:text-[18px] underline blue-color-text font-black" href="https://linktr.ee/bratnemozhesh" target="_blank">Виж социалните ни мрежи</a>
          <!--<button @click="goToFeedback" class="text-[18px] underline blue-color-text font-black">Кажи ни мнението си за играта</button>-->
        </div>
      </div>
      <!--<template v-else>
        <div class="h-[50vh] w-[60vw] md:w-[50vw] border-white white border-[1px] rounded-[25px] flex flex-col align-start justify-between p-[24px] md:p-[52px]">
          <div class="text-[24px] md:text-[24px] font-black flex flex-col gap-3 items-start justify-between">
            <p>Благодарим ти, че си пич. Сега е момента да<br>кажеш какво мислиш за играта ни:</p>
            <input type="text" name="feedback" id="" class="w-[30vw] h-[20vh] overflow-auto resize-none rounded-[25px] white">
          </div>
        </div>
      </template>-->
      <div class="flex items-center gap-x-[30vw] md:gap-x-[200px] justify-between">
        <button>
          <ion-icon name="chevron-back-circle" class="text-white text-[100px] transition-all ease-in duration-300 opacity-5 hover:scale-[1.1]" :class="additionalClassObject" id="previous"></ion-icon>
        </button>
        <button>
          <ion-icon name="chevron-forward-circle" class="text-white text-[100px] transition-all ease-in duration-300 opacity-5 hover:scale-[1.1]" :class="additionalClassObject" id="next"></ion-icon>
        </button>
      </div>
    </template>

    <template v-else>
      <template v-if="start">
        <div :class="'h-[350px] w-[250px] border-white border-[1px] rounded-[25px] flex flex-col align-start justify-between p-[22px] ' + (randomItem ? randomItem.color : main[0].color)">
          <div class='text-[14px] text-white font-bold' v-html="randomItem ? randomItem.content : main[0].content"></div>
          <div :class="['text-[14px] text-white font-bold', switchActive ? 'text-center' : 'text-start']" v-html="randomItem ? randomItem.smallText : main[0].smallText">
          </div>
        </div>
        <div class="flex items-center gap-x-[30vw] md:gap-x-[200px] justify-between">
          <button @click="getPreviousCard" :class="!left ? 'opacity-5' : ''">
            <ion-icon name="chevron-back-circle" class="text-white text-[100px] transition-all ease-in duration-300 hover:scale-[1.1]" id="next"></ion-icon>
          </button>
          <button @click="getRandomCard">
            <ion-icon name="chevron-forward-circle" class="text-white text-[100px] transition-all ease-in duration-300 hover:scale-[1.1]" id="next"></ion-icon>
          </button>
        </div>
      </template>
      <template v-else>
        <button class="py-6 px-16 text-[25px] md:text-[30px] md:py-7 md:px-20 rounded-[25px] white font-extrabold" @click="startGame">Започни</button>
        <div class="flex items-center gap-x-[30vw] md:gap-x-[200px] justify-between">
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
      consent: false,
      start: false,
      currentIndex: 0,
      autoMoveInterval: null,

      rules: [
        '<div class="text-[13px] md:text-[24px]"><p>Здравей!</p><p>В момента ти си в дигиталната версия на “Брат, не можеш...”. Тук ще усетиш истинското чувство да играеш най-дивата парти игра на планетата <strong>преди всички останали</strong>. Изключително благодарни сме и се радваме, че ни се довери да направим вечерите ти неповторими, а ние обещаваме, че няма да те разочароваме.</p><p>Натисни <strong>“Напред”</strong> и нека заедно се потопим в купона... </p></div>',
        '<div class="text-[13px] md:text-[24px]"><p>Вече навлизаме в играта. Тук ще намерите изключително <strong>диви</strong> и в повечето случаи <strong>нечовешки предизвикателства</strong> и още други забавни карти.</p><p>Съдържа <strong>две тестета</strong> - едното с предизвикателства и другото със съответните забавни карти, за които тъпите създатели на играта така и не успяха да измислят име</p></div>',
        '<div class="text-[13px] md:text-[24px]"><p>Когато приключиш с този досаден tutorial, натисни бутона <strong>“Започни”</strong>. Ще започнат да ти излизат карти с предизвикателства. От там нататък общо взето всичко, което трябва да правиш е да цъкаш <strong>“<”</strong> или <strong>“>”</strong> в зависимост от това дали искаш да видиш <strong>предишната</strong> или </strong>следващата</strong> карта.</p></div>',
        '<div class="text-[13px] md:text-[24px]"><p>Това е switch карта:</p><div class="flex justify-start align-center gap-5"><img alt="switch white" class="w-[20vw] h-[100px]" src="switch/white_switch.png"><img alt="switch black" class="w-[20vw] h-[100px]" src="switch/black_switch.png"></div><p>Когато се падне, автоматично ще започнат да се показват карти от другото тесте и така всеки път като се покаже тази карта. На всяка друга карта е написано какво прави, така че нямаме намерение да се обясняваме. Знаем, че си достатъчно умен 😘</p></div>',
        '<div class="text-[13px] md:text-[24px] flex flex-col justify-between align-start"><p>Пожелаваме ти приятна и отговорна игра.</p><p>Помни - консумацията на алкохол не е нужна за целите на играта.</p><p>Забавлявай се и умната!</p></div>',
      ],

      ruleCurrent: 0,

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
        { content: '<img src="switch/switch_darkCard.png" alt="switch dark">', smallText: "<p>Премини на другото<br>тесте</p>", color: "black-switch" },
        { content: '<img src="switch/switch_lightCard.png" alt="switch light">', smallText: "<p class='black-color-text'>Премини на другото<br>тесте</p>", color: "white-switch" },
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

      end: false,

      switchActive: false,
      switchWhite: false,

      feedback: false,

      terms: false,

      firstUse: false,
    };
  },
  methods: {

    reloadWebsite() {
      window.location.reload(); // This line will reload the website
    },


    goToFeedback() {
      this.feedback = true
    },


    goToTerms() {
      this.terms = true
    },


    goBack() {
      this.terms = false
    },


    getRandomCard() {
      if(this.counterAll == this.usedCards.length){
        this.switchActive = false
        this.counterAll++;
        console.log("counter: " + this.counterAll);

        //console.log(this.black);

        if(this.counterAll > 0){
          this.left = true;
        }

        if(this.cardContentBlack.length > 0 && this.black){
          let randomCard = Math.floor(Math.random() * this.cardContentBlack.length);
          //console.log("random: " + randomCard)
          this.randomItem = this.cardContentBlack[randomCard];

          let previousCard = this.cardContentBlack.splice(randomCard, 1);
          this.usedCards.push(previousCard);

          if(this.usedCards.length > 0) console.log("There are used cards");
          //console.log(JSON.stringify(this.usedCards, null, 2));

          this.counter++;
          console.log(this.counter)
          if(this.counter == 13){
            this.randomItem = this.switch[0];
            this.black = false;
            this.counter = 0;
            this.switchActive = true;
            this.switchWhite = true;
          }
        } else if(this.cardContentWhite.length > 0 && !this.black){
          let randomCard = Math.floor(Math.random() * this.cardContentWhite.length);
          this.randomItem = this.cardContentWhite[randomCard];
          
          let previousCard = this.cardContentWhite.splice(randomCard, 1);
          this.usedCards.push(previousCard);

          //console.log(this.usedCards[0]);
          this.counter++;
          console.log(this.counter)
          if(this.counter == 13){
            this.randomItem = this.switch[1];
            this.black = true;
            this.counter = 0;
            this.switchActive = true;
            this.switchWhite = false;
          }
        }      
        else {
          this.randomItem = null;
          this.end = true;
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

      if (this.ruleCurrent == 2){
        this.bgCard = true;
      } else{
        this.bgCard = false;
      }

      if (this.ruleCurrent == this.rules.length - 1 && this.consent) {
        this.$cookies.set('consent', this.consent);
        this.firstVisit = !this.consent;
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
      if (!this.firstVisit) {
        alert('Моля, съгласете се с общите условия преди да продължите към играта!');
        return;
      }
    },


    startGame() {
      this.start = true;
      this.right = true;
    },
  },
  mounted() {
    this.firstVisit = this.$cookies.get('consent') ? false : true;
  }
};

</script>
