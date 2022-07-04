import React from "react";

function WindowView() {
        function setDayTime(event){
            const dayTimeArray = ['morning', 'night', 'sunset', 'day']
            const newDayTime = event.target.dataset.dayTime

            const theView = document.getElementById('window-view')
            const theWindowButtons = document.getElementById('window-buttons')
            const theWindowsill = document.getElementById("window-windowsill")

            theView.classList.remove(...dayTimeArray.filter(status => !(status === newDayTime)))
            theView.classList.add(newDayTime)

            theWindowButtons.classList.remove(...dayTimeArray.filter(status => !(status === newDayTime)))
            theWindowButtons.classList.add(newDayTime)
            
            theWindowsill.classList.remove(...dayTimeArray.filter(status => !(status === newDayTime)))
            theWindowsill.classList.add(newDayTime)
        }

    function setPrediction () {
        const predictionElement = document.getElementById('prediction')

        predictionElement.classList.toggle('window-view__prediction__open')
    }

    const predictions = [

        'Поздравляем! Вы находитесь на верном пути.', 'Покорив одну гору, начинай штурмовать другую...','Прилив энергии поможет Вам справиться с большим объемом незапланированных работ.',
        'Примите то, что вы не можете изменить, и вы будете чувствовать себя лучше.','Природа, время и терпение - три великих врача.','Пришло время действовать!','Пришло время закончить старое и начать новое.',
        'Слушайте каждого. Идеи приходят отовсюду.','Тот, кто не ждет благодарности, никогда не будет разочарован.','Не стоит тратить время и силы на мелочи, нужно думать о главном.',
    
    ]

    const thePrediction = predictions[Math.floor(Math.random() * predictions.length)]
    
    return (
        <div className="flex flex-column flex-align-center flex-justify-center window-view__wrapper">
        <h1 
            className="window-view__work-name"
        >
                "Окно в лето"
        </h1>
            <div className="window-view__window-frame">
                <div id="prediction" className="window-view__prediction__wrapper">
                    <section 
                        className="window-view__prediction"
                        onClick={setPrediction}
                    >
                        <h2 className="window-view__prediction__headline">Ваше предсказание на сегодня...</h2>
                        <div className="flex flex-column flex-align-center flex-justify-center window-view__prediction__text__wrapper">
                            <p className="window-view__prediction__text">
                                {thePrediction}
                            </p>
                        </div>

                        <div className="window-view__prediction__left"/>
                        <div className="window-view__prediction__right"/>
                    </section>
                </div>
                <section id="window-view" className="window-view day">
                    <div className="flex flex-align-center flex-justify-center window-view__sun__wrapper">
                        <div className="window-view__sun__oreol"/>
                        <div className="window-view__sun"/>
                    </div>
                    <div className="window-view__night-sky">
                        <div className="window-view__moon-box">
                            <div className="window-view__moon-box__light"/>
                            <div className="window-view__moon-box__shadow"/>
                        </div>

                        <div className="window-view__stars">
                            <div className="window-view__stars__star window-view__stars__star__1"/>
                            <div className="window-view__stars__star window-view__stars__star__2"/>
                            <div className="window-view__stars__star window-view__stars__star__3"/>
                            <div className="window-view__stars__star window-view__stars__star__4"/>
                            <div className="window-view__stars__star window-view__stars__star__5"/>
                            <div className="window-view__stars__star window-view__stars__star__6"/>
                        </div>
                    </div>
                    <div className="window-view__cloud__wrapper window-view__cloud__wrapper__1">
                        <div className="window-view__cloud window-view__cloud">
                            <div className="window-view__cloud__piece window-view__cloud__piece__1"/>
                            <div className="window-view__cloud__piece window-view__cloud__piece__2"/>
                        </div>
                    </div>
                    <div className="window-view__cloud__wrapper window-view__cloud__wrapper__2">
                        <div className="window-view__cloud window-view__cloud">
                            <div className="window-view__cloud__piece window-view__cloud__piece__1"/>
                            <div className="window-view__cloud__piece window-view__cloud__piece__2"/>
                        </div>
                    </div>
                    <div className="window-view__mountain window-view__mountain__back">
                        <div className="window-view__mountain__texture"/>
                    </div>
                    <div className="window-view__mountain window-view__mountain__left">
                        <div className="window-view__mountain__texture"/>
                    </div>
                    <div className="window-view__mountain window-view__mountain__right">
                        <div className="window-view__mountain__texture"/>
                    </div>
                    <div className="window-view__plain window-view__plain__2"/>
                    <div className="window-view__plain window-view__plain__3"/>
                    <div className="window-view__lake"/>
                    <div className="window-view__plain window-view__plain__1"/>
                </section>
            </div>
            <div id="window-windowsill" className="window-view__windowsill day">
                <div className="flex flex-column flex-align-center flex-justify-center window-view__plate">
                    <div className="window-view__cookies">
                        <div className="window-view__cookie window-view__cookie__1">
                            <div className="window-view__cookie__base"/>
                            <div className="window-view__cookie__choc window-view__cookie__choc__1"/>
                            <div className="window-view__cookie__choc window-view__cookie__choc__2"/>
                            <div className="window-view__cookie__choc window-view__cookie__choc__3"/>
                        </div>
                        <div className="window-view__cookie window-view__cookie__2">
                            <div className="window-view__cookie__base"/>
                            <div className="window-view__cookie__choc window-view__cookie__choc__1"/>
                            <div className="window-view__cookie__choc window-view__cookie__choc__2"/>
                            <div className="window-view__cookie__choc window-view__cookie__choc__3"/>
                        </div>
                        <div className="window-view__cookie window-view__cookie__3">
                            <div className="window-view__cookie__base"/>
                            <div className="window-view__cookie__choc window-view__cookie__choc__1"/>
                            <div className="window-view__cookie__choc window-view__cookie__choc__2"/>
                            <div className="window-view__cookie__choc window-view__cookie__choc__3"/>
                        </div>
                    </div>
                        
                    <div className="window-view__fortune"
                        onClick={setPrediction}
                    >
                        <div className="window-view__fortune__note"/>
                        <div className="window-view__fortune__left"/>
                        <div className="window-view__fortune__right"/>
                    </div>
                    <div className="window-view__plate__top"/>
                    <div className="window-view__plate__bottom"/>
                </div>

                <div className="window-view__wok">
                    <div className="window-view__wok__stick window-view__wok__stick__1"/>
                    <div className="window-view__wok__stick window-view__wok__stick__2"/>

                    <div className="window-view__wok__vapour">
                        <div className="window-view__wok__vapour__piece window-view__wok__vapour__piece__1"/>
                        <div className="window-view__wok__vapour__piece window-view__wok__vapour__piece__2"/>
                        <div className="window-view__wok__vapour__piece window-view__wok__vapour__piece__3"/>
                    </div>

                    <div className="window-view__wok__top window-view__wok__top__left"/>
                    <div className="window-view__wok__top window-view__wok__top__right"/>
                        
                    <div className="window-view__wok__body">
                        <div className="window-view__wok__body__left"/>
                        <div className="window-view__wok__body__right"/>
                        <div className="window-view__wok__body__center"/>
                    </div>
                </div>

                <div className="window-view__cup__wrapper">
                    <div className="window-view__cup__vapour">
                        <div className="window-view__cup__vapour__piece window-view__cup__vapour__piece__1"/>
                        <div className="window-view__cup__vapour__piece window-view__cup__vapour__piece__2"/>
                        <div className="window-view__cup__vapour__piece window-view__cup__vapour__piece__3"/>
                    </div>
                    <div className="window-view__cup">
                        <div className="window-view__cup__handle"/>
                        <div className="window-view__cup__body">
                            <div className="window-view__cup__body__texture window-view__cup__body__texture__1"/>
                            <div className="window-view__cup__body__print">
                                <div className="window-view__cup__body__print__stroke"/>
                            </div>
                            <div className="window-view__cup__body__tea">
                                <div className="window-view__cup__body__tea__label">
                                    <div className="window-view__cup__body__tea__label__1"/>
                                    <div className="window-view__cup__body__tea__label__2"/>
                                </div>
                                <div className="window-view__cup__body__tea__rope"/>
                            </div>
                            <div className="window-view__cup__body__texture window-view__cup__body__texture__2"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="window-buttons" className="day">
                <div className="flex flex-align-center flex-justify-center window-view__buttons-box">
                    <button 
                        className="window-view__button window-view__button__morning"
                        data-day-time="morning"
                        onClick={setDayTime}
                    >
                        Утро
                    </button>
                    <button 
                        className="window-view__button window-view__button__day"
                        data-day-time="day"
                        onClick={setDayTime}
                    >
                        День
                    </button>
                    <button 
                        className="window-view__button window-view__button__sunset"
                        data-day-time="sunset"
                        onClick={setDayTime}
                    >
                        Вечер
                    </button>
                    <button 
                        className="window-view__button window-view__button__night"
                        data-day-time="night"
                        onClick={setDayTime}
                    >
                        Ночь
                    </button>
                </div>
            </div>
            <div className="flex flex-column flex-align-center window-view__info">
                <a
                    className="window-view__author__name"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    href="https://landerexit.github.io/personalCard/"
                >
                    {"Каримов Эмиль "}
                </a>
                <span>©2022</span>
            </div>
        </div>
    )
}

export default WindowView