var slika, naslov, retci, stupci, opis;

function broj() {
    $("#broj-puzzla").html($("#retci").val() * $("#stupci").val())
}

$(document).ready(function() {
    $(".modal").fadeIn("slow");
    $(".footer").fadeIn("slow");
    $("#broj-puzzla").html(retci * stupci)
    broj();
    $('select').css({
        'font-size': '18px',
        'font-family': "sans-serif"
    });
    promijeni_jezik()
});


// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it

function promijeni_jezik() {
    if (localStorage.getItem("jezik") == null) {
        localStorage.setItem('jezik', 'hr')
    }
    if (localStorage.getItem("jezik") == "hr") {

        $(".hrvatski").css({
            "opacity": "1"
        })
        $(".engleski").css({
            "opacity": "0.5"
        })

        $(".hr").show()
        $(".eng").hide()

    } else {
        localStorage.setItem('jezik', 'eng')
        $(".engleski").css({
            "opacity": "1"
        })
        $(".hrvatski").css({
            "opacity": "0.5"
        })
        $(".eng").show()
        $(".hr").hide()
    }
}


function stvori() {
    if (naslov == "Dominisov rodni zavičaj – Rab") {
        opis = "<p>Marko Antun de Dominis rođen je 1560. godine na otoku Rabu, u obitelji čije plemenito porijeklo seže u rana stoljeća rapskog srednjovjekovlja. Sin je učenog pravnika i pjesnika Jeronima Dominisa i majke Marije iz venecijanske obitelji Vellutelli. Obiteljsko je prezime Dominis nastalo od hipokoristika osobnog imena Dominik (Dominicijus) ili od njegovih inačica Demanja, Dominja, Domana. U literaturi se navodi da Dominisi izvode svoje porijeklo od loze krčkih knezova koji se kasnije prozvaše Frankopanima. Po majci, pripadao je i glasovitoj talijanskoj obitelji Theobaldi, iz koje je potekao i papa Grgur X. (1271. – 1276.). Rodoslovlje Dominisa, koje je oko 1600. godine sastavio sam Marko Antun de Dominis nosi naslov <em>Arber Frangipana sive de Dominis</em>. Izvornim podacima provjereno rodoslovlje obitelji započinje od 1283. godine sa Stjepanom de Dominisom, sinom rapskog sudca. Uspinjući se u gradskoj plemićkoj i crkvenoj hijerarhiji, Dominisi postupno prelaze lokalne okvire Raba. Stječu imanja na Pagu, Cresu, Dugom otoku i Lošinju, priskrbljuju biskupsku stolicu u Jakinu (Ancona) i Velikom Varadinu (Oradea) u Ugarskoj. Postaju rapski poklisari na kraljevskom dvoru u Budimu i stječu vlastelinski naslov među plemstvom grada Zadra. Zahvaljujući ugledu na europskim dvorovima, osobito povezanosti s napuljskim i ugarskim kraljevskim dvorom, Dominisi postaju delegati carske vlasti s povlasticama kojima su se mogli služiti na čitavom teritoriju Svetog Rimskog Carstva. Carskom poveljom izdanom u Pragu 26. kolovoza 1433. godine imenovani su namjesničkim grofovima, zajedno sa svojim potomcima. Osim kao crkveni poglavari i učeni ljudi, Dominisi su se kao podanici ugarske krune i mletačkih vlasti isticali i kao ratni zapovjednici u borbama s Osmanlijama zapovijedajući kršćanskom vojskom u bitci kod Varne. Također, u dugoj tradiciji koja se prenosila s očeva na sinove, bili su zapovjednici (soprakomiti) rapske galije, i kao takvi sudjelovali i u bitci kod Levanta. Marko Antun de Dominis zasigurno je stasajući u humanističkom ozračju obiteljskog doma, u krugu moćne plemićke obitelji Dominis te sa snažnom povezanošću s tradicijom i nasljeđem, već u ranoj dobi usvojio univerzalne visoke duhovne ciljeve kojima je stremio čitav život.</p>"
    } else if (naslov == "Willem Jacobs Delff, (prema Dominisovom zagubljenom portretu kojeg je načinio  Michiell Van Mierevelt 1616. godine u Haagu), Hrvatski državi arhiv, Zagreb, bakrorez, 12,5x18 cm") {
        opis = ""
    } else if (naslov == "Loreto - Isusovačko učilište na kome se školovao Dominis") {
        opis = "Školovanje je započeo u humanističkom ozračju obitelji i rodnoga Raba. Plemićka obitelj Dominis tradicionalno je skrbila za obrazovanje nadarenih članova, smatrajući ga važnim za opstanak i prosperitet obitelji u tim teškim vremenima. Uzorom i prvim učiteljem bio mu je stric, senjski biskup Antun de Dominis, uskočki heroj preminuo u boju s Turcima koji je imao snažan utjecaj na odgoj mladog Marka Antuna s kojim je dijelio mnoge zajedničke vrijednosti, jasnu svijest o vlastitom identitetu u odnosu na zajednice kojima su služili i privrženost tradiciji predaka. Dominisovu napretku uvelike je doprinio nastavak školovanja među Isusovcima. Već u dvanaestoj godini poslan je u isusovački Hrvatski kolegij u Loretu (Collegio Illirico di Loreto), gdje je pohađao gimnaziju i učio gramatiku, retoriku i moralnu teologiju. Kolegij je bio namijenjen školovanju hrvatskih klerika, kako bi poslije služili Crkvi i svom rodnom kraju, a učenici su pri dolasku prisezali da će postati svećenicima te da će se vratiti u domovinu i ondje služiti Crkvi. U dobi od devetnaest godina Dominis 1579. pristupa Družbi Isusovoj u Novellari, a potom odlazi na studij u Veronu gdje uči filozofiju te istodobno mlađim studentima predaje književnost. Tijekom studija dobiva izvrsno obrazovanje i formira široke intelektualne interese. Moli poglavare da ga pošalju u prekomorske misije, međutim ostavljen je u Italiji i od 1587. do 1591. godine studira teologiju u Padovi, gdje je ujedno predavač-lektor matematike i prirodopisa. U tom razdoblju bio je uz redovničke dužnosti potpuno posvećen znanstvenom radu i tada je napisao koncept svoja dva fizikalna djela koja će objaviti dvadesetak godina kasnije. Nakon završetka studija 1592. godine odlazi u Bresciju i ondje predaje prvo retoriku, a zatim logiku i filozofiju do konca 1595. godine kada odlazi u Rim. Tada nakon pogibije njegova strica Antuna de Dominisa, senjskoga biskupa, u protuturskom boju pod Klisom 1596. godine, završava razdoblje Dominisova mirnog, znanstvenog i redovničkog života a započinje njegov uspon u crkvenoj hijerarhiji i burno razdoblje javnog, crkvenog, političkog i diplomatskog djelovanja."
    } else if (naslov == "Raffaelo Mele (?), Portret Marka Antuna de Dominisa, Biskupova palača Split, ulje na platnu, 64,5x53 cm") {
        opis = ""
    } else if (naslov == "Dalekozor - novi instrument 17. stoljeća") {
        opis = '<p>Dominis je već kao mlad u razdoblju od 1587. do 1591. godine, dok je predavao matematiku u Padovi, napisao dva zapažena djela iz fizike, koja je objavio više od dva desetljeća kasnije. Uključivši se ubrzo nakon što ih je napisao u visoke crkvene i diplomatske službe, nije više imao vremena za bavljenje znanošću. Godine 1608. u Veneciji je demonstriran prvi dalekozor, rad nizozemskih optičara, izazvavši veliko zanimanje. Na nagovor Giovannia Bartolia,  svog nekadašnjeg učenika, koji je smatrao da se u Dominisovim starim profesorskim skriptama iz optike već nalaze neka temeljna načela koja bi mogla protumačiti rad dalekozora, Dominis je potaknut Galilejevim pokušajima konstruiranja i predstavljajem dalekozora u javnosti iz druge polovice 1609. godine, odlučio dopuniti stari tekst novim istraživanjima o dalekozoru i objaviti sve u sklopu svoje pred dva desetljeća napisane rasprave <em>De radiis visus et lucis in vitris perspectivis et iride</em> (<em>O zrakama vida i svjetlosti u lećama i u dugi</em>). Objavljena 1611. godine, prvo je djelo u kojem se nastoji protumačiti dalekozor, novi instrument koji će znanosti otvoriti nebeske prostore. Dalekozor nije bio plod znanosti. Prvo ga je konstruirao nizozemski optičar Hans Lippershey. U proljeće 1609. godine tijekom posjeta Veneciji Galileo je vidio istrumet i dojmila ga se ideja pa je ubrzo konstruirao takav uređaj shvativši njegovu važnost u istraživanju svemira. U djelu Dominis teorijski obrazlaže rad dalekozora i tumači pojavu duge. Na temelju mnogobrojnih pokusa s lećama Dominis je stekao ispravnu, premda samo kvalitativnu predodžbu o lomu zraka svjetlosti te proučava uvjete uz koje bi kombinacija leća imala isti učinak kao dalekozor. Najvažniji Dominisov prinos je njegovo teoretsko objašnjenje dalekozora i zaključak da je povećanje slike predmeta ovisno o povećanju vidnog kuta, koji je prethodno ispravno definirao.</p>'
    } else if (naslov == "Utvrda Nehaj iznad Senja -  uporište uskocima za obranu od Osmanlija i Mlečana") {
        opis = "<p><strong>Dominis kao senjski biskup i diplomat na strani svoga naroda</strong><p>Nakon vrlo uspješne karijere na sveučilištima u Veroni, Bresciji i Padovi, prva stepenica u Dominisovom usponu crkvenom hijerarhijom bio je položaj senjskog biskupa. Pogibijom njegova strica Antuna de Dominisa, senjskoga biskupa u boju protiv Osmanlija pod Klisom 27. svibnja 1596. godine, postao je konkurentom za upražnjenu biskupsku stolicu i zatražio odstupanje iz Isusovačkoga reda. Premda ga je Rudolf II., kao svjetovni poglavar Svetog Rimskog Carstva Njemačke Narodnosti neposredno nakon smrti strica imenovao <em>izabranim senjskim biskupom</em>, Sveta Stolica ga je u to vrijeme samo potvrdila kao apostolskog upravitelja senjske biskupije, dok je papinsku potvrdu imenovanja senjskim biskupom i upraviteljem modruške biskupije čekao gotovo četiri godine i dobio tek u ožujku 1600. godine.<p>Dužnost senjskog biskupa Dominis službeno je obnašao svega dvije godine, od 13. kolovoza 1600. do 16. studenog 1602. godine. Međutim, njegova uloga u rješavanju senjskih problema i pitanja uskoka započinje nekoliko godina ranije Nastojeći smiriti odnose između Mletačke Republike i Habsburškog Carstva, papa Klement VIII. u rujnu 1598. godine, povjerava Dominisu posredništvo između Republike i  Carstva u rješavanju pitanju senjskih uskoka, budući su mu obje strane bile sklone. Zbog prirode problema Dominisovo djelovanje u tom razdoblju  uvjetovano je političkim okolnostima i bilo je više diplomatske i svjetovne, nego crkvene naravi. Dominis je uložio znatne napore da se problem riješi demilitarizacijom uskoka, koje bi se nakon razvojačenja privodilo mirnodobskim zanimanjima, poljodjelstvu, stočarstvu i trgovini. Kako je za plan seobe i smještaja uskoka trebalo osigurati suglasnost i financijsku potporu svih uključenih strana, Dominis je bio u diplomatskoj misiji u razdoblju od 1599. do 1601. godine. Tražeći pomoć za uskoke putovao je caru Rudolfu u Prag, austrijskom nadvojvodi Ferdinandu II. u Graz, kranjskim staležima u Ljubljanu i vlastima u Veneciju. Usprkos Dominisovim naporima uskoci, mletačke i carske vlasti nisu postigle dogovor. Uskoci nisu prihvaćali plan demilitarizacije i preseljenja, a nakon što je carski general  Rabatta 1601. godine iznenada dao pogubiti njihove vođe i njih dvjesto pedeset  prisilno preselio preko Velebita, uskoci su iz osvete ubili Rabattu i zaprijetili smrću samom Dominisu. O Dominisovoj ulozi u rješavanju uskočkog pitanja potrebno je prosuđivati isključivo na temelju provjerenih povijesnih izvora i uzimajući u obzir kontekst razine njegovog djelovanja i ograničenja koja je imao, kao što je to načinio otac hrvatske moderne kritičke historiografije Franjo Rački, a ne kao što je čest slučaj na temelju sadržaja s prikazom Dominisa nepotkrijepljenim provjerenim izvorima, kao što je iskrivljena i romantizirana slika Dominisa koju je August Šenoa izgradio za potrebe svog romana <em>Čuvaj se senjske ruke</em>."
    } else if (naslov == "Nepoznati slikar, Portret Marka Antuna de Dominisa, Hrvatski povijesni muzej, Zagreb, ulje na platnu, dim. 75,5 x 55 cm") {
        opis = ""
    } else if (naslov == "Faust Vrančić - hrvatski učenjak, biskup, izumitelj svjetskog glasa, otac hrvatske leksikografije kancelar Ugarske i Transilvanije.") {
        opis = "Dominis se intelektualnim i duhovnim interesima zbližio sa znamenitim Šibenčaninom Faustom Vrančićem, ocem hrvatske leksikografije i glasovitim izumiteljem. Upoznali su se u razdoblju između 1599. i 1601. godine kada je Dominis nastojeći osigurati potporu za seobu i smještaj uskoka iza Velebita, boravio na carskom dvoru u Pragu, na kojem je Vrančić bio vrlo utjecajan kao dugogodišnji tajnik cara i kralja Rudolfa II. Zbog svoje pozicije, Vrančić je bio upućen u postojeće probleme i Dominisova nastojanja, kada je kao senjski biskup nekoliko godina revno obilazio velikaške dvorove u Pragu, Grazu i Veneciji nastojeći osigurati rješenje problema, pomoći uskocima i svim silama pokušavao spasiti što se u datim okolnostima moglo. I nakon tog razdoblja ostali su povezani. Dijelili su mnoge zajedničke sklonosti i nazore, a Vrančić mu je nekoliko godina kasnije povjerio i recenziju svog djela Logica nova."
    } else if (naslov == "Duga kao predmet Dominisovih fizikalnih istraživanja") {
        opis = "<p>Dominis raspravu <em>De radiis visus et lucis in vitris perspectivis et iride</em> (<em>O zrakama vida i svjetlosti u lećama i u dugi</em>) objavljuje u Veneciji 1611. godine. To je prvo je djelo u kojem se nastoji protumačiti dalekozor, novi instrument koji će znanosti otvoriti nebeske prostore. U djelu Dominis teorijski obrazlaže rad dalekozora i tumači pojavu duge. Na temelju mnogobrojnih pokusa s lećama Dominis je stekao ispravnu, premda samo kvalitativnu predodžbu o lomu zraka svjetlosti te proučava uvjete uz koje bi kombinacija leća imala isti učinak kao dalekozor. Najvažniji Dominisov prinos je njegovo teoretsko objašnjenje dalekozora i zaključak da je povećanje slike predmeta ovisno o povećanju vidnog kuta, koji je prethodno ispravno definirao.<p>Eksperimentirajući sustavno uz pomoć uređaja koje je sam izradio, prije svega sa staklenim kuglama ispunjenim vodom došao je do izvornog doprinosa u tumačenju duge. Ustanovio je da se svjetlost odbija i na unutrašnjoj stjenki kišne kapi i tako protumačio nastanak unutrašnjeg luka duge. Duga po Dominisu nastaje odbijanjem i lomom svjetlosne zrake u kapljici kiše. Prvu dugu dobro je objasnio, ali drugoj nije našao prava uzroka.<p>Tijekom 18. stoljeća Dominisovo je tumačenje duge doživjelo različite prosudbe znamenitih učenjaka: od velikih pohvala Isaaca Newtona i Christiana Wolffa do kritičkih ocjena Ruđera Boškovića, Christiana Hygensa i Josepha Priestleya. Početkom 19. stoljeća priznanjima se pridružio i Goethe u svom prirodoznanstvenom djelu <em>Zur Farbenlehre</em> (<em>O teoriji boja</em>). Može se kazati da se Dominisov pristup istraživanju svjetlosnih fenomena, baš kao i onaj njegovih velikih suvremenika Galileja i Keplera, temelji na vezi eksperimentalno-induktivnih i matematičko-deduktivnih metoda. Njegovo djelo<em> De radiis visus</em> ima značajnu vrijednost u povijesti optike i obilježja novog vremena."
    } else if (naslov == "Mala palača Dominis, Rab – nasljeđe plemičke oitelji Dominis") {
        opis = "<p>Marko Antun de Dominis rođen je 1560. godine na otoku Rabu, u obitelji čije plemenito porijeklo seže u rana stoljeća rapskog srednjovjekovlja. Sin je učenog pravnika i pjesnika Jeronima Dominisa i majke Marije iz venecijanske obitelji Vellutelli. Obiteljsko je prezime Dominis nastalo od hipokoristika osobnog imena Dominik (Dominicijus) ili od njegovih inačica Demanja, Dominja, Domana. U literaturi se navodi da Dominisi izvode svoje porijeklo od loze krčkih knezova koji se kasnije prozvaše Frankopanima. Po majci, pripadao je i glasovitoj talijanskoj obitelji Theobaldi, iz koje je potekao i papa Grgur X. (1271. – 1276.). Rodoslovlje Dominisa, koje je oko 1600. godine sastavio sam Marko Antun de Dominis nosi naslov <em>Arber Frangipana sive de Dominis</em>. Izvornim podacima provjereno rodoslovlje obitelji započinje od 1283. godine sa Stjepanom de Dominisom, sinom rapskog sudca. Uspinjući se u gradskoj plemićkoj i crkvenoj hijerarhiji, Dominisi postupno prelaze lokalne okvire Raba. Stječu imanja na Pagu, Cresu, Dugom otoku i Lošinju, priskrbljuju biskupsku stolicu u Jakinu (Ancona) i Velikom Varadinu (Oradea) u Ugarskoj. Postaju rapski poklisari na kraljevskom dvoru u Budimu i stječu vlastelinski naslov među plemstvom grada Zadra. Zahvaljujući ugledu na europskim dvorovima, osobito povezanosti s napuljskim i ugarskim kraljevskim dvorom, Dominisi postaju delegati carske vlasti s povlasticama kojima su se mogli služiti na čitavom teritoriju Svetog Rimskog Carstva. Carskom poveljom izdanom u Pragu 26. kolovoza 1433. godine imenovani su namjesničkim grofovima, zajedno sa svojim potomcima. Osim kao crkveni poglavari i učeni ljudi, Dominisi su se kao podanici ugarske krune i mletačkih vlasti isticali i kao ratni zapovjednici u borbama s Osmanlijama zapovijedajući kršćanskom vojskom u bitci kod Varne. Također, u dugoj tradiciji koja se prenosila s očeva na sinove, bili su zapovjednici (soprakomiti) rapske galije, i kao takvi sudjelovali i u bitci kod Levanta. Marko Antun de Dominis zasigurno je stasajući u humanističkom ozračju obiteljskog doma, u krugu moćne plemićke obitelji Dominis te sa snažnom povezanošću s tradicijom i nasljeđem, već u ranoj dobi usvojio univerzalne visoke duhovne ciljeve kojima je stremio čitav život.</p>"
    } else if (naslov == "Grb plemićke obitelji Dominis – Europska visoka elita hrvatskoga kova") {
        opis = "<p>Marko Antun de Dominis rođen je 1560. godine na otoku Rabu, u obitelji čije plemenito porijeklo seže u rana stoljeća rapskog srednjovjekovlja. Sin je učenog pravnika i pjesnika Jeronima Dominisa i majke Marije iz venecijanske obitelji Vellutelli. Obiteljsko je prezime Dominis nastalo od hipokoristika osobnog imena Dominik (Dominicijus) ili od njegovih inačica Demanja, Dominja, Domana. U literaturi se navodi da Dominisi izvode svoje porijeklo od loze krčkih knezova koji se kasnije prozvaše Frankopanima. Po majci, pripadao je i glasovitoj talijanskoj obitelji Theobaldi, iz koje je potekao i papa Grgur X. (1271. – 1276.). Rodoslovlje Dominisa, koje je oko 1600. godine sastavio sam Marko Antun de Dominis nosi naslov <em>Arber Frangipana sive de Dominis</em>. Izvornim podacima provjereno rodoslovlje obitelji započinje od 1283. godine sa Stjepanom de Dominisom, sinom rapskog sudca. Uspinjući se u gradskoj plemićkoj i crkvenoj hijerarhiji, Dominisi postupno prelaze lokalne okvire Raba. Stječu imanja na Pagu, Cresu, Dugom otoku i Lošinju, priskrbljuju biskupsku stolicu u Jakinu (Ancona) i Velikom Varadinu (Oradea) u Ugarskoj. Postaju rapski poklisari na kraljevskom dvoru u Budimu i stječu vlastelinski naslov među plemstvom grada Zadra. Zahvaljujući ugledu na europskim dvorovima, osobito povezanosti s napuljskim i ugarskim kraljevskim dvorom, Dominisi postaju delegati carske vlasti s povlasticama kojima su se mogli služiti na čitavom teritoriju Svetog Rimskog Carstva. Carskom poveljom izdanom u Pragu 26. kolovoza 1433. godine imenovani su namjesničkim grofovima, zajedno sa svojim potomcima. Osim kao crkveni poglavari i učeni ljudi, Dominisi su se kao podanici ugarske krune i mletačkih vlasti isticali i kao ratni zapovjednici u borbama s Osmanlijama zapovijedajući kršćanskom vojskom u bitci kod Varne. Također, u dugoj tradiciji koja se prenosila s očeva na sinove, bili su zapovjednici (soprakomiti) rapske galije, i kao takvi sudjelovali i u bitci kod Levanta. Marko Antun de Dominis zasigurno je stasajući u humanističkom ozračju obiteljskog doma, u krugu moćne plemićke obitelji Dominis te sa snažnom povezanošću s tradicijom i nasljeđem, već u ranoj dobi usvojio univerzalne visoke duhovne ciljeve kojima je stremio čitav život.</p>"
    } else if (naslov == "Splitska katedrala sv. Dujma na Peristilu - Dominis kao nadbiskup u Splitu i primas Dalmacije i Hrvatske") {
        opis = "<p>Za Dominisova boravka u Rimu preminuo je splitski nadbiskup Domenico Foconi. Rimska Kurija je za njegova nasljednika favorizirala udinskog dekana Marzia Andreuccija koji je tada bio u službi papina sinovca, kardinala Cinzija Aldobrandinija. Na molbu splitskoga Kaptola, uz pristanak gradskoga Velikog vijeća i podršku Mlečana, Dominis je uspio ishoditi imenovanje. Splitskim nadbiskupom Dominisa imenuje papa Klement VIII., 16. XI. 1602. godine pritom mu odredivši da Andreucciju – kojem je kao utješna nagrada dodijeljen naslov biskupa u Trogiru – kao svom protukandidatu godišnje isplaćuje „odštetu“ od petsto dukata.  U Splitu je uz dijecezanske poslove Dominis poučavao svećeničke kandidate matematici, logici i teologiji te pisao svoje teološke rasprave i životno djelo <em>De republica ecclesiastica </em>(<em>O crkvenoj državi</em>), ali se zapleo i u nove dugotrajne sukobe. Istodobno našao se u sporu s Andreuccijem, koji je, postavši trogirskim biskupom, i dalje tražio plaćanje odštete <em>pro nominandis</em>, a Dominis nije uspio u vezi s time dobiti potporu od Rimske Kurije kada je potkraj 1604. godine boravio u Rimu. Radilo se o vrlo visokoj svoti koja je i u prosperitetnom razdoblju dosezala trećinu ukupnih prihoda nadbiskupije, a u tom razdoblju neposredne opasnosti od Turaka i pošasti kuge koja je poharala stanovništvo i prihode bila i objektivno neostvariva, pa se Dominis s razlogom opirao teškom nametu.</p><p>Kada je 1606. godine zbog razmirica sa splitskim Kaptolom boravio u Veneciji, zategnutost između Rimske kurije i Venecije dosegnula je vrhunac nakon interdikta pape Pavla V. nad Republikom. Papa interdiktom između ostalog zabranjuje kleru vršenje crkvenih funkcija na mletačkom teritoriju. Dominis  je odbio pokoriti se i stao u obranu Republike, istupivši protiv nastojanja pape da svoj autoritet nametne svjetovnoj vlasti. Dokazujući da papino miješanje u poslove svjetovne vlasti nije u skladu s crkvenim zakonima i vjerskim načelima, Dominis je dao pisani prilog toj polemici u raspravi <em>Dell’auttorità legitima et potestà de principi temporali nel far leggi et governare lo stato suo, contra le vane pretensioni della corte Romana </em>(<em>O legitimnoj vlasti i moći zemaljskih knezova u donošenju zakona i upravljanju svojom državom, protiv ispraznih pretenzija rimskog dvora</em>), koju je uručio mletačkoj vladi 1606. godine. Dominis je već i ranije bio zapleten u spor s Kurijom u vezi uvjeta vezanih za njegovo imenovanje za splitskog nadbiskupa. Međutim njegov kritički stav prema Rimu imao je dublje korijene i izvirao je iz njegova nezadovoljstva autokratskim načinom na koji je Crkva bila vođena, korumpiranošću i nemoralom u Kuriji te iznad svega trgovanjem oprostima i iskorištavanjem raširenih praznovjerja kao grubim iskrivljivanjem izvornog kršćanskog nauka.</p>"
    }else if (naslov == "Dominisov sukob s Rimskom kurijom") {
        opis = "<p>Rimska kurija nije opraštala buntovnom kleru i Dominis je zbog podrške koju je davao Mletačkoj Republici 1606. tijekom  interdikta pape Pavla V. nad Republikom i nakon ukinuća interdikta 1607.  bio izložen stalnom pritisku i osporavanju. Između 1607. i 1616. godine više puta je duže boravio u Mlecima i u jednoj se prilici zadržao čak dvije i po godine. Kao glavne razloge dugih izbivanja iz Splita navodio je potrebu da s papinskim nuncijem i mletačkim vlastima pregovara o rješenju svoga spora s trogirskim biskupom. Međutim, potajno je započeo intenzivno raditi na svom djelu <em>De republica ecclesiastica </em>(<em>O crkvenoj državi</em>) i trebao mu je pristup u bogate mletačke biblioteke, a pripremao je za tisak i svoj fizikalni prvijenac <em>De radiis visus et lucis in vitris perspectivis et iride</em> (<em>O zrakama vida i svjetlosti u lećama i dugi</em>), kojeg je većim dijelom napisao dvadesetak godina ranije. Njegove teološke preokupacije nisu nikada ugasile njegov interes za znanost. Dok oficijelno pregovara o sporu s trogirskim biskupom, najveći dio vremena provodi u istraživanju, pisanju, sređivanju svojih tekstova napisanih u Splitu, koje će ugraditi u tekst svog glavnog teološkog djela. Iste godine 1611. kada objavljuje <em>De radiis visus</em>, dovršava pisanje prve knjige svog djela <em>De republica ecclesiastica </em>u kojemu će izložiti razloge svog ideološkog raskida s papinstvom.</p><p>Neraspoloženje Kurije prema Dominisu još se više pooštrilo kada se u Rimu 1612. godine saznalo da splitski nadbiskup priprema opsežno teološko djelo protiv pape i politike Katoličke crkve te mu je preporučivano da odustane od pisanja. Nezadovoljan i ogorčen, Dominis je 1613. godine odlučio uzeti pomoćnika i za to je mjesto predlagao Vicka de Franceschija iz Kopra. Papinsko dopuštenje tražio je pisanim putem i nije se odazvao pozivu da dođe u Rim, vjerojatno zbog već tada opravdana straha od inkvizicije. Primivši poziv da dođe na »razgovor« u Rim slutio je najgore te se odlučio skloniti na sigurnije mjesto, pa je navodeći zdravstvene razloge, otputovao u Mletke.</p><p>Isto tako, kada je spor s Andreuccijem htio riješiti njegovim ekskomuniciranjem, otišao je na početku 1614. godine u Veneciju umjesto u Rim, da tamošnjem papinu nunciju iznese svoje razloge za takav postupak. Tom je prilikom Dominis počeo pregovarati o mogućnostima svog odlaska u Englesku sa sir Dudleyem Carletonom, tadašnjim engleskim poslanikom u Veneciji i kasnijim glavnim posrednikom i organizatorom njegova odlaska u London. Kada je Rim odbio njegovu molbu da uzme pomoćnika i preporučio mu da se odrekne nadbiskupije, Dominis je to i učinio. Upravo u to vrijeme dovršavao je u splitskoj prvostolnici otvaranje istočnog zida i gradnju kora. Papa je prihvatio njegovu ostavku i u listopadu 1616. godine za splitskog nadbiskupa imenovan je Mlečanin Sforza Ponzoni.</p>"
    }else if (naslov == "Venecija, bazilika sv. Marka – Dominis u službi Mletačke Republike") {
        opis = "<p>Dominis je dugo godina uživao povjerenje mletačkih vlasti i podršku uz pomoć koje je izabran za senjskog biskupa, a potom i za splitskog nadbiskupa.  Uzvratio je podršku Mletačkoj Republici 1606. tijekom  interdikta pape Pavla V. nad Republikom. Naime, kada je 1606. godine zbog razmirica sa splitskim Kaptolom boravio u Veneciji, zategnutost između Rimske kurije i Venecije dosegnula je vrhunac nakon interdikta pape Pavla V. nad Republikom. Papa interdiktom između ostalog zabranjuje kleru vršenje crkvenih funkcija na mletačkom teritoriju. Dominis  je odbio pokoriti se i stao u obranu Republike, istupivši protiv nastojanja pape da svoj autoritet nametne svjetovnoj vlasti. Dokazujući da papino miješanje u poslove svjetovne vlasti nije u skladu s crkvenim zakonima i vjerskim načelima, Dominis je dao pisani prilog toj polemici u raspravi <em>Dell’auttorità legitima et potestà de principi temporali nel far leggi et governare lo stato suo, contra le vane pretensioni della corte Romana </em>(<em>O legitimnoj vlasti i moći zemaljskih knezova u donošenju zakona i upravljanju svojom državom, protiv ispraznih pretenzija rimskog dvora</em>), koju je uručio mletačkoj vladi 1606. godine. Dominis je već i ranije bio zapleten u spor s Kurijom u vezi uvjeta vezanih za njegovo imenovanje za splitskog nadbiskupa. Međutim njegov kritički stav prema Rimu imao je dublje korijene i izvirao je iz njegova nezadovoljstva autokratskim načinom na koji je Crkva bila vođena, korumpiranošću i nemoralom u Kuriji te iznad svega trgovanjem oprostima i iskorištavanjem raširenih praznovjerja kao grubim iskrivljivanjem izvornog kršćanskog nauka. I nakon ukinuća interdikta 1607. godine, Dominis je bio izložen stalnom pritisku i osporavanju rimske kurije. Između 1607. i 1616. godine više puta je duže boravio u Mlecima i u jednoj se prilici zadržao čak dvije i po godine. Kao glavne razloge dugih izbivanja iz Splita navodio je potrebu da s papinskim nuncijem i mletačkim vlastima pregovara o rješenju svoga spora s trogirskim biskupom. Međutim, potajno je započeo intenzivno raditi na svom djelu <em>De republica ecclesiastica </em>(<em>O crkvenoj državi</em>) i trebao mu je pristup u bogate mletačke biblioteke, a pripremao je za tisak i svoj fizikalni prvijenac <em>De radiis visus et lucis in vitris perspectivis et iride</em> (<em>O zrakama vida i svjetlosti u lećama i dugi</em>), kojeg je većim dijelom napisao dvadesetak godina ranije. Njegove teološke preokupacije nisu nikada ugasile njegov interes za znanost. Dok oficijelno pregovara o sporu s trogirskim biskupom, najveći dio vremena provodi u istraživanju, pisanju, sređivanju svojih tekstova napisanih u Splitu, koje će ugraditi u tekst svog glavnog teološkog djela. Iste godine 1611. kada objavljuje <em>De radiis visus</em>, dovršava pisanje prve knjige svog djela <em>De republica ecclesiastica </em>u kojemu će izložiti razloge svog ideološkog raskida s papinstvom.<p>Neraspoloženje Kurije prema Dominisu još se više pooštrilo kada se u Rimu 1612. godine saznalo da splitski nadbiskup priprema opsežno teološko djelo protiv pape i politike Katoličke crkve te mu je preporučivano da odustane od pisanja. Nezadovoljan i ogorčen, Dominis je 1613. godine odlučio uzeti pomoćnika i za to je mjesto predlagao Vicka de Franceschija iz Kopra. Papinsko dopuštenje tražio je pisanim putem i nije se odazvao pozivu da dođe u Rim, vjerojatno zbog već tada opravdana straha od inkvizicije. Primivši poziv da dođe na »razgovor« u Rim slutio je najgore te se odlučio skloniti na sigurnije mjesto, pa je navodeći zdravstvene razloge, otputovao u Mletke.<p>Isto tako, kada je spor s Andreuccijem htio riješiti njegovim ekskomuniciranjem, otišao je na početku 1614. godine u Veneciju umjesto u Rim, da tamošnjem papinu nunciju iznese svoje razloge za takav postupak. Tom je prilikom Dominis počeo pregovarati o mogućnostima svog odlaska u Englesku sa sir Dudleyem Carletonom, tadašnjim engleskim poslanikom u Veneciji i kasnijim glavnim posrednikom i organizatorom njegova odlaska u London. Kada je Rim odbio njegovu molbu da uzme pomoćnika i preporučio mu da se odrekne nadbiskupije, Dominis je to i učinio. Upravo u to vrijeme dovršavao je u splitskoj prvostolnici otvaranje istočnog zida i gradnju kora. Papa je prihvatio njegovu ostavku i u listopadu 1616. godine za splitskog nadbiskupa imenovan je Mlečanin Sforza Ponzoni."
    }else if (naslov == "Galileio pokazuje dalekozor Senatu Mletačke Replike  - O otkriću dalekozora") {
        opis = "<p>Dalekozor kao izum bio je plod dugogodišnjih nastojanja i praktičnog otkrića. Konstrukcija je realizirana slučajno, prikladno posloženim lećama,  a zasigurno nije nastala na temelju teorijskog razmatranja. Prvi dalekozori su djelo praktičnih majstora optičara i konstruirani su u Nizozemskoj 1608. godine. Trgovac i optičar Hans Lippershey (1570-1619) iz Middelburga prvi ga je javno prikazao u Veneciji i pokušao dobiti patent. U ljeto 1609. upravo kada je Galilei boravio u Veneciji doznao je o posjetu Lippersheya, koji je Senatu došao ponuditi novi optički instrument čudesnih mogućnosti. Galilea je impresionirao novi instrument. Planirao je preko utjecajnog znanca Paola Sarpija na neko vrijeme usporiti pregovore Nizozemca sa Senatom, kako bi imao vremena konstruirati vlastiti dalekozor s još boljim mogućnostima i ponuditi ga Senatu. Galilei se u svezi s dalekozorom prvo iskazao kao osoba koja ima velike vještine preciznog konstruiranja instrumenta jer u kratkom vremenu neposredno nakon što je vidio nizozemski izum, konstruirao je vlastiti dalekozor s većim povećanjem i bez skrupula prezentirao ga mletačkom duždu i Senatu kao vlastiti izum, vidjevši u tome sjajnu priliku, budući da mu je jedno drugo njegovo konstrukcijsko poboljšanje od prije postojećeg instrumenta - računskog mjerila,  nazvanog geometrijsko-vojni šestar i zasnovanog na principu razmjernih veličina, već donosio znatan prihod. Dakle, Galilei nije bio prva osoba koja je konstruirala praktični izum za gledanje dalekih objekata – dalekozor, iako ga je predstavljao kao vlastiti izum. Pored toga što dalekozor nije bio Galileov izum, on zasigurno nije bio ni prva osoba koja je usmjerila dalekozor prema zvjezdanom nebu, jer poznato je da je prije Galileia ugledni engleski astronom Thomas Harriott prvi dalekozorom opažao i nacrtrao karte Mjeseca već u srpnju 1609. godine, a nakon toga sustavno je istraživao sunčane pjege i druge pojave. Galilei je među prvima vjerovao u moć dalekozora kao instrumenta uz kojeg će prikupiti dokaze u prilog Kopernikovoj teoriji. Kao protivnik peripatetičkih teorija i sklon Kopernikovoj teoriji nadao se uporabom dalekozora u astronomskim motrenjima naći dokaze u prilog Zemljina gibanja i heliocentričnog sustava, i pri tom ponekad nije birao načina ni sredstva a važnost njegovih otkrića koja je žurno objavljivao, promijenila je zauvijek ljudsko poimanje prirode svemira. Premda je dalekozor prvotno izazvao senzaciju kao instrument od iznimne važnosti zbog mogućnosti primjene u pomorstvu, ratovanju i slično, tek nešto kasnije imao je odjeka u znanstvenoj zajednici i astronomi su ga počeli sustavno koristili u astronomskim motrenjima. Izumom dalekozora u astronomiji je započela nova epoha u istraživanjima svemira. Treba istaknuti činjenicu da do susreta s nizozemskim instrumentom, Galileo se do 1609. ponajviše bavio problemima mehanike i nije se osobito zanimao za optiku, a upravo mogućnosti dalekozora su ga potaknule na intenzivna astronomska motrenja koja su ubrzo dala značajna otkrića.  Premda je instrument izazvao senzaciju i lavinu zainteresiranih, među kojima je bio i velik broj skeptika i osporavatelja, Galileo je teorijski problem dalekozora i potrebu njegova teorijskog tumačenja ostavio po strani, usmjerivši se na njegovu primjenu u astronomiji, tako da u tom razdoblju usprkos činjenici da ga je konstruirao i koristio,  nije znao teorijski i egzaktno rastumačiti rad novog instrumenta. O tome svjedoči njegova kratka astronomska rasprava <em>Sidereus nuncius</em> (Zvjezdani glasnik), objavljena u ožujku 1610., posvećena toskanskom vojvodi Cosimu II. de‘ Mediciju i napisana s ciljem da opiše i rastumači svoja astronomska otkrića ostvarena uz pomoć dalekozora, kojeg samo kratko opisuje u uvodnom dijelu  rasprave.</p>"
    }else if (naslov == "Domenico Tintoretto, Portret Marka Antuna de Dominisa, Chatsworth, Devonshire Collections, ulje na platnu, bez okvira 152,6x109,5cm") {
        opis = ""
    }else if (naslov == "Dominisovo životno djelo De republica ecclesiastica (O crkvenoj državi)") {
        opis = "<p><em>De republica ecclesiastica</em> (<em>O crkvenoj državi</em>) monumentalna je teološka rasprava splitskog nadbiskupa Marka Antuna de Dominisa. Prema izvornom autorovu naumu trebala je obuhvaćati deset knjiga, no tiskano ih je samo osam, u tri glomazna sveska – prvi svezak, koji je sadržavao prve četiri knjige, objavio je John Bill 1617. godine u Londonu, drugi, s petom i šestom knjigom, tiskan je u tiskari Johannesa Fridrika Weissa 1620. godine u Frankfurtu, a posljednji je svezak, sa sedmom i devetom knjigom, izdan je dvije godine kasnije u Hanau. Bez nenumeriranih pratećih kazala djelo obaseže 1689 stranica s po dva stupca i 70 redaka.<p>Podrobni prikaz koncepcije i sadržaja svih planiranih deset knjiga <em>Crkvene države</em> Dominis izlaže u djelu u kojemu izlaže razloge svoga odlaska iz Italije, objavljenom 1616. godine u Londonu, što je posebice značajno zbog činjenice da osma i deseta knjiga nikada nisu tiskane. Prva se bavi analizom ustrojstva i jurisdikcije idealne »crkvene države«, koja bi po autorovu mišljenju trebala poslužiti kao uzor za temeljitu reformu Rimokatoličke Crkve. U drugoj se raspravlja o položaju i djelovanju biskupa i ostalih crkvenih službenika, te značenju svetoga reda. Treća donosi opis biskupske hijerarhije te tumačenje autoriteta nadbiskupa, primasa i patrijarha. Četvrta je knjiga posvećena posebno osjetljivom teološkom pitanju – primatu pape i Rimske Crkve, dok u petoj autor raščlanjuje prirodu crkvene vlasti te iznosi svoj stav glede sakramenata i cenzura. Šesta knjiga donosi usporednu analizu crkvene duhovne i laičke svjetovne vlasti, pri čemu Dominis Crkvi osporava svaku ovlast u svjetovnoj sferi. U sedmoj knjizi opisuje unutrašnju upravu crkve te raspravlja o ovlastima crkve i pape u teološko-dogmatskim pitanjima, o crkvenim saborima, krivovjerjima i raskolima, a u devetoj knjizi, posljednjoj objavljenoj, piše o svjetovnim dobrima crkve i njihovoj upravi te se ujedno bavi se i pitanjima desetine, beneficija, zloupotrebama crkvenih prihoda, mirovinama, nadarbinama i oporukama klerika. Osma je knjiga trebala tematizirati izvanjsku crkvenu upravu, crkveno zakonodavstvo i sudsku vlast, obvezu obdržavanja kanona, oproste, propise za postove, molitve i slično, dok je u desetoj njizi Dominis namjeravao pružiti tumačenje crkvene slobode i planirao obraditi i pitanje crkvenih povlastica i njihovih zloupotreba, izuzeća, podložnosti monaha i redovnika i slično.<p>Iz predgovora, upućenoga »zboru biskupa svete Katoličke crkve« mogu se iščitati temeljna polazišta Dominisove kritike Katoličke crkve, da bi se potom, u pojedinačnim knjigama, izložila sustavna argumentacija s osloncem na autoritet sv. Pisma, crkvenih otaca (npr. Ciprijan, Jeronim, sv. Ivan Zlatousti), crkvenih kanona, koncilskih zaključaka i ostalih tradicijskih spisa. Autorova je temeljna intencija povratiti Katoličku crkvu njezinu izvornom liku Crkve Kristove, što smatra nužnim preduvjetom za ostvarenje ireničkoga cilja – prevladavanju konfesionalnih sukoba i uspostavi jedinstva svih kršćanskih crkvi. S osloncem na dogmatske i ideološko-političke zasade episkopalizma, Dominis nastoji osporiti papinski primat, koji smatra protupravnom uzurpacijom stranom originalnom duhu nauka Kristove Crkve, nudeći kao alternativu demokratičniji oblik biskupske uprave. Sukladno tome kritizira simoniju, nepotizam i ostale crkvene zloupotrebe, smatrajući da bi se papinske ovlasti, kao i ovlasti s njime izjednačenih patrijarha, trebale odnositi isključivo na duhovnu domenu. Držeći da bi reformom Crkve prema tvrdnjama koje je iznio konačno bile ukinute i posljednje prepreke sjedinjenju svih kršćanskih crkava, za tu ideju u sedmoj knjizi nastoji mobilizirati svjetovne vladare. Jednako tako promovira ideal siromaštva prvotne crkve, apelirajući na dužnosnike Rimokatoličke crkve da se odreknu materijalnih dobara. Takvom radikalnom distinkcijom između sakralnoga i svjetovnoga Dominisova se teološka misao izravno naslanja na ideološke zasade augustinovske tradicije.<p>U svojoj se vehementnoj argumentaciji Dominis posebice kritički obara na stavove dvojice eminentnih reformnokatoličkih teologa, C. Baronija i R. Bellarmina, priklanjajući se stavovima Georgea Cassandera i ostalih suvremenih ireničkih teologa. Zbog iznošenja neortodoksnih eklezijalno-dogmatskih nazora bliskih protestantizmu, Dominisova je <em>Crkvena država</em> neposredno po objavljivanju stavljena na rimski Indeks zabranjenih knjiga, a izazvala je i val polemičkih pamfleta u gotovo čitavoj Europi. Istodobno autoru priskrbljuje počasni doktorat teologije na sveučilištu u Cambridgeu.<p>U formalnom pogledu ovo de Dominisovo djelo slijedi uvriježene žanrovske obrasce polemičke teološke rasprave. Kao specifično obilježje njegove retoričke strukture valja izdvojiti naglašenu autorefleksivnost autorske instance što se očituje ne samo na razini argumentacije, nego i u brojnim metatekstualnim ekskursima. Gledano u cjelini, Marko Antun de Dominis se u <em>Crkvenoj državi</em>  iskazao kao vrstan retoričar čiji diskurs objedinjuje najkvalitetnije konceptualne i stilske zasade antičke polemike i katoličke kontroverzistike. Osim toga, njegova se reformistička teologija s pravom može ubrojiti u sam vrh kasnohumanističke europske irenike."
    }else if (naslov == "Windsor – kralj dodjeljuje Dominisu titulu dekana kraljevskog kaptola u Windsoru") {
        opis = "<p>Svečano dočekan, Dominis se smjestio u palači Lambeth canterburyjskog nadbiskupa Georga Abbota i uživao osobitu naklonost kralja Jakova I., koji je cijenio političku i diplomatsku vrijednost od prisutnosti istaknutog rimokatoličkog prebjega. London u tom razdoblju živi bogatim kulturnim, političkim  javnim životom. Upriličuju se javne teološke rasprave na kojima se diskutira o pravima i ovlastima papa i kraljeva za široku publiku od posebnog interesa zbog svojih direktnih političkih implikacija. Engleska tada proživljava razdoblje kulturnog, gospodarskog i političkog uzleta, vrijeme je to velikana poput Shakespearea, Francisa Bacona i niza utemeljitelja moderne znanosti, stoljeće kada je engleski stvaralački genij iskovao ideje i jezik koji će ući u temelje moderne europske civilizacije.</p><p>Odmah po dolasku, Dominis počinje pripremati za tisak svoje kapitalno djelo <em>De republica ecclesiastica </em>(<em>O crkvenoj državi</em>). Potkraj rujna ili na početku listopada 1617. godine izišao je prvi svezak i izazvao snažan dojam i mnoge komentare u čitavoj Europi, rimsku zabranu čitanja i mnoštvo polemičnih spisa i pamfleta. Dominis, tada odlazi u posjetu engleskim sveučilištima i u Cambridgeu mu je svečano dodijeljen doktorat iz teologije, čime je postao prvi Hrvat koji je dobio tu titulu na nekom engleskom sveučilištu. Potkraj 1617. godine, počeo je držati propovijedi u talijanskoj crkvi u Londonu (Mercers’ Chapel), a prva od njih, održana 30. studenoga, prve nedjelje u Adventu, bila je odmah tiskana u tri verzije, na talijanskom, latinskom i engleskom jeziku. Iako je već po dolasku dobio neke prihode, tek 25. ožujka 1618. godine dodijeljena mu je titula <em>Master of Savoy</em> (ravnateljsko mjesto u zadužbini Savoy), čime je kao vlastitu rezidenciju dobio palaču Savoy, i nedugo zatim 13. svibnja 1618. godine kralj mu na iznenađenje mnogih engleskih prelata dodjeljuje titulu dekana kraljevskog kaptola u Windsoru, čime je postao kraljev privatni kapelan. To je snažno uzdiglo njegov socijalni profil, ugled i utjecaj a nosilo je i velik redovit prihod. Imenovanjem je stekao položaj koji je bio u rangu biskupa i osigurao mu mjesto na dvoru, a kao uvjet morao je položiti formalnu prisegu kralju, prihvaćajući njegovu vrhovnu jurisdikciju ne samo u svjetovnim već i u crkvenim pitanjima. Smatralo se da je tom je prisegom, <em>de facto</em> postao članom Anglikanske crkve. Mletački poslanik je u izvješću kojim obavještava o događanjima na engleskom dvoru zapisao da je na dvorskoj svečanosti u ceremoniji Reda podvezice (<em>Order of the Garter</em>) uz kralja i brojne lordove, stajao ogrnut crvenim biskupskim plaštem koji je sezao do poda i »bivši splitski nadbiskup koji danomice napreduje u naklonosti i cijeni zbog svojih knjiga, koje su uvelike po volji kralju«.</p>"
    }else if (naslov == "Engleski kralj Jakov I.  – Dominis postaje kraljev privati kapelan") {
        opis = "<p>Svečano dočekan, Dominis se smjestio u palači Lambeth canterburyjskog nadbiskupa Georga Abbota i uživao osobitu naklonost kralja Jakova I., koji je cijenio političku i diplomatsku vrijednost od prisutnosti istaknutog rimokatoličkog prebjega. London u tom razdoblju živi bogatim kulturnim, političkim  javnim životom. Upriličuju se javne teološke rasprave na kojima se diskutira o pravima i ovlastima papa i kraljeva za široku publiku od posebnog interesa zbog svojih direktnih političkih implikacija. Engleska tada proživljava razdoblje kulturnog, gospodarskog i političkog uzleta, vrijeme je to velikana poput Shakespearea, Francisa Bacona i niza utemeljitelja moderne znanosti, stoljeće kada je engleski stvaralački genij iskovao ideje i jezik koji će ući u temelje moderne europske civilizacije.</p><p>Odmah po dolasku, Dominis počinje pripremati za tisak svoje kapitalno djelo <em>De republica ecclesiastica </em>(<em>O crkvenoj državi</em>). Potkraj rujna ili na početku listopada 1617. godine izišao je prvi svezak i izazvao snažan dojam i mnoge komentare u čitavoj Europi, rimsku zabranu čitanja i mnoštvo polemičnih spisa i pamfleta. Dominis, tada odlazi u posjetu engleskim sveučilištima i u Cambridgeu mu je svečano dodijeljen doktorat iz teologije, čime je postao prvi Hrvat koji je dobio tu titulu na nekom engleskom sveučilištu. Potkraj 1617. godine, počeo je držati propovijedi u talijanskoj crkvi u Londonu (Mercers’ Chapel), a prva od njih, održana 30. studenoga, prve nedjelje u Adventu, bila je odmah tiskana u tri verzije, na talijanskom, latinskom i engleskom jeziku. Iako je već po dolasku dobio neke prihode, tek 25. ožujka 1618. godine dodijeljena mu je titula <em>Master of Savoy</em> (ravnateljsko mjesto u zadužbini Savoy), čime je kao vlastitu rezidenciju dobio palaču Savoy, i nedugo zatim 13. svibnja 1618. godine kralj mu na iznenađenje mnogih engleskih prelata dodjeljuje titulu dekana kraljevskog kaptola u Windsoru, čime je postao kraljev privatni kapelan. To je snažno uzdiglo njegov socijalni profil, ugled i utjecaj a nosilo je i velik redovit prihod. Imenovanjem je stekao položaj koji je bio u rangu biskupa i osigurao mu mjesto na dvoru, a kao uvjet morao je položiti formalnu prisegu kralju, prihvaćajući njegovu vrhovnu jurisdikciju ne samo u svjetovnim već i u crkvenim pitanjima. Smatralo se da je tom je prisegom, <em>de facto</em> postao članom Anglikanske crkve. Mletački poslanik je u izvješću kojim obavještava o događanjima na engleskom dvoru zapisao da je na dvorskoj svečanosti u ceremoniji Reda podvezice (<em>Order of the Garter</em>) uz kralja i brojne lordove, stajao ogrnut crvenim biskupskim plaštem koji je sezao do poda i »bivši splitski nadbiskup koji danomice napreduje u naklonosti i cijeni zbog svojih knjiga, koje su uvelike po volji kralju«.</p>"
    }else if (naslov == "Povratak u Rimu – u rukama inkvizicije zatoče u Ađeoskoj tvrđavi") {
        opis = "<p>Potkraj travnja 1622. godine Dominis napušta Englesku u pratnji Schwarzenberga, imperijalnog poslanika njemačko-rimskog cara u Pragu i s njim odlazi u Bruxelles. Gost je papinskoga nuncija i tu ga čeka papin <em>Breve</em> datiran 8. siječnja 1622.  godine u kojem ga papa potiče da se što prije vrati <em>ex tabernaculis impiorum</em>, iz kuća bezbožnika, te mu obećava milosrđe i apostolski blagoslov. Međutim  morao je prvo biti ispitan pred nuncijem i dva svjedoka, a potom se »od svoje slobodne volje« javno pokajati o čemu je načinjen zapisnik. Zatim je preko Francuske i Švicarske stigao u Rim. Pokajnički povratak jednog tako istaknutog prelata i apostate imao je za Rimokatoličku crkvu veliku duhovnu i političku vrijednost, pa pokajničko priznanje u Bruxellesu nije bilo dovoljno.<p>Stoga se Dominis 29. listopada 1622. godine, u Rimu javno pokajao i dobio papino oproštenje, a tražilo se i da u posebnom spisu povuče svoje ranije optužbe protiv Rimokatoličke crkve i javno osudi sve oblike protestantske hereze. To je objavio početkom 1623. u knjižici <em>Marcus Antonius de Dominis, Archiepiscopus Spalatensis, sui reditus ex Anglia consilium exponit </em>(<em>Marko Antun de Dominis, splitski nadbiskup, objašnjava plan povratka iz Engleske</em>), u kojoj piše o razlozima koji su ga naveli da napusti Englesku.<p>Time je izgledalo sve riješeno, ali iste godine u srpnju umire papa Grgur XV., a njegov nasljednik papa Urban VIII. nakon nekoliko mjeseci uz pomoć Inkvizicije pokreće nastavak istrage protiv Dominisa. Utamničen je od mjeseca travnja 1624. godine u Anđeoskoj tvrđavi iz koje neće izići živ. Dominis je u rujnu nenadano obolio i umro. Star i bolestan u svojoj tamničkoj muci morao je priželjkivati smrt kao izbavljenje. Dominisovo tijelo bilo je smješteno u mrtvačnicu, gdje je ostalo do svršetka procesa 21. prosinca 1624. godine, kada je posmrtno izrečena osuda u crkvi Santa Maria sopra Minerva kojom je proglašen krivim. Prema osudi Inkvizicije koja glasi: »Osuđujemo uspomenu umrlog Marka Antonija de Dominisa, bivšega splitskog nadbiskupa, na vječnu sramotu, lišavamo ga svih časti, funkcija i beneficija, konfisciramo sve njegove posjede i dobra u korist Sv. Oficija. Izbacujemo njegovu uspomenu, njegovo ovdje prisutno zadržano tijelo, njegovu sliku i njegove spise iz Crkve, čijeg se milosrđa on za života pokazao nedostojnim, ... te tražimo da njegovi spisi budu javno spaljeni«, inkvizicijskom je odredbom Dominisov leš izvađen iz lijesa, provučen ulicama Rima a potom javno spaljen zajedno s njegovom slikom i knjige na rimskom Cvjetnom trgu, a potom pepeo bačen u Tiber. Poput mnogih velikih idealista i vizionara u raskoraku s vlastitim vremenom završio je prezren i odbačen od sviju."
    }else if (naslov == "Windsor – Dominisovi novi problemi na obzoru") {
        opis = "<p>Dominisov nagli uspon izazvao je neprijateljstvo i zavist okoline, a time započinju njegovi novi problemi. Imenovanje za windsorskog dekana bilo je vrhunac njegova uspona i početak njegova dramatičnog pada. Njegove teološke ideje o fundamentalnom jedinstvu crkve ne prolaze dobro kod radikalnih protestanata koji ne žele čuti o rimskom katoličanstvu. Najveći dio slobodna vremena Dominis posvećuje pisanju i već iste godine kada je imenovan dekanom, 1618., izdaje knjižicu koju je započeo pisati još za vrijeme svog boravka u Heidelbergu, pod naslovom <em>Scogli del christiano</em> <em>naufragio </em>(<em>Hridine kršćanskog brodoloma)</em>, u kojoj razvija i dopunjava argumente protiv papinstva te priprema za tisak Sarpijevo djelo <em>Istoria del Concilio Tridentino</em>, koju objavljuje 1619. godine prvo na talijanskom a potom i na engleskom jeziku, pod imenom Pietro Soave Polano, što je anagram Sarpijeva imena.<p>Unatoč postignutim počastima i blagostanju, nove političke struje i okolnosti u osvit Tridesetogodišnjeg rata, dovode do toga da  Dominisov ugled na dvoru počinje slabiti. Njegov položaj ovisio je isključivo o kraljevoj naklonosti i dobroj volji. Situacija se pogoršala prilikom diplomatskih pregovora o planiranom englesko-španjolskom kraljevskom braku, što je u političkom pogledu značilo neizbježno poboljšanje odnosa Engleske s Katoličkom crkvom. Dok zabrinuto prati razvoj događaja, Dominis traži način da s papom stupi u kontakt i vodi intenzivnu prepisku s prijateljima u Mletcima, posebno s Paolom Sarpijem. Godine 1621. stupio je u vezu sa španjolskim poslanikom u Londonu Gondmarom, koji je uspio ostvariti dugo pripremanu i dobro smišljenu nakanu inkvizicije da namami Dominisa u Rim. Na Dominisovu odluku da napusti Englesku utjecalo je 1621. godine ustoličenje novoga pape Grgura XV. (Alessandro Ludovisi), koji je prethodno bio njegov učitelj i prijatelj. Odlučivši se za odlazak, Dominis piše 16. I. 1622. godine kralju Jakovu pismo u kojemu ga izvješćuje da je pozvan u Rim od samog pape i ujedno traži od njega dopuštenje za odlazak. Kralj je bio krajnje indigniran tom Dominisovom odlukom pa mu je zabranio pristup na dvor. Da bi raščistio spor i saznao prave Dominisove namjere, poslao je 31. siječnja 1622. godine londonskog i durhamskog biskupa i dekana winchesterskog da u njegovo ime ispitaju Dominisa. Dominisov pokušaj da kralja privoli na mogućnost sjedinjenja s Katoličkom crkvom rezultirao je kraljevom naredbom da u roku od dvadeset dana zauvijek napusti Englesku. Dominis 23. ožujka 1622. godine podnosi ostavku na ravnateljsko mjesto u zadužbini Savoy, a ubrzo zatim i na položaj windsorskog dekana. Njegov boravak u Engleskoj završava u kaosu optužaba i rekriminacija. Engleski službenici mu oduzimaju imovinu uz optužbe da je nezakonito prisvojio neko zlato i srebro te da je iznosom gotovog novca koji je namjeravao iznijeti iz zemlje prekršio carinske propise. Radilo se o zakonito stečenom novcu i darovima, koja su mu na Dominisovu pisanu pritužbu poslanu iz Bruxellesa, prema kraljevoj naredbi i vraćena."
    }else if (naslov == "Splitska katedrala sv. Dujma – O Dominisovom duhovnom nasljeđu") {
        opis = "<p>Za Dominisa je postojalo jedno bitno pitanje – povijesna uloga Crkve u vremenu širenja reformacije i kada je Europa vjerski, duhovno i politički bila dezintegrirana. Svi Dominisovi teološki, politički i životni nesporazumi, a i okvir i bit cjelokupnoga njegova opusa, izviru iz osnovnoga stava da Crkva više  nije ostvarenje izvorne zamisli Kristove, da je postala previše svjetovna na štetu svoje duhovne biti, a glavni uzrok tome vidi u papinu primatu, koji proglašava protupravnom uzurpacijom i poriče ga kao tuđa izvornom kršćanstvu. Cjelokupnu kritiku Crkve temelji na sustavnom proučavanju Svetog pisma, patristike, crkvenih kanona, zaključaka starih koncila i ostalih tradicijskih kršćanskih izvora. Tražeći način kojim bi Crkva trebala reformirati svoj pojavni oblik, primjereniji njenoj duhovnoj naravi,  Dominis rješenje nalazi u njezinu pročišćenju od svega svjetovnog. Dominisov put zacrtan je idejom sjedinjenja svih religija, odnosno crkveih institucija jer drži da bi se kreativnim pomirenjem tada postojećih kršćanskih denominacija maksimalno približilo izvornim patrističkim koncepcijama o djelovanju Crkve  kao širiteljice Kristova nauka. On inzistira na povratku temeljima kršćanstva jer drži da samo duhovne zajednice osnovane na demokratskim načelima prvotnoga kršćanstva mogu dovesti ljude do mira i slobode. Izmirenje i sjedinjenje svih crkava Dominis postavlja kao svrhu i krajnji cilj svog djelovanja, jer samo mir i jedinstvo među svim crkvama i kršćanskim narodima, temeljeni na osnovnim idejama Istine, Ljubavi i Slobode, jesu ono što omogućuje smislen i svrhovit život i za pojedica i za ljudsku zajednicu.</p>"
    }

    if (localStorage.getItem("jezik") == "hr") {
        confirm_button = "nova igra"
    } else {
        confirm_button = "new game"
    }
    $("#replay").fadeIn("slow")
    retci = $("#retci").val();
    stupci = $("#stupci").val();
    $(".modal").fadeOut("slow");
    $(".footer").fadeOut("slow");
    // SCALING OPTIONS
    // scaling can have values as follows with full being the default
    // "fit"	sets canvas and stage to dimensions and scales to fit inside window size
    // "outside"	sets canvas and stage to dimensions and scales to fit outside window size
    // "full"	sets stage to window size with no scaling
    // "tagID"	add canvas to HTML tag of ID - set to dimensions if provided - no scaling
    var scaling = "fit"; // this will resize to fit inside the screen dimensions
    if (window.innerWidth >= 1040) {
        var width = 1920;
        var height = 1200;
    } else {
        var width = 1200;
        var height = 1600;
    }
    var countPieces = 0;
    var totalPieces = 0;
   var allowDefault=false;
    // as of ZIM 5.5.0 you do not need to put zim before ZIM functions and classes
    
var frame = new Frame({
    scaling:scaling, // or other scaling options
    width:width,
    height:height,
    allowDefault:true // let HTML scroll, page up, wheel, etc.
});
    
    frame.on("ready", function() {
        zog("ready from ZIM Frame"); // logs in console (F12 - choose console)
        var stage = frame.stage;
        var stageW = frame.width;
        var stageH = frame.height;
        var puzzleX;
        var puzzleY;
        frame.outerColor = "#707070";
        frame.color = "#E9DDCF";
        var con = new Container
            // with chaining - can also assign to a variable for later access
        var imageObj = [];
        var piecesArrayObj = [];
        frame.loadAssets([slika], "assets/");

        var label = new Label({
            text: "CLICK",
            size: 60,
            font: "sans-serif",
            color: "#3228B0",
            rollColor: "#2c1c9a",
            fontOptions: "italic bold"
        });

        var label2 = new Label({
            text: "CLICK",
            size: 40,
            font: "sans-serif",
            color: "#3228B0",
            rollColor: "#2c1c9a",
            fontOptions: "italic bold"
        });


        stage.addChild(label);
        stage.addChild(label2);
        label.x = label.y = 20;
        label2.y = 20;
        label2.x = stageW - 210;
        label.on("click", function() {
            zog("clicking");
        });

        label2.on("click", function() {
            location.reload();
        });

        frame.on("complete", function() {
            imageObj = frame.asset(slika).clone();
            imageObj.addTo(con);
            imageObj.alpha = 0.2;

            var piecesArray = new Array();
            var horizontalPieces = retci;
            var verticalPieces = stupci;
            var obj = getQueryString();
            zog(obj)
            if (obj) {
                horizontalPieces = obj.row;
                verticalPieces = obj.column;
            }
            var imageWidth = imageObj.width;
            var imageHeight = imageObj.height;
            var pieceWidth = Math.round(imageWidth / horizontalPieces);
            var pieceHeight = Math.round(imageHeight / verticalPieces);
            var gap = 40;
            totalPieces = horizontalPieces * verticalPieces;

            puzzleX = frame.width / 2 - imageWidth / 2;
            puzzleY = frame.height / 2 - imageHeight / 2;
            imageObj.pos(puzzleX, puzzleY);
            zog(puzzleX, puzzleY);

            label.text = countPieces + "/" + totalPieces;

            label2.text = confirm_button



            for (j = 0; j < verticalPieces; j++) {
                piecesArrayObj[j] = [];
                for (i = 0; i < horizontalPieces; i++) {
                    var n = j + i * verticalPieces;

                    var offsetX = pieceWidth * i;
                    var offsetY = pieceHeight * j;


                    var x8 = Math.round(pieceWidth / 8);
                    var y8 = Math.round(pieceHeight / 8);

                    piecesArrayObj[j][i] = new Object();
                    piecesArrayObj[j][i].right = Math.floor(Math.random() * 2);
                    piecesArrayObj[j][i].down = Math.floor(Math.random() * 2);

                    if (j > 0) {
                        piecesArrayObj[j][i].up = 1 - piecesArrayObj[j - 1][i].down;
                    }
                    if (i > 0) {
                        piecesArrayObj[j][i].left = 1 - piecesArrayObj[j][i - 1].right;
                    }

                    piecesArray[n] = new Rectangle({
                        width: pieceWidth,
                        height: pieceHeight,

                    });



                    var tileObj = piecesArrayObj[j][i];
                    var s = new Shape

                    var context = s.graphics;
                    s.drag();
                    s.mouseChildren = false;
                    s.addEventListener("pressup", function(e) {
                        var mc = e.currentTarget;

                        var xx = Math.round(mc.x);
                        var yy = Math.round(mc.y);

                        if (xx < puzzleX + gap / 2 && xx > puzzleX - gap / 2 && yy < puzzleX + gap / 2 && yy > puzzleY - gap / 2) {
                            mc.x = puzzleX;
                            mc.y = puzzleY;
                            mc.noDrag();
                            mc.addTo(mc.parent, 0);
                            mc.mouseChildren = false;
                            mc.mouseEnabled = false;
                            mc.hint.visible = false;
                            countPieces++;
                            label.text = countPieces + "/" + totalPieces;
                            zog("countPieces", countPieces);
                            if (countPieces == totalPieces) {
                                swal({
                                    html: '<h1 style="text-align:center">' + naslov + '</h1><img src="assets/' + slika + '" class="ikone2"/><br><br><p>' + opis + '</p>',
                                    confirmButtonText: confirm_button,
                                    allowOutsideClick: false
                                });
                                $('.swal2-confirm').click(function() {
                                    location.reload();
                                });
                            };
                           
                            stage.update();

                        }

                    });
                    context.setStrokeStyle(3, "round");
                    var commandi1 = context.beginStroke(createjs.Graphics.getRGB(0, 0, 0)).command;
                    //
                    var commandi = context.beginBitmapFill(imageObj.image).command;


                    context.moveTo(offsetX, offsetY);

                    if (j != 0) {
                        context.lineTo(offsetX + 3 * x8, offsetY);
                        if (tileObj.up == 1) {
                            context.curveTo(offsetX + 2 * x8, offsetY - 2 * y8, offsetX + 4 * x8, offsetY - 2 * y8);
                            context.curveTo(offsetX + 6 * x8, offsetY - 2 * y8, offsetX + 5 * x8, offsetY);
                        } else {
                            context.curveTo(offsetX + 2 * x8, offsetY + 2 * y8, offsetX + 4 * x8, offsetY + 2 * y8);
                            context.curveTo(offsetX + 6 * x8, offsetY + 2 * y8, offsetX + 5 * x8, offsetY);
                        }
                    }
                    context.lineTo(offsetX + 8 * x8, offsetY);
                    if (i != horizontalPieces - 1) {
                        context.lineTo(offsetX + 8 * x8, offsetY + 3 * y8);
                        if (tileObj.right == 1) {
                            context.curveTo(offsetX + 10 * x8, offsetY + 2 * y8, offsetX + 10 * x8, offsetY + 4 * y8);
                            context.curveTo(offsetX + 10 * x8, offsetY + 6 * y8, offsetX + 8 * x8, offsetY + 5 * y8);
                        } else {
                            context.curveTo(offsetX + 6 * x8, offsetY + 2 * y8, offsetX + 6 * x8, offsetY + 4 * y8);
                            context.curveTo(offsetX + 6 * x8, offsetY + 6 * y8, offsetX + 8 * x8, offsetY + 5 * y8);
                        }
                    }
                    context.lineTo(offsetX + 8 * x8, offsetY + 8 * y8);
                    if (j != verticalPieces - 1) {
                        context.lineTo(offsetX + 5 * x8, offsetY + 8 * y8);
                        if (tileObj.down == 1) {
                            context.curveTo(offsetX + 6 * x8, offsetY + 10 * y8, offsetX + 4 * x8, offsetY + 10 * y8);
                            context.curveTo(offsetX + 2 * x8, offsetY + 10 * y8, offsetX + 3 * x8, offsetY + 8 * y8);
                        } else {
                            context.curveTo(offsetX + 6 * x8, offsetY + 6 * y8, offsetX + 4 * x8, offsetY + 6 * y8);
                            context.curveTo(offsetX + 2 * x8, offsetY + 6 * y8, offsetX + 3 * x8, offsetY + 8 * y8);
                        }
                    }
                    context.lineTo(offsetX, offsetY + 8 * y8);
                    if (i != 0) {
                        context.lineTo(offsetX, offsetY + 5 * y8);
                        if (tileObj.left == 1) {
                            context.curveTo(offsetX - 2 * x8, offsetY + 6 * y8, offsetX - 2 * x8, offsetY + 4 * y8);
                            context.curveTo(offsetX - 2 * x8, offsetY + 2 * y8, offsetX, offsetY + 3 * y8);
                        } else {
                            context.curveTo(offsetX + 2 * x8, offsetY + 6 * y8, offsetX + 2 * x8, offsetY + 4 * y8);
                            context.curveTo(offsetX + 2 * x8, offsetY + 2 * y8, offsetX, offsetY + 3 * y8);
                        }
                    }
                    context.lineTo(offsetX, offsetY);
                    s.addTo(con);

                    var fill = new createjs.Graphics.Fill("red");

                    //var newGra = context.append(fill);
                    var hint = new Shape(); //s.clone(true);
                    hint.mouseChildren = false;
                    hint.mouseEnabled = false;
                    s.hint = hint;
                    hint.graphics = context.clone(true);
                    hint.pos(puzzleX, puzzleY);
                    // newGra.graphics = newGra;
                    hint.graphics._fill = fill;
                    hint.graphics._fill.style = null;

                    hint.addTo(con, 0);
                    //s.animate({obj:{x:frame.width-offsetX-pieceWidth,y:frame.height-offsetY-pieceHeight}, time:700});
                    //s.animate({obj:{x:-offsetX,y:-offsetY}, time:700});
                    s.animate({
                        obj: {
                            x: rand(-offsetX, frame.width - offsetX - pieceWidth),
                            y: rand(-offsetY, frame.height - offsetY - pieceHeight)
                        },
                        time: 700
                    });

                }
            }


            con.addTo(stage);
            /*con.x -= imageWidth/2;
            con.y -= imageHeight/2;*/
            stage.update();



        }); // end asset complete


        stage.update(); // this is needed to show any changes

    }); // end of ready
}