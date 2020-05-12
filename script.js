'use strict';
let newOl = document.createElement('OL');
for (let i = 0; i < 6; i++)
    {
        let newLi = document.createElement('LI');
        switch(i){
            case 0:
                newLi.innerHTML = "Спринт";
                newLi.addEventListener('click', function(){
                    if(newLi.innerHTML != "Спринт")
                    {
                        newLi.innerHTML = "Спринт";
                    }
                    else
                    {
                        let newElem = document.createElement('P');
                        newElem.innerHTML = "Спринт - бег на короткие дистанции. Спринт считается наиболее зрелищным из всех видов бега, его предпочитают и сами спортсмены. Самые известные спортсмены в этой категории – Бен Джонсон, Асаффа Пауэл, Джастин Гэтлинн. Они вошли в мировую историю бега. А Усейн Болт, бегун из Ямайки, преодолевший 100 м за рекордно короткое время в 9,57 с, стал самым быстрым человеком планеты. Техника бега на короткие дистанции состоит из двух фаз – опоры и полета. Время, затраченное на обе фазы, составляет время шага. Разгон, работа рук, рывок перед финишем – совокупность этих составляющих позволяет достичь хорошего результата";
                        newLi.appendChild(newElem);
                        let newImg = document.createElement('IMG');
                        newImg.setAttribute('src', 'sprint.jpg');
                        newLi.appendChild(newImg);
                    }
                });
                break;
            case 1:
                newLi.innerHTML = "Эстафетный бег";
                newLi.addEventListener('click', function(){
                    if(newLi.innerHTML != "Эстафетный бег")
                    {
                        newLi.innerHTML = "Эстафетный бег";
                    }
                    else
                    {
                        let newElem = document.createElement('P');
                        newElem.innerHTML = "Эстафетный бег — это командный вид легкой атлетики. Различают следующие виды эстафет: а) по беговой дорожке; б) кольцевые по городу (старт и финиш в одном месте); в) звездные по городу (старт в разных местах, финиш в одном месте для всех команд). По составу участников эстафеты бывают: детские, юношеские, мужские, женские, смешанные и комбинированные. Классические эстафеты - 4 х 100 и 4 х 400 м — проводятся на беговой дорожке как для мужчин, так и для женщин. Кроме того, выделяют эстафеты на любые дистанции и с любым количеством этапов (например, 10 х 1000 м), а также «шведские» эстафеты: 800 + 400 + 200 + 100";
                        newLi.appendChild(newElem);
                        let newImg = document.createElement('IMG');
                        newImg.setAttribute('src', 'Estafet.jpg');
                        newLi.appendChild(newImg);
                    }
                });
                break;
            case 2:
                newLi.innerHTML = "Барьерный бег";
                newLi.addEventListener('click', function(){
                    if(newLi.innerHTML != "Барьерный бег")
                    {
                        newLi.innerHTML = "Барьерный бег";
                    }
                    else
                    {
                        let newElem = document.createElement('P');
                        newElem.innerHTML = "Барьерный бег — совокупность легкоатлетических дисциплин, где спортсмены соревнуются в спринтерских видах бега, по ходу которого спортсменам необходимо преодолевать барьеры. Не путать с бегом с препятствиями. Правила барьерного бега соответствуют правилам легкоатлетического спринта. Атлеты на дистанции барьерного бега бегут каждый по своей дорожке. L-образные (если смотреть сбоку) барьеры расположены через равные интервалы так, чтобы ножки барьера смотрели в направлении старта (чтобы барьер, задетый бегуном, падал вперёд, а не травмировал бегуна)";
                        newLi.appendChild(newElem);
                        let newImg = document.createElement('IMG');
                        newImg.setAttribute('src', 'barer-beg.jpg');
                        newLi.appendChild(newImg);
                    }
                });
                
                break;
            case 3:
                newLi.innerHTML = "Бег на средние дистанции";
                newLi.addEventListener('click', function(){
                    if(newLi.innerHTML != "Бег на средние дистанции")
                    {
                        newLi.innerHTML = "Бег на средние дистанции";
                    }
                    else
                    {
                        let newElem = document.createElement('P');
                        newElem.innerHTML = "Соревнования по Бегу на средние дистанции проходят на дистанции длиной 3000 метров. По кругу на расстоянии 400 м друг от друга расположены барьеры. Их пять штук, высота их составляет 91,4 см. За одним из барьеров находится еще и наполненная водой яма. Ее глубина 76 см. Техника барьерного бега заключается в выработке бегуном чувства места отталкивания перед барьером, чтобы без проблем преодолеть препятствие.";
                        newLi.appendChild(newElem);
                        let newImg = document.createElement('IMG');
                        newImg.setAttribute('src', 'middle-distance.jpg');
                        newLi.appendChild(newImg);
                    }
                });
                break;
            case 4:
                newLi.innerHTML = "Бег на длинные дистанции";
                newLi.addEventListener('click', function(){
                    if(newLi.innerHTML != "Бег на длинные дистанции")
                    {
                        newLi.innerHTML = "Бег на длинные дистанции";
                    }
                    else
                    {
                        let newElem = document.createElement('P');
                        newElem.innerHTML = "Бег на длинные дистанции — совокупность легкоатлетических беговых дисциплин на стадионе, объединяющая дистанции, к которым относят 5 км по шоссе, 10 км на шоссе. Классическими, олимпийскими, являются дистанции на 5000 и 10 000 метров. Соревнования на дистанциях свыше 10 000 метров очень редко проводятся на стадионе, а чаще на шоссе. По классификации ИААФ подобные соревнования относятся к категории «пробегов» (бег по шоссе)";
                        newLi.appendChild(newElem);
                        let newImg = document.createElement('IMG');
                        newImg.setAttribute('src', 'large-distance.jpg');
                        newLi.appendChild(newImg);
                    }
                });
                break;
            case 5:
                newLi.innerHTML = "Кросс";
                newLi.addEventListener('click', function(){
                    if(newLi.innerHTML != "Кросс")
                    {
                        newLi.innerHTML = "Кросс";
                    }
                    else
                    {
                        let newElem = document.createElement('P');
                        newElem.innerHTML = "Кросс – бег по пересеченной местности. Трасса кросса не имеет жёсткой международной стандартизации. Обычно трасса проходит по пересечённой местности в лесной зоне или на открытом пространстве. В качестве покрытия может выступать травяное или земляное покрытия. Трасса дистанции должна быть ограждена яркими лентами с двух сторон, для отделения спортсменов от зрителей. На крупных международных соревнованиях вдоль лент дополнительно устраивают коридор шириной 1 метр. В этом промежутке располагаются организаторы соревнований, тренеры, фотографы и журналисты. Соревнования обычно проводятся осенью и зимой. Кросс может проходить в суровых погодных условиях, таких как дождь, ветер, мокрый снег. Длина трассы обычно составляет от 3 до 12 километров. На старте всех участников располагают в линию или дугу. На расстоянии 50 метров от линии старта судья с помощью выстрела пистолета даёт старт забега. Если произошло столкновение бегунов или массовое падение на первых 100 метрах дистанции, то организаторы обязаны остановить забег и дать старт повторно";
                        newLi.appendChild(newElem);
                        let newImg = document.createElement('IMG');
                        newImg.setAttribute('src', 'cross.jpg');
                        newLi.appendChild(newImg);
                    }
                });
                break;
        }
        newOl.appendChild(newLi);
    }
document.body.querySelector('main').appendChild(newOl);