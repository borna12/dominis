// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen
$("footer").hide();

$(".gumb").click(function () {
    sadrzaj = $(this).attr('class').split(' ')[0]
    $(".modal").html("<h2 class='winner'>odaberi broj kartica</h2><button id='prva'>4</button> <button id='druga'>8</button>");
    $("#prva").click(function () {
        razina = "1";
        igra()
    })
    $("#druga").click(function () {
        razina = "2";
        igra()
    })


    function igra() {
        $("body").addClass("crvenko")
        if (razina == 1) {
            broj_karata = 4;

        } else if (razina == 2) {
            broj_karata = 8;
        }
        $("footer").fadeIn(1000);
        $(".modal").fadeOut(1000);
        $(".modal-overlay").delay(1000).slideUp(1000);
        $(".game").show(1000);
        $("#okretanje")[0].play();
        $(".brojevi").addClass("crveni_broj")
        //localStorage.clear();
        var br = 1;
        var sec = 0;
        var pokusaj = 0;
        var vrijeme = 1;
        var bodovi = 0;
        var najbolje_vrijeme;
        var najmanji_broj_pokusaja;
        var karte;
        function pad(val) {
            return val > 9 ? val : "0" + val;
        }
        setInterval(function () {
            if (vrijeme == 1) {
                $("#seconds").html(pad(++sec % 60));
                $("#minutes").html(pad(parseInt(sec / 60, 10)));
            }
        }, 1000);

        var Memory = {
            init: function (cards) {
                this.$game = $(".game");
                this.$modal = $(".modal");
                this.$overlay = $(".modal-overlay");
                this.$biti = $(".smiljan");
                this.cardsArray = $.merge(cards, cards);
                this.shuffleCards(this.cardsArray);
                this.setup();
            },
            shuffleCards: function (cardsArray) {
                this.$cards = $(this.shuffle(this.cardsArray));
            },
            setup: function () {
                this.html = this.buildHTML();
                this.$game.html(this.html);
                this.$memoryCards = $(".card");
                this.binding();
                this.paused = false;
                this.guess = null;
                this.$cards = $(this.shuffle(this.cardsArray));
            },

            binding: function () {
                this.$memoryCards.on("click", this.cardClicked);
                this.$biti.on("click", $.proxy(this.reset, this));
            },
            // kinda messy but hey
            cardClicked: function () {
                $("#okret")[0].play();
                var _ = Memory;
                var $card = $(this);
                if (!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")) {
                    $card.find(".inside").addClass("picked");
                    if (!_.guess) {
                        _.guess = $(this).attr("data-id");
                        $(this).find('p').toggle();
                    } else if (_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")) {
                        $(".picked").addClass("matched");
                        $("#win")[0].play();
                        bodovi = bodovi + 15;
                        _.guess = null;
                        $(".matched").find('p').remove();
                        pokusaj++;

                        vrijeme = 0;
                        swal({
                            title: '' + $(this).attr('data-ime'),
                            html: '<img src="slike/' +sadrzaj+"/"+ $(this).attr('data-id') + '.jpg" class="ikone"/><p>' + $(this).attr('data-opis') + '</p>',
                            showCloseButton: true,
                            confirmButtonText: 'dalje',
                            /*allowOutsideClick: false,*/
                            /*allowEscapeKey: false*/
                            onClose: () => {
                                vrijeme = 1;
                                $.stopSound();
                            }
                        })
                    } else {
                        pokusaj++;
                        $(this).find('p').toggle();
                        _.guess = null;
                        _.paused = true;
                        setTimeout(function () {
                            $(".picked").removeClass("picked");
                            Memory.paused = false;
                            $(".brojevi").show();
                            bodovi = bodovi - 5
                        }, 1200);
                    }
                    if ($(".matched").length == $(".card").length) {
                        _.win();
                    }
                }
            },

            win: function () {
                this.paused = true;
                setTimeout(function () {
                    Memory.showModal();
                    Memory.$game.fadeOut();
                }, 1000);
            },

            showModal: function () {
                var minute = Math.floor(sec / 60);
                var sekunde = sec - minute * 60;
                this.$overlay.show();
                this.$modal.fadeIn("slow");
                var najvrijeme = localStorage.getItem('najvrijeme');

                if (najvrijeme === undefined || najvrijeme === null) {
                    najvrijeme = sec;
                    localStorage.setItem('najvrijeme', sec);
                }

                // If the user has more points than the currently stored high score then
                if (sec < najvrijeme) {
                    // Set the high score to the users' current points
                    najvrijeme = sec;
                    // Store the high score
                    localStorage.setItem('najvrijeme', sec);
                }
                // Return the high score

                var najpokusaji = localStorage.getItem('najpokusaji');

                if (najpokusaji === undefined || najpokusaji === null) {
                    najpokusaji = pokusaj;
                    localStorage.setItem('najpokusaji', pokusaj);
                }

                // If the user has more points than the currently stored high score then
                if (pokusaj < najpokusaji) {
                    // Set the high score to the users' current points
                    najpokusaji = pokusaj;
                    // Store the high score
                    localStorage.setItem('najpokusaji', pokusaj);
                }
                var naj_minute = Math.floor(najvrijeme / 60);
                var naj_sekunde = najvrijeme - naj_minute * 60;
                $(".modal").show();
                $(".modal-overlay").show();
                $(".winner").hide();
                bodovi = bodovi - sec
                $(".modal").html("<div class='winner'>Bravo!</div><div class='time'><br>broj pokušaja : " + pokusaj + "</br>vrijeme spajanja : " + minute + ":" + sekunde + "</br>bodovi: " + bodovi + "<p><br><a href='index.html' style='color:black;'>pokreni novu igru</a></p></div>");

                var target = document.getElementById("ikona");
                var emojiCount = emoji.length;

                for (var index = 0; index < emojiCount; index++) {
                    addEmoji(emoji[index]);
                }

                function addEmoji(code) {
                    var option = document.createElement('option');
                    option.innerHTML = code;
                    option.value = code;
                    target.appendChild(option);
                }


                if (localStorage.getItem("ime") != null) {
                    $('#312289462').val(localStorage.getItem("ime"))
                    $('#ikona').val(localStorage.getItem("ikona"))
                }

                if (razina == 1) {
                    $('#bootstrapForm').attr('action', 'https://docs.google.com/forms/d/e/1FAIpQLSd_F9j04sMHdgMDx6DOc0Svl4-jUBzpr97POIdI0pbKXfWHMg/formResponse?');
                    $('#bootstrapForm').submit(function (event) {
                        localStorage.setItem("ime", $('#312289462').val())
                        localStorage.setItem("ikona", $('#ikona').val())
                        localStorage.setItem('pokrenuto', "da")
                        event.preventDefault()
                        $("#predaj").hide(300)
                        $('#312289462').val(
                            document.getElementById("ikona").value + document.getElementById("312289462").value
                        )
                        var extraData = {}
                        $('#bootstrapForm').ajaxSubmit({
                            data: extraData,
                            dataType: 'jsonp', // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
                            error: function () {
                                // Submit of form should be successful but JSONP callback will fail because Google Forms
                                // does not support it, so this is handled as a failure.
                                window.open("rez.html", "_self");
                                // You can also redirect the user to a custom thank-you page:
                                // window.location = 'http://www.mydomain.com/thankyoupage.html'
                            }
                        })
                    })
                }
                else if (razina == 2) {
                    $('#bootstrapForm').attr('action', 'https://docs.google.com/forms/d/e/1FAIpQLScYqT8mytAHD7xYHScmDNPLZxhF38l36YnP5lJZGHqaNfGQCA/formResponse?');
                    $('#bootstrapForm').submit(function (event) {
                        localStorage.setItem("ime", $('#312289462').val())
                        localStorage.setItem("ikona", $('#ikona').val())
                        localStorage.setItem('pokrenuto', "da")
                        event.preventDefault()
                        $("#predaj").hide(300)
                        $('#312289462').val(
                            document.getElementById("ikona").value + document.getElementById("312289462").value
                        )
                        var extraData = {}
                        $('#bootstrapForm').ajaxSubmit({
                            data: extraData,
                            dataType: 'jsonp', // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
                            error: function () {
                                // Submit of form should be successful but JSONP callback will fail because Google Forms
                                // does not support it, so this is handled as a failure.
                                window.open("rez2.html", "_self");
                                // You can also redirect the user to a custom thank-you page:
                                // window.location = 'http://www.mydomain.com/thankyoupage.html'
                            }
                        })
                    })

                } else {
                    $('#bootstrapForm').attr('action', 'https://docs.google.com/forms/d/e/1FAIpQLScKOTZf6lV3VtOu9r_DmnF5D8sZ0LRXrnxXRqiHcV7eMJJdkw/formResponse?');
                    $('#bootstrapForm').submit(function (event) {
                        localStorage.setItem("ime", $('#312289462').val())
                        localStorage.setItem("ikona", $('#ikona').val())
                        localStorage.setItem('pokrenuto', "da")
                        event.preventDefault()
                        $("#predaj").hide(300)
                        $('#312289462').val(
                            document.getElementById("ikona").value + document.getElementById("312289462").value
                        )
                        var extraData = {}
                        $('#bootstrapForm').ajaxSubmit({
                            data: extraData,
                            dataType: 'jsonp', // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
                            error: function () {
                                // Submit of form should be successful but JSONP callback will fail because Google Forms
                                // does not support it, so this is handled as a failure.
                                window.open("rez3.html", "_self");
                                // You can also redirect the user to a custom thank-you page:
                                // window.location = 'http://www.mydomain.com/thankyoupage.html'
                            }
                        })
                    })

                }


            },

            hideModal: function () {
                this.$overlay.hide();
                this.$modal.hide();
            },

            reset: function () {
                this.hideModal();
                this.shuffleCards(this.cardsArray);
                this.setup();
                this.$game.show(1000);
                pokusaj = 0;
                sec = 0;
                br = 1;
                $(".back").addClass("pozadina-biti");
            },

            // Fisher--Yates Algorithm -- http://bost.ocks.org/mike/shuffle/
            shuffle: function (array) {
                var counter = array.length,
                    temp, index;
                // While there are elements in the array
                while (counter > 0) {
                    // Pick a random index
                    index = Math.floor(Math.random() * counter);
                    // Decrease counter by 1
                    counter--;
                    // And swap the last element with it
                    temp = array[counter];
                    array[counter] = array[index];
                    array[index] = temp;
                }
                return array;
            },

            buildHTML: function () {
                var frag = '';
                br = 1;
                var lista_slika = [];
                var lista_imena = [];
                this.$cards.each(function (k, v) {

                    frag += '<div class="card" data-id="' + v.id + '" data-opis="' + v.opis + '" data-ime="' + v.ime + '"><div class="inside">\
                    <div class="front"><img src="slike/'+sadrzaj +"/"+ v.id + '.jpg"\
                    alt="' + v.id + '" data-ime="' + v.name + '" /></div>\
                    <div class="back"><p class="brojevi">' + br + '</p></div></div>\
                    </div>';
                    if (br < cards.length) {
                        br++;
                    };
                });
                return frag;
            }
        };
        if (sadrzaj == "zivotopis") {
            var cards = [{
                ime: "Grb plemićke obitelji Dominis – Europska visoka elita hrvatskoga kova",
                opis: "<p>Marko Antun de Dominis rođen je 1560. godine na otoku Rabu, u obitelji čije plemenito porijeklo seže u rana stoljeća rapskog srednjovjekovlja. Smatra se jednom od najistaknutijih duhovnih i intelektualnih pojava Europe na prijelazu iz 16. u 17. stoljeće. Svojim je znanstvenim opusom i ugledom u crkvenom, društvenom i političkom životu izazivao divljenje u elitnim europskim krugovima ali i otvoreno neprijateljstvo nekih suvremenika.</p><p>Sin je učenog pravnika i pjesnika Jeronima Dominisa i majke Marije iz venecijanske obitelji Vellutelli. Obiteljsko je prezime Dominis nastalo od hipokoristika osobnog imena Dominik (Dominicijus) ili od njegovih inačica Demanja, Dominja, Domana. U literaturi se navodi da Dominisi izvode svoje porijeklo od loze krčkih knezova koji se kasnije prozvaše Frankopanima. Po majci, pripadao je i glasovitoj talijanskoj obitelji Theobaldi, iz koje je potekao i papa Grgur X. (1271. – 1276.). Rodoslovlje Dominisa, koje je oko 1600. godine sastavio sam Marko Antun de Dominis nosi naslov <em>Arber Frangipana sive de Dominis</em>. Izvornim podacima provjereno rodoslovlje obitelji započinje od 1283. godine sa Stjepanom de Dominisom, sinom rapskog sudca. Uspinjući se u gradskoj plemićkoj i crkvenoj hijerarhiji, Dominisi postupno prelaze lokalne okvire Raba. Stječu imanja na Pagu, Cresu, Dugom otoku i Lošinju, priskrbljuju biskupsku stolicu u Jakinu (Ancona) i Velikom Varadinu (Oradea) u Ugarskoj. Postaju rapski poklisari na kraljevskom dvoru u Budimu i stječu vlastelinski naslov među plemstvom grada Zadra. Zahvaljujući ugledu na europskim dvorovima, osobito povezanosti s napuljskim i ugarskim kraljevskim dvorom, Dominisi postaju delegati carske vlasti s povlasticama kojima su se mogli služiti na čitavom teritoriju Svetog Rimskog Carstva. Carskom poveljom izdanom u Pragu 26. kolovoza 1433. godine imenovani su namjesničkim grofovima, zajedno sa svojim potomcima. Osim kao crkveni poglavari i učeni ljudi, Dominisi su se kao podanici ugarske krune i mletačkih vlasti isticali i kao ratni zapovjednici u borbama s Osmanlijama zapovijedajući kršćanskom vojskom u bitci kod Varne. Također, u dugoj tradiciji koja se prenosila s očeva na sinove, bili su zapovjednici (soprakomiti) rapske galije, i kao takvi sudjelovali i u bitci kod Levanta. Marko Antun de Dominis zasigurno je stasajući u humanističkom ozračju obiteljskog doma, u krugu moćne plemićke obitelji Dominis te sa snažnom povezanošću s tradicijom i nasljeđem, već u ranoj dobi usvojio univerzalne visoke duhovne ciljeve kojima je stremio čitav život.</p>",
                id: 1,
            }, {
                ime: "Školovanje i stasanje - pod okriljem Družbe Isusove ",
                opis: "<p>Školovanje je započeo u humanističkom ozračju obitelji i rodnoga Raba. Plemićka obitelj Dominis tradicionalno je skrbila za obrazovanje nadarenih članova, smatrajući ga važnim za opstanak i prosperitet obitelji u tim teškim vremenima. Uzorom i prvim učiteljem bio mu je stric, senjski biskup Antun de Dominis, uskočki heroj preminuo u boju s Turcima koji je imao snažan utjecaj na odgoj mladog Marka Antuna s kojim je dijelio mnoge zajedničke vrijednosti, jasnu svijest o vlastitom identitetu u odnosu na zajednice kojima su služili i privrženost tradiciji predaka. Dominisovu napretku uvelike je doprinio nastavak školovanja među Isusovcima. Već u dvanaestoj godini poslan je u isusovački Hrvatski kolegij u Loretu (<em>Collegio Illirico di Loreto</em>), gdje je pohađao gimnaziju i učio gramatiku, retoriku i moralnu teologiju. Kolegij je bio namijenjen školovanju hrvatskih klerika, kako bi poslije služili Crkvi i svom rodnom kraju, a učenici su pri dolasku prisezali da će postati svećenicima te da će se vratiti u domovinu i ondje služiti Crkvi. U dobi od devetnaest godina Dominis 1579. pristupa Družbi Isusovoj u Novellari, a potom odlazi na studij u Veronu gdje uči filozofiju te istodobno mlađim studentima predaje književnost. Tijekom studija dobiva izvrsno obrazovanje i formira široke intelektualne interese. Moli poglavare da ga pošalju u prekomorske misije, međutim ostavljen je u Italiji i od 1587. do 1591. godine studira teologiju u Padovi, gdje je ujedno predavač-lektor matematike i prirodopisa. U tom razdoblju bio je uz redovničke dužnosti potpuno posvećen znanstvenom radu i tada je napisao koncept svoja dva fizikalna djela koja će objaviti dvadesetak godina kasnije. Nakon završetka studija 1592. godine odlazi u Bresciju i ondje predaje prvo retoriku, a zatim logiku i filozofiju do konca 1595. godine kada odlazi u Rim. Tada nakon pogibije njegova strica Antuna de Dominisa, senjskoga biskupa, u protuturskom boju pod Klisom 1596. godine, završava razdoblje Dominisova mirnog, znanstvenog i redovničkog života a započinje njegov uspon u crkvenoj hijerarhiji i burno razdoblje javnog, crkvenog, političkog i diplomatskog djelovanja.</p>",
                id: 2
            }, {
                ime: "Senjski biskup i diplomat na strani svoga naroda",
                opis: "<p>Nakon vrlo uspješne karijere na sveučilištima u Veroni, Bresciji i Padovi, prva stepenica u Dominisovom usponu crkvenom hijerarhijom bio je položaj senjskog biskupa. Pogibijom njegova strica Antuna de Dominisa, senjskoga biskupa u boju protiv Osmanlija pod Klisom 27. svibnja 1596. godine, postao je konkurentom za upražnjenu biskupsku stolicu i zatražio odstupanje iz Isusovačkoga reda. Premda ga je Rudolf II., kao svjetovni poglavar Svetog Rimskog Carstva Njemačke Narodnosti neposredno nakon smrti strica imenovao <em>izabranim senjskim biskupom</em>, Sveta Stolica ga je u to vrijeme samo potvrdila kao apostolskog upravitelja senjske biskupije, dok je papinsku potvrdu imenovanja senjskim biskupom i upraviteljem modruške biskupije čekao gotovo četiri godine i dobio tek u ožujku 1600. godine.</p><p>Dužnost senjskog biskupa Dominis službeno je obnašao svega dvije godine, od 13. kolovoza 1600. do 16. studenog 1602. godine. Međutim, njegova uloga u rješavanju senjskih problema i pitanja uskoka započinje nekoliko godina ranije Nastojeći smiriti odnose između Mletačke Republike i Habsburškog Carstva, papa Klement VIII. u rujnu 1598. godine, povjerava Dominisu posredništvo između Republike i  Carstva u rješavanju pitanju senjskih uskoka, budući su mu obje strane bile sklone. Zbog prirode problema Dominisovo djelovanje u tom razdoblju  uvjetovano je političkim okolnostima i bilo je više diplomatske i svjetovne, nego crkvene naravi. Dominis je uložio znatne napore da se problem riješi demilitarizacijom uskoka, koje bi se nakon razvojačenja privodilo mirnodobskim zanimanjima, poljodjelstvu, stočarstvu i trgovini. Kako je za plan seobe i smještaja uskoka trebalo osigurati suglasnost i financijsku potporu svih uključenih strana, Dominis je bio u diplomatskoj misiji u razdoblju od 1599. do 1601. godine. Tražeći pomoć za uskoke putovao je caru Rudolfu u Prag, austrijskom nadvojvodi Ferdinandu II. u Graz, kranjskim staležima u Ljubljanu i vlastima u Veneciju. Usprkos Dominisovim naporima uskoci, mletačke i carske vlasti nisu postigle dogovor. Uskoci nisu prihvaćali plan demilitarizacije i preseljenja, a nakon što je carski general  Rabatta 1601. godine iznenada dao pogubiti njihove vođe i njih dvjesto pedeset  prisilno preselio preko Velebita, uskoci su iz osvete ubili Rabattu i zaprijetili smrću samom Dominisu. O Dominisovoj ulozi u rješavanju uskočkog pitanja potrebno je prosuđivati isključivo na temelju provjerenih povijesnih izvora i uzimajući u obzir kontekst razine njegovog djelovanja i ograničenja koja je imao, kao što je to načinio otac hrvatske moderne kritičke historiografije Franjo Rački, a ne kao što je čest slučaj na temelju sadržaja s prikazom Dominisa nepotkrijepljenim provjerenim izvorima, kao što je iskrivljena i romantizirana slika Dominisa koju je August Šenoa izgradio za potrebe svog romana <em>Čuvaj se senjske ruke</em>.</p>",
                id: 3
            }, {
                ime: "Nadbiskup u Splitu i primas Dalmacije i Hrvatske ",
                opis: "<p>Za Dominisova boravka u Rimu preminuo je splitski nadbiskup Domenico Foconi. Rimska Kurija je za njegova nasljednika favorizirala udinskog dekana Marzia Andreuccija koji je tada bio u službi papina sinovca, kardinala Cinzija Aldobrandinija. Na molbu splitskoga Kaptola, uz pristanak gradskoga Velikog vijeća i podršku Mlečana, Dominis je uspio ishoditi imenovanje. Splitskim nadbiskupom Dominisa imenuje papa Klement VIII., 16. XI. 1602. godine pritom mu odredivši da Andreucciju – kojem je kao utješna nagrada dodijeljen naslov biskupa u Trogiru – kao svom protukandidatu godišnje isplaćuje „odštetu“ od petsto dukata.  U Splitu je uz dijecezanske poslove Dominis poučavao svećeničke kandidate matematici, logici i teologiji te pisao svoje teološke rasprave i životno djelo <em>De republica ecclesiastica </em>(<em>O crkvenoj državi</em>), ali se zapleo i u nove dugotrajne sukobe. Istodobno našao se u sporu s Andreuccijem, koji je, postavši trogirskim biskupom, i dalje tražio plaćanje odštete <em>pro nominandis</em>, a Dominis nije uspio u vezi s time dobiti potporu od Rimske Kurije kada je potkraj 1604. godine boravio u Rimu. Radilo se o vrlo visokoj svoti koja je i u prosperitetnom razdoblju dosezala trećinu ukupnih prihoda nadbiskupije, a u tom razdoblju neposredne opasnosti od Turaka i pošasti kuge koja je poharala stanovništvo i prihode bila i objektivno neostvariva, pa se Dominis s razlogom opirao teškom nametu.</p><p>Kada je 1606. godine zbog razmirica sa splitskim Kaptolom boravio u Veneciji, zategnutost između Rimske kurije i Venecije dosegnula je vrhunac nakon interdikta pape Pavla V. nad Republikom. Papa interdiktom između ostalog zabranjuje kleru vršenje crkvenih funkcija na mletačkom teritoriju. Dominis  je odbio pokoriti se i stao u obranu Republike, istupivši protiv nastojanja pape da svoj autoritet nametne svjetovnoj vlasti. Dokazujući da papino miješanje u poslove svjetovne vlasti nije u skladu s crkvenim zakonima i vjerskim načelima, Dominis je dao pisani prilog toj polemici u raspravi <em>Dell’auttorità legitima et potestà de principi temporali nel far leggi et governare lo stato suo, contra le vane pretensioni della corte Romana </em>(<em>O legitimnoj vlasti i moći zemaljskih knezova u donošenju zakona i upravljanju svojom državom, protiv ispraznih pretenzija rimskog dvora</em>), koju je uručio mletačkoj vladi 1606. godine. Dominis je već i ranije bio zapleten u spor s Kurijom u vezi uvjeta vezanih za njegovo imenovanje za splitskog nadbiskupa. Međutim njegov kritički stav prema Rimu imao je dublje korijene i izvirao je iz njegova nezadovoljstva autokratskim načinom na koji je Crkva bila vođena, korumpiranošću i nemoralom u Kuriji te iznad svega trgovanjem oprostima i iskorištavanjem raširenih praznovjerja kao grubim iskrivljivanjem izvornog kršćanskog nauka.</p>",
                id: 4
            },
            {
                ime: "Dominisov boravak u Veneciji - Produbljivanje sukoba s Rimskom kurijom",
                opis: "<p>Rimska Kurija nije opraštala buntovnom kleru i Dominis je bio izložen stalnom pritisku i osporavanju. Između 1607. i 1616. godine više puta je duže boravio u Mlecima i u jednoj se prilici zadržao čak dvije i po godine. Kao glavne razloge dugih izbivanja iz Splita navodio je potrebu da s papinskim nuncijem i mletačkim vlastima pregovara o rješenju svoga spora s trogirskim biskupom. Međutim, potajno je započeo intenzivno raditi na svom djelu <em>De republica ecclesiastica </em>(<em>O crkvenoj državi</em>) i trebao mu je pristup u bogate mletačke biblioteke, a pripremao je za tisak i svoj fizikalni prvijenac <em>De radiis visus et lucis in vitris perspectivis et iride</em> (<em>O zrakama vida i svjetlosti u lećama i dugi</em>), kojeg je većim dijelom napisao dvadesetak godina ranije. Njegove teološke preokupacije nisu nikada ugasile njegov interes za znanost. Dok oficijelno pregovara o sporu s trogirskim biskupom, najveći dio vremena provodi u istraživanju, pisanju, sređivanju svojih tekstova napisanih u Splitu, koje će ugraditi u tekst svog glavnog teološkog djela. Iste godine 1611. kada objavljuje <em>De radiis visus</em>, dovršava pisanje prve knjige svog djela <em>De republica ecclesiastica </em>u kojemu će izložiti razloge svog ideološkog raskida s papinstvom.</p><p>Neraspoloženje Kurije prema Dominisu još se više pooštrilo kada se u Rimu 1612. godine saznalo da splitski nadbiskup priprema opsežno teološko djelo protiv pape i politike Katoličke crkve te mu je preporučivano da odustane od pisanja. Nezadovoljan i ogorčen, Dominis je 1613. godine odlučio uzeti pomoćnika i za to je mjesto predlagao Vicka de Franceschija iz Kopra. Papinsko dopuštenje tražio je pisanim putem i nije se odazvao pozivu da dođe u Rim, vjerojatno zbog već tada opravdana straha od inkvizicije. Primivši poziv da dođe na »razgovor« u Rim slutio je najgore te se odlučio skloniti na sigurnije mjesto, pa je navodeći zdravstvene razloge, otputovao u Mletke.</p><p>Isto tako, kada je spor s Andreuccijem htio riješiti njegovim ekskomuniciranjem, otišao je na početku 1614. godine u Veneciju umjesto u Rim, da tamošnjem papinu nunciju iznese svoje razloge za takav postupak. Tom je prilikom Dominis počeo pregovarati o mogućnostima svog odlaska u Englesku sa sir Dudleyem Carletonom, tadašnjim engleskim poslanikom u Veneciji i kasnijim glavnim posrednikom i organizatorom njegova odlaska u London. Kada je Rim odbio njegovu molbu da uzme pomoćnika i preporučio mu da se odrekne nadbiskupije, Dominis je to i učinio. Upravo u to vrijeme dovršavao je u splitskoj prvostolnici otvaranje istočnog zida i gradnju kora. Papa je prihvatio njegovu ostavku i u listopadu 1616. godine za splitskog nadbiskupa imenovan je Mlečanin Sforza Ponzoni.</p>",
                id: 5
            },
            {
                ime: "Tajno hodočašće - Dominis u Londonu",
                opis: "<p>Početkom 1615. godine Dominis je ponovo u Veneciji, gdje je nakon što ga je mletačko Vijeće desetorice odbilo izručiti Rimu, odlučio definitivno otići u London jer mu se Anglikanska crkva, pod kraljem Jakovom I., doimala manje ekstremna od radikalnih kontinentalnih protestantskih crkava kojima Dominis nije bio sklon, a pored toga Englezi su u svojim odnosima s katoličkim zemljama pokazivali sklonost za kompromis i spremnost da izglade svoj spor sa Španjolskom. U Veneciji se već prije zbližio s fra Paolom Sarpijem, glasovitim učenjakom i vođom mletačke oporbe protiv pape, zahvaljujući kojem je došao u doticaj sa sir Henry Wottonom i  sir Dudley Carletonom, engleskim poslanicima u Mletcima. Zainteresirao ih je za svoje ideje. Preko poslanika je posredno pregovarao s canterburyjskim nadbiskupom Abbotom i engleskim kraljem Jakovom I. Stuartom o uvjetima svoga dolaska. Sarpi, koji se  Kuriji također zamjerio kritikom papinstva, našao se nekoliko puta na meti atentatora, pa je i Dominis prema vlastitom priznanju bio u strahu za goli život. Ne bez razloga, jer je čini se doista postojao plan da ga se kidnapira i prisilno odvede u Rim. To ga je ponukalo da se ogleda za drugim utočištem i Engleska mu se učinila kao najpovoljniji izbor. Smatrao je da će tamo biti sigurniji i naći receptivniju publiku za svoje ideje crkvenog jedinstva, a zbog svoje kritike papinstva nadao se prijateljskom prijemu na engleskom dvoru, kao i podršci engleske javnosti.</p><p>Nakon što je u Splitu sredio svoje poslove, posredovanjem sir Wottona, Dominis je u rujnu 1616. godine tajno iz Mletaka krenuo na tromjesečno putovanje pod imenom dubrovačkog trgovca Matije Lukarevića, u pratnji engleskog plemića Roberta Barnsa i svog nećaka Žvana. Na putovanju koje je nazvao »hodočašće«, putovali su prvo mletačkim teritorijem u pravcu Brescia-Bergamo, pa odatle na sjever do Basela u Švicarskoj, odakle je dolinom Rajne nastavio za Heidelberg. Tamo se dulje zaustavio i objavio svoj ranije napisani proglas <em>Marcus Antonius de Dominis, Archiepiscopus Spalatensis, suae profectionis consilium exponi</em>, (<em>Marko Antun de Dominis, splitski nadbiskup, objašnjava plan svog odlaska</em>) svoju buntovnu deklaraciju i ispovijest o pobudama koje su ga navele da napusti svoju nadbiskupiju, u kojoj osuđuje papinstvo i rimokatoličko nastupanje isključivo s pozicije apsolutne nadmoći te pledira za jedinstvo crkve. Potkraj iste godine proglas je pretiskan na latinskom jeziku i u engleskom prijevodu u Londonu (<em>A manifestation of the motives whereupon ... M. A. de Dominis; Archbishop of Spalatro, undertook his departure thence</em>). Dočim se pročulo da je »pobjegao«, u Rimu su javno spalili lutku koja predstavlja njegov lik, a Pavao V. je ustanovio sudski postupak protiv njega <em>in absentia</em>. Dominisa je očekivalo vrlo opasno putovanje iz Heidelberga kroz katoličke porajnske zemlje, jer je u međuvremenu 12. XI. 1616. godine Rimska kurija stavila na indeks zabranjenih djela ne samo njegov proglas nego i sve što ubuduće bude objavio i dala nalog svojim predstavnicima u inozemstvu da poduzmu sve kako bi ga uhitili. Neposredna opasnost prošla je tek kada je 16. XI. 1616. godine stigao u Hag, gdje je u to vrijeme Carleton bio u službi engleskog veleposlanika. Prešavši La Manche u ratnom brodu, koji je nizozemski princ Maurice odredio posebno za njegov prijevoz, Dominis je 16. XII. 1616. godine stigao u London, a njegov je dolazak uglavnom bio shvaćen kao važna potvrda autoriteta Anglikanske crkve.</p><p>Svečano dočekan, Dominis se smjestio u palači Lambeth canterburyjskog nadbiskupa Georga Abbota i uživao osobitu naklonost kralja Jakova I., koji je cijenio političku i diplomatsku vrijednost od prisutnosti istaknutog rimokatoličkog prebjega. London u tom razdoblju živi bogatim kulturnim, političkim  javnim životom. Upriličuju se javne teološke rasprave na kojima se diskutira o pravima i ovlastima papa i kraljeva za široku publiku od posebnog interesa zbog svojih direktnih političkih implikacija. Engleska tada proživljava razdoblje kulturnog, gospodarskog i političkog uzleta, vrijeme je to velikana poput Shakespearea, Francisa Bacona i niza utemeljitelja moderne znanosti, stoljeće kada je engleski stvaralački genij iskovao ideje i jezik koji će ući u temelje moderne europske civilizacije.</p><p>Odmah po dolasku, Dominis počinje pripremati za tisak svoje kapitalno djelo <em>De republica ecclesiastica </em>(<em>O crkvenoj državi</em>). Potkraj rujna ili na početku listopada 1617. godine izišao je prvi svezak i izazvao snažan dojam i mnoge komentare u čitavoj Europi, rimsku zabranu čitanja i mnoštvo polemičnih spisa i pamfleta. Dominis, tada odlazi u posjetu engleskim sveučilištima i u Cambridgeu mu je svečano dodijeljen doktorat iz teologije, čime je postao prvi Hrvat koji je dobio tu titulu na nekom engleskom sveučilištu. Potkraj 1617. godine, počeo je držati propovijedi u talijanskoj crkvi u Londonu (Mercers’ Chapel), a prva od njih, održana 30. studenoga, prve nedjelje u Adventu, bila je odmah tiskana u tri verzije, na talijanskom, latinskom i engleskom jeziku. Iako je već po dolasku dobio neke prihode, tek 25. ožujka 1618. godine dodijeljena mu je titula <em>Master of Savoy</em> (ravnateljsko mjesto u zadužbini Savoy), čime je kao vlastitu rezidenciju dobio palaču Savoy, i nedugo zatim 13. svibnja 1618. godine kralj mu na iznenađenje mnogih engleskih prelata dodjeljuje titulu dekana kraljevskog kaptola u Windsoru, čime je postao kraljev privatni kapelan. To je snažno uzdiglo njegov socijalni profil, ugled i utjecaj a nosilo je i velik redovit prihod. Imenovanjem je stekao položaj koji je bio u rangu biskupa i osigurao mu mjesto na dvoru, a kao uvjet morao je položiti formalnu prisegu kralju, prihvaćajući njegovu vrhovnu jurisdikciju ne samo u svjetovnim već i u crkvenim pitanjima. Smatralo se da je tom je prisegom, <em>de facto</em> postao članom Anglikanske crkve. Mletački poslanik je u izvješću kojim obavještava o događanjima na engleskom dvoru zapisao da je na dvorskoj svečanosti u ceremoniji Reda podvezice (<em>Order of the Garter</em>) uz kralja i brojne lordove, stajao ogrnut crvenim biskupskim plaštem koji je sezao do poda i »bivši splitski nadbiskup koji danomice napreduje u naklonosti i cijeni zbog svojih knjiga, koje su uvelike po volji kralju«.</p>",
                id: 6
            },
            {
                ime: "Novi problemi na obzoru – povratak u Rim",
                opis: "<p>Dominisov nagli uspon izazvao je neprijateljstvo i zavist okoline, a time započinju njegovi novi problemi. Imenovanje za windsorskog dekana bilo je vrhunac njegova uspona i početak njegova dramatičnog pada. Unatoč postignutim počastima i blagostanju, nove političke struje i okolnosti u osvit Tridesetogodišnjeg rata, dovode do toga da  Dominisov ugled na dvoru počinje slabiti. Njegov položaj ovisio je isključivo o kraljevoj naklonosti i dobroj volji. Situacija se pogoršala prilikom diplomatskih pregovora o planiranom englesko-španjolskom kraljevskom braku, što je u političkom pogledu značilo neizbježno poboljšanje odnosa Engleske s Katoličkom crkvom. Dok zabrinuto prati razvoj događaja, Dominis traži način da s papom stupi u kontakt i vodi intenzivnu prepisku s prijateljima u Mletcima.. Godine 1621. stupio je u vezu sa španjolskim poslanikom u Londonu Gondmarom, koji je uspio ostvariti dugo pripremanu i dobro smišljenu nakanu inkvizicije da namami Dominisa u Rim. Na Dominisovu odluku da napusti Englesku utjecalo je 1621. godine ustoličenje novoga pape Grgura XV. (Alessandro Ludovisi), koji je prethodno bio njegov učitelj i prijatelj. Odlučivši se za odlazak, Dominis piše 16. I. 1622. godine kralju Jakovu pismo u kojemu ga izvješćuje da je pozvan u Rim od samog pape i ujedno traži od njega dopuštenje za odlazak. Kralj je bio krajnje razljućen tom Dominisovom odlukom pa mu je zabranio pristup na dvor. Da bi raščistio spor i saznao prave Dominisove namjere, poslao je 31. siječnja 1622. godine londonskog i durhamskog biskupa i dekana winchesterskog da u njegovo ime ispitaju Dominisa. Dominisov pokušaj da kralja privoli na mogućnost sjedinjenja s Katoličkom crkvom rezultirao je kraljevom naredbom da u roku od dvadeset dana zauvijek napusti Englesku. Dominis 23. ožujka 1622. godine podnosi ostavku na ravnateljsko mjesto u zadužbini Savoy, a ubrzo zatim i na položaj windsorskog dekana.</p><p>Potkraj travnja 1622. godine Dominis napušta Englesku u pratnji Schwarzenberga, imperijalnog poslanika njemačko-rimskog cara u Pragu i s njim odlazi u Bruxelles. Gost je papinskoga nuncija i tu ga čeka papin <em>Breve</em> datiran 8. siječnja 1622.  godine u kojem ga papa potiče da se što prije vrati <em>ex tabernaculis impiorum</em>, iz kuća bezbožnika, te mu obećava milosrđe i apostolski blagoslov. Međutim  morao je prvo biti ispitan pred nuncijem i dva svjedoka, a potom se »od svoje slobodne volje« javno pokajati o čemu je načinjen zapisnik. Zatim je preko Francuske i Švicarske stigao u Rim. Pokajnički povratak jednog tako istaknutog prelata i apostate imao je za Rimokatoličku crkvu veliku duhovnu i političku vrijednost, pa pokajničko priznanje u Bruxellesu nije bilo dovoljno.</p><p>Stoga se Dominis 29. listopada 1622. godine, u Rimu javno pokajao i dobio papino oproštenje, a tražilo se i da u posebnom spisu povuče svoje ranije optužbe protiv Rimokatoličke crkve i javno osudi sve oblike protestantske hereze. To je objavio početkom 1623. u knjižici <em>Marcus Antonius de Dominis, Archiepiscopus Spalatensis, sui reditus ex Anglia consilium exponit </em>(<em>Marko Antun de Dominis, splitski nadbiskup, objašnjava plan povratka iz Engleske</em>), u kojoj piše o razlozima koji su ga naveli da napusti Englesku.</p>",
                id: 7
            },
            {
                ime: "U Anđeoskoj tvrđavi – u rukama inkvizicije ",
                opis: "<p>Dominis se 29. listopada 1622. godine, u Rimu javno pokajao i dobio papino oproštenje, a tražilo se i da u posebnom spisu povuče svoje ranije optužbe protiv Rimokatoličke crkve i javno osudi sve oblike protestantske hereze. To je objavio početkom 1623. u knjižici <em>Marcus Antonius de Dominis, Archiepiscopus Spalatensis, sui reditus ex Anglia consilium exponit </em>(<em>Marko Antun de Dominis, splitski nadbiskup, objašnjava plan povratka iz Engleske</em>), u kojoj piše o razlozima koji su ga naveli da napusti Englesku.Time je izgledalo sve riješeno, ali iste godine u srpnju umire papa Grgur XV., a njegov nasljednik papa Urban VIII. nakon nekoliko mjeseci uz pomoć Inkvizicije pokreće nastavak istrage protiv Dominisa. Utamničen je od mjeseca travnja 1624. godine u Anđeoskoj tvrđavi iz koje neće izići živ. Dominis je u rujnu nenadano obolio i umro. Star i bolestan u svojoj tamničkoj muci morao je priželjkivati smrt kao izbavljenje. Dominisovo tijelo bilo je smješteno u mrtvačnicu, gdje je ostalo do svršetka procesa 21. prosinca 1624. godine, kada je posmrtno izrečena osuda u crkvi Santa Maria sopra Minerva kojom je proglašen krivim. Prema osudi Inkvizicije koja glasi: »Osuđujemo uspomenu umrlog Marka Antonija de Dominisa, bivšega splitskog nadbiskupa, na vječnu sramotu, lišavamo ga svih časti, funkcija i beneficija, konfisciramo sve njegove posjede i dobra u korist Sv. Oficija. Izbacujemo njegovu uspomenu, njegovo ovdje prisutno zadržano tijelo, njegovu sliku i njegove spise iz Crkve, čijeg se milosrđa on za života pokazao nedostojnim, ... te tražimo da njegovi spisi budu javno spaljeni«, inkvizicijskom je odredbom Dominisov leš izvađen iz lijesa, provučen ulicama Rima a potom javno spaljen zajedno s njegovom slikom i knjige na rimskom Cvjetnom trgu, a potom pepeo bačen u Tiber. Poput mnogih velikih idealista i vizionara u raskoraku s vlastitim vremenom završio je prezren i odbačen od sviju.</p>",
                id: 8
            }
            ]
        }
        else if (sadrzaj=="london"){
            var cards = [{
                ime: "Engleski kralj Jakov I. Stuart",
                opis: "<p>Početkom 1615. godine Dominis je ponovo u Veneciji, gdje je nakon što ga je mletačko Vijeće desetorice odbilo izručiti Rimu, odlučio definitivno otići u London jer mu se Anglikanska crkva, pod kraljem Jakovom I., doimala manje ekstremna od radikalnih kontinentalnih protestantskih crkava kojima Dominis nije bio sklon, a pored toga Englezi su u svojim odnosima s katoličkim zemljama pokazivali sklonost za kompromis i spremnost da izglade svoj spor sa Španjolskom.</p><p>Nakon što je u Splitu sredio svoje poslove, i posredovanjem engleskog veleposlanika sir Wottona posredno je pregovarao s canterburyjskim nadbiskupom Abbotom i engleskim kraljem Jakovom I. Stuartom o uvjetima svoga dolaska u London, Dominis je u rujnu 1616. godine tajno iz Mletaka krenuo na tromjesečno putovanje pod imenom dubrovačkog trgovca Matije Lukarevića, u pratnji engleskog plemića Roberta Barnsa i svog nećaka Žvana. Na putovanju koje je nazvao »hodočašće«, putovali su prvo mletačkim teritorijem u pravcu Brescia-Bergamo, pa odatle na sjever do Basela u Švicarskoj, odakle je dolinom Rajne nastavio za Heidelberg i Haag. Svečano dočekan u Londonu, Dominis se smjestio u palači Lambeth canterburyjskog nadbiskupa Georga Abbota i uživao osobitu naklonost kralja Jakova I., koji je cijenio političku i diplomatsku vrijednost od prisutnosti istaknutog rimokatoličkog prebjega.</p>",
                id: 1,
            }, 
            {
                ime: "Thomas Hobbes (1588-1679), engleski filozof, utemeljitelj moderne političke filozofije i doktrine modernih prirodnih prava, tvorac teorije društvenog ugovora",
                opis: "<p>Dominis svojim dolaskom u London, opusom i djelovanjem utjecao je i nadahnjivao mnoge ugledne europske učenjake i filozofe. Među njima osobito ističu se velikani kao Hugo Grotius, otac međunarodnog prava i Thomas Hobbes, utemeljitelj moderne političke filozofije i doktrine modernih prirodnih prava, koji je neka Dominisova djela poznavao i posjedovao u biblioteci. London u tom razdoblju živi bogatim kulturnim, političkim javnim životom. Upriličuju se javne teološke rasprave na kojima se diskutira o pravima i ovlastima vladara, papa i kraljeva za široku publiku od posebnog interesa zbog svojih direktnih političkih implikacija. Engleska tada proživljava razdoblje kulturnog, gospodarskog i političkog uzleta. U svojem životnom vijeku Hobbes je bio svjedokom ratova i burnih povijesnih događaja koji su potresali Englesku prve polovice 17. stoljeća. Upravo zato u središtu njegova interesa i jesu problemi čovjeka i društva. Nasuprot srednjovjekovnim teološkim shvaćanjima Hobbes daje objašnjenje koje proizlazi od čovjekove nagonske, ali i razumne prirode. <em>Država</em> nije božanska tvorevina (kako smatraju teološki autori, koji su još prije Hobbbesa promišljali o prirodnom pravu), nego rezultat društvenog ugovora. Tezom o nepovredivosti apsolutne vlasti suverena Hobbes izražava interese i potrebe onog dijela engleske buržoazije koji u tom razdoblju povijesti treba jaku državnu vlast - takvu koja će okončati nevolju dugotrajnih građanskih ratova i nered u društvu s oslabljenim ustanovama koje skrbe o donošenju i poštovanju zakona.</p><p>Hobbesovo najpoznatije djelo je <em>Leviathan</em>. U tom djelu on iznosi doktrinu modernih prirodnih prava. Govoreći o ”vječitom ratu svakoga čovjeka protiv njegovog bližnjega”, tvrdio je da je u ljudskoj prirodi prirodno stanje ”rat svih protiv svih”, i koristio je slikovitu izreku ”čovjek je čovjeku vuk” (Homo homini lupus est). Prema Hobbesu, radi izlaza iz takvog nepodnošljivog prirodnog stanja, ljudi, potaknuti golim strahom za vlastiti opstanak, predaju vladaru (koji ima monopol nad korištenjem sile) društvenim ugovorom vlast nad sobom, kako bi im on pomoću monopola kojeg ima nad silom, osiguravao mir u kojemu ljudi mogu ostvarivati svoj boljitak.Tako strah pojedinca za vlastiti opstanak postaje izvor suvereniteta, tj. postojanja države kao jamca opstanka naroda. Zalagao se za apsolutistički oblik vladavine, gdje monarh bez ograničenja kontrolira sve državne poslove - od donošenja zakona, preko njihove provedbe i naposljetku kontrole zakonitosti na sudovima; vladar treba upravljati i religijom, obrazovanjem, javnim govorom i pisanjem. Za Hobbesa, društvenim ugovorom narod kao izvor suvereniteta predaje svu vlast nad sobom svojemu vladaru, te svako ograničavanje ovlasti vladara predstavlja izvor nereda.</p>",
                id: 2
            },
            {
                ime: "Mercer's Chapel – talijanska crkva u kojoj je Dominis propovijedao tijekom boravka u Londonu",
                opis: "<p>Odmah po dolasku, Dominis počinje pripremati za tisak svoje kapitalno djelo <em>De republica ecclesiastica </em>(<em>O crkvenoj državi</em>). Potkraj rujna ili na početku listopada 1617. godine izišao je prvi svezak i izazvao snažan dojam i mnoge komentare u čitavoj Europi, rimsku zabranu čitanja i mnoštvo polemičnih spisa i pamfleta. Dominis, tada odlazi u posjetu engleskim sveučilištima i u Cambridgeu mu je svečano dodijeljen doktorat iz teologije, čime je postao prvi Hrvat koji je dobio tu titulu na nekom engleskom sveučilištu. Potkraj 1617. godine, počeo je držati propovijedi u talijanskoj crkvi u Londonu (Mercers’ Chapel), a prva od njih, održana 30. studenoga, prve nedjelje u Adventu, bila je odmah tiskana u tri verzije, na talijanskom, latinskom i engleskom jeziku.</p>",
                id: 3
            }, {
                ime: "Razdoblje kulturnog uzleta - William Shakespeare (1564 –1616) ",
                opis: "<p>Dominis dolazi u Englesku u vrijeme neposredno nakon smrti Williama Shaksesspeara, u periodu kontinuiranog kulturnog i gospodarskog procvata kraljevstva, koje započinje za vladavine kraljice Elizabete I. (1533-1603). To je vrijeme velikana poput Shakespearea, Francisa Bacona i niza utemeljitelja moderne znanosti, stoljeće kada je engleski stvaralački genij iskovao ideje i jezik koji će ući u temelje moderne europske. London u tom razdoblju živi bogatim kulturnim, političkim javnim životom. Upriličuju se kazališne predstave i javne rasprave o različitim društvenim problemima i pravima, za široku publiku od posebnog interesa zbog svojih direktnih političkih implikacija. Engleska tada proživljava razdoblje kulturnog, gospodarskog i političkog uzleta.</p>",
                id: 4
            }, {
                ime: "Opasno putovanje u Englesku – Dominis prelazi kanal La Manche u ratnom brodu, koji je nizozemski princ Maurice odredio posebno za njegov prijevoz ",
                opis: "<p>Dočim se pročulo da je »pobjegao«, u Rimu su javno spalili lutku koja predstavlja njegov lik, a Pavao V. je ustanovio sudski postupak protiv njega <em>in absentia</em>. Dominisa je očekivalo vrlo opasno putovanje iz Heidelberga kroz katoličke porajnske zemlje, jer je u međuvremenu 12. XI. 1616. godine Rimska kurija stavila na indeks zabranjenih djela ne samo njegov proglas nego i sve što ubuduće bude objavio i dala nalog svojim predstavnicima u inozemstvu da poduzmu sve kako bi ga uhitili. Neposredna opasnost prošla je tek kada je 16. XI. 1616. godine stigao u Haag, gdje je u to vrijeme Carleton bio u službi engleskog veleposlanika. Prešavši La Manche u ratnom brodu, koji je <strong>nizozemski princ Maurice</strong> odredio posebno za njegov prijevoz, Dominis je 16. XII. 1616. godine stigao u London, a njegov je dolazak uglavnom bio shvaćen kao važna potvrda autoriteta Anglikanske crkve.</p>",
                id: 5
            },
            {
                ime: "George Abbot - canterburyjski nadbiskup pregovara s Dominisom o tajnom hodočašću u London",
                opis: "<p>Početkom 1615. godine Dominis je ponovo u Veneciji, gdje je nakon što ga je mletačko Vijeće desetorice odbilo izručiti Rimu, odlučio definitivno otići u London jer mu se Anglikanska crkva, pod kraljem Jakovom I., doimala manje ekstremna od radikalnih kontinentalnih protestantskih crkava kojima Dominis nije bio sklon, a pored toga Englezi su u svojim odnosima s katoličkim zemljama pokazivali sklonost za kompromis i spremnost da izglade svoj spor sa Španjolskom. U Veneciji se već prije zbližio s fra Paolom Sarpijem, glasovitim učenjakom i vođom mletačke oporbe protiv pape, zahvaljujući kojem je došao u doticaj sa sir Henry Wottonom i sir Dudley Carletonom, engleskim poslanicima u Mletcima. Zainteresirao ih je za svoje ideje. Preko poslanika je posredno pregovarao s canterburyjskim nadbiskupom Abbotom i engleskim kraljem Jakovom I. Stuartom o uvjetima svoga dolaska.</p><p>Sarpi, koji se Kuriji također zamjerio kritikom papinstva, našao se nekoliko puta na meti atentatora, pa je i Dominis prema vlastitom priznanju bio u strahu za goli život. Ne bez razloga, jer je čini se doista postojao plan da ga se kidnapira i prisilno odvede u Rim. To ga je ponukalo da se ogleda za drugim utočištem i Engleska mu se učinila kao najpovoljniji izbor. Smatrao je da će tamo biti sigurniji i naći receptivniju publiku za svoje ideje crkvenog jedinstva, a zbog svoje kritike papinstva nadao se prijateljskom prijemu na engleskom dvoru, kao i podršci engleske javnosti.</p><p>Nakon što je u Splitu sredio svoje poslove, posredovanjem sir Wottona, Dominis je u rujnu 1616. godine tajno iz Mletaka krenuo na tromjesečno putovanje pod imenom dubrovačkog trgovca Matije Lukarevića, u pratnji engleskog plemića Roberta Barnsa i svog nećaka Žvana. Na putovanju koje je nazvao »hodočašće«, putovali su prvo mletačkim teritorijem u pravcu Brescia-Bergamo, pa odatle na sjever do Basela u Švicarskoj, odakle je dolinom Rajne nastavio za Heidelberg. Tamo se dulje zaustavio i objavio svoj ranije napisani proglas <em>Marcus Antonius de Dominis, Archiepiscopus Spalatensis, suae profectionis consilium exponi</em>, (<em>Marko Antun de Dominis, splitski nadbiskup, objašnjava plan svog odlaska</em>) svoju buntovnu deklaraciju i ispovijest o pobudama koje su ga navele da napusti svoju nadbiskupiju, u kojoj osuđuje papinstvo i rimokatoličko nastupanje isključivo s pozicije apsolutne nadmoći te pledira za jedinstvo crkve. Potkraj iste godine proglas je pretiskan na latinskom jeziku i u engleskom prijevodu u Londonu (<em>A manifestation of the motives whereupon ... M. A. de Dominis; Archbishop of Spalatro, undertook his departure thence</em>). Dočim se pročulo da je »pobjegao«, u Rimu su javno spalili lutku koja predstavlja njegov lik, a Pavao V. je ustanovio sudski postupak protiv njega <em>in absentia</em>. Dominisa je očekivalo vrlo opasno putovanje iz Heidelberga kroz katoličke porajnske zemlje, jer je u međuvremenu 12. XI. 1616. godine Rimska kurija stavila na indeks zabranjenih djela ne samo njegov proglas nego i sve što ubuduće bude objavio i dala nalog svojim predstavnicima u inozemstvu da poduzmu sve kako bi ga uhitili. Neposredna opasnost prošla je tek kada je 16. XI. 1616. godine stigao u Haag, gdje je u to vrijeme Carleton bio u službi engleskog veleposlanika. Prešavši La Manche u ratnom brodu, koji je nizozemski princ Maurice odredio posebno za njegov prijevoz, Dominis je 16. XII. 1616. godine stigao u London, a njegov je dolazak uglavnom bio shvaćen kao važna potvrda autoriteta Anglikanske crkve.</p>",
                id: 6
            },
            {
                ime: "Dominisov streloviti uspon u Londonu: titula dekana kraljevskog kaptola u Windsoru – doktorat iz teologije na Cambridgeu – titula Master of Savoy (ravnateljsko mjesto u zadužbini Savoy)",
                opis: "<p>Svečano dočekan, Dominis se smjestio u palači Lambeth canterburyjskog nadbiskupa Georga Abbota i uživao osobitu naklonost kralja Jakova I., koji je cijenio političku i diplomatsku vrijednost od prisutnosti istaknutog rimokatoličkog prebjega. Odmah po dolasku, Dominis počinje pripremati za tisak svoje kapitalno djelo <em>De republica ecclesiastica </em>(<em>O crkvenoj državi</em>). Potkraj rujna ili na početku listopada 1617. godine izišao je prvi svezak i izazvao snažan dojam i mnoge komentare u čitavoj Europi, rimsku zabranu čitanja i mnoštvo polemičnih spisa i pamfleta. Dominis, tada odlazi u posjetu engleskim sveučilištima i u Cambridgeu mu je svečano dodijeljen <strong>doktorat iz teologije</strong>, čime je postao <strong>prvi Hrvat</strong> koji je dobio tu titulu na nekom engleskom sveučilištu. Potkraj 1617. godine, počeo je držati propovijedi u talijanskoj crkvi u Londonu (Mercers’ Chapel), a prva od njih, održana 30. studenoga, prve nedjelje u Adventu, bila je odmah tiskana u tri verzije, na talijanskom, latinskom i engleskom jeziku. Iako je već po dolasku dobio neke prihode, tek 25. ožujka 1618. godine dodijeljena mu je titula <em>Master of Savoy</em> (ravnateljsko mjesto u zadužbini Savoy), čime je kao vlastitu rezidenciju dobio palaču Savoy, i nedugo zatim 13. svibnja 1618. godine kralj mu na iznenađenje mnogih engleskih prelata dodjeljuje titulu dekana kraljevskog kaptola u Windsoru, čime je postao kraljev privatni kapelan. To je snažno uzdiglo njegov socijalni profil, ugled i utjecaj a nosilo je i velik redovit prihod. Imenovanjem je stekao položaj koji je bio u rangu biskupa i osigurao mu mjesto na dvoru, a kao uvjet morao je položiti formalnu prisegu kralju, prihvaćajući njegovu vrhovnu jurisdikciju ne samo u svjetovnim već i u crkvenim pitanjima. Smatralo se da je tom je prisegom, <em>de facto</em> postao članom Anglikanske crkve. Mletački poslanik je u izvješću kojim obavještava o događanjima na engleskom dvoru zapisao da je na dvorskoj svečanosti u ceremoniji Reda podvezice (<em>Order of the Garter</em>) uz kralja i brojne lordove, stajao ogrnut crvenim biskupskim plaštem koji je sezao do poda i »bivši splitski nadbiskup Dominis koji danomice napreduje u naklonosti i cijeni zbog svojih knjiga, koje su uvelike po volji kralju«.</p>",
                id: 7
            },
            {
                ime: "Španjolski veleposlanik Gondomar, špijun inkvizicije - novi problemi na obzoru",
                opis: "<p>Dominisov nagli uspon u Londonu izazvao je neprijateljstvo i zavist okoline, a time započinju njegovi novi problemi. Imenovanje za windsorskog dekana bilo je vrhunac njegova uspona i početak njegova dramatičnog pada. Njegove teološke ideje o fundamentalnom jedinstvu crkve ne prolaze dobro kod radikalnih protestanata koji ne žele čuti o rimskom katoličanstvu. Najveći dio slobodna vremena Dominis posvećuje pisanju i već iste godine kada je imenovan dekanom, 1618., izdaje knjižicu koju je započeo pisati još za vrijeme svog boravka u Heidelbergu, pod naslovom <em>Scogli del christiano</em> <em>naufragio </em>(<em>Hridine kršćanskog brodoloma)</em>, u kojoj razvija i dopunjava argumente protiv papinstva te priprema za tisak Sarpijevo djelo <em>Istoria del Concilio Tridentino</em>, koju objavljuje 1619. godine prvo na talijanskom a potom i na engleskom jeziku, pod imenom Pietro Soave Polano, što je anagram Sarpijeva imena.</p><p>Unatoč postignutim počastima i blagostanju, nove političke struje i okolnosti u osvit Tridesetogodišnjeg rata, dovode do toga da Dominisov ugled na dvoru počinje slabiti. Njegov položaj ovisio je isključivo o kraljevoj naklonosti i dobroj volji. Situacija se pogoršala prilikom diplomatskih pregovora o planiranom englesko-španjolskom kraljevskom braku, što je u političkom pogledu značilo neizbježno poboljšanje odnosa Engleske s Katoličkom crkvom. Dok zabrinuto prati razvoj događaja, Dominis traži način da s papom stupi u kontakt i vodi intenzivnu prepisku s prijateljima u Mletcima, posebno s Paolom Sarpijem. Godine 1621. stupio je u vezu sa španjolskim poslanikom u Londonu Gondmarom, koji je uspio ostvariti dugo pripremanu i dobro smišljenu nakanu inkvizicije da namami Dominisa u Rim. Na Dominisovu odluku da napusti Englesku utjecalo je 1621. godine ustoličenje novoga pape Grgura XV. (Alessandro Ludovisi), koji je prethodno bio njegov učitelj i prijatelj. Odlučivši se za odlazak, Dominis piše 16. I. 1622. godine kralju Jakovu pismo u kojemu ga izvješćuje da je pozvan u Rim od samog pape i ujedno traži od njega dopuštenje za odlazak. Kralj je bio krajnje indigniran tom Dominisovom odlukom pa mu je zabranio pristup na dvor. Da bi raščistio spor i saznao prave Dominisove namjere, poslao je 31. siječnja 1622. godine londonskog i durhamskog biskupa i dekana winchesterskog da u njegovo ime ispitaju Dominisa. Dominisov pokušaj da kralja privoli na mogućnost sjedinjenja s Katoličkom crkvom rezultirao je kraljevom naredbom da u roku od dvadeset dana zauvijek napusti Englesku. Dominis 23. ožujka 1622. godine podnosi ostavku na ravnateljsko mjesto u zadužbini Savoy, a ubrzo zatim i na položaj windsorskog dekana. Njegov boravak u Engleskoj završava u kaosu optužaba i rekriminacija. Engleski službenici mu oduzimaju imovinu uz optužbe da je nezakonito prisvojio neko zlato i srebro te da je iznosom gotovog novca koji je namjeravao iznijeti iz zemlje prekršio carinske propise. Radilo se o zakonito stečenom novcu i darovima, koja su mu na Dominisovu pisanu pritužbu poslanu iz Bruxellesa, prema kraljevoj naredbi i vraćena.</p>",
                id: 8
            }
            ]
        }
        else if (sadrzaj=="rad"){
            var cards = [{
                ime: "Galileo prikazuje dalekozor Senatu Mletačke Republike – kome pripadaju zasluge za konstrukciji i teoriju dalekozora?",
                opis: "<p>Dalekozor kao izum bio je plod dugogodišnjih nastojanja i praktičnog otkrića. Konstrukcija je realizirana slučajno, prikladno posloženim lećama, a zasigurno nije nastala na temelju teorijskog razmatranja. Prvi dalekozori su djelo praktičnih majstora optičara i konstruirani su u Nizozemskoj 1608. godine. Trgovac i optičar Hans Lippershey (1570-1619) iz Middelburga prvi ga je javno prikazao u Veneciji i pokušao dobiti patent. U ljeto 1609. upravo kada je Galilei boravio u Veneciji doznao je o posjetu Lippersheya, koji je Senatu došao ponuditi novi optički instrument čudesnih mogućnosti. Galilea je impresionirao novi instrument. Planirao je preko utjecajnog znanca Paola Sarpija na neko vrijeme usporiti pregovore Nizozemca sa Senatom, kako bi imao vremena konstruirati vlastiti dalekozor s još boljim mogućnostima i ponuditi ga Senatu. Galilei se u svezi s dalekozorom prvo iskazao kao osoba koja ima velike vještine preciznog konstruiranja instrumenta jer u kratkom vremenu neposredno nakon što je vidio nizozemski izum, konstruirao je vlastiti dalekozor s većim povećanjem i bez skrupula prezentirao ga mletačkom duždu i Senatu kao vlastiti izum, vidjevši u tome sjajnu priliku, budući da mu je jedno drugo njegovo konstrukcijsko poboljšanje od prije postojećeg instrumenta - računskog mjerila, nazvanog geometrijsko-vojni šestar i zasnovanog na principu razmjernih veličina, već donosio znatan prihod. Dakle, Galilei nije bio prva osoba koja je konstruirala praktični izum za gledanje dalekih objekata – dalekozor, iako ga je predstavljao kao vlastiti izum. Pored toga što dalekozor nije bio Galileov izum, on zasigurno nije bio ni prva osoba koja je usmjerila dalekozor prema zvjezdanom nebu, jer poznato je da je prije Galileia ugledni engleski astronom Thomas Harriott prvi dalekozorom opažao i nacrtrao karte Mjeseca već u srpnju 1609. godine, a nakon toga sustavno je istraživao sunčane pjege i druge pojave. Galilei nigdje ne spominje Dominisov optički rad, premda mu je bilo poznato da je Dominis prvi objavio djelo u kojem tumači rad dalekozora. Galileo je nastojao minorizirati rad svih učenjaka povezanih uz izum i tumačenje dalekozora, nebi li bi stvorio dojam kako sve zasluge pripadaju upravo njemu, što mu je zamjeravao i sam Kepler, koji je prvi Galileu odao dužno priznanje za rezultate postignute astronomskim motrenjima.</p><p>Dominisov pristup dalekozoru uvelike se razlikuje od Galilejeva. Dominis se znatno prije prvih konstrukcija dalekozora započeo sustavno baviti istraživanjima leća i njihovih kombinacija još kao mladi učenjak u razdoblju od 1588. do 1595. godine. Rezultate eksperimentalnog rada uz matematičko dokazivanje zabilježio je u spisu napisanom u prvoj verziji dva desetljeća ranije nego što je Veneciji dalekozor javno prikazan u kolovozu 1609. godine. Da je Dominis već tako rano imao razvijenu cjelovitu teoriju leća i njihovih primjena i kombinacija na kojoj se u temelji konstrukcija dalekozora, svjedoči činjenica da je mogao vrlo brzo u svega nekoliko mjeseci nakon javnog prikazivanja dalekozora predati za objavu svoju optičku raspravu - cjelovitu teoriju o lećama i dalekozoru, koju je utemeljio na opsežnom eksperimentalnom radu a rezultate istraživanja sistematizirao po uzoru na Euklidove <em>Elemente</em> i dokazivao optičkim i matematičkim tvrdnjama i metodama, što nije bilo moguće načiniti u tako kratkom vremenu. <strong>Dominisovo </strong><strong>optičko djelo</strong><strong><em> De radiis visus et lucis in vitris perspectivis et iride </em></strong><strong>(Rasprava o zrakama vida i svjetlosti u lećama i dugi), dovršeno koncem 1609. godine i objavljeno u Veneciji 1611. godine je neosporno prvo djelo koje tumači teoriju novog instrumenta dalekozora.</strong></p>",
                id: 1,
            }, 
            {
                ime: "Dominisovo optičko djelo De radiis visus et lucis in vitris perspectivis et iride (Rasprava o zrakama vida i svjetlosti u lećama i dugi), dovršeno koncem 1609. godine i objavljeno u Veneciji 1611. godine - prvo djelo koje tumači teoriju novog instrumenta dalekozora.",
                opis: "<p>Dominis je već kao mlad u razdoblju od 1587. do 1591. godine, dok je predavao matematiku u Padovi, napisao dva zapažena djela iz fizike, koja je objavio više od dva desetljeća kasnije. Uključivši se ubrzo nakon što ih je napisao u visoke crkvene i diplomatske službe, nije više imao vremena za bavljenje znanošću. Međutim, kako su prirodne znanosti ipak bile područjem njegova trajnog interesa s vremenom je koliko su prilike dozvoljavale istraživao i dopunjavao svoja znanja. Godine 1608. u Veneciji je demonstriran prvi dalekozor, rad nizozemskih optičara, izazvavši veliko zanimanje. Na nagovor Giovannia Bartolia, atašea pri firentinskom poslanstvu u Veneciji i svog nekadašnjeg učenika, koji je smatrao da se u Dominisovim starim profesorskim skriptama iz optike već nalaze neka temeljna načela koja bi mogla protumačiti rad dalekozora, a također i potaknut Galilejevim pokušajima konstruiranja, poboljšanja i uporabe dalekozora iz druge polovice 1609. godine, Dominis je odlučio dopuniti stari tekst novim istraživanjima o dalekozoru i objaviti sve u sklopu svoje pred dva desetljeća napisane rasprave <em>De radiis visus et lucis in vitris perspectivis et iride</em> (<em>O zrakama vida i svjetlosti u lećama i u dugi</em>). Objavljena 1611. godine. prvo je djelo u kojem se nastoji protumačiti dalekozor, novi instrument koji će znanosti otvoriti nebeske prostore. Izložena građa sistematizirana je u 18 poglavlja. Da bi se ispravno shvatilo pitanje prioriteta što se tiče samog izuma dalekozora, valja naglasiti da dalekozor nije bio plod znanosti. Prvo ga je konstruirao nizozemski optičar Hans Lippershey, koji je primijetio da kombinacija dviju leća daje uređaj kojim se može dobiti uvećana slika promatranog objekta na zemlji i nebu. U proljeće 1609. godine tijekom posjeta Veneciji Galileo je vidio uređaj i dojmila ga se ideja pa je ubrzo konstruirao takav uređaj shvativši njegovu važnost u istraživanju svemira.</p><p>Dominis u djelu<em> De radiis visus et lucis in vitris perspectivis et iride</em> (<em>O zrakama vida i svjetlosti u lećama i u dugi</em>), objavljenom u Veneciji 1611. teorijski obrazlaže rad dalekozora i tumači pojavu duge. Na temelju mnogobrojnih pokusa s lećama Dominis je stekao ispravnu, premda samo kvalitativnu predodžbu o lomu zraka svjetlosti te proučava uvjete uz koje bi kombinacija leća imala isti učinak kao dalekozor. Najvažniji Dominisov prinos je njegovo teoretsko objašnjenje dalekozora i zaključak da je povećanje slike predmeta ovisno o povećanju vidnog kuta, koji je prethodno ispravno definirao.</p>",
                id: 2
            },
            {
                ime: "De radiis visus et lucis in vitris perspectivis et iride (O zrakama vida i svjetlosti u lećama i u dugi) - deveto poglavlje Instrumenti perspectivi ad videnda longe dissita conficiendi ratio et usus (Načelo građenja i primjena optičke sprave za motrenje udaljenih predmeta)",
                opis: "<p><strong>Dominis o dalekozoru</strong><br>Pripremivši u prvih osam poglavlja valjan teorijski temelj de Dominis je na početku devetog poglavlja <em>Instrumenti perspectivi ad videnda longe dissita conficiendi ratio et usus</em> (Načelo građenja i primjena optičke sprave za motrenje udaljenih predmeta) zapisao:<br>„Prema onomu što smo do sada rekli i objasnili o staklenim progledalima, vrlo je lako izgraditi spravu koja je – kako se čini – nedavno izumljena, ili barem objavljena, osobito kada je riječ o Italiji. Kada je ona kod mnogih izazvala i izaziva najveće udivljenje, toliko meni koji sam u optici prije mnogih drugih, i to kroz mnogo godina, radi zabave vježbao duh, nipošto nije bila čudna. Odmah kada sam je vidio (a bila je vrlo nedotjerana) jasno sam prepoznao učinak dvaju stakala. Šteta da oni koji su prvi puta tu spravu objavili nisu s njom iznijeli i dokaze.“<br>„S nestrpljenjem sam iščekivao neće li se zajedno s dokazima koje traže učinci te sprave riješiti mnogobrojne, nipošto neznatne poteškoće glede vida i optičkih pitanja, koje se tiču optičkih stakala, a nije ih – koliko znam – do sada nitko obradio. Koliko sam mogao, ja sam ih u prethodnim poglavljima prvi pokušao protumačiti i dokazati.“<br>U svezi s dalekozorom de Dominis je pokušao riješiti i rastumačiti još nekoliko pitanja:<br>„Zašto se tom spravom ne opaža ono što je blizu? I zašto se, ostane li prednje staklo isto ako mu dodaš drugo manje udubljenosti uz skraćenje sprave kako je gore rastumačeno, a nakon toga ako mu dodaš drugo veće udubljenosti uz produženje cijevi, stvari prije vide manje i udaljenije, a polje veće i bliže?“<br>„Zašto, ako se ova sprava okrene približivši oku i lećasto staklo, sve izgleda puno manje i kudikamo udaljenije?“<br>Zašto se u toj spravi vidljiva stvar nikada ne okrene, koliko god se sama sprava odmicala i od stvari i od oka?“<br>Na kraju IX. poglavlja de Dominis razmatranja o dalekozoru zaključuje riječima:<br>„Neka ovo što smo rekli bude dosta ovakvim optičkim staklima. Kad bi tko iznio nešto bolje, rado bih od njega učio, jer ni ja sam nisam potpuno zadovoljan sa svim onim što sam do sada rekao i obrazložio. Koliko sam mogao, prvi sam razbio led i utro drugima put, ili im ga barem otvorio, da uzmognu u tome raspravljati o tome potpunije i jasnije. Sada prelazim na razmatranje drugog prekrasnog optičkog učinka, naime luka duge.“</p>",
                id: 3
            }, {
                ime: "De radiis visus et lucis in vitris perspectivis et iride (O zrakama vida i svjetlosti u lećama i u dugi)",
                opis: '<p><strong>Sadržaj, struktura i koncepcija </strong><strong>Dominisova djela</strong><p>Dominisovo djelo kako je iz naslova vidljivo i u uvodniku najavljeno, tumači zakonitosti vida, optičkih stakala i duge. Izložena građa sistematizirana je u 18 poglavlja. Nakon uredničkog Bartolieva uvoda, koji djelo posvećuje markizu od Monte a Santa Maria, glavnom zapovjedniku cjelokupnog mletačkog pješaštva, Dominis u prvom poglavlju naslova <em>Propositio dicendorum</em> (Pregled izlaganja) izlaže sadržaj, pristup i koncepciju svojih istraživanja. U njemu Dominis naglašava eksperimentalnu i matematičku utemeljenost svojih optičkih istraživanja:<p>„Obrazložit ću dakle ono na što me nakon mnogih istraživanja i čestih pokusa uputilo proučavanje i razmišljanje. Taj će posao podjednako zadirati i u matematička i u fizikalna razmatranja, te ću stoga morati razjasniti veći broj prihvaćenih mišljenja u objema tim znanostima. Dijelom ću po običaju matematičara iznijeti postavke oko kojih se ili svatko može vrlo lako samnom složiti ili za koje u tim znanostima postoje višestruki dokazi, no djelom će biti potrebno ne samo iznijeti postavke već ih utvrditi i učvrstiti, ili barem obrazložiti. Sve to neka omogući lakši pristup cjelovitom ostvarenju glavnog cilja.“<p>Navodi da su za objašnjenja vida potrebna mnoga promatranja, tumačenja svjetlosti, boja, sredstva kroz koja svjetlost prolazi, zakona pravocrtnog širenja svjetlosti, odbijanja i loma svjetlosti unutar područja kojeg naziva <em>Opticae</em> ili <em>Perspectivae</em>. Iznosi svoj pristup istraživanju optičkih pojava ističući da sve navedeno kao i mnogobrojne efekte koji iz toga proizlaze, objasnit će poslije velikog truda i velikog broja pokusa. De Dominis naglašava eksperimentalnu utemeljenost svojih razmatranja baziranih na metodički osmišljenom pokusu, što je u tom razdoblju na prijelazu iz 16. u 17. stoljeće novi pristup u odnosu na skolastičku Aristotelovu metodu, koja je u to vrijeme još dominirala. Značajno je da ističe i ulogu matematike, jer koristi se geometrijskim poučcima i stavcima iz optike u teorijskim izvodima na kojima bazira dokaze i izvode teorije. Već iz prvog poglavlja <em>Propositio dicendorum</em> vidljivo je da Dominis ima jasnu koncepciju istraživanja i izlaganja, u kojoj pokus ima podjednako važnu ulogu kao i teorijske postavke. Premda Dominis u djelu često ne opisuje svoje pokuse, analiza sadržaja upućuje da se sa sigurnošću može kazati kako ih je provodio jer njegova tumačenja sadrže uz rezultate detaljne podatke i uvjete do kojih ne bi mogao doći bez eksperimentalnog rada.<p>Pored uvodnih djelova, prema njenom sadržaju raspravu možemo razdijeliti u tri dijela. Prvi dio donosi geometrijske i fizikalne temelje optike (poglavlja od II. do IV.), drugi dio sadrži teoriju vida, teoriju optičkih leća i dalekozora (poglavlja V. - IX.), dok treći dio donosi tumačenje duge (poglavlja X. - XVIII.). Dominis je eksperimentirajući sustavno uz pomoć uređaja koje je sam izradio, prije svega sa staklenim kuglama ispunjenim vodom došao do izvornog doprinosa u tumačenju duge. Ustanovio je da se svjetlost odbija i na unutrašnjoj stijenci kišne kapi i tako protumačio nastanak unutrašnjeg luka duge. Duga po Dominisu nastaje odbijanjem i lomom svjetlosne zrake u kapljici kiše.',
                id: 4
            }, {
                ime: "De radiis visus et lucis in vitris perspectivis et iride (O zrakama vida i svjetlosti u lećama i u dugi)",
                opis: "<p><strong>Dominisovo tumačenje duge</strong></p><p>Dominis u djelu<em> De radiis visus et lucis in vitris perspectivis et iride</em> (<em>O zrakama vida i svjetlosti u lećama i u dugi</em>), objavljenom u Veneciji 1611. teorijski obrazlaže rad dalekozora i tumači pojavu duge. Eksperimentirajući sustavno uz pomoć uređaja koje je sam izradio, prije svega sa staklenim kuglama ispunjenim vodom došao je do izvornog doprinosa u tumačenju duge. Ustanovio je da se svjetlost odbija i na unutrašnjoj stjenki kišne kapi i tako protumačio nastanak unutrašnjeg luka duge. Duga po Dominisu nastaje odbijanjem i lomom svjetlosne zrake u kapljici kiše. Prvu dugu dobro je objasnio, ali drugoj nije našao prava uzroka. Tumačenje je upotpunio s dva crteža. Prvi prikazuje lom i odraz zraka svjetlosti na prozirnom okruglom tijelu DCG, a drugi nastanak duge na kišnom zastoru PE, pri čemu snopovi iz kapljica P, Q, R potječu iz unutarnjeg luka, a snopovi iz kapljica B, C, D iz vanjskog luka duge.</p><p>Tumačeći dugu, prije izlaganja vlastite metode i rezultata Dominis navodi rezultate niza prethodnika: Aristotela, Aleksandra Afrodizijskog, Averroesa, Alberta Velikog, Vitela, Alessandra Piccolominija, Cardana i Scaligera. Tijekom 18. stoljeća Dominisovo je tumačenje duge doživjelo različite prosudbe znamenitih učenjaka: od velikih pohvala Isaaca Newtona i Christiana Wolffa do kritičkih ocjena Ruđera Boškovića, Christiana Hygensa i Josepha Priestleya. Početkom 19. stoljeća priznanjima se pridružio i Goethe u svom prirodoznanstvenom djelu <em>Zur Farbenlehre</em> (<em>O teoriji boja</em>).</p>",
                id: 5
            },
            {
                ime: "Kepler i Dominis – prilozi razvoju istraživanja fiziološke optike",
                opis: '<p>Potrebno je istaknuti da je Dominis prvi hrvatski autor koji se bavio problemima fiziološke optike u vrijeme kada se ona istovremeno tek razvijala i u europskim krugovima. U njegovom djelu<em> De radiis visus et lucis in vitris perspectivis et iride</em> (<em>O zrakama vida i svjetlosti u lećama i u dugi</em>), objavljenom u Veneciji 1611.  u poglavljima III. do V. nalazimo i najstariji objavljeni tekst jednog hrvatskog autora koji se bavi fiziološkom optikom. Tu, Dominis pokušava rastumačiti nastanak slike u oku, mane refrakcije i govori o korekcionim naočalama. Dominisovo optičko djelo objavljeno je iste godine kada i glasovito Keplerovo djelo <em>Dioptrice</em> u kojem se po prvi puta daje ispravno tumačenje slike koja nastaje na očnoj pozadini i prvu znanstvenu definiciju kratkovidnosti. Usprkos Dominisovom znanstvenom potencijalu i bogatoj erudiciji, nedovršenost njegovih fizikalnih istraživanja započetih u mladosti zasigurno je u velikoj mjeri posljedica njegova burnog i nestalnog života u kojem mu znanost nije mogla biti glavnom preokupacijom. Može se kazati da se Dominisov pristup istraživanju svjetlosnih fenomena, baš kao i onaj njegovih velikih suvremenika Galileja i Keplera, temelji na vezi eksperimentalno-induktivnih i matematičko-deduktivnih metoda. Premda u tekstu ima nedosljednosti, djelo je uglavnom napisao na temelju vlastitih eksperimenata i opažanja, a prikupljenu građu sistematizirao je i koncipirao po uzoru na Euklidove <em>Elemente</em>, na koje se u djelu i poziva. Stoga, premda Dominis ne napušta neka zastarjela peripatetička shvaćanja, njegovo djelo<em> De radiis visus</em> ima značajnu vrijednost u povijesti optike i obilježja novog vremena jer se dijelom koristi novom metodologijom utemeljenom na eksperimentalnom radu i primjenom matematičkog aksiomatsko-deduktivnog stila izlaganja, što je rani primjer novovjekovnog pristupa istraživanju u prirodnim znanostima. Tek je Kepler omogućio da se i dalekozor u potpunosti ispravno protumači iznijevši novu aksiomatiku optike u svojim djelima <em>Dioptrice</em> i <em>Ad Vitellionem paralipomena</em>, od kojih se na <em>Dioptrice</em> Galileo tužio da je tako »nejasno« da ga po svoj prilici ni sam Kepler ne razumije.</p>',
                id: 6
            },
            {
                ime: "Naslovnica Dominisova djela <em>Euripus seu de fluxu et refluxu maris sententia</em> (Eurip ili mišljenje o plimi i oseci mora) Dominisov doprinos geofizici – o mijenama mora i obliku Zemlje",
                opis: "<p>Godine 1624., iste godine kada je zatvoren u Anđeosku tvrđavu, Dominis je objavio svoje djelo Euripus seu de fluxu et refluxu maris sententia (Eurip ili mišljenje o plimi i oseci mora), koje je posvetio kardinalu Francescu Barberiniju, nećaku novopostavljenog pape Urbana VIII. U djelu govori o pojavi morskih mijena, koji je zbog svoje povezanosti s oblikom Zemlje zadirao u srž Aristotelove peripatetičke slike svijeta. Dominis pobija mišljenje da je oblik Zemlje nepravilan, dokazujući i zauzimajući se za njen sferni oblik. Uzrok plimi i oseci vidi u utjecaju Sunca i Mjeseca na mora i oceane. Drugu dnevnu plimu tumači slično kao i Zadranin Federik Grisogono, držeći da nastaje zbog privlačnosti nebeske točke koja je protivna Mjesecu ili Suncu. Dominis se nije uspio potpuno osloboditi starih peripatetičkih pogleda u prirodnoj filozofiji, dapače ni stava o nepomičnosti Zemlje, ali u njegovim se djelima ipak koristi novi eksperimentalni pristup i primjena matematičkih metoda u istraživanju prirode, znakovitih za renesansnu fiziku.</p>",
                id: 7
            },
            {
                ime: "Dominisovo tumačenje morskih mijena pomoću transpolarnog kruga",
                opis: "<p>U svojim ranim zapisima iz Padove Dominis je tumačio morske mijene s pomoću superpozicije dvaju stošca morske vode koji se uzdižu zbog djelovanja Sunca i Mjeseca, ali je kasnije, za boravka u Engleskoj nakon promatranja morskih mijena na ušću Temze i pod utjecajem engleskih učenjaka, promijenio to stajalište, i od tada morske mijene počije tumačiti pomoću transpolarnog kruga. Svojoj teoriji dodao je shemu izračunavanja ukupne elevacije mora zbog djelovanja Mjeseca i Sunca. Temeljne pojmove svoje metodologije uveo je ovako: pravac VX označuje horizont zenitne točke, pravac TZ označuje meridijan mjesta i ujedno transpolarni krug, kružnica VTXZ označuje ekvator ili bilo koju drugu dnevnu usporednicu. Tada je kružnicom BCDF prikazao zemaljski krug na razini morskog dna, krugom FRGP plohu morske površine ako debljina morskog elementa iznosi BF, kružnicom ISOQ krivulju koju u dnevnom kretanju opisuje vrh naraslog mora zbog djelovanja Sunca, kružnicom LδMβ krivulju koja također u dnevnom kretanju opisuje vrh narasloga mora zbog djelovanja Mjeseca. Trokuti PIR i POR prikazuju naraslinu (<em>cumulus</em>,<em> tumor</em>) mora zbog djelovanja Sunca na obojim hemisferama, a trokuti PLR i PMR po istoj metodologiji prikazuju narasline mora zbog djelovanja Mjeseca.</p>",
                id: 8
            }
            ]
        }
        else if (sadrzaj=="znamenitost"){
            var cards = [{
                ime: "Galileo Galilei vs. Marko Antun de Dominis – od konstrukcije do teorije dalekozora",
                opis: '<p>Dominis i Galilei predavali su u istom razdoblju matematiku na dva različita učilišta u Padovi, ali nije poznato jesu li imali kontakte. Zbog neprijateljstva između isusovačkih i drugih studenata godine 1592. isusovci su morali premjestiti svoje studije filozofije u sklopu koje se predavala i matematika u Bresciu, kamo tada seli i Dominis gdje boravi do odlaska u Rim 1595. godine. Galilei je neosporno poznavao Dominisov optički rad i njegovu teoriju plime i oseke, ali nije mu odavao zasluženo priznanje, već minorizira Dominisove zasluge i s ironijom se osvrće se na Dominisova gledišta. Galileo je nastojao minorizirati rad svih učenjaka povezanih uz izum i tumačenje dalekozora, kako bi stvorio dojam kako sve zasluge pripadaju upravo njemu. Dalekozor kao izum bio je plod dugogodišnjih nastojanja i praktičnog otkrića. Konstrukcija je realizirana slučajno, prikladno posloženim lećama, a zasigurno nije nastala na temelju teorijskog razmatranja. Prvi dalekozori su djelo praktičnih majstora optičara i konstruirani su u Nizozemskoj 1608. godine. Trgovac i optičar Hans Lippershey (1570-1619) iz Middelburga prvi ga je javno prikazao u Veneciji i pokušao dobiti patent. U ljeto 1609. upravo kada je Galilei boravio u Veneciji doznao je o posjetu Lippersheya, koji je Senatu došao ponuditi novi optički instrument čudesnih mogućnosti. Galilea je impresionirao novi instrument. Planirao je preko utjecajnog znanca Paola Sarpija na neko vrijeme usporiti pregovore Nizozemca sa Senatom, kako bi imao vremena konstruirati vlastiti dalekozor s još boljim mogućnostima i ponuditi ga Senatu. Galilei se u svezi s dalekozorom prvo iskazao kao osoba koja ima velike vještine preciznog konstruiranja instrumenta jer u kratkom vremenu neposredno nakon što je vidio nizozemski izum, konstruirao je vlastiti dalekozor s većim povećanjem i bez skrupula prezentirao ga mletačkom duždu i Senatu kao vlastiti izum, vidjevši u tome sjajnu priliku, budući da mu je jedno drugo njegovo konstrukcijsko poboljšanje od prije postojećeg instrumenta - računskog mjerila, nazvanog geometrijsko-vojni šestar i zasnovanog na principu razmjernih veličina, već donosio znatan prihod. Dakle, Galilei nije bio prva osoba koja je konstruirala praktični izum za gledanje dalekih objekata – dalekozor, iako ga je predstavljao kao vlastiti izum. Pored toga što dalekozor nije bio Galileov izum, on zasigurno nije bio ni prva osoba koja je usmjerila dalekozor prema zvjezdanom nebu, jer poznato je da je prije Galileia ugledni engleski astronom Thomas Harriott prvi dalekozorom opažao i nacrtrao karte Mjeseca već u srpnju 1609. godine, a nakon toga sustavno je istraživao sunčane pjege i druge pojave.<p>Radovi de Dominisa i Galilea u svezi s dalekozorom, odražavaju dva potpuno različita pristupa. Galilei u svom djelu <em>Sidereus nuncius</em> odobrenom za tisak u ožujku 1610., daje samo kratki navod o dalekozoru bez njegova tumačenja jer ga nije ni znao rastumačiti ni tada niti kasnije, budući da se nije ni bavio optikom. U fokusu Galileovih istaživanja bila su područja mehanike i astronomije. Dok je u području mehanike Galileo shvatio potrebu za matematiziranjem fizike, njegov rad s dalekozorom metodološki je drugačiji. Odvija se isključivo u praktičnoj domeni opažanja i konstruiranja (točnije rekonstruiranja tuđeg izuma), dakle u vezi s dalekozorom njegov rad utemeljeljen je na praktičnim znanjima i vještinama, bez plodonosnog prožimanja empirijskog aspekta s matematikom kakvo je ostvario u svojim mehaničkim istraživanjiima. To je dijelom i razumljivo, budući da se Galileo niije bavio optikom i dalekozor nije bio Galileov izum već se radi o praktičnom izumu nizozemskih optičara kojem skeptična znanstvena zajednica u prvo vrijeme nije niti pridavala osobitu važnost, ne prepoznavši isprva koliko će njegova primjena u astronomskim istraživanjima značiti za revolucionarni razvitak kozmologije. Premda Galileo nije izumio dalekozor, niti ga prvi znanstveno rastumačio, pa čak ga niti prvi usmjerio prema nebu da bi proveo sustavna astronomska opažanja, on ga je još u vrijeme kada znanstvena zajednica nije u potpunosti shvatila njegovu vrijednost, zagovarao, primjenjivao u astronomskim motrenjima i afirmirao u znanstvenoj zajednici jer je čvrsto vjerovao da je u dalekozoru našao instrument za koji će ga kroz astronomska motrenja dovesti do dokaza o gibanju Zemlje, u prilog heliocentričnog sustava i Kopernikove kozmologije. Premda se iskazao kao iznimno vješt u rekonstrukciji i poboljšanju nizozemskog izuma - dalekozora, neosporno je da pri tom Galileo nije birao sredstva kako bi dalekozor prezentirao mletačkim vlastima i velikašima kao vlastiti izum, dok je u svojiim pismima i tekstovima nastojao zaobići i minorizirati sve one koji su na različite načine doprinijeli konstrukciji i teoriji dalekozora, smatrajući ga i predstavljajući „svojim“ instrumentom. To mu je zamjerao i sam Kepler, koji je prvi Galileu odao dužno priznanje za rezultate postignute astronomskim motrenjima.<p>Dominisov pristup dalekozoru uvelike se razlikuje od Galilejeva. Dominis se znatno prije prvih konstrukcija dalekozora započeo sustavno baviti istraživanjima leća i njihovih kombinacija još kao mladi učenjak u razdoblju od 1588. do 1595. godine. Rezultate eksperimentalnog rada uz matematičko dokazivanje zabilježio je u spisu napisanom u prvoj verziji dva desetljeća ranije nego što je Veneciji dalekozor javno prikazan u kolovozu 1609. godine. Da je Dominis već tako rano imao razvijenu cjelovitu teoriju leća i njihovih primjena i kombinacija na kojoj se u temelji konstrukcija dalekozora, svjedoči činjenica da je mogao vrlo brzo u svega nekoliko mjeseci nakon javnog prikazivanja dalekozora predati za objavu svoju optičku raspravu - cjelovitu teoriju o lećama i dalekozoru, koju je utemeljio na opsežnom eksperimentalnom radu a rezultate istraživanja sistematizirao po uzoru na Euklidove <em>Elemente</em> i dokazivao optičkim i matematičkim tvrdnjama i metodama, što nije bilo moguće načiniti u tako kratkom vremenu. <strong>Dominisovo </strong><strong>optičko djelo</strong><strong><em> De radiis visus et lucis in vitris perspectivis et iride </em></strong><strong>(Rasprava o zrakama vida i svjetlosti u lećama i dugi), dovršeno koncem 1609. godine i objavljeno u Veneciji 1611. godine je neosporno prvo djelo koje tumači teoriju novog instrumenta dalekozora.</strong>',
                id: 1,
            }, 
            {
                ime: "Thomas Hobbes (1588-1679), engleski filozof, utemeljitelj moderne političke filozofije i doktrine modernih prirodnih prava, tvorac teorije društvenog ugovora.",
                opis: "<p>Dominis svojim dolaskom u London, opusom i djelovanjem utjecao i nadahnjivao je mnoge ugledne europske učenjake i filozofe. Među njima osobito ističu se velikani kao Hugo Grotius, otac međunarodnog prava i Thomas Hobbes, utemeljitelj moderne političke filozofije i doktrine modernih prirodnih prava, koji je neka Dominisova djela poznavao i posjedovao u biblioteci. London u tom razdoblju živi bogatim kulturnim, političkim javnim životom. Upriličuju se javne teološke rasprave na kojima se diskutira o pravima i ovlastima vladara, papa i kraljeva za široku publiku od posebnog interesa zbog svojih direktnih političkih implikacija. Engleska tada proživljava razdoblje kulturnog, gospodarskog i političkog uzleta. U svojem životnom vijeku Hobbes je bio svjedokom ratova i burnih povijesnih događaja koji su potresali Englesku prve polovice 17. stoljeća. Upravo zato u središtu njegova interesa i jesu problemi čovjeka i društva. Nasuprot srednjovjekovnim teološkim shvaćanjima Hobbes daje objašnjenje koje proizlazi od čovjekove nagonske, ali i razumne prirode. <em>Država</em> nije božanska tvorevina (kako smatraju teološki autori, koji su još prije Hobbbesa promišljali o prirodnom pravu), nego rezultat društvenog ugovora. Tezom o nepovredivosti apsolutne vlasti suverena Hobbes izražava interese i potrebe onog dijela engleske buržoazije koji u tom razdoblju povijesti treba jaku državnu vlast - takvu koja će okončati nevolju dugotrajnih građanskih ratova i nered u društvu s oslabljenim ustanovama koje skrbe o donošenju i poštovanju zakona.<p>Hobbesovo najpoznatije djelo je <em>Leviathan</em>. U tom djelu on iznosi doktrinu modernih prirodnih prava. Govoreći o ”vječitom ratu svakoga čovjeka protiv njegovog bližnjega”, tvrdio je da je u ljudskoj prirodi prirodno stanje ”rat svih protiv svih”, i koristio je slikovitu izreku ”čovjek je čovjeku vuk” (Homo homini lupus est). Prema Hobbesu, radi izlaza iz takvog nepodnošljivog prirodnog stanja, ljudi, potaknuti golim strahom za vlastiti opstanak, predaju vladaru (koji ima monopol nad korištenjem sile) društvenim ugovorom vlast nad sobom, kako bi im on pomoću monopola kojeg ima nad silom, osiguravao mir u kojemu ljudi mogu ostvarivati svoj boljitak.Tako strah pojedinca za vlastiti opstanak postaje izvor suvereniteta, tj. postojanja države kao jamca opstanka naroda. Zalagao se za apsolutistički oblik vladavine, gdje monarh bez ograničenja kontrolira sve državne poslove - od donošenja zakona, preko njihove provedbe i naposljetku kontrole zakonitosti na sudovima; vladar treba upravljati i religijom, obrazovanjem, javnim govorom i pisanjem. Za Hobbesa, društvenim ugovorom narod kao izvor suvereniteta predaje svu vlast nad sobom svojemu vladaru, te svako ograničavanje ovlasti vladara predstavlja izvor nereda.",
                id: 2
            },
            {
                ime: "Faust Vrančić (Šibenik, 1551- Venecija 1617) – hrvatski učenjak, izumitelj svjetskog glasa (padobran, amortizeri, uspinjača, most od metala, most koji visi o lancima i dr.), autor prvog ovećeg leksikona hrvatskog jezika, biskup Chanada, kancelar Ugarske i Transilvanije",
                opis: "<p>Dominis se za boravka u Rimu 1602. godine, kretao u društvu hrvatskih intelektualaca i uglednika, a 16. srpnja 1602. godine primljen je u članstvo hrvatske Bratovštine sv. Jeronima u Rimu. Ostajući povezan s članovima Bratovštine tijekom ostatka svog života posebno se zbližio sa Šibenčaninom Faustom Vrančićem, ocem hrvatske leksikografije i glasovitim izumiteljem. Upoznali su se ranije, u razdoblju od 1599. do 1601. godine kada je Dominis nastojeći osigurati potporu za seobu i smještaj uskoka iza Velebita, boravio na carskom dvoru u Pragu, na kojem je Vrančić bio vrlo utjecajan kao dugogodišnji tajnik cara i kralja Rudolfa II. Zbog svoje pozicije, Vrančić je bio upućen u postojeće probleme i Dominisova nastojanja, kada je kao senjski biskup nekoliko godina revno obilazio velikaške dvorove u Pragu, Grazu i Veneciji nastojeći osigurati rješenje problema, pomoći uskocima i svim silama pokušavao spasiti što se u datim okolnostima moglo. I nakon tog razdoblja ostali su povezani. Dijelili su mnoge zajedničke sklonosti i nazore, a Vrančić mu je nekoliko godina kasnije povjerio i recenziju svog djela <em>Logica nova</em>.</p>",
                id: 3
            }, {
                ime: "Grgur XV., lat. Gregorius PP. XV. (Bologna, 9. siječnja 1554. – Rim, 8. srpnja 1623.), rođen kao Alessandro Ludovisi, 234. poglavar Katoličke Crkve, papa od 9. veljače 1621. do smrti 1623. godine.",
                opis: '<p>Na Dominisovu odluku da napusti Englesku i vrati se u Rim utjecalo je 1621. godine ustoličenje novoga pape Grgura XV. (Alessandro Ludovisi), koji je prethodno bio njegov učitelj i prijatelj. Potkraj travnja 1622. godine Dominis napušta Englesku u pratnji Schwarzenberga, imperijalnog poslanika njemačko-rimskog cara u Pragu i s njim odlazi u Bruxelles. Gost je papinskoga nuncija i tu ga čeka papin <em>Breve</em> datiran 8. siječnja 1622. godine u kojem ga papa potiče da se što prije vrati <em>ex tabernaculis impiorum</em>, iz kuća bezbožnika, te mu obećava milosrđe i apostolski blagoslov. Međutim morao je prvo biti ispitan pred nuncijem i dva svjedoka, a potom se »od svoje slobodne volje« javno pokajati o čemu je načinjen zapisnik. Zatim je preko Francuske i Švicarske stigao u Rim. Pokajnički povratak jednog tako istaknutog prelata i apostate imao je za Rimokatoličku crkvu veliku duhovnu i političku vrijednost, pa pokajničko priznanje u Bruxellesu nije bilo dovoljno.<p>Stoga se Dominis 29. listopada 1622. godine, u Rimu javno pokajao i dobio papino oproštenje, a tražilo se i da u posebnom spisu povuče svoje ranije optužbe protiv Rimokatoličke crkve i javno osudi sve oblike protestantske hereze. To je objavio početkom 1623. u knjižici <em>Marcus Antonius de Dominis, Archiepiscopus Spalatensis, sui reditus ex Anglia consilium exponit </em>(<em>Marko Antun de Dominis, splitski nadbiskup, objašnjava plan povratka iz Engleske</em>), u kojoj piše o razlozima koji su ga naveli da napusti Englesku.<p>Time je izgledalo sve riješeno, ali iste godine u srpnju umire papa Grgur XV., a njegov nasljednik papa Urban VIII. nakon nekoliko mjeseci uz pomoć Inkvizicije pokreće nastavak istrage protiv Dominisa. Utamničen je od mjeseca travnja 1624. godine u Anđeoskoj tvrđavi iz koje neće izići živ.',
                id: 4
            }, {
                ime: "Urban VIII., lat. Urbanus PP. VIII. (Firenca, 5. travnja 1568. – Rim, 29. srpnja 1644.), rođen kao Maffeo Barberini, 235. poglavar Katoličke Crkve, papa od 6. kolovoza 1623. do smrti 1644. godine.",
                opis: '<p>Bio je pokrovitelj umjetnosti i znanosti. U Rimu je izgradio Palazzo Barberini, Tritonovu fontanu (Fontana del Tritone) na Piazza Barberini, a obnovio je Crkvu sv. Sebastijana na Palatinu (San Sebastiano al Palatino). Zanimao se za nova otkrića, osobito Galilea Galileia ali je unatoč tome pokrenuo postupak istrage po kojoj je Galileo osuđen, te je bio prisiljen odreći se kopernikanskog sustava 1633. godine. Premda je njegov prethodnik papa Grgur XV. Dominisu udijelio oprost, Urban VIII. nedugo po svom imenovanju obnavlja postupak i predaje ga Inkviziciji.<p>Neposredno po povratku iz Londona u Rim, Dominis se 29. listopada 1622. godine, u Rimu javno pokajao i dobio oproštenje pape Grgura XV., a tražilo se i da u posebnom spisu povuče svoje ranije optužbe protiv Rimokatoličke crkve i javno osudi sve oblike protestantske hereze. To je objavio početkom 1623. u knjižici <em>Marcus Antonius de Dominis, Archiepiscopus Spalatensis, sui reditus ex Anglia consilium exponit </em>(<em>Marko Antun de Dominis, splitski nadbiskup, objašnjava plan povratka iz Engleske</em>), u kojoj piše o razlozima koji su ga naveli da napusti Englesku.<p>Time je izgledalo sve riješeno, ali iste godine u srpnju umire papa Grgur XV., a njegov nasljednik papa Urban VIII. nakon nekoliko mjeseci uz pomoć Inkvizicije pokreće nastavak istrage protiv Dominisa. Utamničen je od mjeseca travnja 1624. godine u Anđeoskoj tvrđavi iz koje neće izići živ. Dominis je u rujnu nenadano obolio i umro. Star i bolestan u svojoj tamničkoj muci morao je priželjkivati smrt kao izbavljenje. Dominisovo tijelo bilo je smješteno u mrtvačnicu, gdje je ostalo do svršetka procesa 21. prosinca 1624. godine, kada je posmrtno izrečena osuda u crkvi Santa Maria sopra Minerva kojom je proglašen krivim. Prema osudi Inkvizicije koja glasi: »Osuđujemo uspomenu umrlog Marka Antonija de Dominisa, bivšega splitskog nadbiskupa, na vječnu sramotu, lišavamo ga svih časti, funkcija i beneficija, konfisciramo sve njegove posjede i dobra u korist Sv. Oficija. Izbacujemo njegovu uspomenu, njegovo ovdje prisutno zadržano tijelo, njegovu sliku i njegove spise iz Crkve, čijeg se milosrđa on za života pokazao nedostojnim, ... te tražimo da njegovi spisi budu javno spaljeni«, inkvizicijskom je odredbom Dominisov leš izvađen iz lijesa, provučen ulicama Rima a potom javno spaljen zajedno s njegovom slikom i knjige na rimskom Cvjetnom trgu, a potom pepeo bačen u Tiber. Poput mnogih velikih idealista i vizionara u raskoraku s vlastitim vremenom završio je prezren i odbačen od sviju.',
                id: 5
            },
            {
                ime: "Paolo Sarpi, svestrani talijanski učenjak, teolog, generalni prokurator servitskoga reda (Venecija, 1552 – Venecija, 1623)",
                opis: "<p>Ugledni humanist, pripadao je istom kulturnom krugu kao i Galileo Galilei s kojim je bio blizak. S Dominisom je bio blisko povezan i dijelio mnoge zajedničke stavove prema politici rimske kurije, a posredovao je tijekom pripreme tajnog Dominisova odlaska u London, kako bi Dominis izbjegao izručenje Inkviziciji. Kada je 1606. sukob između Mletačke Republike i rimske kurije doveo do papinskoga interdikta, Sarpi je u ime Mletačke Republike objavio raspravu u kojoj je osporio pravnu valjanost papina postupka. Zbog utjecaja galikanizma bio je ekskomuniciran, a 1607. teško ranjen u atentatu. U samoj Veneciji uživao je veliku popularnost i godinama živo sudjelovao u političkom životu, osobito svojim zakonodavnim radom. Zbog njegove podrške protestantizmu i planova o zajedničkom nastupanju protestantskih struja protiv Rima, pretpostavlja se da je bio kriptoprotestant. Pripisuje mu se prvi opis optoka krvi te izradba prve karte Mjeseca. Sarpijevo glavno djelo <em>Povijest Tridentskoga koncila</em> (<em>Historia del Concilio tridentino,</em> pod pseudonimom Pietro Soave Polano), u kojem je prikazao političku pozadinu toga sabora, objavio je 1619. u Londonu M. de Dominis. Također je dopunio djelo o povijesti uskoka zadarskoga nadbiskupa M. de Minuccija pod naslovom <em>Dodatak Povijesti uskoka Minuccija Minuccija nadbiskupa zadarskoga</em> (<em>Supplimento dell’Historia degli Vscochi di Minuccio Minucci arciuescouo di Zara,</em> 1617).</p>",
                id: 6
            },
            {
                ime: "Hugo Grotius (1583-1645) – nizozemski pravnik, otac međunarodnog prava, plodan i svestrani pisac",
                opis: '<p>Nadahnjivao se Dominisovim teološkim raspravama i idejama, Grotius se 1616. u Rotterdamu upoznao s Dominisom. Jedno Grotiusovo pismo s kritičkim primjedbama na račun engleske politike Dominis je proslijedio kralju Jakovu I., priskrbivši pošiljatelju znatne neprilike. Unatoč razočaranju u taj Dominisov potez, ali i još neke druge, Grotius je o njegovim djelima zadržao visoko mišljenje.<p>Godine 1613. Grotius je ušao u raspravu koja je iz teološkoga prijepora prerasla u politički sukob između predstavnika Holandije i kalvinističke većine u Općim staležima Nizozemske, predvođenim državnim poglavarom, princom Mauritsom od Nassaua. U jeku napetosti 1618. uhićen je i osuđen na doživotno zatočeništvo, no 1621. uspio je preko Antwerpena pobjeći u Pariz. Kratkotrajan povratak u Nizozemsku 1631. pokazao se rizičnim, pa je 1632. prešao u Hamburg. Zahvaljujući njegovu međunarodnom ugledu, 1634. povjerena mu je služba švedskoga poslanika u Parizu. U idućem desetljeću vratio se književnom radu, povijesnim raspravama i izdanjima klasičnih autora. Grotius je plodan i izvanredno mnogostran pisac. Njegovo djelo <em>Dokaz pravoga služenja Bogu</em> ( <em>Bewijs van de waren Godsdienst,</em> 1622), prevedeno je na 13 jezika. Pisao je biblijske komentare i teološke rasprave. Zagovarao je, osobito u kasnijem životnom razdoblju, približavanje kršćanskih religija i njihov povratak prvotnom jedinstvu. Najznačajniji je ipak Grotiusov pravni opus. Na zamolbu nizozemske Istočnoindijske kompanije, koja je s portugalskim trgovcima došla u sukob oko monopola u Indoneziji, napisao je raspravu<em>O pravu plijena</em> (<em>De jure praedae,</em> 1604., tiskanu tek 1864.). Jedno poglavlje toga djela, pod naslovom <em>Slobodno more</em> (<em>Mare liberum,</em> 1609), u kojem Grotius brani pravo svih država na pristup moru i plovidbi, zasebno je tiskano u više izdanja. Bilo je poznato i čitano iu hrvatskim krajevima (posebice u Dubrovniku), jer su se Grotiusovi argumenti mogli primijeniti na prilike u Jadranu, protiv mletačkih nastojanja za ograničenjem plovidbe. Svojim glavnim djelom,<em>O pravu rata i mira</em> (<em>De jure belli ac pacis,</em> 1625.), na prirodnopravnim postavkama postavio je temelje međunarodnog prava.',
                id: 7
            },
            {
                ime: "Frane Petrić, veliki hrvatski filozof i polihistor (Cres,1528 – Obod,1597).",
                opis: "<p>Petrićevo je djelo ugrađeno u temelje hrvatske i svjetske filozofske i znanstvene misli. Neke od njegovih ideja izloženih u njegovom kapitalnom djelu <em>Nova sveopća filozofija</em> (<em> Nova de universis philosophia,</em> 1591.) prihvatili su poslije G. Bruno, T. Campanella, R. Descartes, P. Gassendi, I. Newton, Dominis i dr. Nakon zabrane djela izišlo je drugo, nešto promijenjeno izdanje (1593). U mnogobrojnim djelima Petrić je obradio i mnoga druga područja znanja i umijeća (<strong>geometrija, glazbena povijest, povijest ratovanja, strategije</strong> i dr.). Mnoge su njegove zamisli široko prihvaćene u europskoj znanosti. U svom djelu <em>Euripus ili</em> <em>o plimi i oseci mora</em>, Dominis se kritički osvrće na neoplatonistička gledišta Frane Petrića i protestantskog pastora Otta Casmanna. Petrić i njegov mlađi suvremenik Dominis, živjeli su u razdoblju kada se u istraživanje prirode postupno uvodi eksperimentalni pristup i matematička metoda, čime se stvaraju temelji novovjekovne znanosti. U njihovim djelima jasno se opaža matematički pristup obradi i sistematizaciji istraživane građe. U <em>Euripusu</em> Dominis daje izvrsne primjere matematičnog dokazivanja, primjerice u svojoj kritici Petrićevih ideja. Petrić je bio iznimno plodan i raznovrstan pisac. Bavio se i <strong>znanošću jezika i govora</strong>. Promišljajući odnos retorike i srodnih disciplina, gradio je teoriju jezika, procesa razumijevanja, obrazlažući svoju tezu savršene retorike-antiretorike, zasnovane kao filozofsko-znanstvene discipline, prema modelu sigurne i savršene spoznaje matematičke znanosti. Također je bio povijesno i metodičko-kritički zaokupljen i epistemologijom povijesti i povijesnom spoznajom. Raspravljao je o naravi <strong>povijesti</strong>, njezinoj istini i objektivnosti, o ulozi i mjestu povijesti u ljudskom životu i društvenoj zbilji. Njegov model znanstvene povijesti ne obuhvaća samo političku, nego i općeduhovnu, gospodarsku i kulturnu povijest. Svojom metodom, shvaćanjima i idejama utjecao je na neke teoretičare povijesti (J. Bodin), a neki ga drže modernim historiografom i originalnim misliocem. Svoj prilog polemici s Aristotelom i peripatetizmom te priklon neoplatonizmu Petrić je ostavio u opsežnom djelu <em>Peripatetičke rasprave</em> (<em>Discussiones peripateticae,</em> 1571.), u kojem je analizirao život i učenje, te temeljne pojmove Aristotelove filozofije. Petrić je u njima položio temelje svoje znanosti o biću i sveučilištu, koje je razvio u kapitalnom djelu <em>Nova sveopća filozofija</em> (<em> Nova de universis philosophia,</em> 1591.), koje je potaknulo mnoge polemike i kritike. <em>Nova sveopća filozofija</em> čvrsto je izgrađena koherentan sustav filozofije, u kojem Petrić izlaže vlastitu originalnu prirodnofilozofijsku sliku svijeta, ontološka i gnoseološka shvaćanja, ugrađujući u nju elemente mnogih i različitih struja mišljenja, filozofsko-teoloških, metafizičkih i znanstvenih spekulacija. U dodatku knjige uvrstio je hermetičke spise koje je prikupio i preveo s grčkoga na latinski, kao osnovu za utemeljenje nove, pobožne filozofije. U tom je djelu pisao io različitim procesima u moru. Njegov opis poplava Venecije, kao i njihova povezanost s djelovanjem vjetra na more, jedan je od prvih tiskanih opisa te poplave.</p>",
                id: 8
            }]
        }
        
        else if (sadrzaj=="zavicaj"){
            var cards = [{
                ime: "Rab – rodni grad hrvatskog teologa i učenjaka svjetskoga glasa, nadbiskupa i primasa Dalmacije i Hrvatske Marka Antuna de Dominisa (Rab, 1560. — Rim, 8. IX. 1624)",
                opis: "<p>U dugom nizu stoljeća razvijenog i kasnog srednjovjekovlja, te ranijeg novog vijeka, grad Rab kontinuirano je predstavljao najvažnije urbano središte sjevernojadranskih otoka. Povjesna slika grada Raba prepoznatljiva je po četiri zvonika što se uzdižu nad gradskim bedemima i strmim liticama od koja su tri romanička. Marko Antun de Dominis svestrani učenjak i ugledni predstavnik hrvatskog i europskog humanizma rođen je na Rabu 1560. godine u plemićkoj obitelji Dominis, čiji korijeni sežu u rana stoljeća rapskog srednjovjekovlja. U rodnome je gradu Rabu započeo školovanje. Zasigurno je upravo na Rabu oblikovao svoje prve interese stasajući u humanističkom ozračju rodnoga grada i obiteljskog doma, u krugu moćne plemićke obitelji Dominis te sa snažnom povezanošću s tradicijom i nasljeđem, te je već u ranoj dobi usvojio univerzalne visoke duhovne ciljeve kojima je stremio čitav život. Dominis se smatra jednom od najistaknutijih duhovnih i intelektualnih pojava Europe na prijelazu iz 16. u 17. stoljeće. Svojim je znanstvenim opusom i ugledom u crkvenom, društvenom i političkom životu izazivao divljenje u elitnim europskim krugovima ali i otvoreno neprijateljstvo nekih suvremenika. Dominis je intelektualnim i duhovnim djelovanjem prerastao granice hrvatske baštine i ostavio neizbrisiv trag u hrvatskoj i europskoj povijesti, znanosti i kulturi.</p>",
                id: 1,
            }, 
            {
                ime: "Mala palača Dominis ",
                opis: "<p>Mala palača Dominis iz koje se pruža pogled na morsku pučinu, smještena je na Rabu u Gornjoj ulici prepunoj sakralnih građevina. Gornja ulica nalazi se na najvišem dijelu poluotoka i s nje se cijelom dužinom prostire pogled na morsku pučinu. Ulica se protreže od kule sv. Kristofora na krajnjem sjeverozapadu grada, do pročelja katedrale te crkve i samostana sv. Antuna Opata na zapadnoj strani samog vrha poluotoka. Mala palača Dominis smještena je u neposrednoj blizini crkve sv. Justine, između niza dragocjenih kulturnih i sakralnih spomenika, nastalih u različitim povjesnim razdobljima i izgrađenih raznim stilovima. Svjedočanstvo je ugleda i moći plemičke obitelji Dominis. Gornja ulica, shodno sakralnim građevinama koje su na njoj podignute postaje značajna s razvitkom kršćanstva kao službene religije još od početka srednjeg vijeka. Te su građevine podizane na mjestima značajnih javnih i kulturnih rimskih spomenika, važnih u životu antičkog grada. Slika Gornje ulice na vrhu rapskoga poluotoka svjedoči nekadanji sjaj Grada, romanički urbanizam razvijen na ortogonalnoj antičkoj podlozi, osnažen visokom urbanom kulturom kasnoga srednjovjekovlja i ranoga novoga vijeka, u to doba bez premca na području između Kopra i Zadra, kao dvaju političkih središta mletačke uprave na istočnoj obali Jadrana. Grad se tu otkriva u punom sjaju, za istočnojadranske prilike raskošnih stambenih zdanja, od kojih su ona najluksuznija redovito bila opremljena statusnim simbolima mediteranskoga društva, obzidanim vrtovima i dvorištima s cisternama reljefima ukrašenih kruništa, obrubljenim križnim svodovima sjenovitih obodnih trijema, raščlanjenih arkadama ukrašenim kićenim kapitelima.</p>",
                id: 2
            },
            {
                ime: "Velika palača Dominis ",
                opis: "<p>Rapska palača Dominis jedan od najvažnijih, izvrsno sačuvanih spomenika plodnoga graditeljskog razdoblja konca 15. i početka 16. stoljeća. Najveća je renesansna palača na Rabu i glavna rezidencia obitelji Dominis a nalazi se uz Trg sv. Kristofora, na početku Srednje ulice. Smještena je na vrlo prestižnom mjestu pokraj glavnih gradskih vrata, vjerojatno računajući na okolnost tadanjeg zamiranja tradicionalnih, srednjovjekovnih urbanih težišta, uzduž Gornje ulice i na području Kaldanca. Smještaj palače Dominis, podalje od povijesnih gradskih urbanih težišta, omogućavao je lakše razvijanje većih tlocrta. Danas se dijelom koristi kao turistički objekt. Rab, baš poput ostalih sjevernojadranskih komuna, pritisnut ratnim opasnostima i nesigurnošću 16. i prvih desetljeća 17. stoljeća već odavno bio prešao zenit svojega graditeljskoga razvoja, koji se zbivao upravo u vrijeme izgradnje glavne rapske rezidencije obitelji Dominis. Palača Dominis je dvokatno zdanje u kategoriji civilne arhitekture i dominira sjeveroistočnim dijelom grada unutar zidina. Na način svojstven raskošnijem stambenom graditeljstvu pročeljem je a ne zabatnom fasadom orijentirano prema glavnoj prometnici. Prizemljem dominira reljefno bogato ukrašeni glavni portal s obiteljskim grbom na nadvratniku. Ostali su otvori prizemlja izvedeni stilski definirano, no posve utilitarno, jer prostori su se kojima su pripadali, baš kao i danas, obično iznajmljivali za poslovne svrhe. Katovima se pružaju visoke, u obje etaže podjednako dimenzionirane monofore. Središnji je dio prvog kata ipak naglašen drugačijom, kasnogotičkom monoforom, s klupčicom koja je za razliku od drugih, počivala na tri masivnije i raskošnije koncipirane konzole. Za razliku od nje, druge monofore izrazito su renesansno oblikovane. Cvito Fisković i Miljenko Domijan renesansnu plastiku pripisali su Petru Radovu, zvanom Trogiranin a obiteljski grb uzidan na razdjelnici prvog i drugog kata, djelatnosti Andrije Alešija. Zanimljiva je antička glava, spolij uzidan na bočnoj fasadi, orijentiranoj prema gradskim zidinama. Kroz glavni portal palače ulazi se u središnji prolaz koji vodi do dvorišta, nekoć vjerojatno posve rastvorenog arkadama. Tragovi izvornog, raskošnog uređenja, sačuvani su i u unutrašnjosti, jer središnja velika prostorija prvoga kata bila je urešena reljefno ukrašenim konzolama, sličnim onima pod renesansnim monoforama pročelja.</p><p>U neposrednoj blizini palače Dominis nalazi se crkva sv. Antuna iz 17. stoljeća. Nasuprot palači Dominis nalazi se palača Nimira na kojoj je bogato renesansno pročelje također izradio Andrija Aleši, jedan od najznačajnijih arhitekta i kipara hrvatske umjetnosti petnaestog stoljeća. Između tih dviju palača i crkve sv. Antuna postavljena je 1994. godine bista Marka Antuna de Dominisa, djelo akademskog kipara Koste Angelija Radovani. Na postamentu piše Marcus Antonius de Dominis 1560-1624.</p>",
                id: 3
            }, {
                ime: "Crkva sv. Justine ",
                opis: "<p>Crkva sv. Justine na Rabu smještena nasuprot maloj palači Dominis u Gornjoj ulici. Crkva i benediktinski samostan izgrađeni su između 1573. i 1578. godine. Samostan je zatvoren 1808. i danas služi kao muzej sa zbirkom sakralnih predmeta. Iznad oltara je slika iz Ticijanove škole koja prikazuje smrt svetog Josipa. </p>",
                id: 4
            }, {
                ime: "Grb obitelji Dominis",
                opis: "<p>Plemenito porijeklo obitelji Dominis seže u rana stoljeća rapskog srednjovjekovlja. Marko Antun de Dominis sin je učenog pravnika i pjesnika Jeronima Dominisa i majke Marije iz venecijanske obitelji Vellutelli. Obiteljsko je prezime Dominis nastalo od hipokoristika osobnog imena Dominik (Dominicijus) ili od njegovih inačica Demanja, Dominja, Domana. U literaturi se navodi da Dominisi izvode svoje porijeklo od loze krčkih knezova koji se kasnije prozvaše Frankopanima. Po majci, pripadao je i glasovitoj talijanskoj obitelji Theobaldi, iz koje je potekao i papa Grgur X. (1271. – 1276.). Rodoslovlje Dominisa, koje je oko 1600. godine sastavio sam Marko Antun de Dominis nosi naslov <em>Arber Frangipana sive de Dominis</em>. Izvornim podacima provjereno rodoslovlje obitelji započinje od 1283. godine sa Stjepanom de Dominisom, sinom rapskog sudca. Uspinjući se u gradskoj plemićkoj i crkvenoj hijerarhiji, Dominisi postupno prelaze lokalne okvire Raba. Stječu imanja na Pagu, Cresu, Dugom otoku i Lošinju, priskrbljuju biskupsku stolicu u Jakinu (Ancona) i Velikom Varadinu (Oradea) u Ugarskoj. Postaju rapski poklisari na kraljevskom dvoru u Budimu i stječu vlastelinski naslov među plemstvom grada Zadra. Zahvaljujući ugledu na europskim dvorovima, osobito povezanosti s napuljskim i ugarskim kraljevskim dvorom, Dominisi postaju delegati carske vlasti s povlasticama kojima su se mogli služiti na čitavom teritoriju Svetog Rimskog Carstva. Carskom poveljom izdanom u Pragu 26. kolovoza 1433. godine imenovani su namjesničkim grofovima, zajedno sa svojim potomcima. Osim kao crkveni poglavari i učeni ljudi, Dominisi su se kao podanici ugarske krune i mletačkih vlasti isticali i kao ratni zapovjednici u borbama s Osmanlijama zapovijedajući kršćanskom vojskom u bitci kod Varne. Također, u dugoj tradiciji koja se prenosila s očeva na sinove, bili su zapovjednici (soprakomiti) rapske galije, i kao takvi sudjelovali i u bitci kod Levanta.</p>",
                id: 5
            },
            {
                ime: "Bista Marka Antuna de Dominisa ispred crkve sv. Antuna Padovanskog ",
                opis: "Bista Marka Antuna de Dominisa ispred crkve sv. Antuna Padovanskog na početku Srednje ulice. Crkva je načinjena 1678. godine, donator Francesco Brazza. Bista je djelo akademskog kipara Koste Angelija Radovani. Na postamentu piše Marcus Antonius de Dominis 1560-1624.",
                id: 6
            },
            {
                ime: "Portal palače Nimira na Rabu",
                opis: "Portal palače Nimira na Rabu, rad Andrije Alešija arhitekta i kipara, jednog od najznačajnijih umjetničkih osobnosti hrvatske umjetnosti petnaestog stoljeća. Palača obitelji Nimira (Nemira) nalazi se na sjevernoj strani grada Raba, uz same gradske zidine, u Donjoj ulici preko puta velike palače Dominis. Nastala je postepenom dogradnjom nekadašnje romaničke kuće uz koju je u 15. stoljeću dodan trijem i formiran prostor dvorišta s bunarom, te je palača dobila prepoznatljiv izgled višeetažnog reprezentativnog plemićkog zdanja. Bila je urešena zidnim oslicima i vrsnim klesanim kamenim elementima od kojih je svakako najpoznatiji dvorišni portal iz 15. stoljeća. Portal se veže uz rad majstora Andrije Alešija na Rabu, podsjećajući na portal koji je on klesao za obitelj Crnota tijekom svojeg boravka na otoku. Početkom 20. stoljeća veći je dio palače srušen čemu je razlog bilo dotrajalo i loše stanje građevine, a najvećim dijelom njezina zapadnog krila. U drugoj polovini 20. stoljeća potpuno je pregrađeno preostalo istočno krilo na kojem su do danas ostale sačuvane gotičke monofore s trolisnim lukovima i akroterijem u tjemenu, ugrađene na mjesto starijih romaničkih prozorskih otvora. Također, od prepoznatljivih elemenata nekadašnje palače Nimira, ostao je tek južni ogradni zid dvorišta i ranije spomenuti klesani kameni portal.",
                id: 7
            },
            {
                ime: "Crkva sv. Ivana na Rabu ",
                opis: "Samostan i crkva sv. Ivana Evanđelista jedina je srednjovjekovna sakralna građevina s ophodom oko oltara na otoku Rabu. Bazilika je izgrađena je vjerojatno u pretkršćanskom razdoblju i obnovljena tijekom romaničkog razdoblja, kada je dobila zvonik visok 20 metara. Prelazila je iz ruke u ruku (izvorni benediktinski samostan predan je franjevcima u 13. stoljeću), a potpuno je propala u 19. stoljeću.",
                id: 8
            }]
        }
        else if (sadrzaj=="portreti"){var cards = [{
            ime: "",
            opis: "<p>Nepoznati slikar, Portret Marka Antuna de Dominisa, Hrvatski povijesni muzej, Zagreb, ulje na platnu, dim. 75,5 x 55 cm</p>",
            id: 1,
        }, 
        {
            ime: "",
            opis: "<p>Willem Jacobs Delff, (prema Dominisovom zagubljenom portretu kojeg je načinio Michiell Van Mierevelt 1616. godine u Haagu), Hrvatski državi arhiv, Zagreb, bakrorez, 12,5x18 cm</p>",
            id: 2
        },
        {
            ime: "",
            opis: "<p>Domenico Tintoretto (?), Portret Marka Antuna de Dominisa, Chatsworth, Devonshire Collections, ulje na platnu, bez okvira 152,6x109,5cm</p>",
            id: 3
        }, {
            ime: "",
            opis: "<p>Raffaelo Mele (?), Portret Marka Antuna de Dominisa, Biskupova palača Split, ulje na platnu, 64,5x53 cm</p>",
            id: 4
        }, {
            ime: "",
            opis: "<p>Nepoznati autor, Portret Marka Antuna de Dominisa, načinjen prema Michiell Van Miereveltu i otisnut 1617. kod John Billa u londonskom izdanju Dominisova djela <em>De republica ecclesiastica</em> posjeduju Nacionalna i sveučilišna knjižnica u Zagrebu i Hrvatska akademija znanosti i umjetnosti u Zagrebu.</p>",
            id: 5
        },
        {
            ime: "",
            opis: "<p>Renols Elstracke, Portret Marka Antuna de Dominisa, Konzervatorski odjel Ministarstva kulture u Splitu, bakrorez, ploča 17,1x12,2 cm</p>",
            id: 6
        },
        {
            ime: "",
            opis: "<p>Nekoliko primjeraka grafike Dominisova portreta, kojeg je načinio Abraham Blotelling (?) i otisnuo kod tiskara Paulusa Fursta nalazi se u Hrvatskoj: u fondu Arheološkog muzeja u Splitu, u grafičkoj zbirci Hrvatskog državnog arhiva u Zagrebu, u Hrvatskom povijesnom muzeju u Zagrebu, Zbirci Baltazara Bogišića u Cavtatu i u privatnoj zbirci N. Cambi u Splitu.</p>",
            id: 7
        },
        {
            ime: "",
            opis: "<p>Bista Marka Antuna de Dominisa, djelo akademskog kipara Kosta Angeli Radovani, postavljena godine u Rabu izmeđunajveće renesansne palače na Rabu - palače „Dominis,“ na početku Srednje ulice i cekve sv. Antuna iz 17. stoljeća. Na postamentu piše Marcus Antonius de Dominis 1560-1624.</p>",
            id: 8
        }]}
       

        if (razina == 1) {

            cards = cards.slice(0, 4)

        }

        function shuffle(array) {
            var currentIndex = array.length,
                temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

        cards = shuffle(cards);

        cards = cards.slice(0, broj_karata);

        Memory.init(cards);
        $(".brojevi").addClass("crveni_broj");

        if (razina == 1) {
            $(".card").css({
                "width": "25%",
                "height": "50%"
            })
        } else if (razina == 2) {
            $(".card").css({
                "width": "25%",
                "height": "25%"
            })
        }

        $(".back").addClass("pozadina-biti");
    }
});

