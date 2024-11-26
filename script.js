const btn = document.getElementById("botao");
const texto = document.getElementById("texto");
const descricao = document.getElementById("descricao");
const final = document.getElementById("final");
const taro = document.getElementById("taro");

// Инициализация массива с кейсами от 0 до 21
let numbers = JSON.parse(localStorage.getItem('numbers'));

// Проверяем, если массив не существует или содержит меньше 22 элементов, создаём новый
if (!numbers || numbers.length < 23) {
    numbers = Array.from({ length: 23 }, (_, i) => i); 
    localStorage.setItem('numbers', JSON.stringify(numbers));
}

// Состояние флага для кейса `0`
let caseZeroShown = false;

function random() {
    // Если массив пустой, восстанавливаем его
    if (numbers.length === 0) {
        numbers = Array.from({ length: 22 }, (_, i) => i); // Восстанавливаем кейсы
        localStorage.setItem('numbers', JSON.stringify(numbers));
    }
    
    // Если кейс `0` ещё не показан, возвращаем его и устанавливаем флаг
    if (!caseZeroShown) {
        caseZeroShown = true;
        return 0;
    }

    // Генерируем случайный индекс из оставшихся кейсов
    const randomIndex = Math.floor(Math.random() * numbers.length);

    // Извлекаем случайное число из массива
    const randomNumber = numbers[randomIndex];

    // Удаляем выбранное число из массива
    numbers.splice(randomIndex, 1);

    // Сохраняем обновленный массив в локальное хранилище
    localStorage.setItem('numbers', JSON.stringify(numbers));

    console.log('Оставшиеся номера:', numbers); // Для отладки
    return randomNumber;

}

function handleCase(i) {
    switch (i) {
        case 0:
            texto.textContent = "Добро пожаловать! Это начальный экран для проверки работы!.";
            descricao.textContent = "Код не спизжен Колей ин компарейтет";
            final.textContent = "Удачи в игре!";
            taro.src = "Cartas/0.png";
            break;
        case 1:
            texto.textContent = "В результате удачного выстрела Дурак возвращается в начало.";
            descricao.textContent = "Эффект: Все импланты Жертвы выходят из строя на один час. Киберконечности, которые вышли из строя, болтаются без дела точно также, как их мясные аналоги. Если в результате цель лишается способности видеть противника, то любая её проверка Навыка, получает дополнительный модификатор 4, как в случае с дымом или темнотой.";
            final.textContent = "Если у Жертвы нет Киберимплантов, она получает Критическое Повреждение «Инородное Тело» и теряет 3d6 Человечности.";
            taro.src = "Cartas/1.png";
            break;
        case 2:
            texto.textContent = "Благодаря силе Мага искрит огнями Батарея.";
            descricao.textContent = "Эффект: ГМ выбирает у Жертвы один киберимплант и уничтожает его (нельзя починить). Кроме того, жертва теперь считается «Смертельно горящей» (CP:R PAGE 180).";
            final.textContent = "Если у Жертвы нет Киберимплантов, то она «Смертельно Горит» и одно её оружие становится неисправно, необходимо потратить Действие, чтобы устранить неисправность, прежде чем его снова можно будет использовать.";
            taro.src = "Cartas/2.png";
            break;
        case 3:
            texto.textContent = "Верховная Жрица хранит секрет отравленных осколках.";
            descricao.textContent = "Эффект: Жертва получает Критическое Повреждение «Инородное Тело», но вместо того, чтобы снова получать дополнительный урон, когда она пешком перемещается на расстояние более 4 метра за Ход, она должна побить проверку Навыка Сопротивление Пыткам/Наркотикам DV 15 или получить 3d6 урона (вычитается из Здоровья)";
            final.textContent = "";
            taro.src = "Cartas/3.png";
            break;
        case 4:
            texto.textContent = "Императрица благословляет атаки своих детей.";
            descricao.textContent = "Эффект: Звучит Музыка. Следующие три успешные проверки на попадание по одной и той же цели, гарантированно нанесут Критическое Повреждение, независимо от того что выпадет на кубиках. Это также относится к Лёгкому Оружию Ближнего Боя, но не к Ботоксинам, Ядам, Электрошокерам и другому оружию, которое обычно не может нанести Критическое Повреждение.";
            final.textContent = "";
            taro.src = "Cartas/4.png";
            break;
        case 5:
            texto.textContent = "Император даёт Игроку полномочия формировать повествование.";
            descricao.textContent = "ГМ назначает Игрока, который выбирает по одному Критическому Повреждению из таблицы Головы (CP:R PAGE 188), и Тела (CP:R PAGE 187). Жертва получает оба этих Критических Повреждения.";
            final.textContent = "";
            taro.src = "Cartas/5.png";
            break;
        case 6:
            texto.textContent = "Верховный Жрец приносит дары, но требует жертвовать традициями.";
            descricao.textContent = "Эффект: Урон от этой атаки после учета брони и любых множителей умножается на два. Однако, если атака проводилась оружием, то оно уничтожается (нельзя починить).";
            final.textContent = "";
            taro.src = "Cartas/6.png";
            break;
        case 7:
            texto.textContent = "Влюбленные еще больше сближают соперников.";
            descricao.textContent = "Эффект: Эта Атака направлена в голову, даже если изначально целился в другое место. Кроме того, если «Влюблённых» вызвала Атака Ближнего Боя, то цель теперь считается в Захвате.";
            final.textContent = "";
            taro.src = "Cartas/7.png";
            break;
        case 8:
            texto.textContent = "Колесница дарует контроль, необходимый для истинного удара.";
            descricao.textContent = "Эффект: Ты замечаешь изъян в броне Жертвы. Эта броня ломается на 5 пунктов (SP), даже если она не была пробита Атакой.";
            final.textContent = "";
            taro.src = "Cartas/8.png";
            break;
        case 9:
            texto.textContent = "Сила придает атаке невиданную мощь.";
            descricao.textContent = "Эффект: Атака дополнительно наносит 25 урона. Этот урон добавляется к урону, до вычитания SP брони и/или расчета множителей.";
            final.textContent = "";
            taro.src = "Cartas/9.png";
            break;
        case 10:
            texto.textContent = "Отшельник силой заставляет вас отправиться в путешествие по недрам собственной души.";
            descricao.textContent = "Эффект: Жертва получает два Критических Повреждения «Потеря Глаза» (штраф за повреждения применяется только один раз). Если в результате цель лишается способности видеть противника, то любая её проверка Навыка, получает дополнительный модификатор -4, как в случае с дымом или темнотой.";
            final.textContent = "";
            taro.src = "Cartas/10.png";
            break;
        case 11:
            texto.textContent = "Колесо вращается с помощью сил, неподвластных контролю человеческому.";
            descricao.textContent = "Эффект: Атака выходит из под контроля. Если это была атака Дальнего боя, то ГМ случайным образом определяет новую цель для этой атаки. Если это была атака Ближнего боя, тогда тот, кто вытащил карту Колеса Фортуны, падает, а атака считается промахом. В любом случае, оружие использовавшееся для атаки, становится неисправно, необходимо потратить Действие, чтобы устранить неисправность, прежде чем его снова можно будет использовать.";
            final.textContent = "";
            taro.src = "Cartas/11.png";
            break;
        case 12:
            texto.textContent = "";
            descricao.textContent = "";
            final.textContent = "";
            taro.src = "Cartas/12.png";
            break;
        case 13:
            texto.textContent = "";
            descricao.textContent = "";
            final.textContent = "";
            taro.src = "Cartas/13.png";
            break;
        case 14:
            texto.textContent = "";
            descricao.textContent = "";
            final.textContent = "";
            taro.src = "Cartas/14.png";
            break;
        case 15:
            texto.textContent = "";
            descricao.textContent = "";
            final.textContent = "";
            taro.src = "Cartas/15.png";
            break;
        case 16:
            texto.textContent = "";
            descricao.textContent = "";
            final.textContent = "";
            taro.src = "Cartas/16.png";
            break;
        case 17:
            texto.textContent = "";
            descricao.textContent = "";
            final.textContent = "";
            taro.src = "Cartas/17.png";
            break;
        case 18:
            texto.textContent = "";
            descricao.textContent = "";
            final.textContent = "";
            taro.src = "Cartas/18.png";
            break;
        case 19:
            texto.textContent = "";
            descricao.textContent = "";
            final.textContent = "";
            taro.src = "Cartas/19.png";
            break;
        case 20:
            texto.textContent = "";
            descricao.textContent = "";
            final.textContent = "";
            taro.src = "Cartas/20.png";
            break;
        case 21:
            texto.textContent = "";
            descricao.textContent = "";
            final.textContent = "";
            taro.src = "Cartas/21.png";
            break;
        case 22:
            texto.textContent = "";
            descricao.textContent = "";
            final.textContent = "";
            taro.src = "Cartas/22.png";
            break;
        case 23:
            texto.textContent = "";
            descricao.textContent = "";
            final.textContent = "";
            taro.src = "Cartas/23.png";
            break;
    }
}

// Обработчик кнопки
btn.addEventListener("click", () => {
    const randomCase = random();
    handleCase(randomCase);
    console.log(randomCase);
});
numbers.shift(0);
