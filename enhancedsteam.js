window.addEventListener('DOMContentLoaded', function() { main(window.jQuery); }, false);

function main($) {	

	var version = "0.6-beta"

	var console_info=["%c Enhanced %cSteam Standalone v"+version+" by jshackles %c http://www.enhancedsteam.com ","background: #000000;color: #7EBE45", "background: #000000;color: #ffffff",""];
	console.log.apply(console,console_info);

	var apps;
	var appid_promises = {};

	var total_requests = 0;
	var processed_requests = 0;

	var cookie = document.cookie;
	var language = cookie.match(/language=([a-z]{3})/i)[1];
	var localized_strings,
	localization_promise = (function () {
		var deferred = new $.Deferred();
		localized_strings = {
			"bra":{about:"Sobre",acrtag_msg:"Este item não pode ser trocado entre certas regiões",acrtag_tooltip:"Este item não pode ser trocado entre certas regiões se comprado no Leste Europeu, América do Sul ou Sudeste Asiático",activates:"Ativa no Steam",add_selected_dlc_to_cart:"Adicionar selecionados ao carrinho",add_to_cart:"+ Carrinho",add_to_wishlist:"Adicionar à sua lista de desejos",add_unowned_dlc_to_cart:"Adicionar os que não possuo ao carrinho",after_coupon:"com o desconto do cupom",all:"Tudo",allreleases_products:"Selecione os tipos de produtos que deseja ver nesta seção",all_friends_own:"Todos os amigos que possuem (__friendcount__)",always:"Sempre",apppage_legal:"Informações jurídicas",apppage_purchase:"Opções de compra",apppage_sections:"Selecione as seções que deseja ver nesta página",avg_price_3cards:"Preço médio de três cartas",badges_all:"Todas as insígnias",badges_drops:"Insígnias com cartas para obter jogando",badge_completion_avg:"Custo aprox. para fabricar",badge_completion_cost:"Custo para fabricar insígnia",badge_foil_progress:"Ver progresso da insígnia brilhante",badge_not_unlocked:"Não fabricada",badge_progress:"Ver progresso da insígnia",binder_view:"Grade",birthday_message:"Feliz aniversário no Steam, __username__! A sua conta faz __age__ anos de idade hoje.",bug_feature:"Relatar bug / Sugerir recurso",bundle_saving_text:"O quanto você economiza comprando este pacote",buy:"Comprar",buying_total:"Total da encomenda",buy_wishlist:"Comprar lista de desejos",cancel:"Cancelar",cards_owned:"__owned__ de __possible__ cartas adquiridas",card_drops_remaining:"Dará mais __drops__ cartas",check_system:"Analisar requisitos",clear_cache:"Limpar dados em cache",common_label:"Ocultar jogos que você não possui",community:"Comunidade",community_name_account_header:"Sua conta (__username__)",compare:"Comparar",comparison_mode:"Ative o modo \"Todos os jogos\" para comparar jogos",contribute:"Colaborar (GitHub)",coupon_application_note:"Um cupom do seu inventário será aplicado automaticamente ao finalizar o pedido.",coupon_available:"Você possui um cupom!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Saiba mais</a> sobre Cupons Steam",credits:"Créditos",customize:"Personalizar",custom_background:"Plano de fundo personalizado",custom_background_help:"Todos os usuários do Enhanced Steam verão este plano de fundo no seu perfil. Não usuários do Enhanced Steam verão o seu plano de fundo normal.",date_unlocked:"Data",demos:"Demonstrações",discount:"Desconto",dlc:"Conteúdo adicional",dlc_data_header:"Detalhes do conteúdo adicional",dlc_details:"Detalhes do conteúdo adicional",dlc_suggest:"Sugerir uma nova categoria",donate:"Doar",drm_third_party:"Aviso: Este título usa GDD/DRM de terceiros",drm_third_party_sub:"Aviso: Um ou mais títulos neste pacote usa GDD de terceiros",drops_value:"Maior preço",drops_worth_avg:"Valor aproximado:",each:"cada",empty_cart:"Esvaziar carrinho",empty_wishlist:"Esvaziar lista de desejos",es_supporter:"Apoiador do Enhanced Steam",events:"Eventos",family_sharing_notice:"Este jogo foi excluído do serviço de Compartilhamento Familiar do Steam.",faqs:"Perguntas frequentes",forums:"Fóruns",games:"Jogos",games_all:"Todos os jogos",games_coupon:"Jogos com cupons",games_discount:"Jogos com desconto",games_installed:"Jogos instalados",games_with_booster:"Apto a receber pacotes bônus de __boostergames__ jogos",games_with_drops:"__dropsgames__ jogos darão cartas",game_name:"Nome do jogo",game_transactions:"Transações em jogos",gift_transactions:"Transações de presentes",graphics:"Gráficos",guides:"Guias",hide:"Ocultar",highlight:"Destacar",historical_low:"Menor preço registrado",homepage_carousel:"Carrossel",homepage_sidebar:"Barra lateral",homepage_spotlight:"Destaques",homepage_tabs:"Abas da página inicial",hours_short:"__hours__h",info:"Informações",item_type:"Tipo de item",language:"Idioma",last_24:"Volume: __sold__ vendido(s) nas últimas 24 horas",library_menu:"Biblioteca",loading:"Carregando...",lowest_price:"Menor preço atual",market_transactions:"Transações no Mercado",mods:"Mods",more_information:"Mais informações",most_drops:"Mais cartas para obter",net_gain:"Lucro final",net_spent:"Gastos finais",never:"Nunca",news:"Notícias",notcommon_label:"Ocultar jogos que você possui",no_results_found:"Nenhum resultado encontrado",official_group:"Grupo oficial",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Informações do pacote",packs:"Pacotes",permalink:"Permalink",playfire_heading:"Recompensas da Playfire",popular:"Populares",price:"Preço",price_options:"Opções de preço",programming:"Programação",purchase_date:"(Comprado em __date__)",purchase_total:"Total de compras",rating_details:"Ver detalhes da avaliação",region_unavailable:"Indisponível nesta região",remove:"Remover",remove_owned_wishlist:"Remover jogos que você possui da lista de desejos",reviews:"Análises",sales_total:"Total de vendas",save:"Salvar",saved:"Salvos",search:"Buscar",search_error:"Erro ao carregar mais resultados",search_error_retry:"Clique aqui para tentar novamente",search_market:"Buscar no Mercado da Comunidade Steam",search_names_only:"Buscar apenas em nomes",show:"Exibir",show_all_steam_releases:"Exibir todos os lançamentos no Steam",size:"Tamanho",software:"Softwares",sort_by:"Ordenar por:",spam_comment_show:"__num__ comentários indesejados ocultos nesta página. Clique aqui para exibi-los.",spam_comment_warn:"Lá vem...",starting_at:"A partir de",store:"Loja",stores:"Lojas",store_transactions:"Transações na loja",theworddefault:"Padrão",thewordoptions:"Opções",total_size:"Tamanho total",total_spent:"Total gasto",total_time:"Tempo total",trading_cards:"Cartas Colecionáveis Steam",translate:"Traduzir",translation:"Tradução",using_language:"Você está navegando pelo Steam em __current__.",using_language_return:"Clique aqui para navegar pelo Steam em __base__.",using_store:"Você está usando a loja Steam da região __current__.",using_store_return:"Clique aqui para voltar à loja da região __base__.",valid:"Válido",videos:"Vídeos e trailers",view:"Ver",view_all:"VER TODOS",view_astats:"Ver página no AStats",view_badge:"Ver insígnia",view_badge_foil:"Ver insígnia brilhante",view_foil_badge:"Ver progresso da insígnia brilhante",view_in:"Ver em",view_in_market:"Ver no Mercado da Comunidade",view_marketplace:"Ver no Mercado",view_normal_badge:"Ver progresso da insígnia normal",view_stats:"Ver estatísticas",view_to_scale:"Ver em escala",visit_store:"Visitar página da loja",visit_trade_forum:"Visitar fórum de troca",website:"Site",wiki_article:"Ver artigo da __pcgw__",wishlist:"Lista de desejos",achievements:{achievements:"Conquistas",includes:"Inclui __num__ conquistas Steam",option:"Exibir conquistas na página da loja",view_all:"Ver todas as conquistas"},bundle:{at_least:"Pague pelo menos",bundle_count:"Quantidade de pacotes que incluíam este jogo",header:"Pacotes que incluem este jogo",includes:"Inclui (__num__) itens",info:"Informações do pacote",offer_ends:"A oferta acaba em",pwyw:"Pague o quanto quiser"},charts:{current:"Jogadores atuais",peakall:"recorde",peaktoday:"recorde do dia",playing_now:"jogando agora"},hltb:{compl:"Completar tudo",main:"História principal",main_e:"História principal e extras",submit:"Envie o seu tempo"},library:{categories:"Categorias...",error_loading_library:"Não foi possível carregar a sua biblioteca.",genres:"Gêneros...",private_profile:"Torne o seu perfil Público <a href=\"http://steamcommunity.com/my/edit/settings\">nas suas configurações</a> para usar este recurso."},options:{about_text:"<div class=\"header\">Sobre <a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:</div><p>Enhanced Steam é uma extensão para Google Chrome que adiciona muitos recursos novos ao website do Steam.<p>Recursos incluem:<ul><li>Destacar jogos que você já possui</li><li>Destacar jogos na sua lista de desejos</li><li>Cálculo correto do desconto de pacotes com base nos jogos que você já possui</li><li>Exibir quanto você já gastou no Steam desde a criação da sua conta</li><li>Destacar conteúdo adicional (DLC) que você possui na página do jogo base</li><li>Corrigir ícones \"Sem imagem disponível\" de jogos ou conteúdos adicionais na sua lista de desejos</li><li>Apontar títulos com DRM de terceiros</li></ul><p>Caso ache esta extensão útil, considere fazer uma doação.",acrtag:"Exibir avisos em itens que não podem ser trocados entre certas regiões",api_key:"Chave da API",author_info:"por jshackles",carousel_description:"Exibir descrições de aplicativos no carrossel da página inicial da loja",cart:"itens no seu carrinho",changelog:"Últimas atualizações:",clear:"Tem certeza de que deseja restaurar as opções padrão? Isso não pode ser desfeito.",contscroll:"Ativar rolagem contínua em resultados de busca",coupon:"Itens com cupons",customizespamcommentregex:"(Personalizar)",drm:"Exibir avisos para GDD/DRM de terceiros",es_bg:"Definir plano de fundo personalizado na tela \"Editar perfil\"",excludef2p:"Não destacar jogos gratuitos para jogar",foot_link:"Extensão Enhanced Steam",friends_own:"Itens que os seus amigos possuem",friends_rec:"Itens que os seus amigos analisaram",friends_wishlist:"Itens que os seus amigos desejam",general:"Geral",gift:"Itens no seu inventário",greenlight_banner:"Substituir banner do Steam Greenlight",group_events:"Exibir eventos na página inicial do grupo",guest:"Itens dos quais você possui um passe de convidado",header:"Cabeçalho",hideactivelistings:"Ocultar todos anúncios ativos na página inicial do Mercado por padrão",hidedlcunownedgames:"Conteúdo adicional para jogos que você não possui",hidespamcomments:"Ocultar comentários de spam em perfis e páginas da Oficina",hidetmsymbols:"Símbolos de marca registrada em títulos de jogos",hide_about:"Ocultar link \"Sobre\"",hide_early_access:"Ocultar jogos com Acesso Antecipado na página inicial, de marcadores e de busca",hide_install:"Ocultar botão \"Instale o Steam\"",hide_owned:"Itens que você possui nas páginas de marcadores e de busca",hide_owned_homepage:"Itens que você possui na página inicial",hltb:"Exibir informações do site HowLongToBeat.com",html5video:"Exibir vídeos usando HTML5 em vez de Flash",inventory_market_text:"Exibir preço do Mercado na página do inventário",inventory_nav_text:"Exibir navegação avançada na página do inventário",library:"Exibir botão Biblioteca no cabeçalho",library_f2p:"Exibir jogos gratuitos para jogar e demonstrações já jogados na Biblioteca",library_header:"Biblioteca (BETA)",lowestprice:"Exibir",lowestprice_coupon:"Incluir cupons na comparação de preços",lowestprice_header:"Informações de histórico de preços",lowestprice_onwishlist:"Exibir na lista de desejos",market_total:"Exibir resumo de transações no Mercado",metacritic:"Exibir nota de usuários do Metacritic",owned:"Itens que você possui",pcgw:"Exibir links para a PCGamingWiki",profiles_link_group_game:"Jogo exclusivo",profile_api_info:"Exibir link para informações do usuário via API em perfis",profile_links:"Exibir links no perfil para",profile_link_images:"Imagens dos links",profile_link_images_color:"Coloridas",profile_link_images_gray:"Em escala de cinza",profile_link_images_none:"Nenhuma",profile_permalink:"Exibir link permanente (permalink) em perfis",regional_hideworld:"Ocultar indicador de globo",regional_price:"Comparação de preços regionais",regional_price_mouse:"ao passar o mouse no preço",regional_price_on:"Exibir comparação de preços regionais",replace_account_name:"Substituir nome de usuário pelo nome de perfil",reset:"Redefinir opções",reset_note:"Opções redefinidas",saved_note:"Opções salvas",send_age_info:"Enviar verificação de idade automaticamente quando solicitado",showallachievements:"Exibir estatísticas de conquistas na página \"Todos os jogos\"",showspeechsearch:"Adicionar busca por voz em caixas de busca",show_astatslink:"Exibir link para o site AStats em páginas de aplicativos",show_early_access_text:"Exibir faixas de Acesso Antecipado",show_languagewarning:"Exibir aviso caso esteja navegando em um idioma que não seja",show_package_info:"Exibir informações do pacote para todos os aplicativos",show_regionwarning:"Exibir aviso caso esteja navegando pela loja em região que não seja da conta",show_steamchart_info:"Exibir informações do site SteamCharts.com",show_sysreqcheck:"Exibir botão para verificar requisitos do sistema em páginas de aplicativos (Experimental!)",spamcommentregex:"String de expressão regular:",steamcardexchange:"Exibir links para o site SteamCardExchange em insígnias",steamdb:"Exibir links para o SteamDB",stores_all:"Comparar todas as lojas",tag:"Marcar",total_spent:"Exibir total gasto na página de detalhes da conta",wishlist:"Itens na sua lista de desejos",wlbuttoncommunityapp:"Exibir botão \"Adicionar à lista de desejos\" em Centrais da Comunidade",wsgf:"Exibir informações do site WSGF (Widescreen)"},ready:{errormsg:"Erro ao carregar dados do Enhanced Steam",loading:"Enhanced Steam está carregando dados...",ready:"Enhanced Steam pronto"},select:{none:"Selecionar nenhum",unowned_dlc:"Selecionar ainda não comprados",wishlisted_dlc:"Selecionar na lista de desejos"},tag:{coupon:"Cupom",friends_own:"__friendcount__ possuem",friends_rec:"Analisado por <a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ amigos",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ desejam</a>",inv_gift:"Presente",inv_guestpass:"Passe",owned:"Possuo",wishlist:"Desejo"},wallet:{custom_amount:"Adicionar quantia personalizada",custom_amount_text:"Adicione qualquer quantia acima de __minamount__"},wsgf:{gold:"Esta medalha é dada a jogos que receberam pontuações perfeitas do WSGF pela sua compatibilidade com __type__, sendo assim Certificados para uso __type__.",incomplete:"Incompleto",limited:"Esta medalha é dada a jogos que receberam uma nota final C pela sua compatibilidade com __type__.  Todos os jogos com esta nota possuem algum tipo de compatibilidade com __type__, mas podem ter problemas significativos.",silver:"Esta medalha é dada a jogos que receberam uma nota final B pela sua compatibilidade com __type__.  Todos os jogos com esta nota não possuem grandes problemas, mas pode haver um detalhe que impede a pontuação perfeita.",unsupported:"Esta pontuação é dada a jogos que não possuem compatibilidade com __type__.  O jogo pode não ser jogado no modo __type__ ou a imagem é estendida para preencher a janela. A proporção correta não é mantida."}},
			"bul":{about:"Относно",add_to_wishlist:"Добави към списък с желания.",bug_feature:"Докладвай бъг / Предложи опция",buy_wishlist:"Купи списък с желания",cancel:"Откажи",community:"Общност",donate:"Дарения",empty_wishlist:"Празен списък с желания",faqs:"Често задавани въпроси",highlight:"Подчертай",language:"Език",library_menu:"Библиютека",news:"Новини",official_group:"Официална група",official_group_url:"steamcommunity.com/groups/enhancedsteam",price:"Цена",price_options:"Ценови опции",purchase_date:"(Купено на __date__)",remove_owned_wishlist:"Премахни притежавани игри от списък с желания",store:"Магазин",thewordoptions:"Опцйи",website:"Уебсайт",options:{contscroll:"Позволи непрекъснато скролване при търсене",coupon:"Предмети с купони",customizespamcommentregex:"(Персонализиране)",drm:"Покажи предупреждения за DRM от 3-ти страни",es_bg:"Задай фон на екрана за промяна на профил",excludef2p:"Изключи безплатните игри от подчертаване",friends_own:"Предмети, които приятелите ви имат",friends_rec:"Предмети с ревюта от приятели",friends_wishlist:"Предмети, които приятелите ви искат",gift:"Предмети, запазени като подаръци",greenlight_banner:"Замени банера на Steam Greenlight",group_events:"Покажи събития при преглед на групата",guest:"Игри, за които имате guest pass",header:"Хедър",hideactivelistings:"Скрий всички активни обекти в Market по подразбиране",hidedlcunownedgames:"DLC-та за игри, които притежавате",hidespamcomments:"Скрий спам коментарите от Workshop и профили",hidetmsymbols:"Trademark и Copyright символи в имената на игрите",hide_install:"Скрий \"Инсталирай Steam\"",hltb:"Покажи инфо от HowLongToBeat.com",lowestprice:"Покажи",lowestprice_coupon:"Включи кодове за купони в сравнение на цената",lowestprice_header:"Информация за история на цената",metacritic:"Покажи потребителския резултат от Metacritic",owned:"Притежавани предмети",pcgw:"Покажи линкове от PCGamingWiki",profile_links:"Покажи профилни линкове към",profile_link_images:"Картинки от профилни линкове",profile_link_images_none:"Липсва",profile_permalink:"Покажи пермалинкове в профили",send_age_info:"Автоматично изпращай проверка на възрастта при поискване",show_steamchart_info:"Покажи инфо от SteamCharts.com",steamcardexchange:"Покажи линкове от SteamCardExchange върху значките",steamdb:"Покажи линкове от SteamDB",total_spent:"Покажи изхарчено в акаунта",wishlist:"Предмети в списъка с желания",wsgf:"Покажи WSGF инфо"}},
			"cze":{about:"O rozšíření",activates:"Lze aktivovat na Steamu",add_selected_dlc_to_cart:"Přidat vybraná DLC do košíku",add_to_cart:"Přidat do košíku",add_to_wishlist:"Přidat do Seznamu přání",add_unowned_dlc_to_cart:"Přidat nevlastněná DLC do košíku",after_coupon:"po kupónu",all:"Vše",allreleases_products:"Vyber si typy produktů, které si přeješ vidět v této sekci",all_friends_own:"Všichni přátelé, co toto vlastní (__friendcount__)",always:"Vždy",apppage_legal:"Právní informace",apppage_purchase:"Možnosti nákupu",apppage_sections:"Vyber sekce, které chceš vidět na této stránce",avg_price_3cards:"Průměrná cena 3 sběratelských karet",badges_all:"Všechny odznaky",badges_drops:"Odznaky se zbývajícími příděly karet",badge_completion_avg:"Prům. cena dokončení",badge_completion_cost:"Cena dokončení odznaku",badge_foil_progress:"Zobrazit postup foil odznaku",badge_not_unlocked:"Neodemknuto",badge_progress:"Zobrazit postup odznaku",binder_view:"Tabulkové zobrazení",birthday_message:"Šťastné Steam narozeniny, __username__! Vašemu Steam účtu je __age__ let.",bug_feature:"Nahlásit chybu/Navrhnout funkci",buy:"Koupit",buying_total:"Celá nákupní nabídka",buy_wishlist:"Koupit obsah Seznamu přání",cancel:"Zrušit",cards_owned:"Vlastněno __owned__ z __possible__ karet",card_drops_remaining:"Zbývá __drops__ přídělů karet",check_system:"Zkontrolujte váš systém",clear_cache:"Vyčistit data uložená v mezipaměti",common_label:"Schovat hry, které nevlastníte",community:"Komunita",community_name_account_header:"Účet uživatele __username__",compare:"Porovnat",comparison_mode:"Povolte přehled všech her pro porovnávání her",contribute:"Pomoci s kódem (GitHub)",coupon_application_note:"Kupón ve vašem inventáři bude automaticky aplikován při nákupu.",coupon_available:"Máte dostupný kupón!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Zjistěte více</a> o Steam kupónech",credits:"Autoři",customize:"Upravit",custom_background:"Vlastní pozadí",custom_background_help:"Všichni uživatelé Enhanced Steam uvidí toto pozadí na vašem profilu. Uživatelé bez Enhanced Steam uvidí vaše normální pozadí profilu.",date_unlocked:"Datum odemknutí",demos:"Dema",discount:"Sleva",dlc:"Stáhnutelný obsah",dlc_data_header:"Detaily DLC",dlc_details:"Detaily DLC",dlc_suggest:"Doporučit novou kategorii",donate:"Přispět",drm_third_party:"Upozornění: Tento titul používá DRM třetí strany",drm_third_party_sub:"Upozornění: Jeden nebo více titulů z tohoto balíčku používá DRM třetí strany",drops_value:"Nejvyšší hodnota zbývajících přídělů karet",drops_worth_avg:"Přibližná hodnota",each:"Každý",empty_cart:"Vyprázdnit košík",empty_wishlist:"Vyprázdnit Seznam přání",es_supporter:"Podporovatel Enhanced Steamu",events:"Události",family_sharing_notice:"<b>Upozornění:</b> Na tuto hru se nevztahuje služba Steam Family Sharing.",faqs:"Často kladené otázky",forums:"Fóra",games:"Hry",games_all:"Všechny hry",games_coupon:"Hry s kupóny",games_discount:"Hry se slevami",games_installed:"Nainstalované hry",games_with_booster:"__boostergames__ her s nárokem na přídavné balíčky",games_with_drops:"Zbývá __dropsgames__ her se zbývajícími příděly karet",game_name:"Název hry",game_transactions:"Transakce ve hrách",gift_transactions:"Dárkové transakce",graphics:"Grafika",guides:"Návody",hide:"Schovat",highlight:"Zvýraznění",historical_low:"Historicky nejnižší cena",homepage_carousel:"Slideshow",homepage_sidebar:"Postranní panel",homepage_spotlight:"V záři reflektorů",homepage_tabs:"Záložky na hlavní stránce",hours_short:"__hours__ hod",info:"Info",item_type:"Typ předmětu",language:"Jazyk",last_24:"Prodeje: __sold__ kusů prodáno za posledních 24 hodin",library_menu:"Knihovna",loading:"Načítání...",lowest_price:"Aktuálně nejnižší cena",market_transactions:"Transakce na Tržišti",mods:"Módy",more_information:"Více informací",most_drops:"Nejvíce zbývajících přídělů karet",net_gain:"Zisk",net_spent:"Utraceno",never:"Nikdy",news:"Novinky",notcommon_label:"Schovat hry, které vlastníte",no_results_found:"Žádné výsledky nenalezeny",official_group:"Oficiální Steam skupina",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Informace o balíčku",packs:"Balíčky",permalink:"Trvalý odkaz",playfire_heading:"Odměny z Playfire",popular:"Populární",price:"Cena",price_options:"Nastavení cen",programming:"Programování",purchase_date:"(Zakoupeno __date__)",purchase_total:"Nákupy celkem",rating_details:"Zobrazit detaily hodnocení",region_unavailable:"Nedostupné v tomto regionu",remove:"Odstranit",remove_owned_wishlist:"Odstranit vlastněné hry ze Seznamu přání",reviews:"Recenze",sales_total:"Prodeje celkem",save:"Uložit",saved:"Uloženo",search:"Hledat",search_market:"Prohledat Komunitní trh služby Steam",search_names_only:"Hledat pouze v názvech",show:"Ukázat",show_all_steam_releases:"Zobrazit vše vydané ve službě Steam",size:"Velikost",software:"Software",sort_by:"Seřadit podle:",spam_comment_show:"__num__ spam komentářů skryto na této stránce.  Klikněte sem pro jejich zobrazení.",spam_comment_warn:"Zde žijí draci...",starting_at:"Začínají na",store:"Obchod",stores:"Obchody",store_transactions:"Transakce v Obchodu",theworddefault:"Výchozí",thewordoptions:"Nastavení",total_size:"Celková velikost",total_spent:"Celkem utraceno",total_time:"Celkový čas",trading_cards:"Sběratelské karty služby Steam",translate:"Přeložit",translation:"Překlad",using_language:"Prohlížíte Steam v __current__.",using_language_return:"Klikněte zde pro prohlížení Steamu v __base__.",using_store:"Používáte Obchod Steam pro region __current__.",using_store_return:"Klikněte zde pro návrat na __base__ Obchod.",valid:"Platná",videos:"Videa / Upoutávky",view:"Zobrazit",view_all:"ZOBRAZIT VŠE",view_astats:"Zobrazit stránku AStats",view_badge:"Zobrazit odznak",view_badge_foil:"Zobrazit foil odznak",view_foil_badge:"Zobrazit postup foil odznaku",view_in:"Ukázat v",view_in_market:"Zobrazit na Komunitním tržišti",view_marketplace:"Zobrazit Tržiště",view_normal_badge:"Zobrazit postup normálního odznaku",view_stats:"Zobrazit statistiky",view_to_scale:"Zobrazení v měřítku",visit_store:"Navštívit stránku Obchodu",visit_trade_forum:"Navštívit fórum Obchodování",website:"Webová stránka",wiki_article:"Ukázat článek __pcgw__",wishlist:"Seznam přání",achievements:{achievements:"Achievementy",includes:"Obsahuje __num__ achievementů služby Steam",option:"Ukázat achievementy na stránce obchodu",view_all:"Zobrazit všechny achievementy"},bundle:{at_least:"Cena nejméně",bundle_count:"Kolikrát byla tato hra v balíčku",header:"Balíčky obsahující tuto hru",includes:"Obsahuje (__num__) položek",info:"Informace o balíčku",offer_ends:"Nabídka končí",pwyw:"Zaplaťte, kolik chcete"},charts:{current:"Aktuální hráči",peakall:"rekord",peaktoday:"dnešní rekord",playing_now:"právě hraje"},hltb:{compl:"Vše dokončeno",main:"Hlavní příběh",main_e:"Hlavní příběh a úkoly/medaile apod.",submit:"Pošlete svůj čas"},library:{categories:"Kategorie...",error_loading_library:"Nepodařilo se načíst vaši knihovnu.",genres:"Žánry...",private_profile:"Pro použití této funkce musíte změnit svůj stav profilu na veřejný <a href='http://steamcommunity.com/my/edit/settings'>ve vašem nastavení</a>."},options:{about_text:"<div class=\"header\">O <a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:</div><p>Enhanced Steam je rozšíření pro Google Chrome, které přidává mnoho nových funkcí na webovou stránku Steamu.<p>Mezi jeho funkce patří:<ul><li>Zvýraznění již vlastněných her</li><li>Zvýraznění her na Vašem Seznamu přání</li><li>Přesné spočítaní slev u balíčků založené na hrách, které již vlastníte</li><li>Ukázání, kolik jste na Steamu utratili od založení Vašeho účtu</li><li>Zvýraznění DLC, které již vlastníte, na stránce hry</li><li>Oprava ikon \"No Image Available\" ve vašem Seznamu přání pro každou hru i DLC</li><li>Upozornění na hry s DRM třetí strany</li></ul><p>Pokud vám toto rozšíření přijde užitečné, prosím popřemýšlejte o příspěvku.",api_key:"API klíč",author_info:"autor: jshackles",carousel_description:"Ukázat popis aplikace na slideshow na stránce Obchod",changelog:"Seznam změn:",clear:"Jste si jisti, že chcete resetovat všechna nastavení? Nelze to vrátit zpět.",contscroll:"Povolit nekonečné skrolování výsledků hledání",coupon:"Položky s kupóny",customizespamcommentregex:"(Upravit)",drm:"Ukázat upozornění na DRM třetí strany",es_bg:"Možnost nastavit vlastní pozadí na stránce \"Upravit profil\"",excludef2p:"Vynechat Free To Play hry ze zvýrazňování",foot_link:"Rozšíření Enhanced Steam",friends_own:"Položky, které vlastní vaši přátelé",friends_rec:"Položky, na které vaši přátelé napsali recenzi",friends_wishlist:"Položky, které vaši přátelé mají na Seznamu přání",general:"Obecné",gift:"Položky, které vlastníte jako dárek",greenlight_banner:"Nahradit Steam Greenlight banner",group_events:"Ukázat události na Přehledu skupiny",guest:"Položky, na které máte Guest Pass",header:"Hlavička",hideactivelistings:"Schovat všechny aktivní prodávané položky z hlavní stránky Tržiště při načtení",hidedlcunownedgames:"DLC pro nevlastněné hry",hidespamcomments:"Schovat spamové komentáře z Workshopu & profilů",hidetmsymbols:"TM a copyright symboly v názvech her",hide_about:"Schovat odkaz \"O Steamu\"",hide_early_access:"Schovat hry s Předběžným přístupem na hlavní stránce, při procházení a ve výsledcích vyhledávání",hide_install:"Schovat tlačítko \"Nainstalovat Steam\"",hide_owned:"Položky, které vlastníte, ve výsledcích vyhledávání a na stránkách se značkami",hide_owned_homepage:"Položky, které vlastníte, na hlavní stránce",hltb:"Ukázat informace z HowLongToBeat.com",html5video:"Spouštět videa v HTML5 místo Flashe",inventory_market_text:"Ukázat cenu na Tržišti na stránce Inventář",inventory_nav_text:"Ukázat pokročilou navigaci na stránce Inventář",library:"Ukázat tlačítko Knihovna v hlavičce",library_f2p:"Ukázat hrané Free To Play hry a dema v knihovně",library_header:"Knihovna (BETA)",lowestprice:"Ukázat",lowestprice_coupon:"Zahrnout kupóny při porovnávání cen",lowestprice_header:"Informace o historii ceny",lowestprice_onwishlist:"Ukázat v Seznamu přání",market_total:"Ukázat shrnutí transakcí na Tržišti",metacritic:"Ukázat uživatelská hodnocení Metacritic",owned:"Položky, které vlastníte",pcgw:"Ukázat odkazy na PCGamingWiki",profiles_link_group_game:"Pouze k určitým hrám",profile_api_info:"Ukázat odkaz na uživatelskou API na profilech",profile_links:"Ukázat odkazy na profil na",profile_link_images:"Obrázky odkazů na profily",profile_link_images_color:"Barevné",profile_link_images_gray:"Šedé",profile_link_images_none:"Žádné",profile_permalink:"Ukázat odkaz na profil",regional_hideworld:"Schovat indikátor země",regional_price:"Srovnání cen v regionech",regional_price_mouse:"při najetí myší",regional_price_on:"Ukázat srovnání cen v regionech",replace_account_name:"Nahradit jméno účtu komunitním jménem",reset:"Resetovat nastavení",reset_note:"Nastavení resetována",saved_note:"Nastavení uložena",send_age_info:"Automaticky odeslat potvrzení věku, pokud je vyžádováno",showallachievements:"Ukázat statistiky achievementů na stránce \"Všechny hry\"",showspeechsearch:"Přidat hlasové zadávání do vyhledávacích polí",show_astatslink:"Ukázat odkaz na AStats na stránkách aplikací",show_early_access_text:"Ukázat banner u her s Předběžným přístupem",show_languagewarning:"Ukázat varování, pokud je aktivní jiný jazyk, než",show_package_info:"Ukázat Informace o balíčku pro všechny aplikace",show_regionwarning:"Ukázat varování, pokud je aktivní jiný region, než má účet",show_steamchart_info:"Ukázat informace ze SteamCharts.com",show_sysreqcheck:"Ukázat tlačítko pro ověření systémových požadavků na stránkách aplikací (experimentální!)",spamcommentregex:"Regulární výraz:",steamcardexchange:"Ukázat odkazy na SteamCardExchange u odznaků",steamdb:"Ukázat odkazy na SteamDB",stores_all:"Porovnat všechny obchody",tag:"Popisek",total_spent:"Ukázat celkem utracenou částku na stránce Účet",wishlist:"Položky, které máte na Seznamu přání",wlbuttoncommunityapp:"Ukázat tlačítko \"Přidat do Seznamu přání\" na komunitních hubech aplikací",wsgf:"Ukázat informace z WSGF (širokoúhlé hraní)"},ready:{errormsg:"Chyba při načítání Enhanced Steam dat",loading:"Enhanced Steam načítá data...",ready:"Enhanced Steam je připravený."},select:{none:"Zrušit výběr",unowned_dlc:"Vybrat nevlastněná DLC",wishlisted_dlc:"Vybrat DLC na Seznamu přání"},tag:{coupon:"S kupónem",friends_own:"__friendcount__ vlastní",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ recenzovalo",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ si přeje</a>",inv_gift:"Vlastněný dárek",inv_guestpass:"Vlastněný Guest Pass",owned:"Vlastněné",wishlist:"Na Seznamu přání"},wallet:{custom_amount:"Přidat vlastní částku",custom_amount_text:"Přidat jakoukoli částku nad __minamount__"},wsgf:{gold:"Tato medaile je udělována hrám, které mají perfektní skóre od WSGF za podporu __type__, and jsou certifikovány __type__.",incomplete:"Nekompletní",limited:"Toto skóre je udělováno hrám, které obdržely známku C za podporu __type__.  Všechny tyto hry do nějaké úrovně podporují __type__, ale mají výraznější problémy.",silver:"Tato medaile je udělována hrám, které obdržely známku B za podporu __type__.  Všechny tyto hry jsou bez výraznějších problémů, ale mají minimálně jeden problém, který zabraňuje perfektnímu skóre",unsupported:"Toto skóre je udělováno hrám, které nemají podporu __type__.  Tato hra může být nehratelná v __type__, nebo může být obrázek roztažen na šířku okna.  Správný poměr stran není zachován."}},
			"dan":{about:"Om",add_to_cart:"Tilføj til kurv",add_to_wishlist:"Tilføj til ønskeliste",all:"Alle",all_friends_own:"Alle venner, der ejer dette (__friendcount__)",always:"Altid",avg_price_3cards:"Gennemsnitspris af tre samlekort",bug_feature:"Rapporter Fejl / Foreslå funktioner",buy:"Køb",buy_wishlist:"Køb ønskeliste",cancel:"Fortryd",check_system:"Tjek Dit System",clear_cache:"Slet cachede data",community:"Fællesskab",community_name_account_header:"__username__'s konto",compare:"Sammenlign",contribute:"Bidrag (GitHub)",coupon_available:"Du har en kupon til rådighed!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Lær mere</a> om Steam Kuponer",discount:"Rabat",donate:"Doner ",drm_third_party:"Advarsel: Dette spil benytter 3. part DRM",drm_third_party_sub:"Advarsel: Et eller flere titler i denne pakke bruger tredjeparts DRM",each:"Hver",empty_cart:"Tøm indkøbskurv",empty_wishlist:"Tøm ønskeliste",es_supporter:"Enhanced Steam Supporter",family_sharing_notice:"<b>Meddelelse:</b> Dette spil er ekskluderet fra Steam's Family Sharing tjeneste.",faqs:"Ofte stillede spørgsmål",forums:"Fora",games:"Spil",games_all:"Alle spil",games_installed:"Installerede spil",hide:"Skjul",highlight:"Fremhæv",info:"Info",language:"Sprog",last_24:"Volume: __sold__ solgt i de sidste 24 timer",library_menu:"Bibliotek",loading:"Indlæser...",lowest_price:"Aktuel Laveste Pris",more_information:"Mere Information",never:"Aldrig",news:"Nyheder",no_results_found:"Ingen resultater fundet",official_group:"Officielle gruppe",official_group_url:"steamcommunity.com/groups/enhancedsteam",popular:"Populær",price:"Pris",price_options:"Pris egenskaber",region_unavailable:"Ikke tilgængelig i denne region",remove:"Fjern",remove_owned_wishlist:"Fjern spil du ejer fra din ønskeliste",reviews:"Anmeldelser",save:"Gem",saved:"Gemt",search:"Søg",show:"Vis",show_all_steam_releases:"Vis alle Steam udgivelser ",size:"Størrelse",sort_by:"Sorter efter:",spam_comment_show:"__num__ spam kommentarer skjult på denne side. Klik her for at vise dem.",spam_comment_warn:"Her vil der være drager...",starting_at:"Starter fra",store:"Butik",stores:"Butikker",theworddefault:"Standard",thewordoptions:"Indstillinger",total_time:"Total tid",translate:"Oversæt",translation:"Oversættelse",view:"Se",view_all:"SE ALLE",view_in:"Se i",view_in_market:"Vis i Fællesskabs Marked",view_stats:"Se stats",visit_store:"Besøg butik siden",visit_trade_forum:"Besøg Bytte Forum",website:"Hjemmeside",wiki_article:"Se __pcgw__ artikel",wishlist:"Ønskeliste",achievements:{achievements:"Præstationer",option:"Vis præstationer på butik sider",view_all:"Vis alle præstationer"},bundle:{offer_ends:"Tilbud slutter",pwyw:"Betal hvad du vil"},charts:{current:"Aktuelle Spillere",peaktoday:"dagens højdepunkt",playing_now:"Spiller nu"},hltb:{main:"Hovedhistorie",main_e:"Hovedhistorie og ekstra",submit:"Indsend din tid"},library:{categories:"kategorier...",error_loading_library:"Kunne ikke indlæse dit bibliotek.",genres:"Genrer..."},options:{about_text:"<div class=\"header\">Om <a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:</div><p>Enhanced Steam er en udvidelse for Google Chrome som tilføjer mange nye funktioner til Steam siden.<p>Funktioner omfatter:<ul><li>Fremhævning af spil du allerede ejer</li><li>Fremhævning af spil på din ønskeliste</li><li>Korrekt beregning af pakke rabatter baseret på spil, du allerede ejer</li><li>Viser hvor mange penge du har brugt på Steam</li><li>Fremhævning af DLC du allerede ejer på spil siden</li><li>Fikser \"Intet billede tilgængelig\" spil ikoner på din ønskeside for alle spil og DLC</li><li>Viser hvilke spil som bruge 3. part DRM</li></ul><p>Hvis du finde denne udvidelse nyttig, kan du donere til os.",api_key:"API Nøgle",author_info:"af jshackles",changelog:"Ændringslog",clear:"Er du sikker på du vil nulstille alle indstillinger? Dette kan ikke fortrydes.",contscroll:"Aktiver kontinuerlig rulning af søgeresultater ",coupon:"Genstande med kuponer",customizespamcommentregex:"(Tilpas)",drm:"Vis tredjeparts DRM advarsler",es_bg:"Indstil brugerdefineret baggrund på \"Rediger profil\" skærm",excludef2p:"Udeluk gratis at spille spil fra fremhævning",foot_link:"Enhanced Steam Udvidelse",friends_own:"Genstande dine venner ejer",friends_rec:"Genstande dine venner har bedømt",friends_wishlist:"Genstande dine venner har i sin ønskeseddel",general:"Generel",gift:"Genstande gemt som gave",greenlight_banner:"Udskift Steam Greenlight banner",header:"Sidehoved",hidedlcunownedgames:"Udvidelsespakker for spil du ikke ejer",hidespamcomments:"Skjul spam kommentarer fra værksted & profiler ",hidetmsymbols:"Trademark og Copyright symboler i spiltitler",hide_about:"Skjul \"Om\" linket",hide_early_access:"Skjul Tidlig Adgang spil på forside, gennemse og søgesider",hide_install:"Skjul \"Installer Steam\" knappen",hide_owned:"Genstande du ejer på søgeresultater og tag sider",hltb:"Vis HowLongToBeat.com oplysninger",html5video:"Vis videoer med HTML5 i stedet for Flash ",library:"Vis Bibliotek knappen i topteksten",library_f2p:"Vis spillede gratis at spille-spil og demoer i biblioteket ",library_header:"Bibliotek (BETA)",lowestprice:"Vis",lowestprice_onwishlist:"Vis på ønskeliste",market_total:"Vis transaktion resumé på Market",metacritic:"Vis Metacritic bruger bedømmelser",owned:"Genstande du ejer",pcgw:"Vis PCGamingWiki links",profile_api_info:"Vis bruger API link på profiler",profile_link_images:"Profil linket billeder",profile_link_images_color:"Farvet",profile_link_images_gray:"Gråskala",profile_link_images_none:"Ingen",regional_price:"Regional Prissammenligning",regional_price_on:"Vis regional prissammenligning",replace_account_name:"Erstat kontonavn med fællesskabs navn      ",reset:"Nulstil indstillinger",reset_note:"Indstillinger nulstillet",saved_note:"Indstillinger gemt",send_age_info:"Automatisk send verifikation af alder når anmodet.",showallachievements:"Vis præstation stats på \"Alle Spil\" siden ",show_steamchart_info:"Vis SteamCharts.com info",show_sysreqcheck:"Vis knap til at tjekke systemkrav på applications sider (Exerimpentalt!)",steamdb:"Vis SteamDB links",tag:"Tag",total_spent:"Vis hvor mange penge du har brugt på din konto, på din konto side",wishlist:"Genstande på din ønskeliste",wsgf:"Vis WSGF (Widescreen) info "},ready:{errormsg:"Fejl under indlæsning af Enhanced Steam data",loading:"Enhanced Steam indlæser data...",ready:"Enhanced Steam er klar"},tag:{coupon:"Kupon",inv_gift:"Gave",owned:"Ejet",wishlist:"Ønskeliste"},wsgf:{gold:"Denne medalje tildeles til spil, der har modtaget en perfekt score fra WSGF for deres __type__ support, og er __type__ Certified."}},
			"dut":{about:"Over Ons",activates:"Activeert op Steam",add_selected_dlc_to_cart:"Voeg geselecteerde DLC toe aan je winkelwagen",add_to_cart:"Aan winkelwagen toevoegen",add_to_wishlist:"Voeg toe aan wenslijst",add_unowned_dlc_to_cart:"Voeg DLC toe die je niet hebt in je winkelwagen",after_coupon:"na kortings-code ",all:"Alle",all_friends_own:"Alle vrienden die dit hebben (__friendcount__)",always:"Altijd",avg_price_3cards:"Gemiddelde prijs van drie ruilkaarten",badges_all:"Alle Badges",badges_drops:"Badges Met Kaart Drops Resterende",badge_completion_avg:"Gemiddelde kosten voor completen",badge_completion_cost:"Koste van de complete badge",badge_foil_progress:"Bekijk Folie Badge Progressie",badge_not_unlocked:"Niet ontgrendelt",badge_progress:"Bekijk Badge Progressie",binder_view:"Binder overzicht",birthday_message:"Gefeliciteerd, __username__! Jouw Steam account is vandaag __age__ jaar oud.",bug_feature:"Meldt Bug / Suggereren Feature",buy:"Koop",buying_total:"Aankooporder totaal",buy_wishlist:"Koop wenslijst",cancel:"Annuleer",cards_owned:"__owned__ of __possible__ kaarten bezeten",card_drops_remaining:"__drops__ kaart drops overblijvende",check_system:"Controleer Je Systeem",clear_cache:"Gecachete data verwijderen",common_label:"Verberg spellen die jij niet hebt",community:"Gemeenschap",compare:"Vergelijk",comparison_mode:"Zet alle spellen overzicht aan om spellen vergelijken te zien",contribute:"Bijdragen (GitHub)",coupon_application_note:"Een waardebon in je inventaris wordt automatisch toegepast bij het afrekenen.",coupon_available:"Je hebt een waardebon beschikbaar!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Kom meer te weten</a> over Steam-coupons",credits:"Credits",custom_background:"Custom Achtergrond",custom_background_help:"Alle gebruikers van Enhanced Steam zullen deze achtergrond op jouw profiel zien. Niet Enhanced Steam gebruikers zullen jouw normale achtergrond zien.",date_unlocked:"Datum Ontgrendelt",discount:"Korting",dlc_data_header:"Details over downloadbare inhoud",dlc_details:"Downloadbare Content Details",dlc_suggest:"Suggereer een nieuwe categorie ",donate:"Doneer",drm_third_party:"Waarschuwing: Dit programma maakt gebruik van DRM van derden",drm_third_party_sub:"Waarschuwing: Eén of meer titels in dit pakket gebruikt DRM van derden",drops_value:"Hoogste Drop Kans",drops_worth_avg:"Gemiddeld Waard",each:"Elke",empty_cart:"Winkelwagen leegmaken",empty_wishlist:"Verlanglijst leegmaken",es_supporter:"Enhanced Steam Supporter",events:"Evenementen",family_sharing_notice:"<b>Opmerking:</b> Deze game is uitgesloten van Steam's Familie Deel service.",faqs:"Veelgestelde vragen",forums:"Forums",games:"Spellen",games_all:"Alle Spellen",games_coupon:"Spellen Met Kortingsbonnen",games_discount:"Spellen Met Korting",games_installed:"Geïnstalleerde Spellen",games_with_booster:"__boostergames__ spellen geschikt voor booster pakketen",games_with_drops:"__dropsgames__spellen met kaart drops overblijvende",game_name:"Spel Naam",game_transactions:"Spel Transacties",gift_transactions:"Geschenktransacties",graphics:"Graphics",hide:"Verberg",highlight:"Highlight",historical_low:"Historisch Laagste Prijs",hours_short:"__hours__ uren",info:"Informatie",item_type:"Item Type",language:"Taal",last_24:"Hoeveelheid: __sold__ verkocht in de afgelopen 24 uur",library_menu:"Bibliotheek",loading:"Laden...",lowest_price:"Huidige Laagste Prijs",market_transactions:"Market Transacties",more_information:"Meer Informatie",most_drops:"Meeste Gevallen",net_gain:"Nettowinst",net_spent:"Netto uitgegeven",never:"Nooit",news:"Nieuws",notcommon_label:"Verberg spellen die jij hebt",no_results_found:"Geen resultaten gevonden",official_group:"Officiële Groep",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Pakket Informatie",permalink:"Permalink",popular:"Populair",price:"Prijs",price_options:"Prijs opties",programming:"Programmeren",purchase_date:"(Gekocht op __date__)",purchase_total:"Gekocht totaal",rating_details:"Bekijk cijfer details",region_unavailable:"Niet beschikbaar in deze regio",remove:"Verwijder",remove_owned_wishlist:"Verwijder eigen games van je wenslijst",reviews:"Recensies ",sales_total:"Verkoop totaal",save:"Bewaar",saved:"Bewaard",search:"Zoek",search_market:"Zoek Steam Gemeenschap Market",search_names_only:"Zoek alleen in namen",show:"Toon",show_all_steam_releases:"Laat alle Steam releases zien",size:"Grote",sort_by:"Sorteer op:",spam_comment_show:"__num__ spam reacties verborgen op deze pagina. Klik hier om ze te vertonen.",starting_at:"Vanaf",store:"Winkel",stores:"Winkels",store_transactions:"Winkel Transacties",theworddefault:"Standaard",thewordoptions:"Opties",total_size:"Totale grote",total_spent:"Totaal Uitgegeven",total_time:"Totale Tijd",trading_cards:"Steam Ruil Kaarten",translate:"Vertaal",translation:"Vertaal",using_language:"Je browset Steam nu in __current__.",using_language_return:"Klik hier om Steam te browsen in __base__.",using_store:"Je gebruikt de Steam winkel nu voor de __current__ regio.",using_store_return:"Klik hier om terug te gaan naar de __base__ winkel.",view:"Bekijk",view_all:"ALLES BEKIJKEN",view_astats:"Bekijk AStats pagina",view_badge:"Bekijk Badge",view_badge_foil:"Bekijk Folie Badge",view_foil_badge:"Bekijk Folie Badge Progressie",view_in:"Bekijk in",view_in_market:"Bekijk in de Markt",view_marketplace:"Bekijk Marktplaats",view_normal_badge:"Bekijk normale Badge progressie",view_stats:"Bekijk statistieken",view_to_scale:"Op schaal bekijken",visit_store:"Bezoek Winkel Pagina",visit_trade_forum:"Bezoek Ruil Forum",website:"Website",wiki_article:"Bekijk __pcgw_ Artikel",wishlist:"Verlanglijst",achievements:{achievements:"Achievements",includes:"Inclusief __num__ Steam Achievements",option:"Toon achievements op winkel pagina's",view_all:"Bekijk Alle Achievements"},bundle:{at_least:"Betaal Ten Minste",bundle_count:"Aantal keren dit spel in een bundel is geweest",header:"Bundels die dit spel hebben",includes:"Telt mee (__num__) items",info:"Bundel Informatie",offer_ends:"Aanbod loopt af",pwyw:"Betaal Wat Je Wilt"},charts:{current:"Actuele Spelers",peakall:"Piek van alle tijden",peaktoday:"Piek van vandaag",playing_now:"nu aan het spelen"},hltb:{compl:"Perfectionist",main:"Hoofdverhaal",main_e:"Hoofdverhaal en Extra's",submit:"Verstuur jouw tijd"},library:{categories:"Categorieën...",error_loading_library:"Kon jouw bibliotheek niet laden.",genres:"Genres...",private_profile:"Verander je profiel status naar publiek <a href='http://steamcommunity.com/my/edit/settings'>in je opties</a> om deze optie te gebruiken."},options:{about_text:"<div class=\"header\">Over Ons <a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:</div><p>Enhanced Steam is een expansie voor Google Chrome dat veel nieuwe functies toevoegt aan de Steam website.<p>Functies zoals:<ul><li>Highlight spellen die je al hebt</li><li>Highlight spellen op je wenslijst</li><li>Correct berekenen hoeveel bundel korting je krijgt op spellen die je al hebt</li><li>Toont hoeveel geld jij hebt uitgegeven op Steam vanaf het begin van jouw account</li><li>Highlight DLC die jij al hebt op het spel pagina</li><li>Maakt \"geen afbeelding beschikbaar\" iconen op je wenslijst voor elk spel en DLC</li><li>Laat zien welke spellen 3rde partij DRM hebben</li></ul><p>Als je deze extensie handig vindt, kun je overwegen om wat geld te doneren.",api_key:"API Sleutel",author_info:"door jshackles",carousel_description:"Laat app beschrijving op de winkel front zien",changelog:"Veranderingen:",clear:"Weet je zeker dat je alle opties wilt resetten? Dit kan niet ongedaan worden.",contscroll:"Zet doorlopend scrollen aan bij zoek resultaten",coupon:"Items met kortingsbonnen",customizespamcommentregex:"(Aanpassen) ",drm:"Laat 3de partij DRM waarschuwingen zien",es_bg:"Zet aangepaste achtergrond in \"bewerk profiel\" scherm",excludef2p:"Sluit gratis om te spelen games uit van highlights",foot_link:"Enhanced Steam Extensie",friends_own:"Items die je vrienden hebben",friends_rec:"Items die jouw vrienden hebben beoordeeld",friends_wishlist:"Items die je vrienden op hun wenslijst hebben",general:"Algemeen",gift:"Items opgeslagen als cadeau",greenlight_banner:"Vervang Steam Greenlight banner",group_events:"Toon evenementen bij groep overzicht",guest:"Items waar je een gast pas voor hebt ",header:"Header",hideactivelistings:"Verberg alle actieve listings op de Market hoofdpagina als standaard",hidedlcunownedgames:"DLC voor spellen die je niet hebt",hidespamcomments:"Verberg spam comments bij de Workshop & profielen",hidetmsymbols:"Trademark en Copyright symbolen in spel titels",hide_about:"Verberg \"Over Ons\" link",hide_early_access:"Verberg Early Access spellen op hoofdpagina, browse, en zoek paginas",hide_install:"Verstop \"Installeer Steam\" knop",hide_owned:"Items die jij hebt in zoek resultaten en tag paginas",hide_owned_homepage:"Items die jij hebt op de hoofdpagina",hltb:"Laat HowLongToBeat.com informatie zien",html5video:"Laat videos zien via HTML5 in plaats van Flash",inventory_market_text:"Toon Market prijs in inventory pagina",inventory_nav_text:"Toon geavanceerde navigatie in inventory pagina",library:"Toon Bibliotheek knop in header",library_f2p:"Toon gespeelde gratis om te spelen spellen en demos in bibliotheek",library_header:"Bibliotheek (BETA)",lowestprice:"Laat zien",lowestprice_coupon:"Voeg kortingcodes toe bij prijs vergelijking",lowestprice_header:"Prijs historie informatie",lowestprice_onwishlist:"Laat zien op verlanglijst",market_total:"Toon transactie samenvatting op de Market",metacritic:"Laat Metacritic gebruikers scores zien",owned:"Items die jij hebt",pcgw:"Laat PCGamingWiki links zien",profile_api_info:"Toon gebruiker API link op profielen",profile_links:"Laat profiel links zien naar",profile_link_images:"Profiel link plaatjes",profile_link_images_color:"Gekleurd",profile_link_images_gray:"Grijswaarden",profile_link_images_none:"Geen",profile_permalink:"Laat permalink op profielen zien",regional_hideworld:"Verberg globale indicator",regional_price:"Regionale prijs vergelijking",regional_price_mouse:"op prijs muis over",regional_price_on:"Toon regionale prijs vergelijking",replace_account_name:"Vervang account naam met gemeenschap naam",reset:"Reset opties",reset_note:"Opties gereset",saved_note:"Opties bewaard",send_age_info:"Verstuur automatisch leeftijd verificatie wanneer gevraagd",showallachievements:"Toon achievements statistieken op \"Alle spellen\" pagina",showspeechsearch:"Voeg spraak invoegen toe aan zoeken",show_astatslink:"Laat AStats link op app pagina's zien",show_early_access_text:"Toon Early Access afbeelding banners",show_languagewarning:"Toon waarschuwing als browser in een andere taal dan",show_package_info:"Laat pakket informatie voor alle apps zien",show_regionwarning:"Toon waarschuwing tijdens browsen in een andere regio",show_steamchart_info:"Laat SteamCharts.com info zien",show_sysreqcheck:"Laat knoppen zien om te kijken naar systeem eisen op app pagina's (Experimenteel!)",spamcommentregex:"Reguliere Expressie string:",steamcardexchange:"Toon SteamCardExchange links bij badges",steamdb:"Laat SteamDB links zien",stores_all:"Vergelijk alle winkels",tag:"Tag",total_spent:"Toon totaal uitgegeven op account pagina",wishlist:"Items op jouw wenslijst",wlbuttoncommunityapp:"Toon \"Voeg toe aan wenslijst\" knop bij gemeenschap app hubs",wsgf:"Laat WSGF (Widescreen) informatie zien"},ready:{errormsg:"Fout tijdens het laden van Enhanced Steam gegevens",loading:"Enhanced Steam is gegevens aan het laden..."},select:{none:"Selecteer Geen",unowned_dlc:"Selecteer Onbeheerde DLC",wishlisted_dlc:"Selecteer Wenslijst DLC"},tag:{coupon:"Waardebon",friends_own:"__friendcount__ eigen",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ door vrienden beoordeeld",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ willen dit</a>",inv_gift:"Cadeau",inv_guestpass:"Gastenpas",owned:"In je bezit",wishlist:"Verlanglijst"},wallet:{custom_amount:"Voeg custom getal toe",custom_amount_text:"Voeg elke hoeveelheid toe over __minamount__"},wsgf:{gold:"Deze medaille wordt uitgereikt aan spellen die perfect scores hebben van de WSGF voor hun __type__ ondersteuning, en zijn __type__ gekwalificeerd.",incomplete:"Onvolledig ",limited:"Deze score wordt uitgedeeld aan spellen die een berekende score hebben van C voor hun __type__ ondersteuning. Alle spellen hiermee hebben een vorm van __type__ ondersteuning maar hebben redelijk veel problemen.",silver:"Deze medaille wordt uitgereikt aan spellen die een gecalculeerde score van B hebben voor hun __type__ ondersteuning.  All deze spellen zijn zonder grote gebreken maar hebben tenminste een tekortkoming waardoor het net geen perfecte score heeft.",unsupported:"Deze score wordt uitgereikt aan spellen die geen __type__ ondersteuning hebben. Het spel kan onspeelbaar zijn in __type__, of het beeld is uitgerekt om op het scherm te passen. Het juiste aspect ratio is niet behouden."}},
			"eng":{drop_calc:"Click here to calculate drops remaining",forums:"Forums",total_size:"Total Size",dlc_details:"Downloadable Content Details",badge_not_unlocked:"Not unlocked",each:"Each",view_in_market:"View in Community Market",homepage_spotlight:"Spotlight",purchase_date:"(Purchased __date__)",remove:"Remove",add_selected_dlc_to_cart:"Add selected DLC to cart",credits:"Credits",store_transactions:"Store Transactions",activates:"Activates on Steam",games_coupon:"Games With Coupons",all_friends_own:"All friends who own this (__friendcount__)",translate:"Translate",search_names_only:"Search in names only",packs:"Packs",official_group:"Official Group",donate:"Donate",coupon_application_note:"A coupon in your inventory will be applied automatically at checkout.",hide:"Hide",cards_owned:"__owned__ of __possible__ cards owned",common_label:"Hide games that you do not own",birthday_message:"Happy Steam Birthday, __username__! Your Steam account is __age__ years old today.",buying_total:"Buy order total",allreleases_products:"Select the types of products that you wish to see in this section",empty_wishlist:"Empty wishlist",clear_cache:"Clear cached data",events:"Events",translation:"Translation",lowest_price:"Current Lowest Price",badge_progress:"View Badge Progress",sales_total:"Sales total",view_normal_badge:"View Normal Badge Progress",community_name_account_header:"__username__'s account",apppage_sections:"Select the sections you would like to see on this page",search_error:"Error loading more search results",cancel:"Cancel",games:"Games",total_time:"Total Time",dlc_suggest:"Suggest a new category",badge_completion_cost:"Cost of completing badge",loading:"Loading...",starting_at:"Starting at",homepage_tabs:"Homepage Tabs",thewordoptions:"Options",view_in:"View in",drm_third_party:"Warning: This title uses 3rd party DRM",stores:"Stores",game_transactions:"Game Transactions",after_coupon:"after coupon code",games_installed:"Installed Games",hours_short:"__hours__ hrs",faqs:"Frequently Asked Questions",spam_comment_show:"__num__ spam comments hidden on this page.  Click here to show them.",dlc:"Downloadable Content",official_group_url:"steamcommunity.com/groups/enhancedsteam",language:"Language",theworddefault:"Default",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Learn more</a> about Steam Coupons",show:"Show",badges_all:"All Badges",comparison_mode:"Enable all game overview to see game comparison",search:"Search",es_supporter:"Enhanced Steam Supporter",view_to_scale:"View to scale",videos:"Videos / Trailers",remove_owned_wishlist:"Remove owned games from wishlist",dlc_data_header:"Downloadable Content Details",graphics:"Graphics",trading_cards:"Steam Trading Cards",view_badge:"View Badge",purchase_total:"Purchase total",view_foil_badge:"View Foil Badge Progress",view_astats:"View AStats Page",apppage_purchase:"Purchase Options",search_error_retry:"Click here to retry",library_menu:"Library",website:"Website",reviews:"Reviews",size:"Size",package_info:"Package info",badge_completion_avg:"Avg cost of completion",using_store:"You are using the Steam store for the __current__ region.",last_24:"Volume: __sold__ sold in the last 24 hours",homepage_sidebar:"Sidebar",view_marketplace:"View Marketplace",empty_cart:"Empty Cart",market_transactions:"Market Transactions",card_drops_remaining:"__drops__ card drops remaining",badges_drops:"Badges With Card Drops Remaining",using_language_return:"Click here to browse Steam in __base__.",spam_comment_warn:"Here be dragons...",guides:"Guides",save:"Save",add_to_cart:"Add to Cart",view:"View",games_all:"All Games",permalink:"Permalink",game_name:"Game Name",gift_transactions:"Gift Transactions",demos:"Demos",store:"Store",highlight:"Highlight",check_system:"Check Your System",custom_background:"Custom Background",most_drops:"Most Drops",badge_foil_progress:"View Foil Badge Progress",net_gain:"Net gain",apppage_legal:"Legal Information",acrtag_msg:"Trading between certain regions has been disabled for this item",add_to_wishlist:"Add to your wishlist",community:"Community",contribute:"Contribute (GitHub)",always:"Always",compare:"Compare",discount:"Discount",rating_details:"See rating details",drops_worth_avg:"Worth Approximately",using_store_return:"Click here to go back to the __base__ store.",family_sharing_notice:"<b>Notice:</b> This game is excluded from Steam's Family Sharing service.",valid:"Valid",no_results_found:"No results found",visit_store:"Visit Store Page",all:"All",total_spent:"Total Spent",games_with_drops:"__dropsgames__ games with drops remaining",binder_view:"Binder View",view_stats:"View stats",using_language:"You are browsing Steam in __current__.",popular:"Popular",visit_trade_forum:"Visit Trade Forum",software:"Software",price:"Price",custom_background_help:"All users of Enhanced Steam will see this background on your profile.  Non-Enhanced Steam users will see your regular profile background.",date_unlocked:"Date Unlocked",view_badge_foil:"View Foil Badge",net_spent:"Net spent",homepage_carousel:"Carousel",acrtag_tooltip:"This item cannot be traded between regions if purchased in Eastern Europe, South America, or South-East Asia",buy_wishlist:"Buy Wishlist",saved:"Saved",add_unowned_dlc_to_cart:"Add unowned DLC to cart",buy:"Buy",more_information:"More Information",games_discount:"Games With Discounts",region_unavailable:"Not available in this region",item_type:"Item Type",avg_price_3cards:"Average price of three trading cards",mods:"Mods",news:"News",bug_feature:"Report Bug / Suggest Feature",about:"About",never:"Never",coupon_available:"You have a coupon available!",info:"Info",drops_value:"Highest Drop Value",notcommon_label:"Hide games that you own",show_all_steam_releases:"Show all Steam releases",wishlist:"Wishlist",playfire_heading:"Rewards from Playfire",wiki_article:"View __pcgw__ Article",view_all:"VIEW ALL",programming:"Programming",historical_low:"Historical Lowest Price",games_with_booster:"__boostergames__ games eligible for booster packs",sort_by:"Sort by:",search_market:"Search Steam Community Market",drm_third_party_sub:"Warning: One or more titles in this package use 3rd party DRM",customize:"Customize",bundle_saving_text:"Here's what you save by buying this bundle",price_options:"Price options",achievements:{option:"Show achievements on store pages",achievements:"Achievements",includes:"Includes __num__ Steam Achievements",view_all:"View All Achievements"},bundle:{offer_ends:"Offer ends",at_least:"Pay At Least",pwyw:"Pay What You Want",includes:"Includes (__num__) items",header:"Bundles that include this game",info:"Bundle Info",bundle_count:"Number of times this game has been in a bundle"},charts:{peakall:"all-time peak",current:"Current Players",playing_now:"playing now",peaktoday:"today's peak"},hltb:{main_e:"Main Story and Extras",compl:"Completionist",submit:"Submit Your Time",main:"Main Story"},library:{error_loading_library:"Couldn't load your library.",categories:"Categories...",genres:"Genres...",private_profile:"Change your profile status to public <a href='http://steamcommunity.com/my/edit/settings'>in your settings</a> to use this feature."},options:{wsgf:"Show WSGF (Widescreen) info",steamcardexchange:"Show SteamCardExchange links on badges",regional_price:"Regional Price Comparison",acrtag:"Show warnings on items where cross region trading is disabled",contscroll:"Enable continuous scrolling of search results",profile_link_images_none:"None",replace_account_name:"Replace account name with community name",excludef2p:"Exclude free to play games from highlighting",profile_links:"Show profile links to",library_header:"Library (BETA)",tag:"Tag",metacritic:"Show Metacritic user scores",hideactivelistings:"Hide all active listings on Market homepage by default",clear:"Are you sure you wish to reset all options? This cannot be undone.",profile_api_info:"Show user API link on profiles",hidetmsymbols:"Trademark and Copyright symbols in game titles",coupon:"Items with coupons",show_package_info:"Show package info for all apps",wlbuttoncommunityapp:"Show \"Add to Wishlist\" button on community app hubs",regional_price_on:"Show regional price comparison",cart:"Items in your cart",drm:"Show 3rd party DRM warnings",profile_permalink:"Show permalink on profiles",show_regionwarning:"Show warning if browsing in non-account region",foot_link:"Enhanced Steam Extension",friends_own:"Items your friends own",profile_link_images:"Profile link images",library:"Show Library button in header",hltb:"Show HowLongToBeat.com information",hidespamcomments:"Hide spam comments from Workshop & profiles",hide_owned:"Items you own in search results and tag pages",reset:"Reset options",api_key:"API Key",hidedlcunownedgames:"DLC for games you do not own",gift:"Items stored as gift",show_sysreqcheck:"Show button to check system requirements on app pages (Experimental!)",es_bg:"Set custom background on \"Edit Profile\" screen",regional_price_mouse:"on Price Mouseover",lowestprice_header:"Price History Information",total_spent:"Show total spent on account page",about_text:"<div class=\"header\">About <a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:</div><p>Enhanced Steam is an Extension for Google Chrome that adds many new features to the Steam website.<p>Features include:<ul><li>Highlighting games you already own</li><li>Highlighting games on your wishlist</li><li>Correctly calculating bundle discounts based on games you already own</li><li>Showing you how much money you've spent on Steam for the lifetime of your account</li><li>Highlighting DLC you own on a game page</li><li>Fixing \"No Image Available\" game icons on your wishlist for any game or DLC</li><li>Pointing out titles with 3rd party DRM</li></ul><p>If you find this Extension useful, please consider donating.",stores_all:"Compare all stores",show_early_access_text:"Show Early Access image banners",author_info:"by jshackles",friends_rec:"Items your friends have reviewed",profile_link_images_gray:"Grayscale",library_f2p:"Show played free to play games and demos in library",inventory_market_text:"Show Market price on inventory page",pcgw:"Show PCGamingWiki links",spamcommentregex:"Regular Expression string:",hide_owned_homepage:"Items you own on the homepage",saved_note:"Options saved",regional_hideworld:"Hide globe indicator",show_astatslink:"Show AStats link on app pages",send_age_info:"Automatically send age verification when requested",guest:"Items you have a guest pass for",show_steamchart_info:"Show SteamCharts.com info",showallachievements:"Show achievement stats on \"All Games\" page",lowestprice_onwishlist:"Show on Wishlist",lowestprice:"Show",group_events:"Show events on group overview",changelog:"Changelog:",header:"Header",owned:"Items you own",steamdb:"Show SteamDB links",customizespamcommentregex:"(Customize)",hide_early_access:"Hide Early Access games on homepage, browse, and search pages",reset_note:"Options reset",html5video:"Show videos using HTML5 instead of Flash",profiles_link_group_game:"Game exclusive",showspeechsearch:"Add speech input to search boxes",profile_link_images_color:"Colored",hide_about:"Hide \"About\" link",inventory_nav_text:"Show advanced navigation on inventory page",friends_wishlist:"Items your friends have wishlisted",carousel_description:"Show app descriptions on storefront carousel",market_total:"Show transaction summary on Market",lowestprice_coupon:"Include coupon codes in price comparison",greenlight_banner:"Replace Steam Greenlight banner",general:"General",show_languagewarning:"Show warning if browsing in a language other than",hide_install:"Hide \"Install Steam\" button",wishlist:"Items on your wishlist"},ready:{errormsg:"Error loading Enhanced Steam data",loading:"Enhanced Steam loading data...",ready:"Enhanced Steam ready"},select:{wishlisted_dlc:"Select Wishlisted DLC",none:"Select None",unowned_dlc:"Select Unowned DLC"},tag:{wishlist:"Wishlist",friends_own:"__friendcount__ own",coupon:"Coupon",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ friends reviewed",inv_gift:"Gift",inv_guestpass:"Guestpass",owned:"Owned",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ wish for</a>"},wallet:{custom_amount:"Add custom amount",custom_amount_text:"Add any amount over __minamount__"},wsgf:{incomplete:"Incomplete",unsupported:"This score is awarded to games that have no __type__ support.  The game may be unplayable in __type__, or the image is stretched to fit the window.  Correct aspect ratio is not retained.",gold:"This medal is awarded to games which have received perfect scores from the WSGF for their __type__ support, and are __type__ Certified.",silver:"This medal is awarded to games that have received a calculated grade of B for their __type__ support.  All of these games are without major flaws, but have at least one blemish that prevents a perfect score.",limited:"This score is awarded to games that have received a calculated grade of C for their __type__ support.  All of these games have some level of __type__ support but have significant issues."}},
			"fin":{about:"Tietoja",activates:"Aktivoitava Steamissa",add_selected_dlc_to_cart:"Lisää valittu lisäsisältö ostoskoriin",add_to_cart:"Lisää koriin",add_to_wishlist:"Lisää toivelistalle",add_unowned_dlc_to_cart:"Lisää ostoskoriin lisäsisältö, jota en omista",after_coupon:"Säästöt kupongeista",all:"Kaikki",all_friends_own:"Kaikki ystävät jotka omistavat tämän (__friendcount__)",always:"Aina",apppage_purchase:"Maksuasetukset",avg_price_3cards:"Kolmen keräilykortin keskiarvo",badges_all:"Kaikki merkit",badges_drops:"Merkit, joista puuttuu löydettävissä olevia kortteja",badge_completion_avg:"Viimeistelyn keskimääräinen hinta",badge_completion_cost:"Merkin viimeistelyn hinta",badge_foil_progress:"Näytä kiiltomerkin edistyminen",badge_not_unlocked:"Ei avattu",badge_progress:"Näytä merkkien edistyminen",binder_view:"Kansionäkymä",birthday_message:"Hyvää Steam-syntymäpäivää, __username__! Steam-käyttäjätilisi on tänään __age__ vuotta vanha!",bug_feature:"Raportoi Virhe / Ehdota Uutta Toimintoa",buy:"Osta",buy_wishlist:"Osta toivelistan pelit",cancel:"Peruuta",cards_owned:"__owned__ / __possible__ korttia kerätty",card_drops_remaining:"__drops__ löydettävä(ä) kortti(a) puuttuu",check_system:"Tarkista järjestelmävaatimukset",clear_cache:"Tyhjennä välimuistin tiedot",common_label:"Piilota pelit, joita et omista",community:"Yhteisö",community_name_account_header:"Käyttäjän __username__ tili",compare:"Vertaile",comparison_mode:"Ota käyttöön pelien yleisnäkymä nähdäksesi pelivertailun",contribute:"Osallistu (GitHub)",coupon_application_note:"Tavaraluettelossasi oleva kuponki käytetään automaattisesti kassalla.",coupon_available:"Sinulla on kuponki käytettävissäsi!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Lue lisää</a> Steam-kupongeista",credits:"Tekijät",customize:"Kustomointi",custom_background:"Mukautettu taustakuva",custom_background_help:"Kaikki Enhanced Steamin käyttäjät näkevät tämän taustakuvan profiilissasi.  Muut käyttäjät näkevät tavallisen taustakuvasi.",date_unlocked:"Avattu",demos:"Demot",discount:"Alennus",dlc:"Ladattava Sisältö",dlc_data_header:"Lisäsisällön tiedot",dlc_details:"Lisäsisällön tiedot",dlc_suggest:"Ehdota uutta kategoriaa",donate:"Lahjoita",drm_third_party:"Varoitus: Tämä tuote käyttää kolmannen osapuolen DRM-suojausta!",drm_third_party_sub:"Varoitus: Yksi tai useampi nimike tässä paketissa käyttää kolmannen osapuolen DRM:ää.",drops_value:"Arvokkaimmat kortit",drops_worth_avg:"Arvo kutakuinkin",each:"Kukin",empty_cart:"Tyhjennä ostoskori",empty_wishlist:"Tyhjennä toivelista",es_supporter:"Enhanced Steamin tukija",events:"Tapahtumat",family_sharing_notice:"<b>Huomautus:</b> Tämä peli ei kuulu Steamin Lainaamo-palvelun piiriin.",faqs:"Usein kysytyt kysymykset",forums:"Foorumi",games:"Pelit",games_all:"Kaikki pelit",games_coupon:"Pelit, joihin voit käyttää kuponkeja",games_discount:"Alennuksessa olevat pelit",games_installed:"Asennetut pelit",games_with_booster:"__boostergames__ peliä, joihin voit saada lisäkorttipaketteja",games_with_drops:"__dropsgames__ peliä, joista puuttuu löydettäviä kortteja",game_name:"Pelin nimi",game_transactions:"Pelin ostotapahtumat",gift_transactions:"Lahjatapahtumat",graphics:"Grafiikat",guides:"Oppaat",hide:"Piilota",highlight:"Korosta",historical_low:"Historian alin hinta",homepage_sidebar:"Sivupalkki",hours_short:"__hours__ tuntia",info:"Lisätietoja",item_type:"Esinetyyppi",language:"Kieli",last_24:"Määrä:  __sold__ myyty viimeisen 24 tunnin sisällä",library_menu:"Kokoelma",loading:"Ladataan...",lowest_price:"Tämänhetkinen Alin Hinta",market_transactions:"Kauppapaikan ostotapahtumat",mods:"Modit",more_information:"Lisätietoja",most_drops:"Eniten löydettäviä kortteja",net_gain:"Nettotulot",net_spent:"Nettomenot",never:"Ei koskaan",news:"Uutiset",notcommon_label:"Piilota omistamasi pelit",no_results_found:"Ei tuloksia",official_group:"Virallinen ryhmä",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Paketin tiedot",packs:"Paketit",permalink:"Pysyvä linkki",popular:"Suositut",price:"Hinta",price_options:"Hinta-asetukset",programming:"Ohjelmointi",purchase_date:"(Ostettu __date__)",purchase_total:"Ostokset yhteensä",rating_details:"Näytä pisteytyksen lisätiedot",region_unavailable:"Tämä tuote ei ole saatavilla alueellasi",remove:"Poista",remove_owned_wishlist:"Poista omistetut pelit toivelistalta",reviews:"Arvostelut",sales_total:"Myyntitulot yhteensä",save:"Tallenna",saved:"Tallennettu",search:"Hae",search_error_retry:"Klikkaa tästä yrittääksesi uudelleen",search_market:"Etsi Steam-yhteisön kauppapaikalta",search_names_only:"Etsi vain nimistä",show:"Näytä",show_all_steam_releases:"Näytä kaikki Steam-julkaisut",size:"Koko",software:"Ohjelma",sort_by:"Lajitteluperuste:",spam_comment_show:"__num__ roskaviestiä piilotettu tältä sivulta.  Paina tästä nähdäksesi ne.",starting_at:"Alkaen",store:"Kauppa",stores:"Kaupat",store_transactions:"Kaupan ostotapahtumat",theworddefault:"Oletusarvo",thewordoptions:"Asetukset",total_size:"Koko",total_spent:"Yhteensä käytetty",total_time:"Aika yhteensä",trading_cards:"Steam-keräilykortit",translate:"Käännä",translation:"Käännökset",using_language:"Selaat Steamia kielellä __current__.",using_language_return:"Klikkaa tästä selataksesi kielellä __base__.",using_store:"Käytät alueen __current__ Steam-kauppaa",using_store_return:"Klikkaa tästä palataksesi __base__ kauppaan",videos:"Videot / Trailerit",view:"Katso",view_all:"NÄYTÄ KAIKKI",view_astats:"Näytä AStats-sivu",view_badge:"Näytä merkki",view_badge_foil:"Näytä kiiltomerkki",view_foil_badge:"Näytä kiiltomerkin edistyminen",view_in:"Katso",view_in_market:"Näytä yhteisön kauppapaikalla",view_marketplace:"Tarkastele Kauppapaikkaa",view_normal_badge:"Näytä tavallisen merkin edistyminen",view_stats:"Näytä tilastot",view_to_scale:"Katso mittakaavassa",visit_store:"Vieraile kauppasivulla",visit_trade_forum:"Vieraile vaihtofoorumilla",website:"Verkkosivu",wiki_article:"Näytä __pcgw__ -artikkeli",wishlist:"Toivelista",achievements:{achievements:"Saavutukset",includes:"Sisältää __num__ Steam-saavutusta",option:"Näytä saavutukset kauppasivuilla",view_all:"Näytä kaikki saavutukset"},bundle:{at_least:"Maksa vähintään",bundle_count:"Kerrat, joina tämä peli on ollut paketissa",header:"Paketit, jotka sisältävät tämän pelin",includes:"Sisältää (__num__) kohdetta",info:"Paketin tiedot",offer_ends:"Tarjous päättyy",pwyw:"Maksa mitä haluat"},charts:{current:"Pelaajat",peakall:"kaikkien aikojen korkein",peaktoday:"päivän korkein",playing_now:"pelaamassa nyt"},hltb:{compl:"Perfektionisti",main:"Päätarina",main_e:"Päätarina ja ekstrat",submit:"Kerro oma aikasi"},library:{categories:"Kategoriat...",error_loading_library:"Kokoelmasi lataaminen epäonnistui.",genres:"Lajityypit...",private_profile:"Vaihda profiilisi tila julkiseksi <a href='http://steamcommunity.com/my/edit/settings'>asetuksissasi</a> käyttääksesi tätä toimintoa."},options:{about_text:"<div class=\"header\">Tietoja <a href='http://www.enhancedsteam.com'>Enhanced Steamista</a>:</div><p>Enhanced Steam on laajennus Google Chromeen, joka lisää monia uusia toimintoja Steamin verkkosivulle.<p>Ominaisuuksiin kuuluvat:<ul><li>Omistamiesi pelien korostaminen</li><li>Toivelistallasi olevien pelien korostaminen</li><li>Pakettien alennusten oikein laskeminen omistamiesi pelien perusteella</li><li>Näyttää kuinka paljon rahaa olet käyttänyt Steam-tililläsi</li><li>Omistamasi lisäsisällön korostus pelin sivulla</li><li>Korjaa \"No Image Available\" kuvat toivelistassasi oleville peleille ja lisäsisällöille</li><li>Varoittaa kolmansien osapuolien DRM-suojauksista</li></ul><p>Jos tästä laajennuksesta on ollut sinulle hyötyä, harkitse lahjoittamista.",api_key:"API-avain",author_info:"Tehnyt: jshackles",carousel_description:"Näytä mainostettujen tuotteiden kuvaukset kaupan etusivulla",changelog:"Muutokset:",clear:"Oletko varma, että haluat nollata asetukset? Tätä ei voi kumota.",contscroll:"Ota hakutulosten jatkuva vieritys käyttöön",coupon:"Tuotteet joihin voit käyttää kuponkeja",customizespamcommentregex:"(Muokkaa)",drm:"Näytä muun valmistajan DRM-suojaus varoitus",es_bg:"Aseta mukautettu taustakuva \"Muokkaa Profiilia\" valikossa",excludef2p:"Älä korosta ilmaispelejä.",foot_link:"Enhanced Steam laajennus",friends_own:"Tuotteet jotka ystäväsi omistavat",friends_rec:"Tuotteet jotka ystäväsi ovat arvostelleet",friends_wishlist:"Tuotteet jotka ovat ystäviesi toivelistoilla",general:"Yleiset asetukset",gift:"Tuotteet jotka omistat lunastamattomina lahjoina",greenlight_banner:"Korvaa Steam Greenlight juliste",group_events:"Näytä tapahtumat ryhmän yleiskatsauksessa",guest:"Tuotteet joihin sinulla on vierailulupa",header:"Ylätunniste",hideactivelistings:"Piilota aktiiviset listaukset Kauppapaikan kotisivulla",hidedlcunownedgames:"Lisäsisältö peleille joita et omista",hidespamcomments:"Piilota roskaposti Workshopin ja profiilien kommenteista",hidetmsymbols:"Tavaramerkki- ja tekijänoikeussymbolit pelien nimissä",hide_about:"Piilota \"Tietoja\" linkki",hide_early_access:"Piilota Early Access -pelit etusivulla, selatessa ja hakutuloksissa",hide_install:"Piilota \"Asenna Steam\" nappula",hide_owned:"Omistamasi tuotteet hakutuloksissa ja tunnistelistoissa",hide_owned_homepage:"Omistamasi tuotteet etusivulla",hltb:"Näytä HowLongToBeat.com arvio",html5video:"Toista videoita HTML5:n avulla Flashin sijaan.",inventory_market_text:"Näytä kauppapaikan hinta tavaraluettlossa",inventory_nav_text:"Näytä edistynyt navigointi tavaraluettelossa",library:"Näytä \"Kokoelma\"-nappula ylätunnisteessa",library_f2p:"Näytä pelatut ilmaispelit ja demot kokoelmassa",library_header:"Kokoelma (BETA)",lowestprice:"Näytä",lowestprice_coupon:"Ota kupongit huomioon hintavertailussa",lowestprice_header:"Hintahistoria",lowestprice_onwishlist:"Näytä toivelistalla",market_total:"Näytä maksutapahtumien yhteenveto kauppapaikalla",metacritic:"Näytä Metacriticin käyttäjien arviot",owned:"Tuotteet jotka omistat",pcgw:"Näytä PCGamingWiki linkit",profile_api_info:"Näytä käyttäjien API linkit profiileissa",profile_links:"Näytä linkit yhteisösivuille",profile_link_images:"Linkkien ikonien väri",profile_link_images_color:"Värillinen",profile_link_images_gray:"Harmaasävy",profile_link_images_none:"Ei ikoneja",profile_permalink:"Näytä pysyvä linkki profiileissa",regional_hideworld:"Piilota maapallo-kuvake",regional_price:"Alueellinen hintavertailu",regional_price_mouse:"pitämällä hiirtä hinnan päällä",regional_price_on:"Näytä alueellinen hintavertailu",replace_account_name:"Korvaa käyttäjätilin nimi profiilinimellä",reset:"Nollaa asetukset",reset_note:"Asetukset nollattu",saved_note:"Asetukset tallennettu",send_age_info:"Lähetä ikävahvistus automaattisesti",showallachievements:"Näytä saavutustilastot \"Kaikki pelit\" sivulla",showspeechsearch:"Lisää puhesyöte hakulaatikkoon",show_astatslink:"Näytä AStats-linkki sovellussivuilla",show_early_access_text:"Näytä Early Access -merkinnät",show_languagewarning:"Näytä varoitus, jos selaat muulla kielellä kuin",show_package_info:"Näytä \"paketin tiedot\" nappula kaikille tuotteille",show_regionwarning:"Näytä varoitus selatessa muun kuin tilin alueen kauppaa",show_steamchart_info:"Näytä SteamCharts.com tilastot",show_sysreqcheck:"Näytä nappula järjestelmävaatimusten tarkastamiseen tuotteiden sivuilla (Kokeellinen!)",spamcommentregex:"Säännöllisen lausekkeen merkkijono:",steamcardexchange:"Näytä SteamCardExchange linkit merkkilistassa",steamdb:"Näytä SteamDB linkit",stores_all:"Vertaile kaikkia kauppoja",tag:"Tunniste",total_spent:"Näytä yhteensä käyttämäsi rahamäärä tilitiedoissa",wishlist:"Tuotteet toivelistallasi",wlbuttoncommunityapp:"Näytä \"Lisää toivelistaan\" nappula tuotteiden yhteisökeskuksissa",wsgf:"Näytä WSGF:n laajakuvatuen merkit"},ready:{errormsg:"Virhe ladatessa Enhanced Steamin tietoja",loading:"Enhanced Steam lataa tietoja...",ready:"Enhanced Steam on valmis"},select:{none:"Tyhjennä valinta",unowned_dlc:"Valitse lisäsisältö, jota en omista",wishlisted_dlc:"Valitse toivelistalla olevat lisäsisällöt"},tag:{coupon:"Kuponki",friends_own:"__friendcount__ omistaa",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ ystävää arvioinut",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ toivoo</a>",inv_gift:"Lahja",inv_guestpass:"Vierailulupa",owned:"Omistetut",wishlist:"Toivelista"},wallet:{custom_amount:"Lisää mukautettu summa",custom_amount_text:"Lisää mikä tahansa summa yli __minamount__"},wsgf:{gold:"Tämä merkki on annettu peleille, jotka ovat saaneet täydelliset pisteet WSGF:ltä __type__ tuesta ja ovat __type__ sertifikoitu.",incomplete:"Keskeneräinen",limited:"Tämä merkki on annettu peleille, jotka ovat saaneet laskennallisen arvosanan C __type__ tuesta. Kaikilla näillä peleillä on jonkin sortin __type__ tuki, mutta myös merkittäviä ongelmia.",silver:"Tämä merkki on annettu peleille, jotka ovat saaneet laskennallisen arvosanan B __type__ tuesta. Kaikki nämä pelit toimivat ilman isompia ongelmia, mutta joissa on kuitenkin muutamia vikoja jotka estävät täydellisen arvosanan.",unsupported:"Tämä tulos annetaan niille peleille, joilla ei ole __type__ tukea. Peliä voi olla mahdotonta pelata __type__, tai kuva voi olla venytetty ruudulle sopivaksi. Oikea kuvasuhde ei täten säily."}},
			"fre":{about:"À propos",acrtag_msg:"Les échanges entre certaines régions ont été désactivés pour cet article",acrtag_tooltip:"Cet article ne peut pas être échangé entre les régions s'il a acheté en Europe de l'Est, en Amérique du Sud ou en Asie du Sud-Est",activates:"Activer sur Steam",add_selected_dlc_to_cart:"Ajouter les DLC sélectionnés au panier",add_to_cart:"Ajouter au panier",add_to_wishlist:"Ajouter à votre liste de souhaits",add_unowned_dlc_to_cart:"Ajouter les DLC non-possédés au panier",after_coupon:"après le code du coupon",all:"Tous",allreleases_products:"Sélectionnez les types de produits que vous souhaitez voir dans cette section",all_friends_own:"(__friendcount__) amis le possèdent",always:"Toujours",apppage_legal:"Informations légales",apppage_purchase:"Options d'achat",apppage_sections:"Sélectionnez les sections que vous aimeriez voir sur cette page",avg_price_3cards:"Prix moyen de 3 cartes à échanger",badges_all:"Tous les badges",badges_drops:"Badges avec des cartes restantes",badge_completion_avg:"Coût moyen de complétion",badge_completion_cost:"Coût pour compléter le badge",badge_foil_progress:"Voir la progression du badge premium",badge_not_unlocked:"Pas déverrouillé",badge_progress:"Voir la progression du badge",binder_view:"Grille",birthday_message:"Joyeux anniversaire Steam, __username__ ! Votre compte Steam a __age__ ans aujourd'hui.",bug_feature:"Signaler un bug / suggérer une fonctionnalité",bundle_saving_text:"Voici ce que vous économisez en achetant ce pack",buy:"Acheter",buying_total:"Total des ordres d'achat",buy_wishlist:"Acheter le contenu de la liste de souhaits",cancel:"Annuler",cards_owned:"__owned__ cartes sur __possible__ possédées",card_drops_remaining:"__drops__ carte(s) restante(s)",check_system:"Vérifier votre système",clear_cache:"Vider le cache de données",common_label:"Cacher les jeux que vous ne possédez pas",community:"Communauté",community_name_account_header:"Compte de __username__",compare:"Comparer",comparison_mode:"Permettre à tous les aperçus de jeux de voir la comparaison des jeux",contribute:"Contribuer (GitHub)",coupon_application_note:"Un coupon de votre inventaire sera utilisé automatiquement à l'achat.",coupon_available:"Vous avez un coupon disponible !",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">En savoir plus</a> sur les Coupons Steam",credits:"Crédits",customize:"Personnaliser",custom_background:"Arrière-plan personnalisé",custom_background_help:"Tous les utilisateurs d'Enhanced Steam verront cet arrière-plan sur votre profil. Les autres utilisateurs verront votre arrière-plan de profil standard.",date_unlocked:"Date de déverrouillage",demos:"Démos",discount:"Remise",dlc:"Contenu téléchargeable",dlc_data_header:"Détails sur le contenu téléchargeable",dlc_details:"Détails sur le contenu téléchargeable",dlc_suggest:"Suggérer une nouvelle catégorie",donate:"Faire un don",drm_third_party:"Attention : ce titre utilise le DRM d'un tiers",drm_third_party_sub:"Attention : un ou plusieurs titres dans ce package utilisent le DRM d'un tiers",drops_value:"Plus haute valeur de carte",drops_worth_avg:"Valeur approximative",each:"chacun",empty_cart:"Vider le panier",empty_wishlist:"Vider la liste de souhaits",es_supporter:"Supporter Enhanced Steam",events:"Événements",family_sharing_notice:"<b>Remarque :</b> Ce jeu est exclu du service de partage familial Steam.",faqs:"Foire aux questions",forums:"Forums",games:"Jeux",games_all:"Tous les jeux",games_coupon:"Jeux avec des coupons",games_discount:"Jeux avec des remises",games_installed:"Jeux installés",games_with_booster:"__boostergames__ jeu(x) éligibles pour des booster packs",games_with_drops:"__dropsgames__ jeu(x) avec des cartes restantes",game_name:"Nom du jeu",game_transactions:"Transactions dans les jeux",gift_transactions:"Transactions pour les cadeaux",graphics:"Graphismes",guides:"Guides",hide:"Cacher",highlight:"Surlignage",historical_low:"Prix historiquement le plus bas",homepage_carousel:"Carrousel",homepage_sidebar:"Barre latérale",homepage_spotlight:"Offre spéciale",homepage_tabs:"Onglets de la page d'accueil",hours_short:"__hours__ h",info:"Info",item_type:"Type d'article",language:"Langue",last_24:"Volume : __sold__ vendus dans les dernières 24 heures",library_menu:"Bibliothèque",loading:"Chargement...",lowest_price:"Prix actuellement le plus bas",market_transactions:"Transactions dans le marché",mods:"Mods",more_information:"Plus d'informations",most_drops:"Le plus de cartes restantes",net_gain:"Bénéfice net",net_spent:"Dépense nette",never:"Jamais",news:"Actualités",notcommon_label:"Cacher les jeux que vous possédez",no_results_found:"Aucun résultat trouvé",official_group:"Groupe officiel",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Infos sur le package",packs:"Packs",permalink:"Permalien",playfire_heading:"Récompenses de Playfire",popular:"Populaire",price:"Prix",price_options:"Options des prix",programming:"Programmation",purchase_date:"(Acheté le __date__)",purchase_total:"Achats totaux",rating_details:"Voir le détail de l'évaluation",region_unavailable:"Non disponible dans cette régio",remove:"Retirer",remove_owned_wishlist:"Retirer les jeux possédés de la liste de souhaits",reviews:"Évaluations",sales_total:"Ventes totales",save:"Enregistrer",saved:"Enregistré",search:"Rechercher",search_error:"Erreur lors du chargement de plus de résultats de recherche",search_error_retry:"Cliquez ici pour réessayer",search_market:"Chercher sur le Marché de la Communauté Steam",search_names_only:"Chercher uniquement dans les noms",show:"Afficher",show_all_steam_releases:"Afficher les nouvelles sorties Steam",size:"Taille",software:"Logiciel",sort_by:"Trier par :",spam_comment_show:"__num__ commentaires spam masqués sur cette page. Cliquez ici pour les afficher.",spam_comment_warn:"Ici sont les dragons...",starting_at:"Prix de départ ",store:"Magasin",stores:"Magasins",store_transactions:"Transactions dans le magasin",theworddefault:"Défaut",thewordoptions:"Options",total_size:"Taille totale",total_spent:"Total dépensé",total_time:"Durée totale",trading_cards:"Cartes à échanger Steam",translate:"Traduire",translation:"Traduction",using_language:"Vous naviguez sur Steam en __current__.",using_language_return:"Cliquez ici pour naviguer sur Steam en __base__.",using_store:"Vous utilisez le magasin Steam pour la région __current__.",using_store_return:"Cliquez ici pour retourner sur le magasin __base__.",valid:"Validité ",videos:"Vidéos/Bandes-annonces",view:"Vue",view_all:"TOUT AFFICHER",view_astats:"Voir la page AStats",view_badge:"Voir le badge",view_badge_foil:"Voir le badge premium",view_foil_badge:"Voir la progression du badge premium",view_in:"Voir sur",view_in_market:"Voir sur le Marché de la Communauté",view_marketplace:"Voir le Marché",view_normal_badge:"Voir la progression du badge",view_stats:"Voir les stats",view_to_scale:"Voir à l'échelle",visit_store:"Visitez la page du magasin",visit_trade_forum:"Visiter le forum d'échange",website:"Site web",wiki_article:"Voir l'article de __pcgw__",wishlist:"Liste de souhaits",achievements:{achievements:"Succès",includes:"Inclut __num__ succès Steam",option:"Afficher les succès dans les pages du magasin",view_all:"Afficher tous les succès"},bundle:{at_least:"Payez au moins",bundle_count:"Nombre de fois que ce jeu a été dans un pack",header:"Packs incluant ce jeu",includes:"Contient (__num__) articles",info:"Infos sur le pack",offer_ends:" L'offre prend fin",pwyw:"Payez ce que vous voulez"},charts:{current:"Joueurs actuels",peakall:"pointe la plus élevée",peaktoday:"pointe du jour",playing_now:"jouent en ce moment"},hltb:{compl:"Perfectionniste ",main:"Histoire principale ",main_e:"Histoire principale et extras ",submit:"Envoyer votre temps"},library:{categories:"Catégories...",error_loading_library:"Impossible de charger votre bibliothèque.",genres:"Genres...",private_profile:"Changez le statut de votre profil pour public <a href='http://steamcommunity.com/my/edit/settings'>dans vos paramètres</a> pour utiliser cette fonctionnalité."},options:{about_text:"À propos d'<a href='http://www.enhancedsteam.com'>Enhanced Steam</a> :<p>Enhanced Steam est une extension pour Google Chrome qui ajoute de nombreuses nouvelles fonctionnalités pour le site de Steam.<p>Caractéristiques incluses :<ul><li>Le surlignage des jeux que vous possédez déjà</li><li>Le surlignage des jeux dans votre liste de souhaits</li><li>Le calcul correct des remises de pack basé sur les jeux que vous possédez déjà</li><li>L'affichage de l'argent que vous avez dépensé sur Steam pour la durée de vie de votre compte</li><li>Le surlignage des DLCs que vous possédez sur la page du jeu</li><li>La correction du \"No Image Available\" des icônes de jeu dans votre liste de souhaits pour n'importe quel jeu ou DLC</li><li>L'affichage des titres avec des DRMs tierces/li></ul><p>Si vous trouvez cette extension utile, veuillez envisager de faire don.",acrtag:"Afficher des avertissements sur les articles quand l'échange entre régions est désactivé",api_key:"Clé API",author_info:"par jshackles",carousel_description:"Afficher les descriptions des applications dans le carrousel du magasin",cart:"Articles dans votre panier",changelog:"Notes de changement :",clear:"Êtes-vous sûr de vouloir réinitialiser toutes les options ? Cela ne peut pas être annulée.",contscroll:"Activer le défilement continu dans les résultats des recherches",coupon:"Articles pour lesquels vous avez des coupons",customizespamcommentregex:"(Personnaliser)",drm:"Afficher les avertissements sur les DRMs tierce",es_bg:"Définir un arrière-plan personnalisé dans la page de modification du profil",excludef2p:"Exclure les jeux Free To Play du surlignage",foot_link:"Extension Enhanced Steam",friends_own:"Articles que vos amis possèdent",friends_rec:"Articles que vos amis ont évalués",friends_wishlist:"Articles que vos amis ont dans leurs listes de souhaits",general:"Général",gift:"Articles stockés en tant que cadeaux",greenlight_banner:"Remplacer la bannière Steam Greenlight",group_events:"Afficher les événements dans l'aperçu des groupes",guest:"Articles pour lesquels vous avez des invitations",header:"En-tête",hideactivelistings:"Cacher, par défaut, toutes les offres actives sur la page d'accueil du Marché",hidedlcunownedgames:"DLC pour les jeux que vous ne possédez pas",hidespamcomments:"Cacher les commentaires de spam du Workshop et des profils",hidetmsymbols:"Symboles des marques et du droit d'auteur dans les titres des jeux",hide_about:"Cacher le lien \"À propos\"",hide_early_access:"Cacher les jeux en accès anticipé sur la page d'accueil, en navigant et dans les pages de recherche",hide_install:"Cacher le bouton \"Installer Steam\"",hide_owned:"Articles que vous possédez dans les résultats de recherche et les pages de tags",hide_owned_homepage:"Articles que vous possédez sur la page d'accueil",hltb:"Afficher les informations de HowLongToBeat.com",html5video:"Afficher les vidéos en utilisant HTML5 au lieu de Flash",inventory_market_text:"Afficher les prix du marché dans la page d'inventaire",inventory_nav_text:"Activer la navigation avancée dans la page d'inventaire",library:"Afficher le bouton Bibliothèque dans l'en-tête",library_f2p:"Afficher les jeux gratuits auxquels vous avez joué et les démos dans la bibliothèque",library_header:"Bibliothèque (BÊTA)",lowestprice:"Afficher l'historique des prix",lowestprice_coupon:"Inclure les codes des coupons dans la comparaison des prix",lowestprice_header:"Informations sur l'historique des prix",lowestprice_onwishlist:"Afficher dans la liste de souhaits",market_total:"Afficher un récapitulatif des transactions sur le Marché",metacritic:"Afficher les scores des utilisateurs de Metacritic",owned:"Articles que vous possédez",pcgw:"Afficher les liens PCGamingWiki",profiles_link_group_game:"Exclusif pour ce jeu",profile_api_info:"Afficher le lien API utilisateur sur les profils",profile_links:"Afficher les liens de profil de ",profile_link_images:"Images des liens de profil ",profile_link_images_color:"Colorées",profile_link_images_gray:"Niveaux de gris",profile_link_images_none:"Aucune",profile_permalink:"Afficher un permalien dans les profils",regional_hideworld:"Cacher le globe indicateur",regional_price:"Comparaison des prix par région",regional_price_mouse:"Au passage de la souris sur le prix",regional_price_on:"Afficher la comparaison des prix par région",replace_account_name:"Remplacer le nom du compte par le nom communautaire",reset:"Réinitialiser les options",reset_note:"Options réinitialisées",saved_note:"Options sauvegardées",send_age_info:"Activer la vérification automatique de l'âge",showallachievements:"Afficher les statistiques des succès dans la page \"Tous les jeux\"",showspeechsearch:"Ajouter la saisie vocale aux boîtes de recherche",show_astatslink:"Afficher le lien AStats dans la page des applications",show_early_access_text:"Afficher des bannières d'images pour l'accès anticipé",show_languagewarning:"Afficher un avertissement si vous naviguez dans une langue autre que",show_package_info:"Afficher les informations sur les packages pour toutes les applications",show_regionwarning:"Afficher un avertissement si vous naviguez hors de la région de votre compte",show_steamchart_info:"Afficher les informations de SteamCharts.com",show_sysreqcheck:"Afficher un bouton pour vérifier la configuration système requise dans la page des applications (expérimental !)",spamcommentregex:"Expression régulière : ",steamcardexchange:"Afficher les liens SteamCardExchange sur les badges",steamdb:"Afficher les liens SteamDB",stores_all:"Comparer tous les magasins",tag:"Tag",total_spent:"Afficher \"Total dépensé\" dans la page du compte",wishlist:"Articles dans votre liste de souhaits",wlbuttoncommunityapp:"Afficher le bouton \"Ajouter à votre liste de souhaits\" dans les hubs de la communauté",wsgf:"Afficher les informations du WSGF (écran large)"},ready:{errormsg:"Erreur lors du chargement des données d'Enhanced Steam",loading:"Chargement des données d'Enhanced Steam...",ready:"Enhanced Steam prêt"},select:{none:"Sélectionner aucun",unowned_dlc:"Sélectionner les DLC non-possédés",wishlisted_dlc:"Sélectionner les DLC de la liste de souhaits"},tag:{coupon:"Coupon",friends_own:"__friendcount__ propriétaire(s)",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ évaluation(s) d'ami(s)",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ souhait(s)</a>",inv_gift:"Cadeau",inv_guestpass:"Invitation",owned:"Possédé",wishlist:"Liste de souhaits"},wallet:{custom_amount:"Ajouter un montant personnalisé",custom_amount_text:"Ajouter un montant supérieur à __minamount__"},wsgf:{gold:"Cette médaille est accordée aux jeux qui ont reçu un score parfait du WSGF pour leur support du __type__, et sont certifiés pour le __type__.",incomplete:"Incomplet",limited:"Ce score est accordé aux jeux qui ont reçu un rang calculé de C pour leur support du __type__. Tous ces jeux ont un certain niveau de support du __type__ mais ont des problèmes importants.",silver:"Cette médaille est accordée aux jeux qui ont reçu un rang calculé de B pour leur support du __type__. Tous ces jeux n'ont pas de défaut majeur, mais ils en ont au moins un qui les empêche d'avoir un score parfait.",unsupported:"Ce score est accordé aux jeux qui ne supportent pas le __type__. Le jeu peut être injouable en __type__, ou l'image est étirée pour s'adapter à la fenêtre. Le format de l'image n'est pas respecté."}},
			"ger":{about:"Über",activates:"Bei Steam aktivierbar",add_selected_dlc_to_cart:"Ausgewählten DLC in den Warenkorb ",add_to_cart:"In den Warenkorb",add_to_wishlist:"Zur Wunschliste hinzufügen",add_unowned_dlc_to_cart:"Noch nicht gekauften DLC in den Warenkorb ",after_coupon:"mit Gutschein",all:"Alle",all_friends_own:"Alle Freunde die dies besitzen (__friendcount__)",always:"Immer",apppage_legal:"Rechtliche Hinweise",apppage_purchase:"Kaufoptionen",apppage_sections:"Wähle die Sektionen aus, die du auf der Seite sehen willst",avg_price_3cards:"Durchschnittspreis von drei Sammelkarten",badges_all:"Alle Abzeichen",badges_drops:"Abzeichen mit verbleibenden Kartenfunden",badge_completion_avg:"Durchschnittliche Vervollständigungskosten",badge_completion_cost:"Kosten um das Abzeichen zu vervollständigen",badge_foil_progress:"Glanzabzeichen Fortschritt anzeigen",badge_not_unlocked:"Nicht freigeschaltet",badge_progress:"Abzeichen Fortschritt anzeigen ",binder_view:"Mappenansicht",birthday_message:"Alles Gute zum Steam Geburtstag __username__! Dein Steam Account ist jetzt __age__ Jahre alt.",bug_feature:"Fehler melden / Verbesserungsvorschläge",buy:"Kaufen",buying_total:"Gesamtpreis",buy_wishlist:"Wunschliste kaufen",cancel:"Abbrechen",cards_owned:"__owned__ von __possible__ Karten im Besitz",card_drops_remaining:"__drops__ Kartenfunde verbleibend",check_system:"Dein System überprüfen",clear_cache:"Gecachte Daten löschen",common_label:"Spiele die sich nicht im Besitz befinden ausblenden",community:"Community",community_name_account_header:"Account von __username__",compare:"Vergleichen",comparison_mode:"Gesamtspieleübersicht aktivieren um vergleiche zu sehen",contribute:"Beitragen (GitHub)",coupon_application_note:"Ein Gutschein aus Ihrem Inventar wird automatisch im Warenkorb angewendet.",coupon_available:"Sie haben einen Gutschein zur Verfügung!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Mehr über Steam-Gutscheine lernen</a>",credits:"Credits",customize:"Anpassen",custom_background:"Eigener Hintergrund",custom_background_help:"Alle Enhanced Steam Nutzer werden diesen Hintergrund auf deiner Profilseite sehen. Nutzer die Enhanced Steam nicht nutzen sehen deinen normalen Profilhintergrund.",date_unlocked:"Freischaltdatum",discount:"Preisnachlass",dlc_data_header:"Details über Inhalte zum Herunterladen",dlc_details:"Details zu Herunterladbaren Inhalten",dlc_suggest:"Neue Kategorie vorschlagen",donate:"Spenden",drm_third_party:"Achtung: Dieser Titel nutzt DRM von Dritten",drm_third_party_sub:"Achtung: Einer oder mehrere Titel in diesem Paket verwenden 3rd-Party-DRM",drops_value:"Höchster Kartenfundwert ",drops_worth_avg:"Ungefährer Wert",each:"pro Spiel",empty_cart:"Warenkorb leeren",empty_wishlist:"Wunschliste leeren",es_supporter:"Enhanced Steam Unterstützer",events:"Events",family_sharing_notice:"<b>Hinweis:</b> Dieses Spiel kann nicht über Steam Family Sharing geteilt werden!",faqs:"Häufig gestellte Fragen",forums:"Foren",games:"Spiele",games_all:"Alle Spiele",games_coupon:"Spiele mit Gutscheinen",games_discount:"Preisreduzierte Spiele",games_installed:"Installierte Spiele",games_with_booster:"__boostergames__ Spiele können Booster Packs erhalten",games_with_drops:"Noch __dropsgames__ Spiele mit Kartenfunden verbleibend",game_name:"Spiele Name",game_transactions:"Spieltransaktionen ",gift_transactions:"Geschenk Transaktionen",graphics:"Grafik",hide:"Verbergen",highlight:"Highlight",historical_low:"Rekordtief",homepage_sidebar:"Seitenleiste",homepage_spotlight:"Rampenlicht",hours_short:"__hours__ Stunden",info:"Information",item_type:"Art des Titels",language:"Sprache",last_24:"Menge: __sold__ wurden in den letzten 24 Stunden verkauft",library_menu:"Bibliothek",loading:"Lade...",lowest_price:"Aktuell niedrigster Preis",market_transactions:"Markttransaktionen ",more_information:"Mehr Informationen",most_drops:"Meiste Kartenfunde",net_gain:"Nettogewinn",net_spent:"Netto Ausgaben",never:"Niemals",news:"Neuigkeiten",notcommon_label:"Spiele die du bereits besitzt nicht anzeigen ",no_results_found:"Keine Ergebnisse gefunden",official_group:"Offizielle Gruppe",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Paketinformationen",permalink:"Permalink",playfire_heading:"Belohnungen von Playfire",popular:"Beliebt",price:"Preis",price_options:"Preis Optionen",programming:"Programmierung",purchase_date:"(Am __date__ gekauft)",purchase_total:"Gesamtkosten",rating_details:"Bewertungsdetails ansehen",region_unavailable:"In dieser Region nicht erhältlich",remove:"Entfernen",remove_owned_wishlist:"Spiele die du schon besitzt von der Wunschliste entfernen ",reviews:"Kritiken",sales_total:"Gesamterträge ",save:"Speichern",saved:"Gespeichert",search:"Suchen",search_market:"Steam-Communitymarkt durchsuchen",search_names_only:"Nur in Namen suchen",show:"Anzeigen",show_all_steam_releases:"Alle Steam Veröffentlichungen anzeigen",size:"Größe",sort_by:"Sortieren nach:",spam_comment_show:"__num__spam Kommentare wurden versteckt - klicken Sie hier um sie anzuzeigen",spam_comment_warn:"Bitte nicht spammen...",starting_at:"Ab",store:"Shop",stores:"Shops",store_transactions:"Shop Transaktionen",theworddefault:"Standard",thewordoptions:"Optionen",total_size:"Gesamtgröße",total_spent:"Gesamtausgaben",total_time:"Gesamtzeit",trading_cards:"Steam Sammelkarten",translate:"Übersetzen",translation:"Übersetzung",using_language:"Du nutzt Steam in __current__",using_language_return:"Hier klicken um Steam in __base__ zu nutzen.",using_store:"Du nutzt momentan den regionalen Steam Shop für __current__.",using_store_return:"Hier klicken um zum __base__ Shop zurück zukehren.",valid:"Gültig",view:"Ansicht",view_all:"ALLE ANZEIGEN",view_astats:"Zeige AStats Seite",view_badge:"Abzeichen ansehen",view_badge_foil:"Glanz Abzeichen anzeigen",view_foil_badge:"Glanz Abzeichen Fortschritt anzeigen ",view_in:"In ansehen",view_in_market:"Im Communitymarkt anzeigen",view_marketplace:"Marktplatz anzeigen",view_normal_badge:"Normales Abzeichen Fortschritt anzeigen",view_stats:"Statistiken anschauen",view_to_scale:"Im korrekten Maßstab anzeigen ",visit_store:"Zur Shopseite",visit_trade_forum:"Handelsforum öffnen",website:"Webseite",wiki_article:"__pcgw__ Artikel anzeigen",wishlist:"Wunschliste",achievements:{achievements:"Errungenschaften",includes:"Beinhaltet __num__ Steam Errungenschaften",option:"Errungenschaften auf Shop Seiten anzeigen",view_all:"Alle Errungenschaften anzeigen"},bundle:{at_least:"Bezahle mindestens",bundle_count:"Häufigkeit die dieses Spiel in einem Bundle Angeboten wurde",header:"Bundles bei denen dieses enthalten Spiel ist",includes:"Beinhaltet (__num__) Titel ",info:"Bundle Informationen",offer_ends:"Das Angebot endet",pwyw:"Nenne deinen Preis"},charts:{current:"Derzeitige Spieler",peakall:"Historischer Höchststand ",peaktoday:"heutiger Höchststand",playing_now:"spielen jetzt gerade"},hltb:{compl:"Vervollständiger",main:"Hauptgeschichte",main_e:"Hauptgeschichte und Extras",submit:"Deine Zeit übertragen"},library:{categories:"Kategorien...",error_loading_library:"Deine Bibliothek konnte nicht geladen werden.",genres:"Genres...",private_profile:"Ändere deinen Profil Status zu \"öffentlich\" <a href='http://steamcommunity.com/my/edit/settings'>in your settings</a> um diese Funktion zu nutzen."},options:{about_text:"<div class=\"header\">Über <a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:</div><p>Enhanced Steam ist eine Google Chrome Erweiterung die der Steam Webseite viele neue Funktionen hinzufügt.<p>Enthaltene Funktionen:<ul><li>Hervorheben von Spielen die du bereits besitzt</li><li>Spiele die sich auf deiner Wunschliste befinden hervorheben</li><li>Korrektes berechnen von Bundle Preisnachlässen basierend auf bereits im Besitz befindlichen Titeln</li><li>Anzeigen von deinen Gesamtausgaben auf Steam seit bestehen deines Kontos</li><li>Hervorheben von DLC auf Spieleseiten den du bereits besitzt</li><li>Korrektur von \"Kein Bild verfügbar\" Spieleicons auf deiner Wunschliste für jedes Spiel oder DLC</li><li>Warnhinweise falls ein Spiel DRM Maßnahmen von dritten verwendet</li></ul><p>Bitte denke über eine kleine Spende nach falls du diese Erweiterung nützlich findest.",api_key:"API Schlüssel",author_info:"von jshackles",carousel_description:"Zeige Titelbeschreibungen im Karusell auf der Shop-Startseite",changelog:"Änderungshistorie",clear:"Bist du sicher das du alle Einstellungen zurücksetzen willst? Dies kann nicht rückgängig gemacht werden.",contscroll:"Endlos Bildlauf in den Suchergebnissen aktivieren",coupon:"Titel, für welche ich einen Gutschein habe",customizespamcommentregex:"(Anpassen)",drm:"Warnung über DRMs von Dritten anzeigen",es_bg:"Eigenen Hintergrund im \"Profil bearbeiten\" Fenster einstellen",excludef2p:"Keine kostenlos spielbaren Titel makieren",foot_link:"Enhanced Steam Erweiterung",friends_own:"Titel die deine Freunde besitzen",friends_rec:"Titel  zu denen deine Freunde eine Kritik geschrieben haben",friends_wishlist:"Titel, welche sich Freunde wünschen",general:"Allgemeines",gift:"Titel, die als Geschenk in meinem Inventar liegen",greenlight_banner:"Greenlight Banner ersetzen",group_events:"Zeige Events in Gruppenübersicht",guest:"Titel, die als Besucherpass in meinem Inventar liegen",header:"Kopfzeile",hideactivelistings:"Standartmäßig alle aktiven Angebote beim Markt ausblenden",hidedlcunownedgames:"DLC für Spiele die du nicht besitzt",hidespamcomments:"Keine Spam Kommentare auf Workshop- und Profilseiten anzeigen",hidetmsymbols:"Warenzeichen- und Urhebersymbole in Spieltiteln ",hide_about:"\"Über\" Link nicht anzeigen",hide_early_access:"Early Access Spiele nicht auf der Hauptseite, im Shop und bei Suchergebnissen anzeigen.",hide_install:"\"Steam installieren\" Schaltfläche verbergen",hide_owned:"Titel die du besitzt in Suchergebnissen und Tag Seiten",hide_owned_homepage:"Titel die du besitzt auf der Hauptseite",hltb:"Informationen von HowLongToBeat.com anzeigen",html5video:"HTML5 anstatt Flash zur Video Darstellung nutzen",inventory_market_text:"Marktpreise auf der Inventar Seite anzeigen",inventory_nav_text:"Erweiterte Navigation auf der Inventar Seite anzeigen",library:"Bibliothek Schaltfläche in der Kopfzeile anzeigen",library_f2p:"Kostenlose Spiele und Demos die gespielt wurden in der Bibliothek anzeigen ",library_header:"Bibliothek (BETA)",lowestprice:"Zeige",lowestprice_coupon:"Gutscheine in den Preisvergleich mit einbeziehen",lowestprice_header:"Preisentwicklung",lowestprice_onwishlist:"Auf der Wunschliste anzeigen",market_total:"Transaktionszusammenfassung im Markt anzeigen",metacritic:"Zeige Metacritic-Benutzerbewertungen",owned:"Titel in meinem Besitz",pcgw:"Links von PCGamingWiki anzeigen",profiles_link_group_game:"Spielexklusiv",profile_api_info:"Nutzer API Links in Profilen anzeigen",profile_links:"Zeige Profillinks zu",profile_link_images:"Bildern Profillink hinzufügen",profile_link_images_color:"Farbig",profile_link_images_gray:"Graustufen",profile_link_images_none:"Nichts",profile_permalink:"Permalink in Profilen anzeigen",regional_hideworld:"Globus Symbol nicht anzeigen",regional_price:"Regionaler Preisvergleich",regional_price_mouse:"wenn der Mauszeiger auf den Preis zeigt",regional_price_on:"Regionalen Preisvergleich anzeigen",replace_account_name:"Account Namen mit Community Namen ersetzen",reset:"Einstellungen zurücksetzen",reset_note:"Einstellungen zurücksetzen",saved_note:"Einstellungen gespeichert",send_age_info:"Alter automatisch senden wenn Nachweisprüfung angefordert wird",showallachievements:"Statistiken für Errungenschaften auf der \"Alle Spiele\" Seite anzeigen",showspeechsearch:"Spracheingabe bei Suchfeldern hinzufügen",show_astatslink:"Zeige den AStats Link auf den Appseiten",show_early_access_text:"Earl Access Banner anzeigen",show_languagewarning:"Warnung anzeigen wenn eine andere Sprache dargestellt wird als",show_package_info:"Paketinformationen für alle Anwendungen anzeigen",show_regionwarning:"Warnung anzeigen wenn ein regionaler Steam Shop genutzt wird der nicht dem Account entspricht",show_steamchart_info:"Informationen von SteamCharts.com anzeigen",show_sysreqcheck:"Schaltfläche um Systemvoraussetzungen zu überprüfen zu Spieleseiten hinzufügen (Experimentell!)",spamcommentregex:"Regulärer Ausdruck",steamcardexchange:"SteamCardExchange Links bei Abzeichen anzeigen",steamdb:"Zeige SteamDB-Links",stores_all:"Alle Shops vergleichen",tag:"Markierung",total_spent:"Zeige \"Ausgaben Gesamt\" in Accountdetails",wishlist:"Titel auf meiner Wunschliste",wlbuttoncommunityapp:"\"Zur Wunschliste hinzufügen\"-Schaltfläche zu Community-Hub Seiten hinzufügen",wsgf:"Zeige WSGF (Widescreen)-Info"},ready:{errormsg:"Fehler beim laden von Enhanced Steam Daten",loading:"Enhanced Steam lädt Daten...",ready:"Enhanced Steam ist bereit"},select:{none:"Keines Auswählen",unowned_dlc:"DLC auswählen den du noch nicht besitzt",wishlisted_dlc:"DLC von der Wunschliste auswählen"},tag:{coupon:"Gutschein",friends_own:"__friendcount__ besitzen",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ Kritiken von Freunden",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ mal gewünscht</a>",inv_gift:"Geschenk",inv_guestpass:"Besucherpass",owned:"Bereits im Besitz",wishlist:"Wunschliste"},wallet:{custom_amount:"Eigenen Betrag hinzufügen",custom_amount_text:"Beliebigen Betrag über __minamount__ hinzufügen"},wsgf:{gold:"Diese Medaille wird Spielen verliehen die eine perfekte Punktzahl von der WSGF für __type__ Unterstützung und __type__ erhalten haben.",incomplete:"Unvollständig",limited:"Diese Medaille wird Spielen verliehen die eine kalkulierte Stufe C für ihre __type__ unterstützung erhalten haben. Alle diese Spiele haben __type__ Unterstützung, leiden aber unter wesentlichen Problemen.",silver:"Diese Medaille wird Spielen verliehen die eine kalkulierte Stufe B für ihre __type__  unterstützung erhalten haben. Alle diese Spiele haben keine größeren Mängel aber ein oder mehere kleine Fehler haben verhindert das sie eine Perfekte Punktzahl erhalten haben.",unsupported:"Diese Punktzahl wir Spielen verliehen die keinerlei __type__ Unterstützung haben. Es kann sein das das Spiel unspielbar in __type__ ist oder das Bild gestreckt wird um den Bildschirm auszufüllen. Das korrekte Seitenverhältniss wird nicht beibehalten."}},
			"gre":{about:"Σχετικά",activates:"Ενεργοποιείται στο Steam",add_selected_dlc_to_cart:"Προσθέστε τα επιλεγμένα DLC στο καλάθι αγορών",add_to_cart:"Προσθήκη στο Καλάθι αγορών",add_to_wishlist:"Προσθήκη στην λίστα επιθυμιών ",add_unowned_dlc_to_cart:"Προσθέστε Περιέχομενο Προς Λήψη που δεν έχετε στο καλάθι αγορών",all:"Όλα",always:"Πάντα",badge_not_unlocked:"Δεν ξεκλειδώθηκε",bug_feature:"Αναφορά Bug / Προτείνετε Δυνατότητα",buy:"Αγορά",buy_wishlist:"Αγοράστε την Λίστα Επιθυμιών",cancel:"Ακύρωση",check_system:"Ελέγξτε το Σύστημα σας",community:"Κοινότητα",compare:"Σύγκριση",contribute:"Σύμβαλε (GitHub)",coupon_available:"Έχετε ένα διαθέσιμο κουπόνι",date_unlocked:"Ημερομηνία που ξεκλειδώθηκε",discount:"Έκπτωση",dlc_data_header:"Πληροφορίες Περιεχομένου προς Λήψη",dlc_details:"Πληροφορίες για το Περιεχόμενο προς λήψη",dlc_suggest:"Προτείνετε μια νέα κατηγορία",donate:"Δωρεά",drops_worth_avg:"Αξίζουν Περίπου",each:"Κάθε",empty_wishlist:"Άδειασμα λίστας επιθυμιών",events:"Γεγονότα",faqs:"Συχνές ερωτήσεις",forums:"Φόρουμ",games:"Παιχνίδια",games_all:"Όλα τα Παιχνίδια",games_coupon:"Παιχνίδια με Κουπόνια",games_discount:"Παιχνίδια με εκπτώσεις",games_installed:"Εγκατεστημένα Παιχνίδια",game_name:"Όνομα Παιχνιδιού",game_transactions:"Συναλλαγές Παιχνιδιών",graphics:"Γραφικά",hide:"Απόκρυψη",historical_low:"Ιστορικά Χαμηλότερη Τιμή",hours_short:"__hours__ ώρες",info:"Πληροφορίες",item_type:"Τύπος Αντικειμένου",language:"Γλώσσα",library_menu:"Βιβλιοθήκη",loading:"Φόρτωση...",lowest_price:"Τρέχουσα Χαμηλότερη Τιμή",market_transactions:"Συναλλαγές Αγοράς",more_information:"Περισσότερες Πληροφορίες",never:"Ποτέ",news:"Νέα",notcommon_label:"Κρείψτε παιχνίδια που ήδη κατέχετε",no_results_found:"Δεν βρέθηκαν αποτελέσματα",official_group:"Επίσημη Ομάδα",official_group_url:"steamcommunity.com/groups/enhancedsteam",price:"Τιμή",price_options:"Επιλογές Τιμής",rating_details:"Δείτε πληροφορίες βαθμολογίας",region_unavailable:"Μη διαθέσιμο σε αυτή την περιοχή ",remove:"Αφαίρεση",remove_owned_wishlist:"Αφαίρεση αγορασμένων παιχνιδιών από την λίστα επιθυμιών",reviews:"Κριτικές",sales_total:"Σύνολο Πωλήσεων",save:"Αποθήκευση",saved:"Αποθηκεύτηκε",search_market:"Αναζήτηση στην Αγορά Κοινότητας Steam",show:"Εμφάνιση",size:"Μέγεθος",sort_by:"Ταξινόμηση κατά:",store:"Κατάστημα",stores:"Καταστήματα",store_transactions:"Συναλλαγές Καταστήματος",thewordoptions:"Επιλογές",total_size:"Συνολικό Μέγεθος",total_time:"Συνολικός Χρόνος",trading_cards:"Κάρτες Steam",translate:"Μετάφραση",translation:"Μετάφραση",using_store_return:"Κάντε κλικ εδώ για να επιστρέψετε στο __base__ κατάστημα.",view_all:"ΕΜΦΑΝΙΣΗ ΟΛΩΝ",view_badge:"Εμφάνιση Εμβλήματος",view_stats:"Δείτε τα στατιστικά",visit_store:"Επίσκεψη Σελίδας Καταστήματος",website:"Ιστοσελίδα",achievements:{option:"Εμφανίστε επιτεύγματα σε σελίδες καταστήματος"},bundle:{at_least:"Πληρώστε τουλάχιστον",header:"Bundles που περιέχουν αυτό το παιχνίδι",includes:"Περιέχει (__num__) αντικείμενα",info:"Πληροφορίες Bundle",offer_ends:"Η προσφορά λήγει",pwyw:"Πληρώστε Όσο Θέλετε"},charts:{current:"Παίζουν αυτή τη στιγμή",playing_now:"παίζουν τώρα"},hltb:{submit:"Καταχωρήστε Τον Χρόνο σας"},options:{changelog:"Λίστα Αλλαγών:",coupon:"Αντικείμενα με κουπόνια",customizespamcommentregex:"(Προσαρμογή)",friends_own:"Αντικείμενα που έχουν οι φίλοι σας",general:"Γενικά",header:"Επικεφαλίδα",hide_about:"Απόκρυψη \"Σχετικά\" συνδέσμου",hltb:"Εμφανίστε πληροφορίες από HowLongToBeat.com",html5video:"Προβολή βίντεο με τη χρήση HTML5 αντί για Flash",lowestprice:"Προβολή",lowestprice_coupon:"Να περιλαμβάνονται κωδικοί κουπονιών στη σύγκριση τιμών",market_total:"Προβολή του συνόλου συναλλαγών στην Αγορά",metacritic:"Εμφανίστε τις βαθμολογίες χρηστών από το Metacritic",owned:"Αντικείμενα στην κατοχή σας",pcgw:"Εμφανίστε συνδέσμους PCGamingWiki",profile_links:"Προβολή συνδέσμων προφίλ σε",regional_price:"Σύγκριση τιμών ανά περιοχή",reset:"Επαναφορά επιλογών",showallachievements:"Εμφανίστε τα στατιστικά επιτευγμάτων στην σελίδα \"Όλα τα Παιχνίδια\"",steamdb:"Εμφανίστε συνδέσμους από το SteamDB",stores_all:"Συγκρίνετε όλα τα καταστήματα",wishlist:"αντικείμενα στην λίστα επιθυμιών σας"},select:{unowned_dlc:"Επιλογή Περιεχομένου Προς Λήψη που δεν έχετε"},tag:{coupon:"Κουπόνι",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ wish for</a>",inv_gift:"Δώρο",wishlist:"Λίστα Επιθυμιών"},wsgf:{incomplete:"Μη ολοκληρωμένο"}},
			"hun":{about:"Infó",add_to_cart:"Kosárba tesz",add_to_wishlist:"Felvétel a kívánságlistára",all:"Összes",all_friends_own:"Összes barát, aki birtokolja ezt (__friendcount__)",always:"Mindig",badges_all:"Összes kitűző",badge_foil_progress:"Fóliás kitűzőállapot megnézése",badge_progress:"Kitűzőállapot megnézése",birthday_message:"Boldog Steam születésnapot, __username__! A Steam fiókod __age__ éves lett.",bug_feature:"Hibajelentés",buy_wishlist:"Kívánságlista megvásárlása",cancel:"Mégse",common_label:"Nem birtokolt játékok elrejtése",community:"Közösség",compare:"Összehasonlítás",contribute:"Közreműködés (GitHub)",custom_background:"Egyedi profilháttér",custom_background_help:"Az összes Enhanced Steam felhasználó ezt a hátteret fogja látni a profilodban. A nem Enhanced Steam felhasználók a hagyományos profilhátteredet fogják látni.",date_unlocked:"Feloldás dátuma",donate:"Támogatás",empty_cart:"Kosár kiürítése",empty_wishlist:"Kívánságlista ürítése",faqs:"Gyakran ismételt kérdések",forums:"Fórum",games:"Játékok",games_all:"Összes játék",games_discount:"Kedvezményes játékok",games_installed:"Telepített játékok",game_name:"Játék neve",game_transactions:"Játék tranzakciók",gift_transactions:"Ajándék tranzakciók",graphics:"Grafika",hide:"Elrejt",highlight:"Kiemel",historical_low:"A valaha volt legalacsonyabb ár",hours_short:"__hours__ óra",item_type:"Elem típusa",language:"Nyelv",library_menu:"Könyvtár",loading:"Betöltés...",lowest_price:"A jelenlegi legalacsonyabb ár",market_transactions:"Piaci tranzakciók",more_information:"További információ",net_gain:"Tiszta nyereség",net_spent:"Tiszta kiadás",never:"Soha",news:"Hírek",no_results_found:"Nincs találat",official_group:"Hivatalos csoport",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Csomaginfó",permalink:"Permalink",popular:"Népszerű",price:"Ár",price_options:"Ár opciók",purchase_date:"(Megvéve ekkor: __date__)",purchase_total:"Vásárlás összesen",region_unavailable:"Nem elérhető ebben a régióban",remove:"Eltávolít",remove_owned_wishlist:"A már megvett játékok törlése a kívánságlistáról",reviews:"Értékelések",sales_total:"Eladás összesen",save:"Ment",saved:"Mentett",search:"Keresés",search_market:"Keresés a Steam Piacon",show:"Mutat",size:"Méret",sort_by:"Rendezési szempont:",starting_at:"Kezdődik",store:"Áruház",store_transactions:"Áruházi tranzakciók",theworddefault:"Alapértelmezett",thewordoptions:"Beállítások",total_spent:"Összes kiadás",total_time:"Összes játékidő",trading_cards:"Steam játékkártyák",translate:"Fordítás",translation:"Fordítás",using_language:"A steam oldalait __current__ nyelven nézed.",using_language_return:"Kattints ide, hogy a Steam oldalait __base__ nyelven böngészd.",view_astats:"AStats oldal megnézése",view_badge:"Kitűzők mutatása",view_foil_badge:"Fóliás kitűzőállapot megnézése",view_in_market:"Megnéz a Közösségi Piacon",view_normal_badge:"Közönséges kitűzőállapot megnézése",view_stats:"Statisztikák megtekintése",visit_store:"Áruházi oldal megnézése",website:"Weboldal",wishlist:"Kívánságlista",achievements:{achievements:"Teljesítmények",includes:"__num__ Steam teljesítményt tartalmaz",option:"Teljesítmények mutatása az áruház oldalain",view_all:"Összes teljesítmény megtekintése"},bundle:{header:"Csomagok, amik tartalmazzák ezt a játékot"},charts:{current:"Jelenlegi játékosok",peakall:"Eddigi csúcs",peaktoday:"Mai csúcs",playing_now:"Most játszik"},hltb:{main:"Főszál",main_e:"Főszál és mellékfeladatok"},library:{categories:"Kategóriák...",error_loading_library:"Nem sikerült a könyvtárat betölteni",genres:"Műfajok..."},options:{author_info:"jshackles által",contscroll:"A keresés eredményeinek folyamatos görgetésének az engedélyezése.",coupon:"Kuponok",customizespamcommentregex:"(Testreszabás)",drm:"Mutassa a 3. fél általi DRM figyelmeztetéseket",excludef2p:"Az ingyenes játékok kizárása a kiemeléstől",friends_own:"Barátaid által birtokolt tárgyak",friends_rec:"Barátaid által elbírált tárgyak",friends_wishlist:"Tárgyak amelyeket a barátaid kívánságlistáin vannak rajta",general:"Általános",gift:"Ajánékok",guest:"Vendégkártyák",header:"Fejrész",hidedlcunownedgames:"DLC-k olyan játékokhoz amelyek nincsenek meg neked",hide_about:"\"Névjegy\" hivatkozás elrejtése",hide_install:"A \"Steam telepítése\" gomb elrejtése",hltb:"Mutassa a HowLongToBeat.com infókat",html5video:"Videók mutatása HTML5 használatával Flash helyett",inventory_market_text:"Piaci ár megjelenítése a raktár oldalon",inventory_nav_text:"Bővített kezelési lehetőségek a raktár oldalon",library:"Könyvtár gomb mutatása a fejrészben",library_f2p:"Játszott ingyenes és demó játékok mutatása a könyvtárban",library_header:"Könyvtár (BÉTA)",lowestprice:"Mutat",lowestprice_coupon:"Kupon kódok beszámítása ár összehasonlításkor",metacritic:"Mutassa a Metacritic felhasználó pontokat",owned:"Tárgyaid",pcgw:"Mutassa a PCGaminfWiki linkeket",profile_links:"Mutassa a profil linkeket a",profile_link_images:"Profil képek",profile_link_images_color:"Színezett",profile_link_images_gray:"Szürke",profile_link_images_none:"Semmi",profile_permalink:"Mutassa a permalinkeket profilokon",reset:"Beállítások visszaállítása",send_age_info:"Automatikusan elküldi az életkor ellenőrzést amikor kérik",showallachievements:"Teljesítmények mutatása az \"Összes játék\" oldalon",showspeechsearch:"Beszéd bevitelt hozzáadni a keresés mezőhöz",show_astatslink:"AStats hivatkozás mutatása az áruház oldalain",show_steamchart_info:"Mutassa a SteamCharts.com infókat",show_sysreqcheck:"Mutassa a gépigény gombot az alkalmazások oldalon (Kísérleti!)",steamdb:"Mutassa a SteamDB linkeket",tag:"Címkézd:",wishlist:"Tárgyak a kívánságlistádon",wsgf:"Mutassa a WSGF (Széles képernyő) infókat"},select:{unowned_dlc:"Nem birtokolt DLC-k kiválasztása",wishlisted_dlc:"Kívánságlistán szereplő DLC-k kiválasztása"},tag:{inv_gift:"Ajándék",owned:"Birtokolt",wishlist:"Kívánságlista"}},
			"ita":{about:"Informazioni",acrtag_msg:"Lo scambio di questo articolo è stato disabilitato per alcune regioni",acrtag_tooltip:"Questo articolo non può essere scambiato con altre regioni se acquistato in Europa Orientale, Sud America o Sud-Est Asiatico",activates:"Attivabile su Steam",add_selected_dlc_to_cart:"Aggiungi DLC selezionati al carrello",add_to_cart:"Aggiungi al carrello",add_to_wishlist:"Aggiungi alla Lista dei desideri",add_unowned_dlc_to_cart:"Aggiungi DLC non posseduti al carrello",after_coupon:"con il coupon",all:"Tutti",allreleases_products:"Seleziona i tipi di prodotti che vorresti vedere in questa sezione",all_friends_own:"Amici che lo possiedono (__friendcount__)",always:"Sempre",apppage_legal:"Informazioni legali",apppage_purchase:"Opzioni di acquisto",apppage_sections:"Seleziona le sezioni che vorresti vedere su questa pagina",avg_price_3cards:"Prezzo medio di tre carte collezionabili",badges_all:"Tutte le medaglie",badges_drops:"Medaglie con carte da trovare",badge_completion_avg:"Costo medio di completamento",badge_completion_cost:"Costo per il completamento",badge_foil_progress:"Mostra progresso Medaglia Foil",badge_not_unlocked:"Da sbloccare",badge_progress:"Mostra progresso della medaglia",binder_view:"Griglia",birthday_message:"Buon Compleanno Steam, __username__! Il tuo account Steam oggi compie __age__ anni.",bug_feature:"Segnala Bug / Suggerimenti",bundle_saving_text:"Ecco quanto risparmi acquistando questo bundle",buy:"Acquista",buying_total:"Acquista totale",buy_wishlist:"Acquista Lista dei desideri",cancel:"Cancella",cards_owned:"__owned__ di __possible__ carte possedute",card_drops_remaining:"__drops__ carte ancora da trovare",check_system:"Controlla il sistema",clear_cache:"Svuota la cache",common_label:"Nascondi giochi non posseduti",community:"Comunità",community_name_account_header:"Account di __username__",compare:"Confronta",comparison_mode:"Abilita \"Tutti i giochi\" per confrontare i giochi",contribute:"Contributi (GitHub)",coupon_application_note:"Un coupon presente nel tuo inventario verrà utilizzato al momento del pagamento.",coupon_available:"Hai un coupon a disposizione!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Informazioni</a> sui coupon di Steam.",credits:"Crediti",customize:"Personalizza",custom_background:"Sfondo personalizzato",custom_background_help:"Tutti gli utenti di Enhanced Steam vedranno questo sfondo sul tuo profilo. Gli altri vedranno il tuo sfondo normale.",date_unlocked:"Data di sblocco",demos:"Demo",discount:"Sconto",dlc:"Contenuti scaricabili",dlc_data_header:"Dettagli DLC",dlc_details:"Dettagli dei contenuti scaricabili",dlc_suggest:"Suggerisci nuova categoria",donate:"Donazioni",drm_third_party:"Attenzione: Questo titolo utilizza DRM di terze parti",drm_third_party_sub:"Attenzione: Uno o più titoli in questo pacchetto utilizzano DRM di terze parti",drops_value:"Valore più alto",drops_worth_avg:"Valore approssimativo",each:"Ciascuno",empty_cart:"Svuota il carrello",empty_wishlist:"Svuota Lista dei desideri",es_supporter:"Sostenitore di Enhanced Steam",events:"Eventi",family_sharing_notice:"<b>Avviso:</b> Questo gioco è escluso dal servizio di Condivisione Familiare della libreria.",faqs:"Domande frequenti",forums:"Forums",games:"Giochi",games_all:"Tutti i giochi",games_coupon:"Giochi con coupon",games_discount:"Giochi scontati",games_installed:"Giochi installati",games_with_booster:"__boostergames__ giochi idonei per i pacchetti di carte",games_with_drops:"__dropsgames__ giochi con carte da trovare",game_name:"Nome del gioco",game_transactions:"Transazioni in-game",gift_transactions:"Transazioni Doni",graphics:"Grafica",guides:"Guide",hide:"Nascondi",highlight:"Evidenzia",historical_low:"Minimo storico",homepage_carousel:"Carosello",homepage_sidebar:"Barra laterale",homepage_spotlight:"In evidenza",homepage_tabs:"Schede Homepage",hours_short:"__hours__ ore",info:"Informazioni",item_type:"Tipologia articolo",language:"Lingua",last_24:"Volume: __ sold__ vendute nelle ultime 24 ore",library_menu:"Libreria",loading:"Caricamento...",lowest_price:"Prezzo più basso",market_transactions:"Transazioni Mercato",mods:"Mod",more_information:"Altre informazioni",most_drops:"Quantità",net_gain:"Utili netti",net_spent:"Spese nette",never:"Mai",news:"Notizie",notcommon_label:"Nascondi giochi posseduti",no_results_found:"Nessun risultato trovato",official_group:"Gruppo ufficiale",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Informazioni sul pacchetto",packs:"Pacchetti",permalink:"Permalink",playfire_heading:"Rewards di Playfire",popular:"Popolari",price:"Prezzo",price_options:"Opzioni prezzo",programming:"Programmazione",purchase_date:"(Acquistato il __date__)",purchase_total:"Acquisti totali",rating_details:"Vedi nel dettaglio",region_unavailable:"Non disponibile in questa regione",remove:"Rimuovi",remove_owned_wishlist:"Rimuovi giochi posseduti",reviews:"Recensioni",sales_total:"Vendite totali",save:"Salva",saved:"Salvato",search:"Ricerca",search_error:"Errore durante il caricamento dei risultati di ricerca",search_error_retry:"Clicca qui per riprovare",search_market:"Cerca nel Mercato della Comunità",search_names_only:"Cerca solo nei titoli",show:"Mostra",show_all_steam_releases:"Mostra tutte le ultime uscite",size:"Dimensione",software:"Software",sort_by:"Ordina per:",spam_comment_show:"__num__ commenti spam nascosti in questa pagina. Clicca qui per mostrarli.",spam_comment_warn:"Qui ci sono rogne...",starting_at:"A partire da",store:"Negozio",stores:"Negozi",store_transactions:"Transazioni Negozio",theworddefault:"Predefinito",thewordoptions:"Opzioni",total_size:"Dimensione totale",total_spent:"Totale spese",total_time:"Tempo totale",trading_cards:"Carte collezionabili",translate:"Traduzione",translation:"Traduzione",using_language:"Stai visitando Steam in __current__.",using_language_return:"Clicca per visitare Steam in __base__.",using_store:"Stai utilizzando il negozio Steam della regione __current__.",using_store_return:"Clicca qui per tornare allo Store __base__.",valid:"Valido",videos:"Video / Trailers",view:"Vista",view_all:"MOSTRA TUTTO",view_astats:"Visualizza statistiche su AStats",view_badge:"Mostra Medaglia",view_badge_foil:"Mostra Medaglia Foil",view_foil_badge:"Vedi progresso medaglia Foil",view_in:"Mostra in",view_in_market:"Visualizza nel mercato",view_marketplace:"Mostra Mercato",view_normal_badge:"Vedi progresso medaglia Normale",view_stats:"Visualizza statistiche",view_to_scale:"Visualizza in scala",visit_store:"Pagina del Negozio",visit_trade_forum:"Visita il forum degli scambi",website:"Sito web",wiki_article:"Mostra su __pcgw__",wishlist:"Lista dei desideri",achievements:{achievements:"Achievement",includes:"Include __num__ achievement di Steam",option:"Mostra achievement sulle pagine del negozio",view_all:"Vedi tutti gli achievement"},bundle:{at_least:"Pagamento minimo",bundle_count:"Numero di volte che questo gioco è stato in un bundle",header:"Bundle che includono questo gioco",includes:"Include (__num__) articoli",info:"Informazioni sul Bundle",offer_ends:"Termine offerta:",pwyw:"Paga quanto vuoi"},charts:{current:"Giocatori attuali",peakall:"massimo storico",peaktoday:"massimo di oggi",playing_now:"stanno giocando"},hltb:{compl:"Completamento al 100%",main:"Storia principale",main_e:"Storia principale + Extra",submit:"Invia il tuo tempo"},library:{categories:"Categorie...",error_loading_library:"Impossibile caricare la tua libreria.",genres:"Generi...",private_profile:"Imposta lo stato del profilo su Pubblico in <a href='http://steamcommunity.com/my/edit/settings'>Modifica Profilo</a> per utilizzare questa funzione."},options:{about_text:"Informazioni su <a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:<p>Enhanced Steam è un'estensione per Google Chrome che aggiunge molte nuove funzioni al sito web di Steam.<p>Caratteristiche principali:<ul><li>Evidenzia i giochi che possiedi</li><li>Evidenzia i giochi che desideri</li><li>Calcola gli sconti sui bundle in base ai giochi che già possiedi</li><li>Mostra i soldi spesi in totale sul tuo account di Steam</li><li>Evidenzia i DLC posseduti nella pagina del gioco</li><li>Corregge bug dell'icona \"No Image Available\" nella Lista desideri per giochi e DLC</li><li>Mostra avvisi quando sono presenti DRM di terze parti</li></ul><p>Se trovi utile questa estensione, considera la possibilità di effettuare una donazione.",acrtag:"Mostra avvertimenti per gli articoli in cui il trading tra regioni differenti è stato disabilitato",api_key:"API Key",author_info:"by jshackles",carousel_description:"Mostra descrizioni nello slider della homepage",cart:"Articoli nel carrello",changelog:"Changelog:",clear:"Sei sicuro di voler resettare tutte le opzioni? Questa operazione non potrà essere annullata.",contscroll:"Abilita scrolling infinito nei Risultati della Ricerca",coupon:"Giochi con coupon",customizespamcommentregex:"(Personalizza)",drm:"Mostra avvisi per i DRM di terze parti",es_bg:"Imposta sfondo personalizzato in \"Modifica profilo\"",excludef2p:"Non evidenziare i giochi Free-to-Play",foot_link:"Enhanced Steam",friends_own:"Giochi che possiedono i tuoi amici",friends_rec:"Giochi recensiti dai tuoi amici",friends_wishlist:"Giochi che desiderano i tuoi amici",general:"Generale",gift:"Giochi posseduti come dono",greenlight_banner:"Sostituisci banner di Greenlight",group_events:"Mostra \"Eventi\" nella Panoramica del gruppo",guest:"Giochi per i quali hai un Pass Ospite",header:"Intestazione",hideactivelistings:"Nascondi le inserzioni attive sulla homepage del Mercato",hidedlcunownedgames:"DLC per i giochi che non possiedi",hidespamcomments:"Nascondi commenti spam da Workshop e Profili",hidetmsymbols:"Simboli di Copyright e Trademark nei titoli dei giochi",hide_about:"Nascondi pulsante \"Informazioni\"",hide_early_access:"Nascondi giochi ad Accesso Anticipato su homepage, sfoglia e ricerca",hide_install:"Nascondi il pulsante \"Installa Steam\"",hide_owned:"Giochi che possiedi nei risultati di ricerca e pagine dei tag",hide_owned_homepage:"Giochi che possiedi sulla homepage",hltb:"Mostra informazioni da HowLongToBeat.com",html5video:"Riproduci i video con HTML5 invece di Flash",inventory_market_text:"Mostra prezzo del Mercato nell'Inventario",inventory_nav_text:"Mostra navigazione avanzata nell'Inventario",library:"Mostra il pulsante \"Libreria\" nell'intestazione",library_f2p:"Mostra Demo e Free-to-Play giocati",library_header:"Libreria (BETA)",lowestprice:"Mostra lo storico dei prezzi",lowestprice_coupon:"Includi i coupon nel confronto dei prezzi",lowestprice_header:"Informazioni sui prezzi",lowestprice_onwishlist:"Mostra nella lista dei desideri",market_total:"Mostra riepilogo delle transazioni sul Mercato",metacritic:"Mostra i voti degli utenti Metacritic",owned:"Giochi che possiedi",pcgw:"Mostra pulsante di PC Gaming Wiki",profiles_link_group_game:"Gioco esclusivo",profile_api_info:"Mostra l'API dell'utente sul profilo",profile_links:"Mostra link sui profili per",profile_link_images:"Immagini dei link nel profilo",profile_link_images_color:"A colori",profile_link_images_gray:"Scala di grigi",profile_link_images_none:"Non mostrare",profile_permalink:"Mostra permalink sui profili",regional_hideworld:"Nascondi icona del globo",regional_price:"Comparazione dei prezzi regionali",regional_price_mouse:"al passaggio del mouse",regional_price_on:"Mostra comparazione dei prezzi regionali",replace_account_name:"Sostituisci nome dell'account con il nome della comunità",reset:"Resetta opzioni",reset_note:"Opzioni resettate",saved_note:"Opzioni salvate",send_age_info:"Se richiesta, Inserisci automaticamente la data di nascita",showallachievements:"Mostra achievement sulla pagina \"Tutti i giochi\"",showspeechsearch:"Aggiungi input vocale al box di ricerca",show_astatslink:"Mostra pulsante di AStats sulle pagine del negozio",show_early_access_text:"Mostra banner di accesso anticipato",show_languagewarning:"Mostra un avviso quando si naviga in una lingua differente",show_package_info:"Mostra \"Informazioni sul Pacchetto\" per tutte le applicazioni",show_regionwarning:"Mostra un avviso quando si visita una regione diversa dello Store",show_steamchart_info:"Mostra informazioni da SteamCharts.com",show_sysreqcheck:"Mostra pulsante per verificare i requisiti di sistema (Sperimentale!)",spamcommentregex:"Stringa di Espressione Regolare:",steamcardexchange:"Mostra link di SteamCardExchange in \"Medaglie\"",steamdb:"Mostra pulsante di Steam Database",stores_all:"Confronta tutti i negozi",tag:"Tag",total_spent:"Mostra \"Spesa totale\" nei dettagli dell'account",wishlist:"Giochi in Lista dei desideri",wlbuttoncommunityapp:"Mostra pulsante \"Aggiungi a Lista dei desideri\" in Hub della Comunità",wsgf:"Mostra informazioni WSGF (Widescreen)"},ready:{errormsg:"Errore nel caricamento di Enhanced Steam",loading:"Caricamento di Enhanced Steam in corso...",ready:"Enhanced Steam pronto"},select:{none:"Nessuno",unowned_dlc:"Seleziona DLC non posseduti",wishlisted_dlc:"Seleziona DLC in Lista dei desideri"},tag:{coupon:"Coupon",friends_own:"__friendcount__ amici lo hanno",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ recensioni di amici",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ amici lo vogliono</a>",inv_gift:"Dono",inv_guestpass:"Pass ospite",owned:"Posseduto",wishlist:"Lista dei desideri"},wallet:{custom_amount:"Importo personalizzato",custom_amount_text:"Qualsiasi importo superiore a __minamount__"},wsgf:{gold:"Questa medaglia viene assegnata ai giochi che hanno ricevuto punteggi perfetti da WSGF per il loro supporto __type__, e sono certificati __type__.",incomplete:"Incompleto",limited:"Questo punteggio viene assegnato ai giochi che che hanno ricevuto il grado C per il loro supporto __type__. Tutti questi giochi hanno problemi significativi, pur avendo un certo livello di supporto __type__.",silver:"Questa medaglia viene assegnata ai giochi che hanno ricevuto il grado B per il loro supporto __type__. Tutti questi giochi non hanno grossi difetti, ma hanno almeno una lacuna che gli impedisce di ottenere un punteggio perfetto.",unsupported:"Questo punteggio viene assegnato ai giochi che che non hanno alcun supporto __type__. Questi giochi potrebbero essere ingiocabili in __type__, le immagini distorte o allungate. Il loro aspect-ratio corretto non viene mantenuto."}},
			"jap":{about:"アバウト",acrtag_msg:"ある特定の地域間でのこのアイテムのトレードが無効になっています",acrtag_tooltip:"東ヨーロッパや南アメリカ、南東アジアで購入された場合、このアイテムは地域を越えてトレードすることはできません",activates:"Steam で有効化",add_selected_dlc_to_cart:"選択したDLCをカートに追加",add_to_cart:"カートに追加",add_to_wishlist:"ウィッシュリストに追加",add_unowned_dlc_to_cart:"未所持のDLCをカートに追加",after_coupon:"クーポンコード後",all:"全て",allreleases_products:"このセクションに表示したい製品の種類を選択してください",all_friends_own:"これを所有している全フレンド (__friendcount__人)",always:"常に表示",apppage_legal:"法的情報",apppage_purchase:"購入のオプション",apppage_sections:"このページに表示したいセクションを選択してください",avg_price_3cards:"3枚のトレーディングカードの平均価格",badges_all:"全バッジ",badges_drops:"カードドロップが残っているバッジ",badge_completion_avg:"完成までの平均コスト",badge_completion_cost:"バッジ完成までのコスト",badge_foil_progress:"キラバッジの進捗状況を表示",badge_not_unlocked:"未解除",badge_progress:"バッジの進捗状況を表示",binder_view:"バインダー表示",birthday_message:"ハッピー Steam バースデー、 __username__ さん！あなたの Steam アカウントは、本日  __age__ 歳になりました。",bug_feature:"バグを報告 / 機能を提案",bundle_saving_text:"このバンドルの購入でお得になる金額",buy:"購入",buying_total:"買い注文合計",buy_wishlist:"ウィッシュリストを購入",cancel:"キャンセル",cards_owned:"__possible__ 枚のカード中__owned__枚所有しています",card_drops_remaining:"残りカードドロップは__drops__枚です",check_system:"システムをチェック",clear_cache:"キャッシュされたデータをクリア",common_label:"所有していないゲームを非表示にする",community:"コミュニティ",community_name_account_header:"__username__のアカウント",compare:"比較",comparison_mode:"すべてのゲームのオーバービューを有効にして、ゲーム比較を確認する",contribute:"貢献する (GitHub)",coupon_application_note:"インベントリにあるクーポンは支払い時に自動的に適用されます。",coupon_available:"クーポンが利用できます!",coupon_learn_more:"クーポンについての<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">詳細</a>",credits:"クレジット",customize:"カスタマイズ",custom_background:"カスタム背景",custom_background_help:"Enhanced Steamのユーザーに対して、あなたのプロフィールにこの背景が表示されます。非Enhanced Steamのユーザーに対しては通常のプロフィール背景が表示されます。",date_unlocked:"日時がアンロック",demos:"デモ",discount:"割引",dlc:"ダウンロードコンテンツ",dlc_data_header:"ダウンロードコンテンツの詳細",dlc_details:"ダウンロードコンテンツの詳細",dlc_suggest:"新しいカテゴリを提案",donate:"寄付",drm_third_party:"警告: このタイトルはサードパーティーのDRMを使用します",drm_third_party_sub:"警告: このパッケージ内の1つ以上のタイトルがサードパーティー製DRMを使用しています",drops_value:"最高ドロップ値",drops_worth_avg:"およその価値",each:"各",empty_cart:"カートを空にする",empty_wishlist:"ウィッシュリストを空にする",es_supporter:"Enhanced Steam サポーター",events:"イベント",family_sharing_notice:"<b>注意:</b> このゲームは Steam のファミリーシェアリングサービスから除外されています。",faqs:"よくある質問",forums:"フォーラム",games:"ゲーム",games_all:"すべてのゲーム",games_coupon:"クーポンがあるゲーム",games_discount:"割引されているゲーム",games_installed:"インストール済みのゲーム",games_with_booster:"__boostergames__本のゲームにブースターパックの受取資格があります",games_with_drops:"__dropsgames__本のゲームでドロップ数が残っています",game_name:"ゲーム名",game_transactions:"ゲームでの取引",gift_transactions:"ギフト取引",graphics:"グラフィック",guides:"ガイド",hide:"非表示",highlight:"強調表示",historical_low:"史上最安値",homepage_carousel:"カルーセル",homepage_sidebar:"サイドバー",homepage_spotlight:"スポットライト",homepage_tabs:"ホームページタブ",hours_short:"__hours__ 時間",info:"情報",item_type:"アイテム種別",language:"言語",last_24:"売上数:過去24時間で  __sold__ 本 ",library_menu:"ライブラリ",loading:"読み込み中...",lowest_price:"現在の最安値",market_transactions:"マーケットでの取引",mods:"Mod",more_information:"詳細情報",most_drops:"最大ドロップ数",net_gain:"純利益",net_spent:"純支出",never:"表示しない",news:"ニュース",notcommon_label:"自分が所有しているゲームを非表示にする",no_results_found:"検索結果なし",official_group:"公式グループ",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"パッケージ情報",packs:"パック",permalink:"固定リンク",playfire_heading:"Playfireからのリワード",popular:"人気",price:"価格",price_options:"価格オプション",programming:"プログラミング",purchase_date:"(購入日： __date__)",purchase_total:"購入合計",rating_details:"評価の詳細を表示",region_unavailable:"この地域では利用できません",remove:"削除",remove_owned_wishlist:"ウィッシュリストから所有しているゲームを削除",reviews:"レビュー",sales_total:"販売合計",save:"保存",saved:"保存完了",search:"検索",search_error:"さらに検索結果をロードしている際にエラーが発生致しました",search_error_retry:"ここをクリックして再試行",search_market:"Steam コミュニティマーケットを検索",search_names_only:"名前のみで検索",show:"表示",show_all_steam_releases:"Steam のリリースをすべて表示",size:"サイズ",software:"ソフトウェア",sort_by:"ソート順:",spam_comment_show:"このページで __num__ spam 件のコメントが非表示にされています。ここをクリックすると、表示します。",spam_comment_warn:"危険性あり...",starting_at:"開始時刻:",store:"ストア",stores:"ストア",store_transactions:"ストアでの取引",theworddefault:"デフォルト",thewordoptions:"オプション",total_size:"合計サイズ",total_spent:"合計消費額",total_time:"合計時間",trading_cards:"Steam トレーディングカード",translate:"翻訳",translation:"翻訳",using_language:"__current__ で Steam を閲覧中。",using_language_return:"ここをクリックすると __base__ で Steam を閲覧します。",using_store:"__current__ リージョンのSteamストアを利用しています。",using_store_return:"ここをクリックすると__base__ストアに戻ります。",valid:"有効",videos:"ビデオ / トレイラー",view:"閲覧",view_all:"すべて表示",view_astats:"AStats のページを表示",view_badge:"バッジを表示",view_badge_foil:"キラバッジを表示",view_foil_badge:"キラバッジの進捗状況を表示",view_in:"次で表示",view_in_market:"コミュニティマーケットで表示",view_marketplace:"マーケットプレイスを表示",view_normal_badge:"普通のバッジの進捗状況を表示",view_stats:"統計を表示",view_to_scale:"スケールに表示",visit_store:"ストアページを表示",visit_trade_forum:"トレードフォーラムを開く",website:"ウェブサイト",wiki_article:"__pcgw__ の記事を表示",wishlist:"ウィッシュリスト",achievements:{achievements:"実績",includes:"__num__個の Steam 実績を含む",option:"ストアページで実績を表示",view_all:"全実績を表示"},bundle:{at_least:"最低支払額",bundle_count:"このゲームがバンドル入りした回数",header:"このゲームを含むバンドル",includes:"(__num__)個のアイテムが含まれます",info:"バンドル情報",offer_ends:"セール終了まで:",pwyw:"お望みの価格で購入"},charts:{current:"現在のプレイヤー数",peakall:"これまでの最大",peaktoday:"今日の最大",playing_now:"現在プレイ中"},hltb:{compl:"完璧主義者",main:"主なストーリー",main_e:"主なストーリーとおまけ",submit:"あなたの時間を送信"},library:{categories:"カテゴリ...",error_loading_library:"ライブラリを読み込めませんでした。",genres:"ジャンル...",private_profile:"この機能を有効にするには、<a href='http://steamcommunity.com/my/edit/settings'>設定で</a>プロフィールのステータスを公開にしてください。"},options:{about_text:"<div class=\"header\"><a href='http://www.enhancedsteam.com'>Enhanced Steam</a>について:Enhanced Steamは、Steamのウェブサイトに多くの新機能を追加するGoogle Chrome用拡張機能です。<p>含まれる機能:<ul><li>すでに所有しているゲームの強調表示</li><li>ウィッシュリストにあるゲームの強調表示</li><li>すでに所有しているゲームに基づいた正確なバンドル値引き額の算出</li><li>今までSteamで消費した額の表示</li><li>ゲームのページで所有しているDLCの強調表示</li><li>ウィッシュリストでいかなるゲームまたはDLCに対しての\"No Image Available\"画像の修正</li><li>サードパーティーのDRMがあるタイトルの指摘</li></ul><p>この拡張が便利だなと思ったら、寄付を検討していただけませんか。",acrtag:"クロスリージョントレードが無効になっている場合、アイテムに警告を表示する",api_key:"API キー",author_info:"製作: jshackles",carousel_description:"ストアトップのカルーセルのアプリ説明を表示",cart:"カートにあるアイム",changelog:"変更履歴:",clear:"本当にすべてのオプションをリセットしますか？これは取り消しできません。",contscroll:"検索結果の持続的スクロールを有効にする",coupon:"クーポンがあるアイテム",customizespamcommentregex:"(カスタマイズ)",drm:"サードパーティーDRMの警告を表示",es_bg:"「プロフィールを編集」画面でカスタム背景を設定",excludef2p:"フリートゥープレイのゲームを強調表示から除外",foot_link:"Enhanced Steam 拡張機能",friends_own:"フレンドが所有しているアイテム",friends_rec:"フレンドがレビューしたゲーム",friends_wishlist:"フレンドがウィッシュリストに入れているアイテム",general:"全般",gift:"ギフトで保管しているアイテム",greenlight_banner:"Steam Greenlightのバナーを置き換える",group_events:"グループオーバービューでイベントを表示",guest:"ゲストパスがあるアイテム",header:"ヘッダー",hideactivelistings:"デフォルトでマーケットのホームページのアクティブリストをすべて非表示",hidedlcunownedgames:"所有していないゲームのDLC",hidespamcomments:"ワークショップとプロフィールのスパムコメントを非表示",hidetmsymbols:"ゲームタイトル中の商標・版権記号",hide_about:"ヘッダーの「STEAMとは」リンクを非表示",hide_early_access:"ホームページと閲覧、検索ページで早期アクセスゲームを非表示",hide_install:"ヘッダーの\"Steamをインストール\"ボタンを非表示",hide_owned:"検索結果とタグページで所有しているアイテムを",hide_owned_homepage:"ホームページで所有しているアイテムを",hltb:"HowLongToBeat.comの情報を表示",html5video:"フラッシュの代わりに HTML5 を使用してビデオを表示する",inventory_market_text:"インベントリページ上でマーケットの価格を表示",inventory_nav_text:"インベントリページ上で高度な案内を表示",library:"ヘッダーにライブラリボタンを表示",library_f2p:"ライブラリにプレイしたフリートゥープレイゲームとデモを表示する",library_header:"ライブラリ (ベータ)",lowestprice:"表示する",lowestprice_coupon:"価格比較にクーポンコードを含める",lowestprice_header:"価格履歴情報",lowestprice_onwishlist:"ウィッシュリストで表示",market_total:"マーケットで取引概要を表示",metacritic:"Metacriticのユーザースコアを表示",owned:"所有しているアイテム",pcgw:"PCGamingWikiのリンクを表示",profiles_link_group_game:"ゲーム独占",profile_api_info:"プロフィールにユーザー API のリンクを表示する",profile_links:"プロフィールに以下へのリンクを表示",profile_link_images:"プロフィールリンク画像",profile_link_images_color:"カラー",profile_link_images_gray:"グレースケール",profile_link_images_none:"なし",profile_permalink:"プロフィール上に固定リンクを表示",regional_hideworld:"地球儀表示を非表示",regional_price:"地域別価格比較",regional_price_mouse:"価格をマウスオーバーで",regional_price_on:"地域別価格比較を表示",replace_account_name:"アカウント名をコミュニティ名で置き換える",reset:"オプションをリセット",reset_note:"オプションをリセットしました",saved_note:"オプションを保存しました",send_age_info:"要求時、年齢確認を自動的に送信する",showallachievements:"「すべてのゲーム」ページで実績統計を表示",showspeechsearch:"検索ボックスに音声入力を追加",show_astatslink:"アプリページに AStats のリンクを表示",show_early_access_text:"早期アクセスの画像バナーを表示",show_languagewarning:"別の言語で閲覧している場合警告を表示する",show_package_info:"全アプリのパッケージ情報を表示",show_regionwarning:"非アカウントのリージョンで閲覧している場合警告を表示する",show_steamchart_info:"SteamCharts.comの情報を表示",show_sysreqcheck:"アプリページにシステム要件を確認するボタンを表示 (実験的!)",spamcommentregex:"正規表現:",steamcardexchange:"バッジにSteamCardExchangeへのリンクを表示",steamdb:"SteamDBへのリンクを表示",stores_all:"すべてのストアを比較",tag:"タグ",total_spent:"アカウントページに合計消費額を表示",wishlist:"ウィッシュリストにあるアイテム",wlbuttoncommunityapp:"「ウィッシュリストに追加」ボタンをコミュニティアプリハブに表示",wsgf:"WSGF (ワイドスクリーン) 情報を表示"},ready:{errormsg:"Enhanced Steam のデータロードエラー",loading:"Enhanced Steam がデータをロード中……",ready:"Enhanced Steam 準備完了"},select:{none:"何も選択しない",unowned_dlc:"未所有のDLCを選択",wishlisted_dlc:"ウィッシュリストに入っているDLCを選択"},tag:{coupon:"クーポン",friends_own:"__friendcount__ 人所有",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\"__friendcount__ 人のフレンドがレビューしました</a>",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ 人が欲しがっています</a>",inv_gift:"ギフト",inv_guestpass:"ゲストパス",owned:"所持",wishlist:"ウィッシュリスト"},wallet:{custom_amount:"カスタムした額を追加",custom_amount_text:"__minamount__以上の任意の額を追加"},wsgf:{gold:"このメダルは、 __type__ のサポートに対しWSGFから完璧なスコアを受け、__type__認証済みのゲームに贈られます。",incomplete:"不完全",limited:"このスコアは、__type__のサポートに対しC相当のグレードを受けたゲームに贈られます。これらのゲームのすべてにある程度の水準の__type__サポートがありますが、明らかな問題を抱えています。",silver:"このメダルは、__type__のサポートに対しB相当のグレードを受けたゲームに贈られます。これらのゲームのすべてに大きな欠陥はありませんが、完璧なスコアになるのを妨げた欠点が少なくともひとつはあります。",unsupported:"このスコアは、__type__のサポートがないゲームに贈られます。 __type__でプレイすることができない場合があったり、画像がウィンドウに合わず引き伸ばされます。正確なアスペクト比は保たれません"}},
			"kor":{about:"정보",activates:"Steam 등록",add_selected_dlc_to_cart:"선택된 DLC를 장바구니에 추가",add_to_cart:"장바구니에 추가",add_to_wishlist:"찜 목록에 추가",add_unowned_dlc_to_cart:"소유하지 않은 DLC를 장바구니에 추가",after_coupon:"쿠폰 코드 ",all:"전체",allreleases_products:"보고싶어하는 제품의 종류를 선택하세요",all_friends_own:"이 게임을 소유한 모든 친구 ( __friendcount__ 명 )",always:"항상",apppage_legal:"법률 정보",apppage_purchase:"구매 옵션",apppage_sections:"보고싶어하는 부문을 고르세요.",avg_price_3cards:"트레이딩 카드 3개의 평균 가격",badges_all:"모든 배지",badges_drops:"카드를 받을 수 있는 배지",badge_completion_avg:"배지 완성 평균 비용",badge_completion_cost:"배지를 완성시키기 위한 비용",badge_foil_progress:"은박 배지 진행상황 보기",badge_not_unlocked:"잠금을 해제하지 않음",badge_progress:"배지 진행 상황 보기",binder_view:"바인더 형태로 보기",birthday_message:"스팀 생일을 축하합니다. __username__! 당신의 스팀 계정은 오늘로 __age__ 년이 되었습니다.",bug_feature:"버그 신고/기능 제안",bundle_saving_text:"본 묶음으로 구매하면 절약되는 금액입니다",buy:"구입",buying_total:"소계",buy_wishlist:"찜 목록 상품 구입",cancel:"취소",cards_owned:"__possible__장의 카드 중 __owned__장을 소유하고 있음",card_drops_remaining:"획득 가능한 카드 : __drops__ 장",check_system:"당신의 시스템을 체크합니다.",clear_cache:"캐쉬된 데이터 삭제",common_label:"소유중이지 않은 게임 숨기기",community:"커뮤니티",community_name_account_header:"__username__의 계정",compare:"비교",comparison_mode:"게임을 비교하여 볼 수 있도록 모든 게임 개요를 사용합니다.",contribute:"기여하기 (GitHub)",coupon_application_note:"보관함에 있는 쿠폰은 결제할 때 자동으로 적용됩니다.",coupon_available:"사용 가능한 쿠폰이 있습니다!",coupon_learn_more:"스팀 쿠폰에 대해 <a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">더 알아보기</a>",credits:"개발진",customize:"직접 꾸미기",custom_background:"사용자 지정 배경",custom_background_help:"Enhanced Steam의 모든 사용자는 당신의 사용자 지정 배경을 볼 수 있습니다. Enhanced Steam을 사용하지 않는 이용자는 당신의 일반 프로필 배경을 볼 수 있습니다.",date_unlocked:"날짜 잠금해제",demos:"데모",discount:"할인",dlc:"다운로드 가능한 콘텐츠",dlc_data_header:"다운로드 컨텐츠 세부사항",dlc_details:"다운로드 컨텐츠 세부사항",dlc_suggest:"새로운 카테고리를 제안",donate:"기부하기",drm_third_party:"경고: 이 타이틀은 3rd party DRM을 사용합니다.",drm_third_party_sub:"경고 : 이 패키지에 포함된 하나 이상의 타이틀에서 타사 DRM을 사용합니다",drops_value:"높은 가치순",drops_worth_avg:"대략적인 가치",each:"각각",empty_cart:"장바구니 비우기",empty_wishlist:"찜 목록 비우기",es_supporter:"Enhanced Steam 서포터",events:"이벤트",family_sharing_notice:"<b>알림 :</b> 이 게임은 스팀 가족 공유 서비스가 지원되지 않습니다.",faqs:"자주 묻는 질문",forums:"포럼",games:"게임",games_all:"모든 게임",games_coupon:"쿠폰이 있는 게임",games_discount:"할인중인 게임들",games_installed:"설치된 게임",games_with_booster:"부스터팩 자격 : __boostergames__ 개",games_with_drops:"카드 획득 가능한 게임 : __dropsgames__ 개",game_name:"게임명",game_transactions:"게임 내 거래 금액",gift_transactions:"선물 구매 금액",graphics:"그래픽",guides:"가이드",hide:"숨김",highlight:"강조",historical_low:"역대 최저가",homepage_carousel:"캐러셀",homepage_sidebar:"사이드바",homepage_spotlight:"스포트라이트",homepage_tabs:"홈페이지 탭",hours_short:"__hours__ 시간",info:"정보",item_type:"아이템 종류",language:"언어",last_24:"최근 24시간 동안 팔린 개수 : __sold__ 개",library_menu:"라이브러리",loading:"불러오는중...",lowest_price:"현재 최저가",market_transactions:"장터 거래 금액",mods:"모드",more_information:"추가 정보",most_drops:"획득 가능한 개수순",net_gain:"순 이익 금액",net_spent:"순 소비 금액",never:"사용하지 않음",news:"뉴스",notcommon_label:"소유중인 게임 숨기기",no_results_found:"검색 결과가 없습니다.",official_group:"공식 그룹",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"패키지 정보",packs:"묶음",permalink:"바로가기",playfire_heading:"Playfire 보상",popular:"인기있는 게임",price:"가격",price_options:"가격 설정",programming:"프로그래밍",purchase_date:"(__date__ 에 구매)",purchase_total:"총 구매 금액",rating_details:"평가 내용 보기",region_unavailable:"이 지역에서는 사용할 수 없습니다",remove:"제거",remove_owned_wishlist:"소유한 게임을 찜 목록에서 제거",reviews:"리뷰",sales_total:"총 판매 금액",save:"저장",saved:"저장되었습니다.",search:"검색",search_market:"스팀 커뮤니티 장터를 검색",search_names_only:"이름에서만 검색하기",show:"열기",show_all_steam_releases:"스팀 모든 자료 보기",size:"크기",software:"소프트웨어",sort_by:"정렬 순서",spam_comment_show:"__num__ 개의 스팸 댓글들을 가렸습니다. 보고 싶다면 여길 누르세요.",spam_comment_warn:"스팸 댓글 경고!!",starting_at:"시작 시간 :",store:"상점",stores:"상점",store_transactions:"상점 거래 금액",theworddefault:"기본값",thewordoptions:"설정",total_size:"총 크기",total_spent:"전체 소비 금액",total_time:"총 시간",trading_cards:"Steam 트레이딩 카드",translate:"번역",translation:"번역",using_language:"__current__ (으)로 페이지를 보고 있습니다.",using_language_return:"__base__ (으)로 브라우징하시려면 여기를 클릭하세요.",using_store:"__current__ 지역의 Steam 상점을 이용하고 있습니다.",using_store_return:"여기를 클릭하면 __base__ 상점으로 돌아갑니다.",valid:"유효함",videos:"동영상/예고편",view:"보기",view_all:"모두 보기",view_astats:"AStats 페이지 보기",view_badge:"배지 표시",view_badge_foil:"은박 배지 표시",view_foil_badge:"은박 배지 진행상황 보기",view_in:"다음에 표시",view_in_market:"상점에서 보기",view_marketplace:"장터 보기",view_normal_badge:"배지 진행 상황 보기",view_stats:"통계 보기",view_to_scale:"확장해서 보기",visit_store:"상점 페이지 방문",visit_trade_forum:"거래 포럼 방문",website:"홈페이지",wiki_article:"__pcgw__ 기사 보기",wishlist:"찜 목록",achievements:{achievements:"도전과제",includes:"__num__개의 Steam 도전 과제를 포함",option:"상점 페이지에 도전과제 표시",view_all:"모든 도전과제 보기"},bundle:{at_least:"최소 지불 비용",bundle_count:"이 게임이 번들로 나온 횟수",header:"이 게임을 포함한 번들",includes:"(__num__) 아이템 포함",info:"번들 정보",offer_ends:"종료 일시 : ",pwyw:"원하는 만큼 지불"},charts:{current:"최근 플레이어의 수",peakall:"역대 최고조",peaktoday:"오늘의 최고조",playing_now:"현재 플레이"},hltb:{compl:"완벽하게 모두 플레이",main:"메인",main_e:"메인과 추가 스토리",submit:"플레이 타임 제출하기"},library:{categories:"카테고리",error_loading_library:"라이브러리를 불러오지 못했습니다.",genres:"장르...",private_profile:"이 기능을 사용하려면 <a href='http://steamcommunity.com/my/edit/settings'> 프로필 설정 </ a> 프로필의 상태를 공개해야합니다."},options:{about_text:"\"<div class=\"header\"><a href='http://www.enhancedsteam.com'>Enhanced Steam</a>에 대하여:</div><p>Enhanced Steam은 스팀 웹사이트에서 많은 새 기능을 추가한 구글 크롬의 확장프로그램입니다.<p>다음과 같은 특징이 있습니다 :<ul><li>이미 소유한 게임 강조</li><li>찜 목록에 있는 게임 강조</li><li>이미 가지고 있는 게임에 따라 번들 할인 계산</li><li>계정 정보에서 스팀에 얼마나 금액을 사용했는지 보여줌</li><li>게임 페이지에서 소유한 DLC 강조</li><li>찜목록에 있는 모든 게임 또는 DLC의 \"No Image Available(사용 가능한 이미지 없음)\" 게임 아이콘 수정</li><li>타사 DRM의 제목을 알림</li></ul><p>만약 이 확장프로그램이 유용하다면, 기부하는 것을 고려해 주세요!\"",api_key:"API 키",author_info:"저작자 : jshackles",carousel_description:"상점의 회전식 컨베이어에 응용프로그램 설명 표시",changelog:"변경점",clear:"모든 설정을 초기화 합니까? 초기화 후 취소할 수 없습니다.",contscroll:"검색 결과의 지속적인 스크롤을 활성화합니다.",coupon:"쿠폰을 소유한 아이템",customizespamcommentregex:"(사용자 설정)",drm:"3rd party DRM 경고를 보입니다.",es_bg:"\"프로필 편집\" 화면에서 사용자 지정 배경 설정 사용",excludef2p:"무료게임을 강조에서 제외",foot_link:"Enhanced Steam 홈페이지",friends_own:"당신의 친구가 소유한 아이템",friends_rec:"당신의 친구가 리뷰한 아이템",friends_wishlist:"당신의 친구가 찜한 아이템",general:"일반",gift:"선물",greenlight_banner:"스팀 그린라이트 배너를 대체합니다.",group_events:"그룹 개요에서 이벤트 보기",guest:"손님",header:"Steam페이지 최상단",hideactivelistings:"상점 홈페이지에 있는 모든 활동 목록을 숨김니다.",hidedlcunownedgames:"이 DLC를 위한 게임을 소지하지 않았습니다",hidespamcomments:"창작마당 & 프로필에서 스팸 댓글 숨기기",hidetmsymbols:"게임 타이틀의 상표 · 저작권 기호",hide_about:"\"정보\" 링크를 숨김",hide_early_access:"홈페이지, 브라우저, 검색페이지에서 앞서 해보는 게임을 숨기기",hide_install:"\"Steam 설치\" 버튼을 숨김",hide_owned:"검색 결과와 태그 페이지 내의 소유한 아이템",hide_owned_homepage:"홈페이지 상의 소유한 아이템",hltb:"HowLongToBeat.com의 정보 보기",html5video:"동영상 재생에 Flash 대신 HTML5를 사용합니다.",inventory_market_text:"보관함 페이지에서 장터 가격을 표시",inventory_nav_text:"인벤토리 페이지에서 쪽수 검색 보기",library:"상단에 라이브러리 버튼을 보입니다.",library_f2p:"라이브러리에 무료 게임과 데모 버전을 표시",library_header:"라이브러리 (베타)",lowestprice:"표시",lowestprice_coupon:"가격 비교시 쿠폰 적용하기",lowestprice_header:"가격 기록 정보",lowestprice_onwishlist:"찜 목록 보기",market_total:"장터 거래 금액 요약 보기",metacritic:"Metacritic 유저 점수를 보임",owned:"당신이 소유한 아이템",pcgw:"PCGamingWiki 링크 보기",profiles_link_group_game:"게임 독점",profile_api_info:"프로필에서 유저 API 링크 보이기",profile_links:"프로필에 링크를 추가",profile_link_images:"프로필 링크 이미지",profile_link_images_color:"컬러",profile_link_images_gray:"그레이스케일",profile_link_images_none:"표시하지 않음",profile_permalink:"프로필에 고유 주소를 표시",regional_hideworld:"세계 표시 숨기기",regional_price:"지역별 가격 비교",regional_price_mouse:"가격 위에 마우스를 올릴때",regional_price_on:"지역별 가격 비교를 보여준다",replace_account_name:"계정이름을 커뮤니티 이름으로 대체",reset:"설정을 초기화",reset_note:"설정이 초기화 되었습니다.",saved_note:"설정이 저장되었습니다.",send_age_info:"연령 확인 요청시 자동으로 정보를 보냄",showallachievements:"\"모든 게임\" 페이지에서 도전과제 스탯 보기",showspeechsearch:"검색 창에 음성 입력을 추가",show_astatslink:"AStats 링크 보기",show_early_access_text:"앞서 해보기 게임을 배너에 표시",show_languagewarning:"다음 언어 이외의 언어로 브라우징시 경고 보기",show_package_info:"모든 앱의 패키지 정보를 표시",show_regionwarning:"비 계정 영역에서 로그인하는 경우 경고 표시",show_steamchart_info:"SteamCharts.com의 정보 보기",show_sysreqcheck:"상점 페이지에 시스템 사양 체크 버튼 표시 (실험)",spamcommentregex:"정규표현식 문자열 : ",steamcardexchange:"배지에 SteamCardExchange에 대한 링크를 표시합니다.",steamdb:"SteamDB 링크를 보입니다.",stores_all:"모든 상점 판매가 비교하기",tag:"태그",total_spent:"계정 정보에서 총 사용 금액 보여주기",wishlist:"찜 목록",wlbuttoncommunityapp:"커뮤니티 허브에서 \"찜 목록에 추가\" 버튼 보이기",wsgf:"WSGF (와이드 스크린) 정보를 표시"},ready:{errormsg:"Enhanced Steam 데이터 로딩 오류",loading:"Enhanced Steam 데이터 로딩중...",ready:"Enhanced Steam 준비"},select:{none:"선택된 항목 없음",unowned_dlc:"소유하지 않은 DLC를 선택",wishlisted_dlc:"찜한 상품 목록의 DLC를 선택"},tag:{coupon:"쿠폰",friends_own:"__friendcount__ 명 소유",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ 명의 친구가 리뷰했습니다",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ 명이 원함</a>",inv_gift:"선물",inv_guestpass:"게스트 패스",owned:"소유",wishlist:"찜 목록"},wallet:{custom_amount:"특정 금액만큼 추가",custom_amount_text:"__minamount__ 이상 추가"},wsgf:{gold:"WSGF 에서 __type__ 부분에 대해 완벽한 점수를 받고 __type__ 지원이 되어 메달을 수여한 게임입니다.",incomplete:"미완성",limited:"__type__ 부분에서 C등급을 받아 메달을 수여한 게임입니다. __type__ 지원이 어느 정도 되지만 중요한 문제가 있는 게임입니다.",silver:" __type__ 부분에서 B등급을 받아 메달을 수여한 게임입니다. 주된 결점이 없는 게임이지만 완벽한 점수를 받기에 최소한 하나의 흠이 있는 게임입니다.",unsupported:"__type__ 지원이 되지 않아 이 점수를 받은 게임입니다. __type__ (으)로 실행 되지 않을 수도 있거나 윈도우에 맞게 이미지가 조정될 수 있습니다. 가로세로 비율이 유지되지 않습니다."}},
			"nor":{about:"Om",activates:"Aktiviteter på Steam",add_to_wishlist:"Legg til i ønskelisten",all:"Alle",always:"Alltid",buy:"Kjøp",cancel:"Avbryt",community:"Samfunn",contribute:"Bidra (GitHub)",discount:"Rabatt",donate:"Donér",each:"Hver",empty_wishlist:"Tom ønskeliste",events:"Hendelser",faqs:"Ofte stilte spørsmål",forums:"Forumer",games:"Spill",graphics:"Grafikk",hide:"Gjem",info:"Informasjon",language:"Språk",library_menu:"Bibliotek",loading:"Laster...",never:"Aldri",news:"Nyheter",popular:"Populært",price:"Pris",price_options:"Prisinnstillinger",purchase_date:"(Kjøpt __date__)",remove:"Fjern",reviews:"Anmeldelser",save:"Lagre",saved:"Lagret",search:"Søk",show:"Vis",size:"Størrelse",store:"Butikk",stores:"Butikker",thewordoptions:"Innstillinger",translate:"Oversettelse",view:"Vis",website:"Nettsted",wishlist:"Ønskeliste",hltb:{main:"Hoved Historie",submit:"Send Din Tid"},library:{categories:"Kategorier",genres:"Sjangre"},options:{carousel_description:"Vis applikasjonsbeskrivelser på forsidekarusellen",coupon:"Gjenstander med kuponger",drm:"Vis 3.parts-DRM-advarsler",friends_own:"Gjenstander dine venner eier",friends_wishlist:"Gjenstander dine venner har satt på ønskelisten",general:"Generelt",gift:"Gjenstand lagret som gave",greenlight_banner:"Bytte Steam Greenlight-banner",group_events:"Vis arrangementer i gruppeoversikt",hidespamcomments:"Gjem søppelkommentarer fra Workshop og brukerprofiler",hidetmsymbols:"Varemerke- og Opphavsrettsymboler i spilltitler",hide_install:"Gjem \"Innstaller Steam\"-knapp",hltb:"Vis HowLongToBeat.com-informasjon",lowestprice:"Vis",lowestprice_coupon:"Inkluder kupongkoder i prissammenligning",metacritic:"Vis Metacritic-brukerrangering",owned:"Gjenstander du eier",pcgw:"Vis PCGamingWiki-lenker",profile_links:"Vis profillenker til",profile_link_images_color:"Farget",profile_link_images_gray:"Gråtone",profile_link_images_none:"Ingen",reset:"Tilbakestill Alternativer",showspeechsearch:"Legg til stemmegjenkjenning i søkefelt",show_steamchart_info:"Vis SteamCharts.com-informasjon",steamdb:"Vis SteamDB-lenker",wishlist:"Gjenstander på ønskelisten din",wsgf:"Vis WSGF (Widescreen)-informasjon"},ready:{ready:"Enhanced Steam klar"},select:{none:"Velg Ingen"},tag:{coupon:"Kupong",owned:"Eid",wishlist:"Ønskeliste"}},
			"pir":{about:"Arrrbout",add_to_cart:"Add to Carrrt",birthday_message:"Grog-filled Steam Birthday, __username__! ye Steam account be __age__ years barnacle-covered this day.",cancel:"Belay",compare:"Comparrrg",faqs:"Stuff Pirates Constantly Nag About",never:"Nevarrr",official_group_url:"steamcommunity.com/groups/enhancedsteam",popular:"Popularrr",save:"Archive",saved:"Archived",store:"Market",thewordoptions:"Riggings",achievements:{achievements:"Deeds"},library:{genres:"Genres..."},options:{drm:"Show 3arrrd parrrty DARRRM warrrnings",general:"Generarrrl",header:"Headarrr"}},
			"pol":{about:"O dodatku",acrtag_msg:"Wymiana pomiędzy pewnymi regionami została wyłączona dla tego przedmiotu",acrtag_tooltip:"Ten przedmiot nie może być wymieniany pomiędzy regionami, jeśli został zakupiony w Europie Wschodniej, Ameryce Południowej lub Azji Południowo-Wschodniej",activates:"Aktywuje się na Steam",add_selected_dlc_to_cart:"Dodaj zaznaczone DLC do koszyka",add_to_cart:"Dodaj do koszyka",add_to_wishlist:"Dodaj do listy życzeń",add_unowned_dlc_to_cart:"Dodaj nieposiadane DLC do koszyka",after_coupon:"po użyciu kuponu",all:"Wszystkie",allreleases_products:"Zaznacz rodzaje produktów, które chcesz zobaczyć w tej sekcji",all_friends_own:"Znajomi, którzy to posiadają (__friendcount__)",always:"Zawsze",apppage_legal:"Informacje prawne",apppage_purchase:"Opcje kupowania",apppage_sections:"Wybierz sekcje, które chcesz zobaczyć na tej stronie",avg_price_3cards:"Śr. cena 3 kart kolekcjonerskich",badges_all:"Wszystkie odznaki",badges_drops:"Odznaki, które wygenerują karty",badge_completion_avg:"Śr. koszt wytworzenia odznaki",badge_completion_cost:"Koszt wytworzenia odznaki",badge_foil_progress:"Pokaż postęp foliowanej odznaki",badge_not_unlocked:"Nieodblokowana",badge_progress:"Pokaż postęp odznaki",binder_view:"Widok skoroszytu",birthday_message:"Wszystkiego najlepszego, __username__! Twoje konto Steam dzisiaj świętuje __age__ lat.",bug_feature:"Zgłoś błąd / zasugeruj funkcję",bundle_saving_text:"Tyle zaoszczędzisz, kupując ten zestaw",buy:"Kup",buying_total:"Wartość zleceń kupna",buy_wishlist:"Zakup całą listę życzeń",cancel:"Anuluj",cards_owned:"Posiadanych kart: __owned__ z __possible__",card_drops_remaining:"__drops__ kart do wygenerowania",check_system:"Sprawdź swój system",clear_cache:"Wyczyść pamięć podręczną",common_label:"Ukryj gry, których nie posiadasz",community:"Społeczność",community_name_account_header:"Konto __username__",compare:"Porównaj",comparison_mode:"Włącz podgląd wszystkich gier, aby wyświetlić porównanie gier",contribute:"Kod źródłowy (GitHub)",coupon_application_note:"Kupon z twojego ekwipunku zostanie automatycznie zastosowany.",coupon_available:"Posiadasz kupon!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Dowiedz się więcej</a> o Kuponach Steam",credits:"Autorzy",customize:"Dostosuj",custom_background:"Własne tło",custom_background_help:"Wszyscy użytkownicy Enhanced Steam zobaczą to tło w twoim profilu. Pozostali zobaczą zwykle tło profilu.",date_unlocked:"Data odblokowania",demos:"Wersje demo",discount:"Zniżka",dlc:"DLC",dlc_data_header:"Informacja o zawartości do pobrania",dlc_details:"Szczegóły dot. DLC",dlc_suggest:"Zasugeruj nową kategorię",donate:"Dotacje",drm_third_party:"Uwaga! Ten tytuł zawiera zewnętrzny DRM",drm_third_party_sub:"Uwaga: Jeden lub więcej tytułów w tym pakiecie używa zewnętrznego DRM",drops_value:"Najwyższa wartość kart",drops_worth_avg:"Szacowana wartość",each:"Każda",empty_cart:"Opróżnij koszyk",empty_wishlist:"Opróżnij listę życzeń",es_supporter:"Zwolennik Enhanced Steam",events:"Wydarzenia",family_sharing_notice:"<b>Uwaga:</b> Ta gra nie jest dostępna przez usługę udostępniania gier Steam.",faqs:"Często zadawane pytania (FAQ)",forums:"Fora",games:"Gry",games_all:"Wszystkie gry",games_coupon:"Gry z kuponami",games_discount:"Gry ze zniżkami",games_installed:"Zainstalowane gry",games_with_booster:"__boostergames__ gier może wygenerować pakiety kart",games_with_drops:"__dropsgames__ gier z kartami do pozyskania",game_name:"Nazwa gry",game_transactions:"Transakcje dot. gier",gift_transactions:"Transakcje podarunków",graphics:"Grafika",guides:"Poradniki",hide:"Ukryj",highlight:"Zaznacz",historical_low:"Najniższa historyczna cena",homepage_carousel:"Karuzela",homepage_sidebar:"Pasek boczny",homepage_spotlight:"Centrum uwagi",homepage_tabs:"Zakładki strony domowej",hours_short:"__hours__ godz.",info:"Informacje",item_type:"Typ",language:"Język",last_24:"Wielkość rynku: sprzedano __sold__  w ciągu ostatnich 24 godzin",library_menu:"Biblioteka",loading:"Wczytywanie...",lowest_price:"Aktualna najniższa cena",market_transactions:"Transakcje na rynku",mods:"Modyfikacje",more_information:"Więcej informacji",most_drops:"Liczba kart do uzyskania",net_gain:"Dochód",net_spent:"Strata",never:"Nigdy",news:"Aktualności",notcommon_label:"Ukryj posiadane gry",no_results_found:"Brak wyników wyszukiwania",official_group:"Oficjalna grupa",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Informacje o paczce",packs:"Zestawy",permalink:"Permalink",playfire_heading:"Nagrody z Playfire",popular:"Popularne",price:"Cena",price_options:"Opcje cenowe",programming:"Programowanie",purchase_date:"(Zakupiono: __date__)",purchase_total:"Wartość zakupów",rating_details:"Zobacz informacje o ocenach",region_unavailable:"Niedostępne w tym regionie",remove:"Usuń",remove_owned_wishlist:"Usuń posiadane tytuły z listy źyczeń",reviews:"Recenzje",sales_total:"Wartość sprzedaży",save:"Zapisz",saved:"Zapisano",search:"Szukaj",search_error:"Błąd ładowania kolejnych wyników wyszukiwania",search_market:"Przeszukaj rynek Społeczności Steam",search_names_only:"Szukaj tylko w nazwach",show:"Pokaż",show_all_steam_releases:"Pokaż wszystkie gry wydane na Steam",size:"Rozmiar",software:"Programy",sort_by:"Sortuj wg:",spam_comment_show:"Komentarzy ze spamem ukrytych na tej stronie: __num__. Kliknij tutaj, aby je pokazać.",spam_comment_warn:"Tu są smoki...",starting_at:"Rozpoczęcie:",store:"Sklep",stores:"Sklepy",store_transactions:"Transakcje w sklepie",theworddefault:"Domyślny",thewordoptions:"Opcje",total_size:"Całkowity rozmiar",total_spent:"Łącznie wydano",total_time:"Całkowity czas",trading_cards:"Karty kolekcjonerskie Steam",translate:"Tłumaczenia",translation:"Tłumaczenie",using_language:"Aktualnie przeglądasz Steam w __current__.",using_language_return:"Kliknij tutaj, aby przeglądać Steam w __base__.",using_store:"Używasz sklepu Steam dla regionu __current__.",using_store_return:"Kliknij tutaj, aby powrócić do sklepu __base__.",valid:"Prawidłowe",videos:"Filmy / Zwiastuny",view:"Wyświetl",view_all:"POKAŻ WSZYSTKO",view_astats:"Pokaż stronę AStats",view_badge:"Pokaż odznakę",view_badge_foil:"Pokaż foliowaną odznakę",view_foil_badge:"Zobacz postęp odznaki foliowanej.",view_in:"Pokaż w",view_in_market:"Pokaż na Rynku Społeczności",view_marketplace:"Pokaż rynek społeczności",view_normal_badge:"Zobacz postęp normalnej odznaki.",view_stats:"Zobacz statystyki",view_to_scale:"Pokaż w skali",visit_store:"Pokaż stronę w sklepie",visit_trade_forum:"Odwiedź forum handlu",website:"Strona WWW",wiki_article:"Pokaż artykuł na __pcgw__",wishlist:"Lista życzeń",achievements:{achievements:"Osiągnięcia",includes:"Zawiera __num__ osiągnięć Steam",option:"Pokaż osiągnięcia na stronach sklepu",view_all:"Pokaż wszystkie osiągnięcia"},bundle:{at_least:"Zapłać przynajmniej",bundle_count:"Liczba wystąpień gry w pakietach",header:"Pakiety zawierające tę grę",includes:"Zawiera (__num__) tytułów",info:"Informacja o pakietach",offer_ends:"Koniec oferty:",pwyw:"Zapłać ile chcesz"},charts:{current:"Aktualna liczba graczy",peakall:"Historyczne maksimum",peaktoday:"Dzisiejsze maksimum",playing_now:"aktualnych graczy"},hltb:{compl:"Kompletne ukończenie",main:"Główny wątek",main_e:"Główny wątek i dodatki",submit:"Podaj swój czas"},library:{categories:"Kategorie...",error_loading_library:"Wystąpił błąd w trakcie ładowania twojej biblioteki.",genres:"Gatunki...",private_profile:"Zmień status swojego profilu na publiczny <a href='http://steamcommunity.com/my/edit/settings'>w ustawieniach</a>, aby skorzystać z tej opcji."},options:{about_text:"O <a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:<p>Enhanced Steam to rozszerzenie dla Google Chrome, które dodaje wiele usprawnień do strony Steam.<p>Wybrane możliwości:<ul><li>Podświetlanie posiadanych gier</li><li>Podświetlanie gier z listy życzeń</li><li>Prawidłowe obliczanie zniżek pakietów na podstawie posiadanych gier</li><li>Pokazywanie kwoty wydanej na Steam od założenia konta</li><li>Podświetlanie posiadanych DLC na stronie gry</li><li>Poprawka błędu \"Brak obrazu\" dla gier i DLC</li><li>Ostrzeganie o dodatkowych DRM</li></ul><p>Jeśli uważasz to rozszerzenie za przydatne, rozważ możliwość dotacji.",acrtag:"Pokaż ostrzeżenia dla przedmiotów, dla których wymiana pomiędzy regionami jest wyłączona",api_key:"Klucz API",author_info:"Autor: jshackles",carousel_description:"Pokaż opisy na karuzeli sklepu Steam",cart:"Tytuły w koszyku",changelog:"Lista zmian:",clear:"Czy na pewno chcesz zresetować wszystkie ustawienia? Tej operacji nie można cofnąć.",contscroll:"Włącz ciągłe przewijanie wyników wyszukiwania",coupon:"Tytuły z kuponami",customizespamcommentregex:"(Dostosuj)",drm:"Pokaż ostrzeżenia o DRM firm trzecich",es_bg:"Ustaw własne tło na ekranie \"Edytuj profil\"",excludef2p:"Nie podświetlaj gier Free to Play",foot_link:"Rozszerzenie Enhanced Steam",friends_own:"Tytuły posiadane przez znajomych",friends_rec:"Tytuły polecane przez znajomych",friends_wishlist:"Tytuły z listy życzeń znajomych",general:"Ogólne",gift:"Tytuły w postaci prezentów",greenlight_banner:"Zastąp baner Steam Greenlight",group_events:"Pokaż wydarzenia w informacjach o grupie",guest:"Tytuły w postaci kluczy tymczasowych",header:"Nagłówek",hideactivelistings:"Ukryj domyślnie moje aktywne przedmioty na stronie rynku",hidedlcunownedgames:"DLC do nieposiadanych gier",hidespamcomments:"Ukryj spam w komentarzach na stronach Warsztatu i profilach",hidetmsymbols:"Symbole praw autorskich i znaków towarowych w tytułach gier",hide_about:"Ukryj link \"O Steam\"",hide_early_access:"Ukryj gry ze wczesnym dostępem na stronie głównej, przeglądaniu i wynikach wyszukiwania",hide_install:"Ukryj przycisk \"Zainstaluj Steam\"",hide_owned:"Posiadane przedmioty na stronach wyników wyszukiwania i tagach",hide_owned_homepage:"Posiadane przedmioty na stronie głównej",hltb:"Pokaż informacje z HowLongToBeat.com",html5video:"Pokazuj filmy używając HTML5 zamiast Flash",inventory_market_text:"Pokaż ceny z rynku na stronie ekwipunku",inventory_nav_text:"Pokaż zaawansowane opcje nawigacji na stronie ekwipunku",library:"Pokaż przycisk „Biblioteka” w nagłówku",library_f2p:"Pokaż w bibliotece uruchamiane gry Free to Play i dema",library_header:"Biblioteka (BETA)",lowestprice:"Pokaż",lowestprice_coupon:"Uwzględnij kody rabatowe w porównaniu cen",lowestprice_header:"Informacje o historii cen",lowestprice_onwishlist:"Pokaż na liście życzeń",market_total:"Pokaż podsumowanie transakcji na rynku",metacritic:"Pokaż ocenę użytkowników Metacritic",owned:"Tytuły posiadane",pcgw:"Pokaż linki do PCGamingWiki",profiles_link_group_game:"Gra na wyłączność",profile_api_info:"Pokazuj link API użytkowników na ich profilach",profile_links:"Pokaż linki do profili:",profile_link_images:"Graficzne linki w profilu",profile_link_images_color:"Kolorowe",profile_link_images_gray:"Szare",profile_link_images_none:"Brak",profile_permalink:"Pokazuj permalinki w profilach",regional_hideworld:"Ukryj wyznacznik globusa",regional_price:"Porównanie cen regionalnych",regional_price_mouse:"Po najechaniu kursorem",regional_price_on:"Pokaż porównanie cen regionalnych",replace_account_name:"Użyj nazwy społecznościowej zamiast nazwy konta",reset:"Resetuj ustawienia",reset_note:"Opcje zresetowano",saved_note:"Opcje zapisano",send_age_info:"Podaj automatycznie wiek na żądanie",showallachievements:"Pokaż statystyki osiągnięć na stronie \"Wszystkie gry\"",showspeechsearch:"Włącz głosowe uzupełnianie pól wyszukiwania",show_astatslink:"Pokaż link do AStats na stronach aplikacji",show_early_access_text:"Pokaż banery wczesnego dostępu",show_languagewarning:"Pokaż ostrzeżenie, gdy Steam przeglądany jest w innym języku niż",show_package_info:"Pokaż informacje o paczkach dla wszystkich aplikacji",show_regionwarning:"Pokaż ostrzeżenie o przeglądaniu niewłaściwego regionu",show_steamchart_info:"Pokaż informacje z SteamCharts.com",show_sysreqcheck:"Pokaż przycisk sprawdzania wymagań systemowych na stronach aplikacji (eksperymentalne!)",spamcommentregex:"Łańcuch wyrażenia regularnego:",steamcardexchange:"Pokaż linki do SteamCardExchange na odznakach",steamdb:"Pokaż linki do SteamDB",stores_all:"Porównaj wszystkie sklepy",tag:"Etykieta",total_spent:"Pokaż \"W sumie wydano:\" na stronie konta",wishlist:"Tytuły na liście życzeń",wlbuttoncommunityapp:"Pokaż przycisk „Dodaj do listy życzeń” na stronach społeczności",wsgf:"Pokaż informacje z WSGF (dot. ekranów panoramicznych)"},ready:{errormsg:"Błąd wczytywania danych Enhanced Steam",loading:"Wczytywanie danych Enhanced Steam...",ready:"Enhanced Steam jest gotowy"},select:{none:"Odznacz wszystkie",unowned_dlc:"Zaznacz nieposiadane DLC",wishlisted_dlc:"Zaznacz DLC z listy życzeń"},tag:{coupon:"Kupon",friends_own:"__friendcount__ posiada tę grę",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\>__friendcount__ znajomych poleca tę grę</a>",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ chce tę grę</a>",inv_gift:"Prezent",inv_guestpass:"Klucz tymczasowy",owned:"Posiadane",wishlist:"Lista życzeń"},wallet:{custom_amount:"Dodaj własną kwotę",custom_amount_text:"Dodaj kwotę przekraczającą __minamount__"},wsgf:{gold:"Taki wynik otrzymują gry, których wsparcie __type__ uzyskało od WSGF ocenę doskonałą, co potwierdza Certyfikat __type__.",incomplete:"Niekompletne",limited:"Taki wynik otrzymują gry, których wsparcie __type__ uzyskało ocenę C.  Takie gry wykazują pewien stopień wsparcia __type__, ale napotyka się istotne problemy.",silver:"Taki wynik otrzymują gry, których wsparcie __type__ uzyskało ocenę B.  Takie gry nie wykazują znacznych problemów, ale mają przynajmniej jedną skazę uniemożliwiającą uznanie wsparcia __type__ za doskonałe.",unsupported:"Taki wynik otrzymują gry nieposiadające wsparcia __type__.  Taka gra może nie nadawać się do gry w __type__ albo obraz może zostać rozciągnięty tak, by pasował do ekranu.  Właściwe proporcje obrazu nie są zachowane."}},
			"por":{about:"Sobre",activates:"Ativa no Steam",add_selected_dlc_to_cart:"Adicionar DLC selecionado ao carrinho",add_to_cart:"Adicionar ao Carrinho",add_to_wishlist:"Adicionar à lista de desejos",add_unowned_dlc_to_cart:"Adicionar DLC não adquirido ao carrinho",after_coupon:"depois do cupão",all:"Tudo",all_friends_own:"Todos os amigos que adquiriram isto (__friendcount__)",always:"Sempre",avg_price_3cards:"Preço médio de três cartas",badges_all:"Todas as Medalhas",badges_drops:"Medalhas com cartas por encontrar",badge_completion_avg:"Custo médio para completar",badge_completion_cost:"Custo para completar medalha",badge_foil_progress:"Ver o progresso da Medalha \"Foil\"",badge_not_unlocked:"Não desbloqueado",badge_progress:"Ver o progresso da Medalha",binder_view:"Grelha",birthday_message:"Feliz aniversário Steam, __username__! A tua conta faz __age__ anos de idade hoje.",bug_feature:"Comunicar bug / Sugerir funcionalidade",buy:"Comprar",buying_total:"Total",buy_wishlist:"Comprar Lista de Desejos",cancel:"Cancelar",cards_owned:"__owned__ de __possible__ cartas adquiridas",card_drops_remaining:"__drops__ cartas por encontrar",check_system:"Verifica o teu sistema",clear_cache:"Limpar dados em cache",common_label:"Esconder jogos não adquiridos",community:"Comunidade",community_name_account_header:"Conta de __username__",compare:"Comparar",comparison_mode:"Ativa o modo \"Todos os jogos\" para comparar jogos",contribute:"Contribuir (GitHub)",coupon_application_note:"Um cupão de desconto do teu inventário será aplicado automaticamente no fim da compra",coupon_available:"Tens um cupão disponível!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Saber mais</a> sobre Cupões Steam",credits:"Créditos",customize:"Customizar",custom_background:"Fundo Personalizado",custom_background_help:"Todos os utilizadores do Enhanced Steam irão ver este fundo no teu perfil. Não-utilizadores do Enhanced Steam irão ver o teu fundo de perfil padrão.",date_unlocked:"Data de Desbloqueio",discount:"Desconto",dlc_data_header:"Detalhes do conteúdo descarregável  ",dlc_details:"Detalhes do Conteúdo Descarregável",dlc_suggest:"Sugerir nova categoria",donate:"Fazer um donativo",drm_third_party:"Aviso: Este título usa DRM de terceiros",drm_third_party_sub:"Aviso: Um ou mais títulos neste pacote usa DRM de terceiros",drops_value:"Maior preço",drops_worth_avg:"Vale Aproximadamente",each:"Cada",empty_cart:"Esvaziar Carrinho",empty_wishlist:"Esvaziar lista de desejos",es_supporter:"Apoiante do Enhanced Steam",events:"Eventos",family_sharing_notice:"<b>Nota:</b> Este jogo foi excluído do serviço de Partilha de Biblioteca Steam.",faqs:"Perguntas frequentes",forums:"Fórums",games:"Jogos",games_all:"Todos os Jogos",games_coupon:"Jogos Com Cupões",games_discount:"Jogos Com Descontos",games_installed:"Jogos Instalados",games_with_booster:"__boostergames__ jogos habilitados a receber boosters",games_with_drops:"__dropsgames__ jogos com cartas por encontrar",game_name:"Nome do Jogo",game_transactions:"Transações em jogos",gift_transactions:"Transações de presentes",graphics:"Gráficos",guides:"Guias",hide:"Esconder",highlight:"Destaque",historical_low:"Preço mais baixo registado",hours_short:"__hours__ hrs",info:"Informações",item_type:"Tipo de Item",language:"Idioma",last_24:"Quantidade: __sold__ vendidos nas últimas 24 horas",library_menu:"Biblioteca",loading:"A carregar...",lowest_price:"Preço mais baixo atualmente",market_transactions:"Transações no Mercado",more_information:"Mais informações",most_drops:"Mais cartas para obter",net_gain:"Lucro final",net_spent:"Gastos finais",never:"Nunca",news:"Notícias",notcommon_label:"Esconder jogos que possuis",no_results_found:"Não foram encontrados resultados",official_group:"Grupo oficial ",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Informações do pacote",permalink:"Permalink",popular:"Populares",price:"Preço",price_options:"Opções de preço",programming:"Programação",purchase_date:"(Comprado em __date__)",purchase_total:"Total da compra",rating_details:"Ver detalhes de classificação",region_unavailable:"Indisponível nesta região",remove:"Remover",remove_owned_wishlist:"Remover jogos adquiridos da lista de desejos",reviews:"Análises",sales_total:"Total das vendas",save:"Guardar",saved:"Guardado",search:"Pesquisar",search_market:"Procurar no Mercado da Comunidade Steam",search_names_only:"Pesquisar apenas em nomes",show:"Mostrar",show_all_steam_releases:"Mostrar todos os lançamentos no Steam",size:"Tamanho",sort_by:"Ordenar por:",spam_comment_show:"__num__ comentários irrelevantes ocultos nesta página. Clica aqui para os veres.",spam_comment_warn:"Cuidado...",starting_at:"A partir de",store:"Loja",stores:"Lojas",store_transactions:"Transações na loja",theworddefault:"Padrão",thewordoptions:"Opções",total_size:"Tamanho Total",total_spent:"Total gasto",total_time:"Tempo Total",trading_cards:"Cartas Colecionáveis Steam",translate:"Traduzir",translation:"Tradução",using_language:"Estás a navegar pelo Steam em __current__.",using_language_return:"Clica aqui para navegar pelo Steam em __base__.",using_store:"Estás a usar a loja Steam da região __current__.",using_store_return:"Clica aqui para voltares à loja da região __base__.",valid:"Valido",view:"Ver",view_all:"VER TUDO",view_astats:"Ver página no AStats",view_badge:"Ver Medalha",view_badge_foil:"Ver Medalha \"Foil\"",view_foil_badge:"Ver Progresso da Medalha \"Foil\"",view_in:"Ver em",view_in_market:"Ver no Mercado da Comunidade",view_marketplace:"Ver Mercado",view_normal_badge:"Ver Progresso Normal da Medalha",view_stats:"Ver estatísticas",view_to_scale:"Ver à escala",visit_store:"Visitar Página da Loja",visit_trade_forum:"Visitar fórum de trocas",website:"Site oficial",wiki_article:"Ver Artigo __pcgw__",wishlist:"Lista de desejos",achievements:{achievements:"Proezas",includes:"Inclui __num__ Proezas do Steam",option:"Mostrar proezas em páginas da loja",view_all:"Ver Todas as Proezas"},bundle:{at_least:"Pagar Pelo Menos",bundle_count:"Número de vezes que este jogo fez parte de um pacote",header:"Pacotes que incluem este jogo",includes:"Inclui (__num__) itens",info:"Informações do pacote",offer_ends:"A promoção termina em",pwyw:"Paga o que quiseres"},charts:{current:"Jogadores atuais",peakall:"pico de todos os tempos",peaktoday:"pico de hoje",playing_now:"a jogar agora"},hltb:{compl:"Completar tudo",main:"Estória principal",main_e:"História principal e Extras",submit:"Submeter o teu tempo"},library:{categories:"Categorias...",error_loading_library:"Não foi possível carregar a tua biblioteca.",genres:"Gêneros...",private_profile:"Muda o estado do teu perfil para público <a href='http://steamcommunity.com/my/edit/settings'>in your settings</a> para usar esta funcionalidade."},options:{about_text:"<div class=\"header\">Sobre o <a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:</div><p>Enhanced Steam é uma extensão para Google Chrome que adiciona muitas funcionalidades novas ao site do Steam.<p>As funcionalidades incluem:<ul><li>Destacar jogos que já tens</li><li>Destacar jogos na tua lista de desejos</li><li>Cálculo correto do desconto de pacotes com base nos jogos que já tens</li><li>Mostrar quanto já gastaste no Steam desde a criação da tua conta</li><li>Destacar na página do jogo base os DLCs que já tens</li><li>Corrigir ícones \"Sem imagem disponível\" de jogos ou DLCs na tua lista de desejos</li><li>Indicar jogos com DRM de terceiros</li></ul><p>Se achares esta extensão útil, considera fazer um donativo.",api_key:"Chave de API",author_info:"por jshackles",carousel_description:"Exibir descrições de aplicações no carrossel da página inicial da loja",changelog:"Últimas atualizações:",clear:"Tens a certeza de que pretendes restaurar as opções predefinidas? Esta ação não pode ser anulada.",contscroll:"Ativar resultados de procura contínuos",coupon:"Itens com cupões",customizespamcommentregex:"(Personalizar)",drm:"Mostrar avisos de DRM de terceiros",es_bg:"Definir fundo personalizado no ecrã de \"Edit Profile\"",excludef2p:"Excluir destaque de jogos grátis para jogar",foot_link:"Extensão Enhanced Steam",friends_own:"Itens que os teus amigos possuem",friends_rec:"Itens que os teus amigos analizaram",friends_wishlist:"Itens que os teus amigos têm na Lista de Desejos",general:"Geral",gift:"Itens guardados como presente",greenlight_banner:"Substituir banner do Steam Greenlight",group_events:"Mostrar eventos na página inicial do grupo",guest:"Itens que tens um passe de convidado",header:"Cabeçalho",hideactivelistings:"Ocultar todos os anúncios ativos na página inicial do Mercado por defeito",hidedlcunownedgames:"DLC para jogos que não possuis",hidespamcomments:"Esconder comentários indesejados do Workstop & perfis",hidetmsymbols:"Símbolos de marca registada e direitos de autor nos títulos dos jogos",hide_about:"Esconder hiperligação \"About\"",hide_early_access:"Ocultar jogos com Acesso Antecipado na página inicial, de marcadores e de pesquisa",hide_install:"Esconder botão \"Install Steam\"",hide_owned:"Itens adquiridos em resultados de procura ou páginas de etiqueta",hide_owned_homepage:"Itens que possuis na página inicial",hltb:"Mostrar informação do HowLongToBeat.com",html5video:"Exibir vídeos com HTML5 em vez de Flash",inventory_market_text:"Mostrar o preço de mercado na página do inventário",inventory_nav_text:"Mostrar navegação avançada na página do inventário",library:"Mostrar botão da Biblioteca no cabeçalho",library_f2p:"Mostrar jogos Grátis para Jogar e demos usados na biblioteca",library_header:"Biblioteca (BETA)",lowestprice:"Mostrar",lowestprice_coupon:"Incluir códigos de cupões na comparação de preço",lowestprice_header:"Informações de histórico de preços",lowestprice_onwishlist:"Mostrar na Lista de Desejos",market_total:"Mostrar sumário de transação no Mercado",metacritic:"Mostrar pontuação dos utilizadores do Metacritic",owned:"Itens adquiridos",pcgw:"Mostrar hiperligações do PCGamingWiki",profiles_link_group_game:"Jogo exclusivo",profile_api_info:"Mostrar link para API do utilizador em perfis",profile_links:"Mostrar links do perfil para",profile_link_images:"Imagens do link de perfil",profile_link_images_color:"Colorido",profile_link_images_gray:"Em escala de cinza",profile_link_images_none:"Nenhum",profile_permalink:"Mostrar links definitivos nos perfis",regional_hideworld:"Ocultar indicador regional",regional_price:"Comparação de preços regionais",regional_price_mouse:"ao passar o cursor do rato no preço",regional_price_on:"Mostrar comparação de preços regionais",replace_account_name:"Substitui o nome da conta com o nome da Comunidade",reset:"Repor opções",reset_note:"Repor opções",saved_note:"Opções guardadas",send_age_info:"Enviar verificação de idade automaticamente quando solicitado",showallachievements:"Mostrar estatísticas de proezas na página \"Todos os jogos\"",showspeechsearch:"Adicionar entrada de discurso nas caixa de pesquisa",show_astatslink:"Mostrar link para o site AStats em páginas de aplicações",show_early_access_text:"Mostrar faixas de Acesso Antecipado",show_languagewarning:"Mostrar alerta se estiver navegando em um idioma diferente de",show_package_info:"Mostrar informação do pacote para todas as aplicações",show_regionwarning:"Mostrar aviso ao navegar noutra região",show_steamchart_info:"Mostrar informações do SteamCharts.com",show_sysreqcheck:"Mostrar botão para verificar os requisitos do sistema nas páginas das aplicações (Experimental!)",spamcommentregex:"String de expressão regular:",steamcardexchange:"Mostrar hiperligações SteamCardExchange nas medalhas",steamdb:"Mostrar hiperligações da SteamDB",stores_all:"Comparar todas as lojas",tag:"Etiqueta",total_spent:"Mostrar total gasto na página da conta",wishlist:"Itens na tua lista de desejos",wlbuttoncommunityapp:"Mostrar botão \"Adicionar à lista de desejos\" em Centrais Comunitárias",wsgf:"Mostrar informação WSGF (ecrã panorâmico)"},ready:{errormsg:"Erro ao carregar os dados do Enhanced Steam",loading:"O Enhanced Steam está a carregar dados...",ready:"O Enhanced Steam está pronto"},select:{none:"Escolher nenhum",unowned_dlc:"Selecionar DLC Não Adquirido",wishlisted_dlc:"Selecionar DLC na Lista de Desejos"},tag:{coupon:"Cupão",friends_own:"__friendcount__ possuem",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ Recomendações de amigos",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ desejam</a>",inv_gift:"Presente",inv_guestpass:"Convite",owned:"Adquirido",wishlist:"Lista de Desejos"},wallet:{custom_amount:"Adicionar uma quantia específica ",custom_amount_text:"Adicionar qualquer valor acima de __minamount__"},wsgf:{gold:"Esta medalha é dada a jogos que receberam pontuações perfeitas do WSGF pela sua compatibilidade com __type__, sendo assim Certificados para uso __type__.",incomplete:"Incompleto",limited:"Esta pontuação é atribuída a jogos que receberam uma nota calculada de C pelo seu __type__ suporte. Todos estes jogos têm um certo nível de __type__ suporte mas têm problemas significantes.",silver:"Esta medalha é dada a jogos que receberam uma nota final B pela sua compatibilidade com __type__.  Todos os jogos com esta nota não possuem grandes problemas, mas pode haver um detalhe que impede a pontuação perfeita.",unsupported:"Esta pontuação é atribuída a jogos que não têm __type__ suporte. O jogo poderá não ser jogável em __type__, ou a imagem está esticada para caber na janela. A resolução correta não está retida."}},
			"rom":{about:"Despre",add_to_cart:"Adaugă în coș",add_to_wishlist:"Adaugă la lista de dorințe",all:"Toate",all_friends_own:"Toți prietenii care dețin acest (__friendcount__)",always:"Întotdeauna",avg_price_3cards:"Prețul mediu celor trei cărți de schimb",badges_all:"Toate insignele",badges_drops:"Insigne cu cărți de schimb rămase",badge_foil_progress:"Vezi progres insignă înfoliată",badge_not_unlocked:"Nu este deblocat",badge_progress:"Vezi progres insignă",birthday_message:"La mulți Steam ani, __username__! Contul tău Steam împlinește astăzi  __age__ ani.",bug_feature:"Raportează Bug / Sugerează Facilități",buy:"Cumpără",buying_total:"Total cumpărare",buy_wishlist:"Cumpără lista de dorințe",cancel:"Anulează",check_system:"Verifică sistemul meu",clear_cache:"Șterge date cache",common_label:"Ascunde jocurile pe care nu le dețin",community:"Comunitate",community_name_account_header:"cont __username__",compare:"Compară",contribute:"Contribuie (GitHub)",coupon_available:"Ai un cupon disponibil!",credits:"Credite",custom_background:"Imagine de fundal personalizată",discount:"Reducere",dlc_data_header:"Detalii conținut descărcabil",dlc_details:"Detalii conținut descărcabil",donate:"Donează",drm_third_party_sub:"Avertisment: Unul sau mai multe produse din acest pachet folosesc DRM-ul 3rd party",each:"Fiecare",empty_cart:"Golește coș",empty_wishlist:"Golește lista de dorințe",es_supporter:"Susținător Enhanced Steam",events:"Evenimente",faqs:"Întrebări adresate frecvent",forums:"Forumuri",games:"Jocuri",games_all:"Toate jocurile",games_coupon:"Jocuri cu cupoane",games_discount:"Jocuri cu reduceri",games_installed:"Jocuri instalate",game_name:"Nume joc",game_transactions:"Tranzacții jocuri",gift_transactions:"Tranzacții Cadouri",graphics:"Grafică",hide:"Ascunde",highlight:"Evidențiere",historical_low:"Istoric cele mai mici prețuri",hours_short:"__hours__ ore",info:"Info",item_type:"Tip Produs",language:"Limba",last_24:"Volum: __sold__ vânzări în ultimele 24 de ore",library_menu:"Colecție",loading:"Se încarcă...",lowest_price:"Cel mai mic preț actual",market_transactions:"Tranzacții piață",more_information:"Mai multe informații",net_gain:"Câștigat net",net_spent:"Cheltuit net",never:"Niciodată",news:"Noutăți",notcommon_label:"Ascunde jocurile pe care le dețin",no_results_found:"Nu a fost găsit niciun rezultat",official_group:"Grup Oficial",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Informații pachet",popular:"Popular",price:"Preț",price_options:"Opțiuni preț",programming:"Programare",purchase_date:"(Cumpărat pe __date__)",purchase_total:"Total cumpărături",rating_details:"Vezi detalii evaluare",region_unavailable:"Nu este disponibil în această regiune",remove:"Șterge",remove_owned_wishlist:"Elimină jocurile deținute din lista de dorințe",reviews:"Recenzii",sales_total:"Total vânzări",save:"Salvează",saved:"Salvat",search:"Caută",search_market:"Caută pe Piața Comunitară Steam",search_names_only:"Caută doar în nume",show:"Afișează",show_all_steam_releases:"Afișează toate lansările Steam",size:"Dimensiune",sort_by:"Sortează după:",spam_comment_warn:"Aici vor fi dragoni...",starting_at:"Începând cu",store:"Magazin",stores:"Magazine",store_transactions:"Tranzacții Magazin",theworddefault:"Implicit",thewordoptions:"Opțiuni",total_size:"Dimensiune totală",total_spent:"Total cheltuit",total_time:"Timp total",trading_cards:"Cărţi de schimb Steam",translate:"Traduce",translation:"Traducere",using_language:"Navighezi pe Steam pe __current__.",using_language_return:"Apasă aici pentru a naviga pe Steam pe __base__.",using_store:"În prezent folosești pagina magazinului Steam pentru regiunea __current__.",view:"Vizualizează",view_all:"VEZI TOATE",view_astats:"Vezi pagina AStats",view_badge:"Vezi insignă",view_badge_foil:"Vezi insignă înfoliată",view_foil_badge:"Vizualizează progresul insignei înfoliate",view_in:"Vezi în",view_in_market:"Vezi pe Piața Comunitară",view_marketplace:"Vezi piață",view_normal_badge:"Vizualizează progresul insignei",view_stats:"Vezi statistici",view_to_scale:"Vezi la scară",visit_store:"Vezi pagină magazin",visit_trade_forum:"Vizitează forumul de schimb",website:"Pagină Web",wiki_article:"Vezi articol __pcgw__",wishlist:"Listă de dorințe",achievements:{achievements:"Realizări",includes:"Include __num__ realizări Steam",option:"Afișează realizările pe paginile magazinelor",view_all:"Vezi toate Realizările"},bundle:{at_least:"Plătește cel puțin",info:"Info Pachet"},charts:{current:"Jucători în prezent",playing_now:"joacă acum"},hltb:{main:"Povestea principală",submit:"Trimite timpul tău"},library:{categories:"Categorii...",error_loading_library:"Nu am putut încărca colecția ta.",genres:"Genuri..."},options:{api_key:"Cheie API",author_info:"de jshackles",changelog:"Notițe schimbări:",contscroll:"Activează derularea continuă a rezultatelor căutării",coupon:"Produse cu cupoane",customizespamcommentregex:"(Personalizează)",drm:"Afișează avertismente DRM 3rd party ",foot_link:"Extensia Enhanced Steam",friends_own:"Produse deținute de prietenii tăi",friends_rec:"Produse recenzate de prietenii tăi",friends_wishlist:"Produse dorite de prietenii tăi",gift:"Produse stocate drept cadou",greenlight_banner:"Înlocuiește banner-ul Undă Verde Steam",group_events:"Afișează evenimente pe pagina de ansamblu al grupului",guest:"Produse care le ai ca invitație",header:"Antet",hideactivelistings:"Ascunde toate listările active de pe pagina de start a Pieței Steam în mod implicit",hidedlcunownedgames:"DLC pentru jocurile care nu le dețin",hidespamcomments:"Ascunde comentariile spam din Atelier & profiluri",hidetmsymbols:"Marca și drepturile de autor în titlurile jocurilor",hide_install:"Ascunde butonul \"Instalează Steam\"",hltb:"Afișează informații HowLongToBeat.com",html5video:"Afișează clipurile video folosind HTML5 în loc de Flash",lowestprice:"Afișează",lowestprice_coupon:"Include coduri promoționale în compararea prețurilor",lowestprice_header:"Informații istoric preț",lowestprice_onwishlist:"Afișează în Lista de dorințe",metacritic:"Afișează scorurile de utilizator Metacritic",owned:"Produse deținute",pcgw:"Afișează link-uri PCGamingWiki ",profiles_link_group_game:"Joc exclusiv",profile_links:"Afișează link-uri de profil pe",profile_link_images:"Imagini link profil",profile_link_images_color:"Colorat",profile_link_images_gray:"Nuanțe de gri",profile_link_images_none:"Niciunul",profile_permalink:"Afișează link permanent pe profil",regional_hideworld:"Ascunde indicatorul global",reset:"Resetează opțiuni",reset_note:"Resetează opțiuni",saved_note:"Opțiuni salvate",send_age_info:"Trimite în mod automat verificarea vârstei la cerere",show_astatslink:"Afișează link AStats pe paginile aplicațiilor",show_package_info:"Afișează informații pachet pentru toate aplicațiile",show_steamchart_info:"Afișează informații SteamCharts.com",steamcardexchange:"Afișează link-uri SteamCardExchange la insigne",steamdb:"Afișează link-uri SteamDB",stores_all:"Compară în toate magazinele",tag:"Etichetă",total_spent:"Afișează total cheltuit pe pagina contului",wishlist:"Produse în lista de dorințe",wsgf:"Afișează informații WSGF (Panoramic)"},ready:{loading:"Enhanced Steam se încarcă datele...",ready:"Enhanced Steam pregătit"},select:{none:"Selectează niciunul",unowned_dlc:"Selectează DLC-uri neposedate",wishlisted_dlc:"Selectează DLC-uri dorite"},tag:{coupon:"Cupon",friends_own:"__friendcount__ dețin",inv_gift:"Cadou",owned:"Deținute",wishlist:"Lista de dorințe"},wallet:{custom_amount:"Adaugă sumă personalizată",custom_amount_text:"Adaugă orice sumă peste __minamount__"},wsgf:{incomplete:"Incomplet"}},
			"rus":{about:"О расширении",activates:"Активируется в Steam",add_selected_dlc_to_cart:"Добавить выделенные дополнения в корзину",add_to_cart:"Добавить в корзину",add_to_wishlist:"Добавить в список желаемого",add_unowned_dlc_to_cart:"Добавить в корзину дополнения, которых у меня нет",after_coupon:"после купона",all:"Все",allreleases_products:"Выберите типы продуктов, которые вы хотите отображать в этом разделе",all_friends_own:"Все друзья, у которых это есть (__friendcount__)",always:"Всегда",apppage_legal:"Правовая информация",apppage_purchase:"Опции покупки",apppage_sections:"Выберите разделы, которые вы хотели бы видеть на этой странице",avg_price_3cards:"Средняя цена трех коллекционных карточек",badges_all:"Все значки",badges_drops:"Значков с возможностью выпадения карточек",badge_completion_avg:"Средняя стоимость завершения значка",badge_completion_cost:"Стоимость завершения значка",badge_foil_progress:"Просмотреть прогресс металлического значка",badge_not_unlocked:"Не разблокировано",badge_progress:"Просмотреть прогресс значка",binder_view:"Вид «Папки»",birthday_message:"С днем рождения, __username__! Вашему аккаунту исполнилось следующее кол-во лет: __age__ ",bug_feature:"Сообщить об ошибке / предложить новую функцию",bundle_saving_text:"Купив этот комплект, вы сэкономите",buy:"Купить",buying_total:"Суммарная цена заказов",buy_wishlist:"Выкупить список желаемого",cancel:"Отмена",cards_owned:"Есть __owned__ карт из __possible__ возможных",card_drops_remaining:"Еще выпадет карточек: __drops__",check_system:"Проверить систему",clear_cache:"Очистить кэшированную информацию",common_label:"Спрятать игры, которых у вас нет",community:"Сообщество",community_name_account_header:"Аккаунт __username__",compare:"Сравнить",comparison_mode:"Включить, чтобы увидеть сравнение",contribute:"Внести вклад (GitHub)",coupon_application_note:"При покупке купон будет использован автоматически.",coupon_available:"У вас есть купон!",coupon_learn_more:"Узнать больше о <a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">купонах Steam</a>",credits:"Авторы",customize:"Настроить",custom_background:"Пользовательский фон ",custom_background_help:"Все пользователи Enhanced Steam увидят этот фон в вашем профиле. Пользователи, у которых не установлен Enhanced Steam, увидят выбранный вами фон выше.",date_unlocked:"Дата разблокировки",demos:"Демо-версии",discount:"Скидка",dlc:"Загружаемый контент",dlc_data_header:"Детали дополнений",dlc_details:"Информация загружаемого контента",dlc_suggest:"Предложить новую категорию",donate:"Пожертвовать",drm_third_party:"Внимание: эта игра использует DRM-технологию сторонних поставщиков",drm_third_party_sub:"Внимание: один или несколько продуктов в этом наборе используют DRM-технологию сторонних поставщиков",drops_value:"Самая дорогая карточка",drops_worth_avg:"Примерная стоимость",each:"Каждая",empty_cart:"Очистить корзину",empty_wishlist:"Очистить список желаемого",es_supporter:"Поддержал «Enhanced Steam»",events:"События",family_sharing_notice:"<b>Примечание:</b> Эта игра недоступна в Family Sharing.",faqs:"Часто задаваемые вопросы",forums:"Форумы",games:"Игры",games_all:"Все игры",games_coupon:"Игры с купонами",games_discount:"Игры со скидками",games_installed:"Установленные игры",games_with_booster:"Игр, у которых выпадет набор карточек: __boostergames__ ",games_with_drops:"Игр, в которых могут выпасть карточки: __dropsgames__",game_name:"Название игры",game_transactions:"Операции в играх",gift_transactions:"Операции с подарками",graphics:"Дизайн",guides:"Руководства",hide:"Спрятать",highlight:"Подсвечивать",historical_low:"Исторический минимум",homepage_carousel:"Карусель",homepage_sidebar:"Боковая панель",homepage_spotlight:"Обзор",homepage_tabs:"Вкладки на главной странице",hours_short:"__ч.__ ч.",info:"Информация",item_type:"Тип предмета",language:"Язык",last_24:"Количество: __sold__ продано за 24 часа",library_menu:"Библиотека",loading:"Загрузка…",lowest_price:"Самая низкая цена",market_transactions:"Операции на Торг. площадке",mods:"Модификации",more_information:"Больше",most_drops:"Большинство выпадений",net_gain:"Чистый доход",net_spent:"Потрачено",never:"Никогда",news:"Новости",notcommon_label:"Спрятать игры, которые уже есть",no_results_found:"Ничего не найдено",official_group:"Официальная группа",official_group_url:"steamcommunity.com/groups/enhancedsteamru",package_info:"Информация о комплекте",packs:"Комплекты",permalink:"Постоянная ссылка",playfire_heading:"Награды от Playfire",popular:"Популярное",price:"Цена",price_options:"Ценовые настройки",programming:"Программирование",purchase_date:"(Приобретено __date__)",purchase_total:"Всего покупок",rating_details:"Просмотреть информацию рейтинга",region_unavailable:"Недоступно в этом регионе",remove:"Убрать",remove_owned_wishlist:"Убрать из списка желаемого купленные игры",reviews:"Обзоры",sales_total:"Суммарная цена продаваемых предметов",save:"Сохранить",saved:"Сохранено",search:"Поиск",search_error:"Не удалось загрузить остальные результаты поиска",search_error_retry:"Нажмите здесь, чтобы повторить попытку",search_market:"Поиск на Торговой площадке сообщества",search_names_only:"Искать только в названиях",show:"Показать",show_all_steam_releases:"Показать все релизы в Steam",size:"Размер",software:"Программы",sort_by:"Сортировать по:",spam_comment_show:"Скрыто спам-комментариев на этой странице: __num__ Нажмите здесь, чтобы их отобразить.",spam_comment_warn:"Тут обитают драконы...",starting_at:"Начиная от",store:"Магазин",stores:"Магазины",store_transactions:"Операции в магазине",theworddefault:"По умолчанию",thewordoptions:"Настройки",total_size:"Полный размер",total_spent:"Всего потрачено",total_time:"Всего времени",trading_cards:"Коллекционные карточки Steam",translate:"Перевод",translation:"Перевод",using_language:"Вы находитесь на сайте Steam, используя __current__ язык.",using_language_return:"Нажмите здесь, чтобы пользоваться Steam на __base__ языке.",using_store:"Сейчас вы используете магазин Steam для __current__ региона.",using_store_return:"Нажмите здесь, чтобы вернуться в __base__ магазин.",valid:"Правильно",videos:"Видео / Трейлеры",view:"Просмотреть",view_all:"ПРОСМОТРЕТЬ ВСЕ",view_astats:"Просмотреть страницу AStats",view_badge:"Просмотреть значок",view_badge_foil:"Просмотреть металлический значок",view_foil_badge:"Просмотреть прогресс металлического значка",view_in:"Просмотреть в",view_in_market:"Просмотреть на Торговой площадке",view_marketplace:"Просмотреть площадку",view_normal_badge:"Просмотреть прогресс обычного значка",view_stats:"Просмотреть статистику",view_to_scale:"Просмотр в масштабе",visit_store:"Посетить страницу магазина",visit_trade_forum:"Посетить форум обмена",website:"Веб-сайт",wiki_article:"Просмотреть статью __pcgw__",wishlist:"Список желаемого",achievements:{achievements:"Достижения",includes:"Имеются достижения Steam: __num__",option:"Отображать достижения на страницах в магазине",view_all:"Просмотреть все достижения"},bundle:{at_least:"Заплатить как минимум",bundle_count:"Количество раз, когда эта игра была в наборе",header:"Наборы, в которых есть эта игра",includes:"Включает в себя (__num__) продуктов",info:"Информация о наборе",offer_ends:"Предложение заканчивается",pwyw:"Плати сколько хочешь"},charts:{current:"Текущее количество игроков",peakall:"пик за всё время",peaktoday:"сегодняшний пик",playing_now:"сейчас играют"},hltb:{compl:"На 100%",main:"История",main_e:"История и другое",submit:"Отправить свое время"},library:{categories:"Категории…",error_loading_library:"Не получилось загрузить вашу библиотеку.",genres:"Жанры…",private_profile:"Чтобы использовать эту функцию, вы должны <a href='http://steamcommunity.com/my/edit/settings'>сделать свой профиль открытым для всех</a>."},options:{about_text:"О расширении «<a href=http://www.EnhancedSteam.com>Enhanced Steam</a>»:<p>«Enhanced Steam» — это расширение для Google Chrome, которое добавляет полезные особенности на сайт Steam.<p>Особенности включают:<ul><li>Подсвечивание игр, которые уже у вас есть<li>Подсвечивание игр, которые имеются в вашем списке желаемого<li>Правильный подсчет скидок наборов, основанных на играх, которые у вас есть<li>Отображение суммы денег, которое вы потратили за время существования вашего аккаунта<li>Подсвечивание дополнений, которые у вас есть, на странице игр<li>Замена картинки «No Image Available», которая иногда отображается у игр и дополнений<li>Предупреждение об использовании игр дополнительных клиентов и защиты (GFWL, Uplay и т.д.)</ul><p>Если вы считаете, что расширение очень полезно, то, пожалуйста, пожертвуйте любую сумму автору расширения.",acrtag:"Отображать предупреждения, если обмен между регионами запрещен",api_key:"Ключ API",author_info:"создано jshackles",carousel_description:"Отображать описания на главной странице магазина Steam",cart:"Продукты в вашей корзине",changelog:"Список изменений:",clear:"Вы уверены, что хотите сбросить эти настройки? Действие необратимо. ",contscroll:"Включить бесконечную прокрутку на странице результатов поиска",coupon:"Продукты, которые могут быть использованы с имеющимися купонами",customizespamcommentregex:"(Настроить)",drm:"Отображать предупреждения о DRM-технологиях сторонних разработчиков (GFWL, Uplay и т.д.)",es_bg:"Выбрать пользовательский фон в разделе редактирования профиля",excludef2p:"Исключить бесплатные игры из подсвечивания",foot_link:"Расширение «Enhanced Steam»",friends_own:"Продукты, которые есть у ваших друзей",friends_rec:"Продукты, на которые ваши друзья сделали обзоры",friends_wishlist:"Продукты, которые находятся в списке желаемого ваших друзей",general:"Главное",gift:"Продукты, которые находятся в вашем инвентаре",greenlight_banner:"Заменить баннер Steam Greenlight",group_events:"Отображать события в просмотре групп",guest:"Продукты, для которых у вас есть гостевой пропуск",header:"Шапка",hideactivelistings:"Спрятать активные лоты на площадке по умолчанию",hidedlcunownedgames:"Дополнения для игр, которых у вас нет",hidespamcomments:"Спрятать комментарии в Мастерской и профилях, помеченные как спам",hidetmsymbols:"Символы торговых марок и авторских прав в названиях игр",hide_about:"Спрятать ссылку «О STEAM» в шапке",hide_early_access:"Спрятать игры с ранним доступом с главной страницы и поиска",hide_install:"Спрятать кнопку «Установить Steam» в шапке",hide_owned:"Продукты, которые есть у вас, в результатах поиска и страницах меток",hide_owned_homepage:"Спрятать то, что у вас уже есть, на главной странице",hltb:"Отображать информацию HowLongToBeat.com",html5video:"Показывать видео, используя HTML5 вместо Flash",inventory_market_text:"Отображать цену Торговой площадки на странице инвентаря",inventory_nav_text:"Отображать расширенную навигацию на странице инвентаря",library:"Отображать кнопку «Библиотека» в шапке",library_f2p:"Отображать бесплатные игры и демо-версии в библиотеке",library_header:"Библиотека (БЕТА)",lowestprice:"Показать",lowestprice_coupon:"Включать купоны в ценовые сравнения",lowestprice_header:"Информация по истории цен",lowestprice_onwishlist:"Показать в списке желаемого",market_total:"Отображать сумму всех операций на Торговой площадке",metacritic:"Отображать пользовательский рейтинг Metacritic",owned:"Продукты, которые уже у вас есть",pcgw:"Отображать ссылки на PCGamingWiki ",profiles_link_group_game:"Эксклюзив",profile_api_info:"Отображать ссылки на пользовательские API в профилях",profile_links:"Отображать ссылки в профиле на:",profile_link_images:"Иконки в профиле",profile_link_images_color:"Цветные",profile_link_images_gray:"Черно-белые",profile_link_images_none:"Без картинок",profile_permalink:"Отображать постоянную ссылку на профилях",regional_hideworld:"Спрятать иконку глобуса",regional_price:"Сравнение цен в регионах",regional_price_mouse:"При наведении курсора",regional_price_on:"Отображать сравнение цен",replace_account_name:"Заменить имя аккаунта именем в сообществе",reset:"Сбросить настройки",reset_note:"Настройки сброшены",saved_note:"Настройки сохранены",send_age_info:"Автоматически отправлять подтверждение возраста при запросе",showallachievements:"Отображать статистику достижений на странице \«Все игры\»",showspeechsearch:"Добавить значок голосового поиска в поле поиска",show_astatslink:"Отображать ссылку на AStats на страницах продуктов",show_early_access_text:"Отображать баннеры раннего доступа",show_languagewarning:"Отображать предупреждение, если страница открыта на другом языке",show_package_info:"Отображать информацию о наборах для всех продуктов",show_regionwarning:"Отображать предупреждение о несоответствии региона",show_steamchart_info:"Отображать информацию SteamCharts.com",show_sysreqcheck:"Отображать кнопку для проверки системных требований (Экспериментальное!)",spamcommentregex:"Строка регулярных выражений:",steamcardexchange:"Отображать ссылки сайта SteamCardExchange на значках",steamdb:"Отображать ссылки SteamDB",stores_all:"Сравнить все магазины",tag:"Метка",total_spent:"Отображать сумму всех потраченных средств на странице аккаунта",wishlist:"Продукты, которые находятся в вашем списке желаемого",wlbuttoncommunityapp:"Отображать кнопку \"Добавить в список желаемого\" в центрах сообщества",wsgf:"Отображать информацию о поддержке широкоэкранных мониторов (WSGF)"},ready:{errormsg:"Ошибка загрузки данных Enhanced Steam",loading:"«Enhanced Steam» загружается...",ready:"\"Enhanced Steam\" готов"},select:{none:"Снять выбор",unowned_dlc:"Выбрать не купленные дополнения",wishlisted_dlc:"Выбрать дополнения из списка желаемого"},tag:{coupon:"Купон",friends_own:"У __friendcount__ есть",friends_rec:"Друзей сделало обзор: <a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ ",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">Ваши друзья (__friendcount__) хотят это</a>",inv_gift:"Подарок",inv_guestpass:"Гостевой пропуск",owned:"Приобретено",wishlist:"Список желаемого"},wallet:{custom_amount:"Добавить определенную сумму",custom_amount_text:"Добавить любую сумму более __minamount__"},wsgf:{gold:"Эта медаль выдается играм, которые получили «Отлично» от WSGF за их поддержку __type__ и сертификат __type__.",incomplete:"Не завершено",limited:"Эта оценка присуждается играм, которые получили «Средне» за поддержку __type__. Все эти игры могут поддерживать __type__, но также существует шанс, что с игрой могут возникнуть проблемы.",silver:"Эта медаль присуждается играм, которые получили «Хорошо» за поддержку __type__.  Все эти игры не имеют серьезных недостатков, но из-за некоторых недочетов высший балл получить невозможно.",unsupported:"Эта оценка выдается играм, которые не имеют поддержки __type__. Существует шанс, что игра будет не играбельной в __type__, или само изображение будет растянуто до размеров окна. Правильное соотношение сторон не сохраняется."}},
			"sch":{about:"关于",activates:"在Steam上激活",add_selected_dlc_to_cart:"将选择的DLC加入购物车",add_to_cart:"添加至购物车",add_to_wishlist:"添加至愿望单",add_unowned_dlc_to_cart:"将尚未拥有的DLC添加至购物车",after_coupon:"使用优惠卷后",all:"全部",allreleases_products:"选择您希望在这一部分中看到的产品类型",all_friends_own:"拥有此项目的好友 (__friendcount__)",always:"总是",apppage_legal:"法律信息",apppage_purchase:"购买选项",apppage_sections:"选择您希望这个页面看到的内容",avg_price_3cards:"三张交易卡牌的平均价格",badges_all:"全部徽章",badges_drops:"仍可获得卡片的徽章",badge_completion_avg:"平均完成徽章的要价",badge_completion_cost:"完成徽章的要价",badge_foil_progress:"查看闪亮徽章进度",badge_not_unlocked:"未解锁",badge_progress:"查看徽章进度",binder_view:"活页夹视图",birthday_message:"Steam生日快乐，__username__！您的Steam账号今天已经 __age__ 岁了。",bug_feature:"报告错误/提出建议",buy:"购买",buying_total:"小计",buy_wishlist:"购买愿望单中的所有项目",cancel:"取消",cards_owned:"在__possible__张中已拥有__owned__张",card_drops_remaining:"__drops__张卡片可掉落",check_system:"检查系统",clear_cache:"清除缓存数据",common_label:"隐藏你没有拥有的游戏",community:"社区",community_name_account_header:"__username__的帐号",compare:"比较",comparison_mode:"开启全游戏总览来观看游戏比较",contribute:"贡献 (GitHub)",coupon_application_note:"结账时自动使用库存中的优惠券",coupon_available:"您可以使用优惠券！",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">了解更多</a>Steam优惠券信息",credits:"制作人员",customize:"自定义",custom_background:"自定义背景",custom_background_help:"所有Enhanced Steam用户将看到您的自定义背景，非Enhanced Steam用户将看到常规背景",date_unlocked:"解锁日期",demos:"演示样品",discount:"折扣",dlc:"DLC:追加下载内容",dlc_data_header:"可下载内容详情",dlc_details:"可下载内容详情",dlc_suggest:"建议一个新类别",donate:"捐赠",drm_third_party:"警告：本作使用第三方数字版权验证",drm_third_party_sub:"警告： 该包中有一个或多个项目使用第三方数字版权管理机制",drops_value:"最高掉落卡片价值",drops_worth_avg:"大约值",each:"每个",empty_cart:"清空购物车",empty_wishlist:"清空愿望单",es_supporter:"Enhanced Steam 支持者",events:"事件",family_sharing_notice:"<b>注意：</b> 这个游戏并不包括在Steam家庭库共享服务中。",faqs:"常见问题",forums:"论坛",games:"游戏",games_all:"全部游戏",games_coupon:"有优惠券的游戏",games_discount:"优惠游戏",games_installed:"已安装的游戏",games_with_booster:"__boostergames__个游戏可获得补充包",games_with_drops:"__dropsgames__个游戏可掉落卡片",game_name:"游戏名称",game_transactions:"游戏交易",gift_transactions:"礼物交易",graphics:"图像",guides:"指南",hide:"隐藏",highlight:"高亮显示",historical_low:"历史最低价",homepage_sidebar:"侧边栏",homepage_spotlight:"快捷搜索",homepage_tabs:"主页标签",hours_short:"__hours__ 小时",info:"详情",item_type:"物品类型",language:"语言",last_24:"数量: 有 __sold__ 份在24小时内售出",library_menu:"库",loading:"载入中...",lowest_price:"当前最低价",market_transactions:"市场交易",more_information:"更多信息",most_drops:"最多掉落",net_gain:"净收益",net_spent:"净消费",never:"永不",news:"新闻",notcommon_label:"隐藏你拥有的游戏",no_results_found:"未找到结果",official_group:"官方群组",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Package 信息",packs:"合集包",permalink:"永久链接",playfire_heading:"获得的Playfire奖项",popular:"热门",price:"价格",price_options:"价格选项",programming:"程序员",purchase_date:"(于__date__购买)",purchase_total:"消费总计",rating_details:"查看评分细节",region_unavailable:"在这地区无法提供",remove:"移除",remove_owned_wishlist:"将已拥有游戏移出愿望单",reviews:"评测",sales_total:"出售总计",save:"保存",saved:"已保存",search:"搜索",search_market:"搜索Steam社区市场",search_names_only:"仅搜索名字",show:"显示",show_all_steam_releases:"显示全部Steam新发布内容",size:"大小",software:"软件",sort_by:"排序方式",spam_comment_show:"本页有 __num__ 条垃圾评论被隐藏，点击这里显示。",spam_comment_warn:"此处有恶龙...",starting_at:"开始于",store:"商店",stores:"商店",store_transactions:"商店交易",theworddefault:"默认",thewordoptions:"选项",total_size:"占用空间",total_spent:"总消费",total_time:"总共时间",trading_cards:"Steam 集换式卡牌",translate:"翻译",translation:"翻译",using_language:"你现在正以 __current__在浏览Steam",using_language_return:"按这里来将Steam切换成 __base__.",using_store:"您正在__current__地区使用Steam商店",using_store_return:"点击返回__base__商店",valid:"有效的",videos:"视频 / 预告片",view:"查看",view_all:"查看全部",view_astats:"访问AStats页面",view_badge:"查看徽章",view_badge_foil:"查看闪亮徽章",view_foil_badge:"查看闪亮徽章进度",view_in:"查看",view_in_market:"在社区市场中查看",view_marketplace:"浏览市场",view_normal_badge:"查看普通徽章进度",view_stats:"查看统计资料",view_to_scale:"递增显示",visit_store:"访问商店页面",visit_trade_forum:"访问交易论坛",website:"访问网站",wiki_article:"查看 __pcgw__ 文库",wishlist:"愿望单",achievements:{achievements:"成就",includes:"包含__num__个Steam成就",option:"在商店页面显示成就",view_all:"显示所有成就"},bundle:{at_least:"付至少",bundle_count:"该游戏出现在游戏包中的次数",header:"包含该游戏的游戏包",includes:"包含(__num__)件物品",info:"游戏包信息",offer_ends:"交易报价结束",pwyw:"以您希望的价格购买您想要的物品"},charts:{current:"当前玩家",peakall:"历史峰值",peaktoday:"今日峰值",playing_now:"正在游戏"},hltb:{compl:"完美主义者",main:"主线剧情",main_e:"主线剧情和支线",submit:"提交你的时间"},library:{categories:"类别...",error_loading_library:"无法载入您的游戏库。",genres:"类型",private_profile:"在<a href='http://steamcommunity.com/my/edit/settings'>设置</a>中将您的资料状态更改为公开以使用此功能"},options:{about_text:"<div class=\"header\">关于 <a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:</div><p>Enhanced Steam \是一个谷歌Chrome的插件,能给Steam网页增加许多功能.<p>包括:<ul><li>高亮你已经拥有的游戏</li><li>高亮你愿望清单里面的游戏</li><li>根据你已经拥有的游戏来正确计算打包购买的价格</li><li>统计你在Steam上一共花了多少钱</li><li>在游戏页面高亮你拥有的DLC</li><li>修正许多在你愿望列表中没有图标的游戏与DLC</li><li>指出需要第三方DRM的游戏</li></ul><p>如果你觉得此插件有用,请考虑捐助!",api_key:"API Key",author_info:"由jshackles制作",carousel_description:"在商店首页显示简介",changelog:"更新日志：",clear:"您确定要重设所有的设置么?这项操作将无法逆转.",contscroll:"启用连续滚动显示搜索结果",coupon:"可使用优惠券的物品",customizespamcommentregex:"（自定义）",drm:"显示第三方数字版权警告",es_bg:"在编辑用户资料界面设置自定义背景",excludef2p:"免费游戏不高亮显示",foot_link:"Enhanced Steam 扩展程序",friends_own:"您好友拥有的物品",friends_rec:"您好友推荐的物品",friends_wishlist:"您好友愿望单中的物品",general:"一般",gift:"库存已拥有该物品的礼物",greenlight_banner:"替换Steam青睐之光横幅",group_events:"在群组预览中显示活动",guest:"您拥有玩家通行证的物品",header:"页眉",hideactivelistings:"默认隐藏市场中我的活动列表",hidedlcunownedgames:"您未拥有游戏的DLC",hidespamcomments:"隐藏创意工坊和个人资料页面的垃圾评论",hidetmsymbols:"游戏标题中的商标及版权符号",hide_about:"隐藏“关于”链接",hide_early_access:"在主页、浏览及搜索页面中隐藏抢先体验游戏",hide_install:"隐藏安装Steam按钮",hide_owned:"在搜索结果与标签界面你已经拥有的物品",hide_owned_homepage:"主页隐藏已拥有游戏",hltb:"显示HowLongToBeat.com信息",html5video:"以 HTML5 代替 Flash 播放影片",inventory_market_text:"在物品栏中显示市场价格",inventory_nav_text:"在物品库页面显示进阶导览功能",library:"在顶部显示库按钮",library_f2p:"显示库存中玩过的免费游戏及试玩游戏",library_header:"库(Beta)",lowestprice:"显示历史价格信息",lowestprice_coupon:"在价格比较时包含优惠券",lowestprice_header:"历史价格信息",lowestprice_onwishlist:"在愿望单上显示",market_total:"显示市场交易总额",metacritic:"显示Metacritic用户评分",owned:"您拥有的物品",pcgw:"显示PCGamingWiki链接",profiles_link_group_game:"独占游戏",profile_api_info:"在个人档案上显示使用者 API 连结",profile_links:"显示以下网站的资料链接",profile_link_images:"个人资料链接图片",profile_link_images_color:"彩色",profile_link_images_gray:"灰度",profile_link_images_none:"无",profile_permalink:"在个人资料中显示永久链接",regional_hideworld:"隐藏地球小图标",regional_price:"地区价格比较",regional_price_mouse:"鼠标经过时",regional_price_on:"显示地区价格比较",replace_account_name:"用昵称替代用户名",reset:"重置选项",reset_note:"重置选项",saved_note:"选项已经保存",send_age_info:"根据需要自动发送年龄认证",showallachievements:"在“所有游戏”页面显示成就数据",showspeechsearch:"为搜索框添加语音输入功能",show_astatslink:"在应用页面显示AStats链接",show_early_access_text:"显示抢先体验图片横幅",show_languagewarning:"显示警告除非当前语言是",show_package_info:"显示全部包信息",show_regionwarning:"跨区浏览时显示警告",show_steamchart_info:"显示SteamCharts.com信息",show_sysreqcheck:"在应用页面显示系统配置检查按钮（测试中！）",spamcommentregex:"正则表达式字符串",steamcardexchange:"在徽章页面显示SteamCardExchange链接",steamdb:"显示SteamDB链接",stores_all:"与所有商店做比较",tag:"标签",total_spent:"在账户页面显示总消费",wishlist:"您愿望单中的物品",wlbuttoncommunityapp:"在社区应用页面显示\"添加至愿望单\"按钮",wsgf:"显示WSGF（宽屏支持）信息"},ready:{errormsg:"Enhanced Steam数据载入错误",loading:"Enhanced Steam载入数据中...",ready:"Enhanced Steam已就绪"},select:{none:"全部取消",unowned_dlc:"选择尚未拥有的DLC",wishlisted_dlc:"选择愿望单中的DLC"},tag:{coupon:"优惠券",friends_own:"__friendcount__拥有",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\"> __friendcount__推荐",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__想要</a>",inv_gift:"礼物",inv_guestpass:"玩家通行证",owned:"已拥有",wishlist:"愿望单"},wallet:{custom_amount:"充值自定义金额",custom_amount_text:"充值 __minamount__ 以上的任意金额"},wsgf:{gold:"此奖章是颁给因为有__type__支持而自 WSGF 获得完美评分的游戏，而且是经过__type__认证的",incomplete:"不完全的",limited:"此游戏因为有__type__支持而获得 C 等的评分，这些游戏有某种层面的__type__支持，但是有严重的问题",silver:"此奖章是颁给因为有__type__支持而获得 B 等的游戏，在这方面这些游戏并没有重大缺陷，但是至少有一个瑕疵让它无法拿到完美评分",unsupported:"此游戏因为没有__type__支持而获得此评分，这些游戏可能无法在__type__下游玩，或者是图像被拉伸来填满屏幕而无法维持正确的长宽比"}},
			"spa":{about:"Acerca de",activates:"Activable en Steam",add_selected_dlc_to_cart:"Añadir el DLC seleccionado al carrito",add_to_cart:"Anadir al carro",add_to_wishlist:"Agregar a tus deseados",add_unowned_dlc_to_cart:"Añadir al carro las DLC que no tengas",after_coupon:"tras aplicar el cupón",all:"Todo",allreleases_products:"Selecciona el tipo de productos que deseas ver en esta sección",all_friends_own:"Todos los amigos que lo tienen (__friendcount__)",always:"Siempre",apppage_legal:"Información legal",apppage_purchase:"Opciones de compra",apppage_sections:"Elige las secciones que quieres ver en esta página",avg_price_3cards:"Precio medio de tres cromos.",badges_all:"Todas las insignias",badges_drops:"Insignias con obtenciones de cromos restantes",badge_completion_avg:"Coste de completado medio",badge_completion_cost:"Coste de completado de la insignia",badge_foil_progress:"Ver Progreso de Insignia Reflectante",badge_not_unlocked:"No desbloqueada",badge_progress:"Ver progreso de la insignia",binder_view:"Vista de carpeta",birthday_message:"Feliz Cumpleaños de Steam, __username__! Tu cuenta de Steam cumple hoy __age__ años.",bug_feature:"Reportar Bug / Sugerir Característica",buy:"Comprar",buying_total:"Compra total del pedido",buy_wishlist:"Comprar lista de deseados",cancel:"Cancelar",cards_owned:"Tienes __owned__ de __possible__ cromos",card_drops_remaining:"Quedan __drops__ obtenciones de cromos",check_system:"Comprueba tu sistema",clear_cache:"Borrar datos del caché",common_label:"Ocultar juegos que no posees",community:"Comunidad",community_name_account_header:"Cuenta de __username__",compare:"Comparar",comparison_mode:"Habilitar todo sobre el juego para ver la comparación del juego",contribute:"Contribuir (GitHub)",coupon_application_note:"Los cupones de tu inventario se aplicarán automáticamente a la hora de pagar.",coupon_available:"¡Tienes un cupón disponible!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Mas información</a> sobre los cupones de Steam",credits:"Créditos",customize:"Personalizar",custom_background:"Fondo de perfil personalizado",custom_background_help:"Todos los usuarios de Enhanced Steam verán este fondo en tu perfil. Quienes no usen Enhanced Steam verán tu perfil tal y como lo tienes.",date_unlocked:"Fecha de desbloqueo",demos:"Demos",discount:"Descuento",dlc:"Contenido descargable",dlc_data_header:"Detalles del contenido descargable",dlc_details:"Detalles de contenido descargable",dlc_suggest:"Sugerir nueva categoría",donate:"Donar",drm_third_party:"ATENCIÓN: Este título utiliza DRM de terceros",drm_third_party_sub:"Advertencia: Uno o más títulos en este paquete usa DRM de terceros",drops_value:"Obtención Más Valiosa",drops_worth_avg:"Valoración Aproximada",each:"Cada uno",empty_cart:"Vaciar el carro",empty_wishlist:"Vacíar lista de deseados",es_supporter:"Seguidor de Enhanced Steam",events:"Eventos",family_sharing_notice:"<b>Aviso:</b> Este juego está excluido del Préstamo Familiar de Steam.",faqs:"Preguntas más frecuentes",forums:"Foros",games:"Juegos",games_all:"Todos los juegos",games_coupon:"Juegos con cupones",games_discount:"Juegos con descuentos",games_installed:"Juegos instalados",games_with_booster:"__boostergames__ juegos esconden paquetes de refuerzo",games_with_drops:"Quedan __dropsgames__ juegos con obtenciones de cromos",game_name:"Nombre del Juego",game_transactions:"Transacciones en juegos",gift_transactions:"Transacciones de regalos",graphics:"Gráficos",guides:"Guías",hide:"Ocultar",highlight:"Destacar",historical_low:"Precio más bajo en el que estuvo",homepage_carousel:"Carrusel",homepage_sidebar:"Barra lateral",homepage_spotlight:"Destacados",homepage_tabs:"Pestañas de la página de Inicio",hours_short:"__hours__ h",info:"Información",item_type:"Tipo de Objeto",language:"Idioma",last_24:"Volumen: __sold__ vendidos en las últimas 24 horas",library_menu:"Biblioteca",loading:"Cargando...",lowest_price:"Precio más bajo actualmente",market_transactions:"Transacciones del mercado",mods:"Mods",more_information:"Más información",most_drops:"Mayores obtenciones",net_gain:"Ganancias netas",net_spent:"Gastos netos",never:"Nunca",news:"Noticias",notcommon_label:"Ocultar juegos que ya tienes",no_results_found:"No se encontraron resultados",official_group:"Grupo Oficial",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Datos del paquete",packs:"Paquetes",permalink:"Enlace permanente",playfire_heading:"Recompensas de Playfire",popular:"Popular",price:"Precio",price_options:"Opciones de precio",programming:"Programación",purchase_date:"(Comprado el __date__)",purchase_total:"Compras totales",rating_details:"Ver detalles",region_unavailable:"No disponible en tu región",remove:"Eliminar",remove_owned_wishlist:"Eliminar juegos que ya tienes de la lista de deseados",reviews:"Reviews",sales_total:"Ventas totales",save:"Guardar",saved:"Guardado",search:"Buscar",search_market:"Buscar el Mercado de la Comunidad de Steam",search_names_only:"Buscar solo en nombres",show:"Mostrar",show_all_steam_releases:"Mostrar todos los lanzamientos de Steam",size:"Tamaño",software:"Software",sort_by:"Ordenar por:",spam_comment_show:"__num__ comentarios ocultados marcados por spam. Click aquí para mostrarlos.",spam_comment_warn:"No pongas tus manos al fuego...",starting_at:"Desde",store:"Tienda",stores:"Tiendas",store_transactions:"Transacciones de la tienda",theworddefault:"Por defecto",thewordoptions:"Opciones",total_size:"Tamaño total",total_spent:"Total gastado",total_time:"Tiempo total",trading_cards:"Cromos de Steam",translate:"Traducir",translation:"Traducción",using_language:"Estás usando Steam en __current__",using_language_return:"Haz click aquí para usar Steam en __base__",using_store:"Estás utilizando la tienda de Steam de la siguiente zona: __current__.",using_store_return:"Haz clic aquí para volver a la tienda __base__.",valid:"Válido",videos:"Videos / Trailers",view:"Ver",view_all:"VER TODOS",view_astats:"Ver página de AStats",view_badge:"Ver insignia",view_badge_foil:"Ver Insignia Reflectante",view_foil_badge:"Ver Progreso de Insignia Reflectante",view_in:"Ver en",view_in_market:"Ver en el Mercado de la Comunidad",view_marketplace:"Ver en el mercado",view_normal_badge:"Ver Progreso de Insignia Normal",view_stats:"Ver estadísticas",view_to_scale:"Ver a escala",visit_store:"Visita la Página de la Tienda",visit_trade_forum:"Visitar foro de intercambio",website:"Página web",wiki_article:"Ver artículo de __pcgw__",wishlist:"Lista de deseados",achievements:{achievements:"Logros",includes:"Incluye __num__ Logros de Steam",option:"Mostrar logros en las páginas de la tienda",view_all:"Ver todos los Logros"},bundle:{at_least:"Paga al menos",bundle_count:"Veces que este juego ha estado en un pack",header:"Packs que incluyen este juego",includes:"Incluye (__num__) artículos",info:"Datos del paquete",offer_ends:"Oferta finalizada",pwyw:"Paga lo que quieras"},charts:{current:"Jugadores actuales",peakall:"máximo histórico",peaktoday:"máximo de hoy",playing_now:"jugando ahora"},hltb:{compl:"Completitsta",main:"Historia principal",main_e:"Historia y extras",submit:"Enviar tu tiempo"},library:{categories:"Categorías...",error_loading_library:"No se ha podido cargar tu librería",genres:"Géneros...",private_profile:"Haz público tu perfil <a href='http://steamcommunity.com/my/edit/settings'>en ajustes</a> para utilizar esta característica."},options:{about_text:"Acerca de <a href='http://www.enhancedsteam.com' style='color:#8bc53f;'>Enhanced Steam</a>:<p>Enhanced Steam es una Extensión para Google Chrome que agrega un montón de nuevas características a la página de Steam.<p>Características Incluidas:<ul><li>Resaltar juegos que ya posees</li><li>Resaltar juegos de tu lista de deseados</li><li>Cálculos correctos de los descuentos de los paquetes basado en los juegos que ya posees</li><li>Mostrarte cuanto dinero gastaste en Steam en la vida de tu cuenta</li><li>Resaltar DLC que ya posees</li><li>Arreglar \"No Image Available\" en juegos o DLC de tu lista de deseados</li><li>Advertirte de titulos con DRM de terceros</li></ul><p>Si encuentras esta Extensión útil, por favor considera una donación.",api_key:"Llave API",author_info:"por jshackles",carousel_description:"Mostrar información de la aplicación en la página principal",changelog:"Lista de cambios:",clear:"¿Estás seguro que querés reiniciar todas las opciones? Esto no puede ser deshecho.",contscroll:"Activar deslizamiento continuo en los resultados de búsqueda",coupon:"Artículos con cupones",customizespamcommentregex:"(Personalizar)",drm:"Mostrar advertencias de DRM de terceros",es_bg:"Establecer fondo personalizado en la edición de perfil",excludef2p:"No destacar los juegos Free to Play",foot_link:"Extensión Enhanced Steam",friends_own:"Artículos que tienen tus amigos",friends_rec:"Artículos que tus amigos han reseñado",friends_wishlist:"Artículos que tus amigos tienen en su lista de deseados",general:"General",gift:"Artículos que posees como regalo",greenlight_banner:"Reemplazar imagen de Steam Greenlight",group_events:"Mostrar eventos en el resumen de grupos",guest:"Artículos de los que posees un pase de invitado",header:"Encabezado",hideactivelistings:"Ocultar todas las listas activas en el índice del mercado",hidedlcunownedgames:"DLC de juegos que no tienes",hidespamcomments:"Ocultar comentarios spam del Workshop y Perfiles",hidetmsymbols:"Símbolos de Marca Registrada y Derechos de Autor en los títulos de los juegos",hide_about:"Ocultar botón \"Acerca de\" en el encabezado",hide_early_access:"Esconder juegos con Acceso Anticipado en las páginas de inicio, exploración y búsqueda",hide_install:"Ocultar el botón \"Instalar Steam\"",hide_owned:"Objetos que ya posees en resultados de búsqueda y páginas de tags",hide_owned_homepage:"Objetos que ya posees en la página de inicio",hltb:"Mostrar información de HowLongToBeat.com",html5video:"Reproducir vídeos con HTML5 en vez de Flash",inventory_market_text:"Mostrar precios del mercado en la página del inventario (en beta)",inventory_nav_text:"Mostrar navegación avanzada en la página de inventario",library:"Motrar botón de \"Biblioteca\" en el encabezado (en beta)",library_f2p:"Mostrar las demos y juegos free to play jugados en la biblioteca",library_header:"Biblioteca (BETA)",lowestprice:"Mostrar",lowestprice_coupon:"Incluir cupones de descuento en la comparación de precios",lowestprice_header:"Información del Historial de Precios",lowestprice_onwishlist:"Mostrar en Lista de deseados",market_total:"Mostrar resumen de transacciones en el mercado",metacritic:"Mostrar puntuaciones de los usuarios de Metacritic",owned:"Artículos que posees",pcgw:"Mostrar enlaces a PCGagmingWiki",profiles_link_group_game:"Exclusivo del Juego",profile_api_info:"Enseñar link del API de usuario en los perfiles",profile_links:"Mostrar enlaces en el perfil a",profile_link_images:"Imagenes de los enlaces en el perfil",profile_link_images_color:"Colorido",profile_link_images_gray:"Escala de grises",profile_link_images_none:"Ninguno",profile_permalink:"Mostrar link permanentes en los perfiles",regional_hideworld:"Esconder globo indicador",regional_price:"Comparación de Precios Regionales",regional_price_mouse:"cuando se pasa el ratón",regional_price_on:"Mostrar comparación",replace_account_name:"Reemplazar el nombre de la cuenta por el de la comunidad",reset:"Reiniciar opciones",reset_note:"Opciones reiniciadas",saved_note:"Opciones guardadas",send_age_info:"Enviar automáticamente verificación de edad cuando sea requerida",showallachievements:"Mostrar estadísticas de los logros en la página \"Todos los juegos\"",showspeechsearch:"Añadir entrada de voz a la caja de búsqueda",show_astatslink:"Mostrar enlace de AStat en páginas de aplicaciones",show_early_access_text:"Mostrar banners de Acceso Anticipado en las imágenes",show_languagewarning:"Mostrar un aviso si se está navegando en otro idioma que no sea",show_package_info:"Mostrar información de pack para todas las aplicaciones",show_regionwarning:"Mostrar un aviso si estás en una región sin cuenta",show_steamchart_info:"Mostrar información de SteamCharts.com",show_sysreqcheck:"Mostrar botón para comprobar los requerimientos del sistema en las páginas de aplicación (Experimental)",spamcommentregex:"Expresión Regular (RegEx):",steamcardexchange:"Mostrar enlaces a SteamCardExchange en las insignias",steamdb:"Mostrar enlaces de SteamDB",stores_all:"Comparar todas las tiendas",tag:"Etiqueta",total_spent:"Mostrar \"Total gastado\" en los detalles de la cuenta",wishlist:"Artículos en tu lista de deseados",wlbuttoncommunityapp:"Mostrar botón \"Agregar a tus Deseados\" en la sección Punto de Encuentro",wsgf:"Mostrar información WSGF (panorámico)"},ready:{errormsg:"Error al cargar los datos de Enhanced Steam",loading:"Cargando datos de Enhanced Steam...",ready:"Enhanced Steam está listo"},select:{none:"No seleccionar nada",unowned_dlc:"Seleccionar DLC no poseído",wishlisted_dlc:"Seleccionar DLC deseado"},tag:{coupon:"Cupón",friends_own:"__friendcount__ lo tienen",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ lo recomiendan",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ amigos lo desean</a>",inv_gift:"Regalo",inv_guestpass:"Pase de invitado",owned:"Comprado",wishlist:"Lista de deseados"},wallet:{custom_amount:"Añadir valor propio",custom_amount_text:"Añadir cualquier valor sobre __minamount__"},wsgf:{gold:"Esta insignia se otorga a los juegos que han recibido una puntuación perfecta de la WSGF por su soporte __type__ y está certificada por __type__.",incomplete:"Incompleto",limited:"Esta insignia se otorga a los juegos que han recibido un grado C calculado por su soporte __type__. Todos estos juegos tienen un tipo de soporte __type__, pero cuentan con fallos importantes.",silver:"Esta insignia se otorga a los juegos que han recibido un grado B calculado por su soporte __type__. Todos estos juegos carecen de fallos graves, pero tienen algún defecto que impide que su puntuación sea perfecta.",unsupported:"Esta puntuación se otorga a los juegos que no tienen soporte __type__.  El juego puede ser incompatible en __type__, o su imagen se reproduce de forma incorrecta en el monitor.  No guarda relación con el aspecto que da."}},
			"swe":{about:"Om",activates:"Aktiveras på Steam",add_selected_dlc_to_cart:"Lägg till valda DLC i kundvagn",add_to_cart:"Lägg till i kundvagn",add_to_wishlist:"Lägg till i önskelistan",add_unowned_dlc_to_cart:"Lägg till icke-ägda DLC i kundvagn",after_coupon:"efter kupongkod",all:"Alla",all_friends_own:"Alla vänner som äger detta (__friendcount__)",always:"Alltid",badges_all:"Alla märken",badge_completion_avg:"Genomsnittlig kostnad för att komplettera",badge_completion_cost:"Kostnaden för att komplettera märket",badge_foil_progress:"Visa foliemärkesframsteg",badge_not_unlocked:"Ej upplåst",badge_progress:"Visa märkesframsteg",birthday_message:"Grattis på Steam-födelsedagen, __username__! Ditt Steam-konto är __age__ år gammalt idag.",bug_feature:"Rapportera bugg / Föreslå funktion",buy:"Köp",buy_wishlist:"Köp allt i önskelistan",cancel:"Avbryt",cards_owned:"__owned__ av __possible__ kort ägda",card_drops_remaining:"__drops__ kvarvarande kort som släpps",check_system:"Kontrollera ditt system",clear_cache:"Töm cachedata",common_label:"Göm spel som du inte äger",community:"Gemenskap",community_name_account_header:"__username__s konto",compare:"Jämför",comparison_mode:"Aktivera alla spelöversiktläge för att se speljämförelse",contribute:"Bidra (GitHub)",coupon_application_note:"En kupong i ditt förråd kommer automatiskt appliceras i kassan",coupon_available:"Du har en kupong tillgängligt!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">Läs mer</a> om Steam kuponger",credits:"Kredit",customize:"Anpassa",custom_background:"Anpassad Bakgrund",date_unlocked:"Datum upplåst",discount:"Rabatt",dlc_data_header:"Detaljer för nedladdningsbar innehåll",dlc_details:"Nedladdningsbar innehåll detaljer",dlc_suggest:"Föreslå en ny kategori",donate:"Donera",drm_third_party:"Varning: Titeln använder tredjeparts DRM",each:"Varje",empty_cart:"Töm kundvagnen",empty_wishlist:"Töm önskelistan",events:"Evenemang",faqs:"Vanliga frågor",forums:"Forum",games:"Spel",games_all:"Alla spel",games_coupon:"Spel med kupong",games_discount:"Rabatterade spel",games_installed:"Installerade spel",games_with_booster:"__boostergames__ spel som är berättigad till booster-paket",game_name:"Spelnamn",game_transactions:"Speltransaktioner",graphics:"Grafik",guides:"Guider",hide:"Göm",highlight:"Höjdpunkt",historical_low:"Historiskt lägsta pris",hours_short:"__hours__ timmar",info:"Info",item_type:"Typ av föremål",language:"Språk",last_24:"Volym: __sold__ sålda de senaste 24 timmarna",library_menu:"Bibliotek",loading:"Laddar...",lowest_price:"Lägsta pris just nu",market_transactions:"Marknadstransaktioner",more_information:"Mer information",never:"Aldrig",news:"Nyheter",notcommon_label:"Göm spel som du äger",no_results_found:"Inget resultat",official_group:"Officiella gruppen",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Paketinformation",packs:"Paket",permalink:"Permalänk",popular:"Populärt",price:"Pris",price_options:"Prisinställningar",programming:"Programmering",purchase_date:"(Köpt __date__)",purchase_total:"Köpt totalt",region_unavailable:"Ej tillgänglig i denna region",remove:"Ta bort",remove_owned_wishlist:"Ta bort alla ägda spel ifrån önskelistan",reviews:"Recensioner",save:"Spara",saved:"Sparad",search:"Sök",show:"Visa",size:"Storlek",software:"Mjukvara",sort_by:"Sortera efter:",store:"Butik",stores:"Butiker",store_transactions:"Butikstransaktioner",theworddefault:"Standard",thewordoptions:"Inställningar",total_size:"Total storlek",total_spent:"Totalt spenderat",total_time:"Total tid",trading_cards:"Steam samlarkort",translate:"Översätt",translation:"Översättning",using_language:"Du bläddrar Steam på __current__.",using_language_return:"Klicka här för att bläddra Steam på __base__.",videos:"Videor / Trailers",view:"Visa",view_all:"VISA ALLA",view_astats:"Visa AStats-Sida",view_badge:"Visa märke",view_badge_foil:"Visa foliemärke",view_foil_badge:"Visa foliemärkesframsteg",view_in:"Visa i",view_marketplace:"Visa marknadsplats",view_normal_badge:"Visa normala märkesframsteg",view_stats:"Visa statistik",visit_store:"Visa butikssidan",website:"Hemsida",wiki_article:"Visa __pcgw__ artikel",wishlist:"Önskelista",achievements:{achievements:"Framsteg",includes:"Inkluderar __num__ Steam Framsteg",option:"Visa framsteg på butikssidorna",view_all:"Visa alla framsteg"},bundle:{at_least:"Betala minst",bundle_count:"Antal gånger som detta spel har varit med i ett paket",header:"Antal paket som har detta spel",includes:"Inkluderar (__num__) föremål",info:"Paket information",offer_ends:"Erbjudandet slutar",pwyw:"Betala vad du vill"},charts:{current:"Antal spelare",playing_now:"spelar just nu"},hltb:{main:"Huvudstory",main_e:"Huvudstory och extra",submit:"Skicka din tid"},library:{categories:"Kategorier...",error_loading_library:"Kunde inte ladda ditt bibliotek",genres:"Genrer...",private_profile:"Ställ in din profilstatus till offentligt <a href='http://steamcommunity.com/my/edit/settings'>i dina inställningar</a> för att använda denna funktion"},options:{about_text:"<div class=\"header\">Om<a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:</div><p>Enhanced Steam är ett tilläg till Google Chrome som lägger till många nya funktioner på Steam webbsidan<p>Funktioner som:<ul><li>Markera spel som du redan äger</li><li>Markera spel på din önskelista</li><li>Korrekt beräkna paket rabatten baserat på spel du redan äger</li><li>Visa hur mycket pengar du har spenderat på steam under ditt accounts livs tid</li><li>Markera DLC du redan äger på en spelsida</li><li>Fixar \"Ingen Bild Tillgänglig\" på din önskelista för alla spel och DLC</li><li>Pekar ut titlar med tredje parts DRM</li></ul><p>Om dy tycker det här tillägget är användbart, snälla fundera på att donera.",api_key:"API Nyckel",author_info:"av jshackles",carousel_description:"Visa app beskrivning på affärs banderollen",changelog:"Ändringslogg",clear:"Är du säker på att du vill återställa alla inställningar? Detta kan inte ångras",contscroll:"Aktivera kontinuerligt scrollning i sökresultaten",customizespamcommentregex:"(Anpassa)",drm:"Visa tredjeparts DRM varningar",es_bg:"Sätt en användaranpassad bakgrund på \"Redigera Profil\" skärmen",excludef2p:"Exkludera free to play spel i höjdpunkter",friends_own:"Föremål som dina vänner äger",friends_rec:"Föremål som dina vänner har recenserat",friends_wishlist:"Föremål som dina vänner har i önskelistan",general:"Allmänt",gift:"Föremål lagrade som gåvor",greenlight_banner:"Ersätt Steam Greenlight banner",group_events:"Visa evenemang i gruppöversiktet",guest:"Föremål som du har gästpass till",header:"Sidhuvud",hideactivelistings:"Göm alla aktiva annonser på Market startsidan som förval",hidedlcunownedgames:"DLC för spel du inte äger",hidespamcomments:"Göm spamkommentarer i Workshop och profiler",hidetmsymbols:"Varumärke och Copyright symboler i speltitlar",hide_about:"Göm \"Om\" länken",hide_early_access:"Göm Early Acces spel på huvudsidan, bläddring och sök resultat",hide_install:"Göm \"Installera Steam\" knappen",hide_owned:"Föremål du äger i sökresultatet i taggsidorna",hide_owned_homepage:"Saker du äger på huvudsidan",hltb:"Visa information ifrån HowLongToBeat.com",html5video:"Visa videor med HTML5 istället för Flash",inventory_market_text:"Visa marknadspriser i förrådsidorna",inventory_nav_text:"Visa avancerad navigation i förrådssidorna",library:"Visa Bibliotek knappen i sidhuvudet ",library_f2p:"Visa spelade free to play spel och demos i bibloteket",library_header:"Bibliotek (BETA) ",lowestprice:"Visa",lowestprice_coupon:"Inkludera kupongkoder i prisjämförelse",lowestprice_header:"Prishistorik",market_total:"Visa sammanfattning på transaktioner i Marknaden",metacritic:"Visa användarnas betyg från Metacritic",owned:"Föremål du äger",pcgw:"Visa PCGamingWiki länkar",profile_links:"Visa profillänkar till",profile_link_images:"Profil länk bilder",profile_link_images_color:"Färgad",profile_link_images_gray:"Gråskala",profile_link_images_none:"Ingen",profile_permalink:"Visa permalänk på profiler",regional_price:"Regionala prisjämförelse",regional_price_mouse:"När muspekaren förs över priset",regional_price_on:"Visa regional pris jämförelse",replace_account_name:"Ersätt kontonamn med gemenskapsnamnet",reset:"Återställ inställningar",reset_note:"Inställningar är återställda",saved_note:"Inställningar sparad",send_age_info:"Skicka automatiskt åldersverifiering när den frågas",showallachievements:"Visa framstegsstatistik i \"Alla spel\" sida",showspeechsearch:"Lägg till röstsök i sökrutorna",show_astatslink:"Vista AStats-länk på app-sidor",show_languagewarning:"Visa varning ifall man bläddrar på annat språk än",show_package_info:"Visa paket info för alla appar",show_regionwarning:"Visa varning ifall man bläddrar på en icke-konto region",show_steamchart_info:"Visa information ifrån SteamCharts.com",show_sysreqcheck:"Visa en knapp för att kolla system kraven på app sidan (Experimental!)",spamcommentregex:"Reguljär uttryck sträng:",steamcardexchange:"Visa SteamCardExchange länkar i märken",steamdb:"Visa SteamDB länkar",stores_all:"Jämför med alla butiker",tag:"Tagg",total_spent:"Visa totalt spenderat i kontosidan",wishlist:"Föremål i din önskelista",wlbuttoncommunityapp:"Visa \"Lägg till i önskelistan\"-knaooen i gemenskapssidorna",wsgf:"Visa WSGF (Widescreen) information"},select:{none:"Välj inga",unowned_dlc:"Välj icke ägda DLC",wishlisted_dlc:"Välj önskelistade DLC"},tag:{coupon:"Kupong",friends_own:"__friendcount__ äger",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ vänner recenserade ",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ önskar</a>",inv_gift:"Gåva",inv_guestpass:"Gästpass",owned:"Ägda",wishlist:"Önskelista"},wsgf:{incomplete:"Ej komplett"}},
			"tch":{about:"關於",activates:"可在Steam上啟動",add_selected_dlc_to_cart:"將選取的DLC加入購物車",add_to_cart:"加入購物車",add_to_wishlist:"加入願望清單",add_unowned_dlc_to_cart:"把未擁有的DLC加入購物車",after_coupon:"抵用優惠券後",all:"全部",all_friends_own:"擁有此項目的朋友 (__friendcount__)",always:"總是",avg_price_3cards:"三張交換卡片的平均價格",badges_all:"所有徽章",badges_drops:"還有卡片會掉落的徽章",badge_completion_avg:"平均完成徽章的要價",badge_completion_cost:"完成徽章的要價",badge_foil_progress:"檢視閃亮徽章進度",badge_not_unlocked:"尚未解鎖",badge_progress:"檢視勳章進度",binder_view:"簡潔",birthday_message:"Steam生日快樂, __username__! 你的Steam帳號今天已經 __age__歲了",bug_feature:"回報問題/建議新功能",buy:"購買",buying_total:"小計",buy_wishlist:"購買願望清單",cancel:"取消",cards_owned:"在 __possible__張中已擁有__owned__張",card_drops_remaining:"還有__drops__未掉落的卡片",check_system:"檢查你的系統",clear_cache:"清除暫存資料",common_label:"隱藏你不擁有的遊戲",community:"社群",community_name_account_header:"__username__ 的帳號",compare:"比較",comparison_mode:"開啟全遊戲總覽來觀看遊戲比較",contribute:"貢獻",coupon_application_note:"一張在你物品庫中的優惠券會在結帳時自動抵用。",coupon_available:"你有一張新的優惠券!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">了解更多</a> 關於Steam優惠券的事",credits:"製作群",custom_background:"自訂背景",custom_background_help:"所有的Enhanced Steam使用者會看到這個背景圖片,而非Enhanced Steam使用者會看到普通的背景圖片",date_unlocked:"解鎖日期",discount:"特價",dlc_data_header:"可下載內容的資訊",dlc_details:"可下載內容的資訊",dlc_suggest:"建議一個新類別",donate:"捐獻",drm_third_party:"警告: 這款遊戲使用第三方DRM",drm_third_party_sub:"警告: 有一份或以上的遊戲使用第三方DRM",drops_value:"最高掉落卡片價值",drops_worth_avg:"大約值",each:"各個",empty_cart:"清空購物車",empty_wishlist:"清空願望清單",es_supporter:"Enhanced Steam 支持者",events:"活動",family_sharing_notice:"<b>注意:</b> 這個遊戲不包括在 Steam 親友同享服務。",faqs:"常見問題",forums:"論壇",games:"遊戲",games_all:"所有遊戲",games_coupon:"有優惠卷的遊戲",games_discount:"有特價的遊戲",games_installed:"已安裝的遊戲",games_with_booster:"__boostergames__個遊戲有獲得擴充包的資格",games_with_drops:"__dropsgames__個還會掉落卡片的遊戲",game_name:"遊戲名稱",game_transactions:"遊戲交易項目",gift_transactions:"禮物交易",graphics:"美術設計",hide:"隱藏",highlight:"亮光顯示",historical_low:"歷史新低價格",homepage_sidebar:"側欄",homepage_spotlight:"焦點",homepage_tabs:"主頁標籤",hours_short:"__hours__ 小時",info:"資訊",item_type:"項目類別",language:"語言",last_24:"數量: 有 __sold__ 份在 24 小時內售出",library_menu:"遊戲庫",loading:"載入中...",lowest_price:"目前最低價格",market_transactions:"市集交易項目",more_information:"更多資訊",most_drops:"最多掉落",net_gain:"淨益額",net_spent:"淨支出",never:"永不",news:"新聞",notcommon_label:"隱藏你擁有的遊戲",no_results_found:"找不到項目",official_group:"官方群組",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Package資訊",permalink:"永久連結",playfire_heading:"Playfire 獎勵",popular:"熱門",price:"價格",price_options:"價格選項",programming:"程式設計",purchase_total:"購買總額",rating_details:"檢視分級資訊",region_unavailable:"在這地區無法提供",remove:"移除",remove_owned_wishlist:"從願望清單中移除已擁有的遊戲",reviews:"評論",sales_total:"總共銷售額",save:"儲存",saved:"已儲存的",search:"搜尋",search_market:"搜尋Steam社群市集",search_names_only:"只在名稱中搜尋",show:"顯示",show_all_steam_releases:"顯示所有Steam產品",size:"大小",sort_by:"以此分類:",spam_comment_show:"_num_則在此頁面的垃圾評論已被隱藏。點擊此處顯示。",starting_at:"起價",store:"商店",stores:"商店",store_transactions:"商店交易項目",theworddefault:"預設",thewordoptions:"選項",total_size:"總共大小",total_spent:"總共花費金額",total_time:"總共時間",trading_cards:"Steam交換卡片",translate:"翻譯",translation:"翻譯",using_language:"你現在正以 __current__在瀏覽Steam",using_language_return:"按這裡來將Steam切換成 __base__.",using_store:"你現在正使用__current__地區的Steam",using_store_return:"按此回到 __base__ 的商店",valid:"有效",view:"檢視",view_all:"檢視全部",view_astats:"檢視 AStats 頁面",view_badge:"檢視徽章",view_badge_foil:"檢視閃亮徽章",view_foil_badge:"檢視閃亮徽章進度",view_in:"以此檢視",view_in_market:"在社群市集中檢視",view_marketplace:"檢視市集",view_normal_badge:"檢視普通徽章進度",view_stats:"檢視統計資料",view_to_scale:"查看縮放",visit_store:"造訪商店頁面",visit_trade_forum:"訪問交易討論區",website:"網站",wiki_article:"檢視 __pcgw__ 的文章",wishlist:"願望清單",achievements:{achievements:"成就",includes:"包含 __num__ 個Steam成就",option:"在商店頁面中顯示成就",view_all:"檢視全部的成就"},bundle:{at_least:"付至少",bundle_count:"此遊戲在組合包中出現的次數",header:"包含此遊戲的組合包",includes:"包含 (__num__) 個項目",info:"組合包資訊",offer_ends:"折扣結束",pwyw:"付你想要付的價錢"},charts:{current:"目前玩家數量",peakall:"全時間最高",peaktoday:"今日最高",playing_now:"正在遊玩"},hltb:{compl:"完美主義者",main:"主線故事",main_e:"主線加支線",submit:"送出你的時數"},library:{categories:"目錄...",error_loading_library:"無法載入您的收藏庫。",genres:"類型...",private_profile:"在<a href='http://steamcommunity.com/my/edit/settings'>你的設定</a>裡將個人檔案狀態改成公開來使用這個功能"},options:{about_text:"<div class=\"header\">About <a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:</div><p>Enhanced Steam是個為Steam網站加入許多新功能的Google Chrome插件<p>功能包含:<ul><li>亮光顯示你已經擁有的遊戲</li><li>亮光顯示在你願望清單上的遊戲</li><li>正確計算遊戲組合包減價的正確金額</li><li>顯示你在Steam帳號中所花的累計金額</li><li>在遊戲頁面上亮光顯示你已經擁有的DLC</li><li>修復在你願望清單上沒有圖片的遊戲或DLC</li><li>指出有第三方DRM的遊戲</li></ul><p>如果你認為這項插件十分好用，請考慮捐獻",api_key:"API Key",author_info:"由jshackles製作",carousel_description:"在商店頁面的跑燈中顯示軟體描述",changelog:"版本更新記錄:",clear:"你確定要重設所有選項? 這項動作是無法還原的。",contscroll:"開啟搜尋結果的連續捲動",coupon:"有優惠券的項目",customizespamcommentregex:"(自訂)",drm:"顯示第三方DRM的警告",es_bg:"在\"編輯個人檔案\"頁面中設定背景",excludef2p:"免費玩遊戲不使用亮光顯示",foot_link:"Enhanced Steam 擴充套件",friends_own:"朋友擁有的項目",friends_rec:"朋友評論過的項目",friends_wishlist:"被朋友們加入願望清單的項目",general:"一般",gift:"以\"禮物\"形式儲存的項目",greenlight_banner:"替換Steam Greenlight橫幅",group_events:"顯示群組活動的總覽",guest:"擁有招待券的項目",header:"頁首",hideactivelistings:"預設隱藏所有市集首頁的上架物品",hidedlcunownedgames:"你未擁有的遊戲的DLC",hidespamcomments:"隱藏來自工作坊和個人檔案的垃圾留言",hidetmsymbols:"遊戲名稱中的商標與智財權符號",hide_about:"隱藏\"關於\"連結",hide_early_access:"在主頁面、瀏覽與搜尋頁面中隱藏搶先體驗遊戲",hide_install:"隱藏\"安裝Steam\"的按鈕",hide_owned:"搜尋結果和標籤頁面中你擁有的項目",hide_owned_homepage:"你在主頁面上擁有的項目",hltb:"顯示HowLongToBeat.com的資訊",html5video:"以 HTML5 代替 Flash 播放影片",inventory_market_text:"在物品庫頁面顯示市集價格",inventory_nav_text:"在物品庫頁面顯示進階導覽功能",library:"在頁首顯示遊戲庫按鈕",library_f2p:"在遊戲庫中顯示試玩版和免費玩遊戲",library_header:"遊戲庫(測試版)",lowestprice:"顯示",lowestprice_coupon:"在價格比較中加入優惠券",lowestprice_header:"價格歷史資訊",lowestprice_onwishlist:"顯示願望清單",market_total:"在市集頁面上顯示交易摘要 ",metacritic:"顯示Metacritic 使用者評分",owned:"擁有的項目",pcgw:"顯示PCGamingWiki連結",profiles_link_group_game:"獨占遊戲",profile_api_info:"在個人檔案上顯示使用者 API 連結",profile_links:"顯示個人檔案連結在",profile_link_images:"個人檔案圖片連結",profile_link_images_color:"有上色的",profile_link_images_gray:"灰階",profile_link_images_none:"無",profile_permalink:"在個人檔案上顯示永久連結",regional_hideworld:"隱藏地區顯示",regional_price:"各地區價格比較",regional_price_mouse:"在游標指到價格時",regional_price_on:"顯示各地區價格比較",replace_account_name:"以社群名稱取代帳號名稱",reset:"重置選項",reset_note:"重置選項",saved_note:"選項已儲存",send_age_info:"當被要求年齡認證時自動送出",showallachievements:"在\"所有遊戲\"頁面顯示成就統計資料",showspeechsearch:"在搜尋欄位加入語音輸入",show_astatslink:"在軟體頁面中顯示AStats連結",show_early_access_text:"顯示搶先體驗圖片橫幅",show_languagewarning:"顯示語言警告除非是",show_package_info:"顯示所有軟體的package資訊",show_regionwarning:"在非本區域瀏覽時顯示警告",show_steamchart_info:"顯示SteamCharts.com的資訊",show_sysreqcheck:"在軟體頁中顯示檢查系統需求的按鈕(實驗性!)",spamcommentregex:"Regular Expression string:",steamcardexchange:"在徽章上顯示SteamCardExchange連結",steamdb:"顯示SteamDB連結",stores_all:"與所有商店做比較",tag:"標籤",total_spent:"在帳號頁面中顯示總共消費金額",wishlist:"在願望清單上的項目",wlbuttoncommunityapp:"在社群中心中顯示\"加入到願望清單\"按紐",wsgf:"顯示寬螢幕支援資訊"},ready:{errormsg:"Enhanced Steam 資料載入錯誤",loading:"增強的蒸氣加載數據...",ready:"提高蒸汽準備"},select:{none:"取消選取",unowned_dlc:"選擇未擁有的DLC",wishlisted_dlc:"選擇已加入願望清單的DLC"},tag:{coupon:"優惠券",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__個朋友寫了評論",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ 想要</a>",inv_gift:"禮物",inv_guestpass:"招待券",owned:"已經擁有的",wishlist:"願望清單"},wallet:{custom_amount:"加入自訂金額",custom_amount_text:"在 __minamount__上加任何金額"},wsgf:{gold:"此獎章是頒給因為有__type__支援而自WSGF獲得完美分數的遊戲，而且是經過__type__認證的",incomplete:"不完全的",limited:"此遊戲因為有__type__支援而獲得C等的分數，這些遊戲有某種層面的__type__支援，但是有嚴重的問題",silver:"此獎章是頒給因為有__type__支援而獲得B等的遊戲，這些遊戲並沒有重大缺陷，但是至少有一個瑕疵讓它無法拿到完美分數",unsupported:"此遊戲因為有沒有__type__支援而獲得此評分，這些遊戲可能無法在__type__下遊玩，或者是圖像被拉展來填滿螢幕，無法維持正確的長寬比"}},
			"tha":{about:"เกี่ยวกับ",activates:"เปิดใช้ใน Steam",add_selected_dlc_to_cart:"เพิ่ม DLC ที่เลือกลงในรถเข็น",add_to_cart:"เพิ่มลงในรถเข็น",add_to_wishlist:"เพิ่มไปในสิ่งที่คุณอยากได้",add_unowned_dlc_to_cart:"เพิ่ม DLC ที่ยังไม่ได้เป็นเจ้าของลงในรถเข็น",after_coupon:"หลังจากใช้รหัสคูปอง",all:"ทั้งหมด",allreleases_products:"เลือกประเภทของผลิตภัณฑ์ที่คุณต้องการเห็นในหมวดนี้",all_friends_own:"จำนวนเพื่อนทั้งหมดที่เป็นเจ้าของสิ่งนี้ (__friendcount__)",always:"สม่ำเสมอ",apppage_legal:"ข้อมูลทางกฎหมาย",apppage_purchase:"ตัวเลือกการสั่งซื้อ",apppage_sections:"เลือกหมวดที่คุณต้องการให้แสดงในหน้านี้",avg_price_3cards:"ราคาเฉลี่ยของการ์ดสะสม 3 ใบ",badges_all:"เหรียญตราทั้งหมด",badges_drops:"เหรียญตราที่ยังคงเหลือการ์ดดรอป",badge_completion_avg:"ราคาเฉลี่ยเพื่อหาให้ครบ",badge_completion_cost:"ค่าใช้จ่ายในการสร้างเหรียญตรา",badge_foil_progress:"ดูความคืบหน้าเหรียญตราฟอยล์",badge_not_unlocked:"ยังไม่ปลดล็อค",badge_progress:"ดูความคืบหน้าเหรียญตรา",binder_view:"มุมมองแบบปก",birthday_message:"สุขสันต์วันเกิด __username__ บน Steam! บัญชี Steam ของคุณมีอายุครบ __age__ ปี ในวันนี้",bug_feature:"แจ้งข้อบกพร่อง / แนะนำคุณสมบัติ",buy:"ซื้อ",buying_total:"จำนวนการสั่งซื้อรวม",buy_wishlist:"ซื้อสิ่งที่คุณอยากได้",cancel:"ยกเลิก",cards_owned:"เป็นเจ้าของการ์ด __owned__ จาก __possible__ ใบ",card_drops_remaining:"คงเหลือการ์ดดรอป __drops__ ใบ",check_system:"ตรวจสอบระบบของคุณ",clear_cache:"ล้างข้อมูลแคช",common_label:"ซ่อนเกมที่คุณไม่ได้เป็นเจ้าของ",community:"ชุมชน",community_name_account_header:"บัญชีของ __username__",compare:"เปรียบเทียบ",comparison_mode:"เปิดการใช้งานมุมมองโดยรวมของเกมเพื่อดูการเปรียบเทียบเกม",contribute:"ให้การสนับสนุน (GitHub)",coupon_application_note:"คูปองในคลังของคุณจะถูกนำมาปรับใช้โดยอัตโนมัติเมื่อคิดเงิน",coupon_available:"คุณสามารถใช้คูปองได้!",coupon_learn_more:"<a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">เรียนรู้เพิ่มเติม</a> เกี่ยวกับคูปอง Steam",credits:"เครดิต",customize:"ปรับแต่ง",custom_background:"พื้นหลังแบบกำหนดเอง",custom_background_help:"ผู้ใช้ Enhanced Steam ทั้งหมดจะมองเห็นภาพพื้นหลังนี้บนหน้าโปรไฟล์ของคุณ ผู้ใช้ทั่วไปจะมองเห็นเพียงภาพพื้นหลังปกติของคุณ",date_unlocked:"วันที่ปลดล็อค",demos:"เดโม",discount:"ลดราคา",dlc:"เนื้อหาเสริม",dlc_data_header:"รายละเอียดเนื้อหาที่ดาวน์โหลดได้",dlc_details:"รายละเอียดเนื้อหาที่ดาวน์โหลดได้",dlc_suggest:"แนะนำประเภทใหม่",donate:"บริจาค",drm_third_party:"คำเตือน: รายการนี้ใช้งาน DRM ภายนอก",drm_third_party_sub:"คำเตือน: มีบางรายการในแพ็กเกจนี้ที่ใช้ DRM ภายนอก",drops_value:"ค่าดรอปสูงที่สุด",drops_worth_avg:"มูลค่าโดยประมาณ",each:"แต่ละ",empty_cart:"ล้างรถเข็น",empty_wishlist:"ลบสิ่งที่อยากได้ทั้งหมด",es_supporter:"ผู้สนับสนุน Enhanced Steam",events:"กิจกรรม",family_sharing_notice:"<b>หมายเหตุ:</b> เกมนี้ไม่รวมอยู่ในบริการการแบ่งปันครอบครัวบน Steam",faqs:"คำถามที่พบบ่อย",forums:"ฟอรัม",games:"เกม",games_all:"เกมทั้งหมด",games_coupon:"เกมที่ใช้คูปองได้",games_discount:"เกมที่ลดราคา",games_installed:"เกมที่ติดตั้งแล้ว",games_with_booster:"__boostergames__ เกม ที่มีสิทธิ์ได้รับบูสเตอร์แพ็ก",games_with_drops:"__dropsgames__ เกม ที่ยังดรอปการ์ดไม่ครบ",game_name:"ชื่อเกม",game_transactions:"การทำรายการในเกม",gift_transactions:"การทำรายการของขวัญ",graphics:"กราฟิกส์",guides:"คู่มือ",hide:"ซ่อน",highlight:"ไฮไลท์",historical_low:"ราคาต่ำที่สุดในประวัติ",homepage_carousel:"แถบเลื่อน",homepage_sidebar:"แถบข้าง",homepage_spotlight:"โดดเด่น",homepage_tabs:"แท็บหน้าหลัก",hours_short:"__hours__ ชม.",info:"ข้อมูล",item_type:"ประเภทรายการ",language:"ภาษา",last_24:"จำนวน: __sold__ รายการ ที่ขายไปใน 24 ชั่วโมง ที่ผ่านมา",library_menu:"คลัง",loading:"กำลังโหลด...",lowest_price:"ราคาถูกที่สุดในขณะนี้",market_transactions:"การทำรายการในตลาด",mods:"ม็อด",more_information:"ข้อมูลเพิ่มเติม",most_drops:"ดรอปมากที่สุด",net_gain:"เงินที่ใช้รับสุทธิ",net_spent:"ค่าใช้จ่ายสุทธิ",never:"ไม่เคย",news:"ข่าวสาร",notcommon_label:"ซ่อนเกมที่คุณเป็นเจ้าของ",no_results_found:"ไม่พบผลลัพธ์",official_group:"กลุ่มอย่างเป็นทางการ",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"ข้อมูลแพ็กเกจ",packs:"แพ็ค",permalink:"ลิงก์ถาวร",playfire_heading:"รางวัลจาก Playfire",popular:"ยอดนิยม",price:"ราคา",price_options:"ตัวเลือกราคา",programming:"การเขียนโปรแกรม",purchase_date:"(สั่งซื้อเมื่อ __date__)",purchase_total:"ยอดการสั่งซื้อรวม",rating_details:"ดูรายละเอียดการให้คะแนน",region_unavailable:"ไม่พร้อมใช้ในภูมิภาคนี้",remove:"ลบออก",remove_owned_wishlist:"ลบเกมที่มีออกจากสิ่งที่คุณอยากได้",reviews:"บทวิจารณ์",sales_total:"ยอดการขายรวม",save:"บันทึก",saved:"บันทึกแล้ว",search:"ค้นหา",search_market:"ค้นหาตลาดชุมชน Steam",search_names_only:"ค้นหาโดยชื่อเท่านั้น",show:"แสดง",show_all_steam_releases:"แสดงการวางจำหน่ายบน Steam ทั้งหมด",size:"ขนาด",software:"ซอฟต์แวร์",sort_by:"เรียงตาม:",spam_comment_show:"สแปม __num__ ความเห็น ถูกซ่อนในหน้านี้  คลิกที่นี่เพื่อแสดง",spam_comment_warn:"นี่คือมังกร...",starting_at:"เริ่มต้นที่",store:"ร้านค้า",stores:"ร้านค้า",store_transactions:"การทำรายการบนร้านค้า",theworddefault:"ค่าเริ่มต้น",thewordoptions:"ตัวเลือก",total_size:"ขนาดรวม",total_spent:"รายจ่ายทั้งหมด",total_time:"เวลารวม",trading_cards:"การ์ดสะสมบน Steam",translate:"แปลภาษา",translation:"การแปลภาษา",using_language:"คุณกำลังเปิดดู Steam ใน __current__",using_language_return:"คลิกที่นี่เพื่อเปิดดู Steam ใน __base__",using_store:"คุณกำลังใช้งานร้านค้า Steam เป็นภูมิภาค __current__",using_store_return:"คลิกที่นี่เพื่อกลับไปยังร้านค้า __base__",valid:"ใช้งานได้",videos:"วิดีโอ / ตัวอย่าง",view:"ดู",view_all:"ดูทั้งหมด",view_astats:"ดูหน้า AStats",view_badge:"ดูเหรียญตรา",view_badge_foil:"ดูเหรียญตราฟอยล์",view_foil_badge:"ดูความคืบหน้าเหรียญตราฟอยล์",view_in:"ดูใน",view_in_market:"ดูในตลาดชุมชน",view_marketplace:"ดูในตลาด",view_normal_badge:"ดูความคืบหน้าเหรียญตราธรรมดา",view_stats:"ดูสถิติ",view_to_scale:"ดูแบบสเกล",visit_store:"เยี่ยมชมหน้าร้านค้า",visit_trade_forum:"เยี่ยมชมฟอรัมแลกเปลี่ยน",website:"เว็บไซต์",wiki_article:"ดูบทความ __pcgw__",wishlist:"สิ่งที่อยากได้",achievements:{achievements:"รางวัลความสำเร็จ",includes:"มี __num__ รางวัลความสำเร็จบน Steam",option:"แสดงรางวัลความสำเร็จบนหน้าร้านค้า",view_all:"ดูรางวัลความสำเร็จทั้งหมด"},bundle:{at_least:"จ่ายอย่างน้อย",bundle_count:"จำนวนครั้งที่เกมนี้ได้เคยลงบันเดิล",header:"บันเดิลที่บรรจุเกมนี้อยู่",includes:"รวม (__num__) รายการ",info:"ข้อมูลบันเดิล",offer_ends:"ข้อเสนอจะจบลง",pwyw:"จ่ายตามที่คุณต้องการ"},charts:{current:"ผู้เล่นในขณะนี้",peakall:"สูงสุดตลอดกาล",peaktoday:"สูงสุดวันนี้",playing_now:"เล่นเดี๋ยวนี้"},hltb:{compl:"ผู้ชื่นชอบความสมบูรณ์",main:"เนื้อเรื่องหลัก",main_e:"เนื้อเรื่องหลักและเนื้อหาพิเศษ",submit:"ส่งเวลาของคุณ"},library:{categories:"ประเภท...",error_loading_library:"ไม่สามารถโหลดคลังของคุณได้",genres:"แนว...",private_profile:"เปลี่ยนสถานะโปรไฟล์ของคุณเป็นเปิดเผย <a href='http://steamcommunity.com/my/edit/settings'>ในการตั้งค่าของคุณ</a> เพื่อใช้คุณสมบัตินี้"},options:{about_text:"<div class=\"header\">เกี่ยวกับ <a href='http://www.enhancedsteam.com'>Enhanced Steam</a>:</div><p>Enhanced Steam เป็นส่วนขยายสำหรับ Google Chrome ซึ่งได้เพิ่มคุณสมบัติใหม่มากมายไปยังเว็บไซต์ Steam<p>คุณสมบัติดังเช่น:<ul><li>การไฮไลท์เกมที่คุณเป็นเจ้าของอยู่แล้ว</li><li>การไฮไลท์เกมที่อยู่ในสิ่งที่อยากได้ของคุณ</li><li>การปรับแก้การคำนวณส่วนลดของบันเดิลตามเกมที่คุณได้เป็นเจ้าของอยู่แล้ว</li><li>การแสดงจำนวนเงินที่คุณได้ใช้จ่ายไปบน Steam ตลอดช่วงเวลาที่ผ่านมาในบัญชีของคุณ</li><li>การไฮไลท์ DLC ที่คุณเป็นเจ้าของแล้วบนหน้าเกม</li><li>การแก้ไขไอคอนเกมที่ \"ไม่มีภาพให้แสดง\" ในสิ่งที่อยากได้ของคุณสำหรับเกมหรือ DLC ใดก็ตาม</li><li>การแสดงให้เห็นว่ามีการใช้งาน DRM ภายนอก</li></ul><p>หากคุณเห็นว่าส่วนขยายนี้เป็นประโยชน์ กรุณาพิจารณาการบริจาคให้กับเรา",api_key:"คีย์ API",author_info:"โดย jshackles",carousel_description:"แสดงรายละเอียดแอปบนรายการแนะนำที่หน้าแรกของร้านค้า",changelog:"ล็อกการเปลี่ยนแปลง:",clear:"คุณแน่ใจหรือไม่ว่าคุณต้องการที่จะรีเซ็ตการตั้งค่าทั้งหมด? การกระทำนี้ไม่สามารถย้อนกลับได้",contscroll:"เปิดใช้งานการเลื่อนแบบต่อเนื่องของผลลัพธ์การค้นหา",coupon:"รายการที่ใช้คูปองได้",customizespamcommentregex:"(ปรับแต่ง)",drm:"แสดงคำเตือน DRM ภายนอก",es_bg:"ตั้งค่าภาพพื้นหลังแบบกำหนดเองบนหน้า \"แก้ไขโปรไฟล์\"",excludef2p:"ไม่ทำการไฮไลท์เกมเล่นฟรี",foot_link:"ส่วนขยาย Enhanced Steam",friends_own:"รายการที่เพื่อนของคุณเป็นเจ้าของแล้ว",friends_rec:"รายการที่เพื่อนของคุณได้เขียนบทวิจารณ์ไว้",friends_wishlist:"รายการที่เพื่อนของคุณอยากได้",general:"ทั่วไป",gift:"รายการที่เก็บเป็นของขวัญอยู่",greenlight_banner:"เปลี่ยนแบนเนอร์ของ Steam Greenlight",group_events:"แสดงกิจกรรมบนมุมมองโดยรวมของกลุ่ม",guest:"รายการที่คุณมีบัตรทดลองเล่น",header:"เฮดเดอร์",hideactivelistings:"ซ่อนรายการความเคลื่อนไหวทั้งหมดในหน้าแรกของตลาดเป็นค่าเริ่มต้น",hidedlcunownedgames:"DLC ของเกมที่คุณไม่ได้เป็นเจ้าของ",hidespamcomments:"ซ่อนความเห็นที่เป็นสแปมบนหน้าเวิร์กชอปและโปรไฟล์",hidetmsymbols:"เครื่องหมายการค้าและเครื่องหมายลิขสิทธิ์ในชื่อเกม",hide_about:"ซ่อนลิงก์ \"เกี่ยวกับ\"",hide_early_access:"ซ่อนเกมระหว่างการพัฒนาในหน้าแรก หน้าเปิดหา และหน้าค้นหา",hide_install:"ซ่อนปุ่ม \"ติดตั้ง Steam\"",hide_owned:"รายการที่คุณเป็นเจ้าของในหน้าผลลัพธ์การค้นหาและหน้าแท็ก",hide_owned_homepage:"รายการที่คุณเป็นเจ้าของในหน้าแรก",hltb:"แสดงข้อมูล HowLongToBeat.com",html5video:"แสดงวิดีโอโดยใช้ HTML5 แทนการใช้ Flash",inventory_market_text:"แสดงราคาในตลาดบนหน้าช่องเก็บของ",inventory_nav_text:"แสดงเส้นทางขั้นสูงในหน้าช่องเก็บของ",library:"แสดงปุ่มคลังบนเฮดเดอร์",library_f2p:"แสดงเกมเล่นฟรีและเดโมที่เคยเล่นในคลัง",library_header:"คลัง (เบต้า)",lowestprice:"แสดง",lowestprice_coupon:"แสดงรหัสคูปองในการเปรียบเทียบราคา",lowestprice_header:"ประวัติข้อมูลราคา",lowestprice_onwishlist:"แสดงบนสิ่งที่อยากได้",market_total:"แสดงสรุปการทำรายการบนตลาด",metacritic:"แสดงคะแนนจากผู้ใช้ใน Metacritic",owned:"รายการที่คุณเป็นเจ้าของ",pcgw:"แสดงลิงก์ PCGamingWiki",profiles_link_group_game:"เกมโดยเฉพาะ",profile_api_info:"แสดงลิงก์ API ของผู้ใช้บนโปรไฟล์",profile_links:"แสดงลิงก์โปรไฟล์ไปยัง",profile_link_images:"ภาพลิงก์โปรไฟล์",profile_link_images_color:"ลงสี",profile_link_images_gray:"ขาวดำ",profile_link_images_none:"ไม่มี",profile_permalink:"แสดงลิงก์ถาวรบนโปรไฟล์",regional_hideworld:"ซ่อนตัวชี้วัดสากล",regional_price:"การเปรียบเทียบราคาตามภูมิภาค",regional_price_mouse:"เมื่อใช้เมาส์ชี้บนราคา",regional_price_on:"แสดงการเปรียบเทียบราคาตามภูมิภาค",replace_account_name:"เปลี่ยนชื่อบัญชีเป็นชื่อในชุมชน",reset:"รีเซ็ตการกำหนดค่า",reset_note:"รีเซ็ตการกำหนดค่าแล้ว",saved_note:"บันทึกการกำหนดค่าแล้ว",send_age_info:"ส่งข้อมูลการตรวจสอบอายุโดยอัตโนมัติเมื่อมีการร้องขอ",showallachievements:"แสดงสถิติรางวัลความสำเร็จบนหน้า \"เกมทั้งหมด\"",showspeechsearch:"เพิ่มข้อมูลนำเข้าโดยใช้เสียงในช่องค้นหา",show_astatslink:"แสดงลิงก์ AStats บนหน้าแอป",show_early_access_text:"แสดงภาพแบนเนอร์เกมระหว่างการพัฒนา",show_languagewarning:"แสดงคำเตือนหากกำลังเปิดดูด้วยภาษาอื่นนอกจาก",show_package_info:"แสดงข้อมูลแพ็กเกจของแอปทั้งหมด",show_regionwarning:"แสดงคำเตือนหากกำลังเปิดดูในภูมิภาคที่ไม่ตรงกับบัญชี",show_steamchart_info:"แสดงข้อมูล SteamCharts.com",show_sysreqcheck:"แสดงปุ่มเพื่อตรวจสอบความต้องการของระบบในหน้าแอป (สำหรับผู้มีประสบการณ์!)",spamcommentregex:"รูปแบบ Regular Expression:",steamcardexchange:"แสดงลิงก์ SteamCardExchange บนหน้าเหรียญตรา",steamdb:"แสดงลิงก์ SteamDB",stores_all:"เปรียบเทียบกับร้านค้าทั้งหมด",tag:"แท็ก",total_spent:"แสดงค่าใช้จ่ายรวมบนหน้าบัญชี",wishlist:"รายการในสิ่งที่อยากได้ของคุณ",wlbuttoncommunityapp:"แสดงปุ่ม \"เพิ่มในสิ่งที่คุณอยากได้\" บนศูนย์กลางชุมชนของแอป",wsgf:"แสดงข้อมูล WSGF (Widescreen)"},ready:{errormsg:"พบข้อผิดพลาดในการโหลดข้อมูล Enhanced Steam",loading:"Enhanced Steam กำลังโหลดข้อมูล...",ready:"Enhanced Steam พร้อมใช้งาน"},select:{none:"ไม่เลือก",unowned_dlc:"เลือก DLC ที่ยังไม่ได้เป็นเจ้าของ",wishlisted_dlc:"เลือก DLC ที่อยู่ในสิ่งที่ต้องการ"},tag:{coupon:"คูปอง",friends_own:"__friendcount__ คน เป็นเจ้าของ",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">เพื่อน __friendcount__ คน ได้เขียนบทวิจารณ์ไว้",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ คน ต้องการสิ่งนี้</a>",inv_gift:"ของขวัญ",inv_guestpass:"บัตรทดลองเล่น",owned:"เป็นเจ้าของแล้ว",wishlist:"สิ่งที่อยากได้"},wallet:{custom_amount:"เพิ่มจำนวนแบบกำหนดเอง",custom_amount_text:"เพิ่มจำนวนใดก็ตามที่เกินกว่า __minamount__"},wsgf:{gold:"เหรียญรางวัลนี้ถูกมอบให้เป็นรางวัลสำหรับเกมที่ได้รับคะแนนสูงสุดจาก WSGF ซึ่งรองรับ __type__ และได้รับการประกาศรับรอง __type__",incomplete:"ไม่สมบูรณ์",limited:"คะแนนนี้ถูกมอบให้เป็นรางวัลสำหรับเกมที่ได้รับเกรดที่คำนวณได้เป็น C ซึ่งรองรับ __type__ เกมเหล่านี้ทั้งหมดจะรองรับ __type__ ในบางระดับ แต่ว่ายังคงมีปัญหาที่มีนัยสำคัญอยู่",silver:"เหรียญรางวัลนี้ถูกมอบให้เป็นรางวัลสำหรับเกมที่ได้รับเกรดที่คำนวณได้เป็น B ซึ่งรองรับ __type__ เกมเหล่านี้ทั้งหมดจะไม่มีข้อบกพร่องรุนแรง แต่ว่ายังคงมีข้อบกพร่องบางอย่างที่ยังทำให้ไม่ได้รับคะแนนสูงสุด",unsupported:"คะแนนนี้ถูกมอบให้เป็นรางวัลสำหรับเกมที่ไม่รองรับ __type__ เกมอาจจะไม่สามารถเล่นได้ใน __type__ หรือภาพจะถูกยึดให้พอดีกับหน้าต่าง อัตราส่วนภาพที่ถูกต้องจะไม่ถูกนำมาปรับใช้"}},
			"tur":{about:"Hakkında",activates:"Steam'de Aktive Edilir",add_selected_dlc_to_cart:"Seçili indirilebilir içeriği sepete ekle",add_to_cart:"Sepete Ekle",add_to_wishlist:"İstek Listesine Ekle",add_unowned_dlc_to_cart:"Sahip olmadığım DLC'leri sepete ekle",after_coupon:"Kupondan sonra",all:"Hepsi",allreleases_products:"Burada görmeyi dilediğiniz ürün çeşitlerini seçin",all_friends_own:"Buna sahip olan arkadaşların  (__friendcount__)",always:"Her Zaman",apppage_legal:"Yasal Bilgiler",apppage_purchase:"Satın Alma Seçenekleri",apppage_sections:"Bu sayfada görmek istediğiniz bölümleri seçin",avg_price_3cards:"3 takas kartı için en fazla fiyat",badges_all:"Tüm Rozetler",badges_drops:"Kart Düşürülebilen Rozetler",badge_completion_avg:"Ortalama Tamamlama Tutarı",badge_completion_cost:"Rozeti tamamlama fiyatı",badge_foil_progress:"Parlak Rozet İlerlemesine Bak",badge_not_unlocked:"Açılmamış",badge_progress:"Rozet İlerlemesini Görüntüle",binder_view:"Katalog Görünümü",birthday_message:"Mutlu Steam Doğumgünü , __username__! Steam hesabın __age__ yaşında.",bug_feature:"Hata Bildir / Özellik Öner",bundle_saving_text:"Bundle'ı satın aldığınızda yakalayacağınız avantaj",buy:"Satın al",buying_total:"Toplam satın alma işlemi",buy_wishlist:"İstek Listesindekileri Satın Al",cancel:"İptal",cards_owned:"__possible__ kart hakkından __owned__ ü",card_drops_remaining:"__drops__ kart düşürme hakkınız kaldı",check_system:"Sisteminize Bakın",clear_cache:"Önbelleği temizle",common_label:"Sende olmayan oyunları gizle",community:"Topluluk",compare:"Karşılaştır",comparison_mode:"Oyun kıyaslamasını görmek için tüm oyunlarda genel bakışı aktif et",contribute:"Katkıda Bulun (GitHub)",coupon_application_note:"Envanterinizdeki bir kupon satın alma sayfasında otomatik olarak kullanılacak.",coupon_available:"Bir kupona sahipsiniz!",coupon_learn_more:"Steam Kuponları hakkında <a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\">daha fazla</a> bilgiye sahip olun",credits:"Emeği Geçenler",customize:"Özelleştir",custom_background:"Özel Arkaplan",custom_background_help:"Enhanced Steam sahibi bütün kullanıcılar bu arkaplanı görecek. Enhanced Steam'e sahip olmayan normal kullanıcılar ise profilinizdeki normal arkaplanınızı görecek.",date_unlocked:"Tarih Açıldı",demos:"Demolar",discount:"İndirim",dlc:"İndirilebilir İçerik",dlc_data_header:"İndirilebilir Öğe Ayrıntıları",dlc_details:"İndirilebilir Öğe Ayrıntıları",dlc_suggest:"Yeni bir kategori öner",donate:"Bağış Yap",drm_third_party:"Uyarı: Bu oyun 3. parti DRM kullanıyor",drm_third_party_sub:"Uyarı: Bu paketteki bir veya daha çok içerik 3. parti DRM kullanıyor",drops_value:"En Yüksek Düşme Değeri",drops_worth_avg:"Tahmini Değer",each:"her",empty_cart:"Sepeti Boşalt",empty_wishlist:"İstek Listesini Temizle",es_supporter:"Enhanced Steam Destekçisi",events:"Etkinlikler",family_sharing_notice:"<b>Uyarı:</b> Bu oyun Steam Aile Paylaşım Servisine dahil değildir.",faqs:"Sıkça Sorulan Sorular",forums:"Forumlar",games:"Oyunlar",games_all:"Tüm Oyunlar",games_coupon:"İndirim Kuponu Olan Oyunlar",games_discount:"İndirimde Olan Oyunlar",games_installed:"Yüklü Oyunlar",games_with_booster:"Kart Paketi düşürmeye uygun __boostergames__ oyun",games_with_drops:"Kart düşürülebilen __dropsgames__ oyun",game_name:"Oyun Adı",game_transactions:"Oyun İşlemleri",gift_transactions:"Hediye İşlemleri",graphics:"Grafikler",guides:"Rehberler",hide:"Gizle",highlight:"Vurgula",historical_low:"Şimdiye kadarki en düşük fiyat",homepage_carousel:"Atlıkarınca",homepage_sidebar:"Kenar çubuğu",homepage_spotlight:"Öne Çıkanlar",homepage_tabs:"Anasayfa Sekmeleri",hours_short:"__hours__ saat",info:"Bilgi",item_type:"Eşya Türü",language:"Dil",last_24:"Miktar: son 24 saatte __sold__ tane satıldı",library_menu:"Kütüphane",loading:"Yükleniyor...",lowest_price:"En düşük fiyat",market_transactions:"Pazar İşlemleri",mods:"Modlar",more_information:"Daha Fazla Bilgi",most_drops:"En Çok Düşenler",net_gain:"Net kazanç",net_spent:"Net harcanan",never:"Asla",news:"Haberler",notcommon_label:"Sahip olduğun oyunları gizle",no_results_found:"Sonuç bulunamadı",official_group:"Resmi Grup",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"Paket Bilgisi",packs:"Paketler",permalink:"Direkt link",playfire_heading:"Playfire Ödülleri",popular:"Popüler",price:"Fiyat",price_options:"Ödeme Seçenekleri",programming:"Programlama",purchase_date:"(__date__ tarihinde satın alındı)",purchase_total:"Toplam satın alınan",rating_details:"Değerlendirme detaylarını gör",region_unavailable:"Bu bölgede mevcut değil",remove:"Kaldır",remove_owned_wishlist:"Sahip Olunan Öğeleri İstek Listesinden Çıkar",reviews:"İncelemeler",sales_total:"Toplam satılan",save:"Kaydet",saved:"Kaydedildi",search:"Arama",search_error:"Daha fazla arama sonucu yüklerken hata oluştu",search_error_retry:"Buraya tıklayarak yeniden deneyebilirsiniz",search_market:"Steam Topluluk Marketinde Ara",search_names_only:"Sadece isimlerde ara",show:"Göster",show_all_steam_releases:"Steam'de çıkanların tümünü göster",size:"Boyut",software:"Yazılım",sort_by:"..... göre sırala",spam_comment_show:"Bu sayfadaki  __num__  spam yorumu gizlendi. Görmek için buraya tıklayın.",spam_comment_warn:"Burada ejderhalar olacak...",starting_at:"Şuradan başla",store:"mağaza",stores:"Mağazalar",store_transactions:"Mağaza İşlemleri",theworddefault:"Varsayılan",thewordoptions:"Ayarlar",total_size:"Toplam Boyut",total_spent:"Toplam Harcanan",total_time:"Toplam Süre",trading_cards:"Steam Takas Kartları",translate:"Tercüme Et",translation:"Çeviri",using_language:"Steam'da şu dilde geziyorsunuz __current__.",using_language_return:"Buraya tıklayarak Steam'i şu dilde görüntüle __base__.",using_store:"Steam mağazasını __current__ bölgesinde kullanıyorsunuz.",using_store_return:"Buraya tıklayarak __base__ mağazasına geri dönün.",valid:"Geçerli",videos:"Videolar/ Fragmanlar",view:"Görüntüle",view_all:"HEPSİNİ GÖR",view_astats:"Astats Sayfasına Bak",view_badge:"Rozeti Göster",view_badge_foil:"Folyo Rozeti Göster",view_foil_badge:"Parlak Rozet İlerlemesine Bak",view_in:"Görüntüle:",view_in_market:"Market'te bak",view_marketplace:"Pazar'a Git",view_normal_badge:"Normal Rozet İlerlemesine Bak",view_stats:"İstatistikleri Göster",view_to_scale:"Ölçekli görüntüle",visit_store:"Mağaza Sayfasına Git",visit_trade_forum:"Takas Forumunu Ziyaret Et",website:"Website",wiki_article:"__pcgw__ Makalesini Gör",wishlist:"İstek Listesi",achievements:{achievements:"Başarımlar",includes:"__num__ Steam Başarımı İçeriyor",option:"Başarımları mağaza sayfalarında göster",view_all:"Bütün Başarımları Göster"},bundle:{at_least:"En az ..... kadar öde",bundle_count:"Bu oyunun bir bundle içerisinde bulunma sayısı",header:"Bu oyunu içeren bundlelar",includes:"(__num__) öğe içerir",info:"Bundle Bilgisi",offer_ends:"Teklifin Bitiş Zamanı",pwyw:"İstediğin Kadar Öde"},charts:{current:"online oyuncu",peakall:"şimdiye kadarki en yüksek zirve",peaktoday:"bugünün zirvesi",playing_now:"kişi şimdi oynuyor"},hltb:{compl:"Tamamlayıcı",main:"Ana Hikaye",main_e:"Ana Hikaye ve Ekstralar",submit:"Zamanınızı Gönderin"},library:{categories:"Kategoriler",error_loading_library:"Kütüphaneniz yüklenemedi.",genres:"Türler",private_profile:"Bu özelliği kullanabilmek için <a href='http://steamcommunity.com/my/edit/settings'>ayarlardan</a> profilinizi herkese açık olarak değiştirin."},options:{about_text:"<a href='http://www.enhancedsteam.com'>Enhanced Steam</a> hakkında:<p>Enhanced Steam, Steam web sitesine birçok özellik kazandıran bir Google Chrome uzantısıdır.<p>Bazı özellikler:<ul><li>Sahip olunan oyunları vurgulama</li><li>İstek listesindeki oyunları vurgulama</li><li>Sahip olduğunuz oyunlara göre bundle fiyatını doğru hesaplama</li><li>Steam'de şu ana kadar ne kadar para harcandığını gösterme</li><li>Oyun sayfasında sahip olunan DLCleri vurgulama</li><li>İstek listesindeki herhangi bir oyun veya DLC ikonu için \"Görüntü bulunamadı\" hatasını düzeltme</li><li>3. parti DLC'ye sahip oyunları gösterme</li></ul><p>Eğer bu uzantıyı yararlı bulduysanız, lütfen bağış yapmayı düşünün.",api_key:"API Anahtarı",author_info:"jshackles tarafından",carousel_description:"Öne Çıkan Ürünler sayfasındaki Sergide Uygulama Açıklamalarını Göster",changelog:"Değişiklikler:",clear:"Bütün seçenekleri sıfırlamak istediğinizden emin misiniz? Tekrar geri alamazsınız.",contscroll:"Arama Sonuçlarında Sınırsız Kaydırmaya İzin Ver",coupon:"Kuponlu Öğeler",customizespamcommentregex:"(Değiştir)",drm:"3. Parti DRM Uyarıları Göster",es_bg:"Profili Düzenle Sayfasında Özel Profil Arkaplanları Seçmeme İzin Ver",excludef2p:"Oynaması Ücretsiz Oyunları Vurgulama",foot_link:"Enhanced Steam Eklentisi",friends_own:"Arkadaşların Sahip Oldukları Öğeler",friends_rec:"Arkadaşlar Tarafından Önerilenler",friends_wishlist:"Arkadaşların İstek Listesindekiler",general:"Genel",gift:"Hediye Olarak Bulundurulanlar",greenlight_banner:"Steam Greenlight banner'ını gizle",group_events:"Grup Genel Bakışında Etkinlikleri Göster",guest:"Guest Pass'e Sahip Olduklarınız",header:"Başlık",hideactivelistings:"Pazar anasayfasındaki tüm aktif listelemeleri gizle",hidedlcunownedgames:"Oyunlar için senin sahip olmadığın DLC'ler",hidespamcomments:"Atölye ve profillerde gereksiz yorumları sakla",hidetmsymbols:"Oyun başlıklarında Ticari Marka ve Telif Hakkı sembolleri",hide_about:"Hakkında linkini gizle",hide_early_access:"Erken Erişilebilir oyunları anasayfa ve arama sayfalarında sakla",hide_install:"\"Steam Yükleyin\" butonunu gizle",hide_owned:"Sahip olunan eşyaları arama sonuçlarında ve etiket sayfalarında",hide_owned_homepage:"Sahip olunun eşyalar ana sayfada",hltb:"HowLongToBeat.com Bilgisi Göster",html5video:"Videoyu Flash yerine HTML5 ile izle",inventory_market_text:"Envanter Sayfasında Pazar Fiyatını Göster (Deneysel!)",inventory_nav_text:"Envanter sayfasında gelişmiş navigasyon göster",library:"Kütüphane butonunu sayfanın üst tarafında göster (BETA)",library_f2p:"Ücretsiz oyunları ve demoları kütüphanede göster",library_header:"Kütüphane (BETA)",lowestprice:"Fiyat Geçmişini Göster",lowestprice_coupon:"Fiyat karşılaştırmasına kuponları dahil et",lowestprice_header:"Fiyat Geçmişi Bilgisi",lowestprice_onwishlist:"İstek Listesinde Göster",market_total:"Pazar Sayfasında İşlem Özetini Göster",metacritic:"Metacritic Kullanıcı Puanını Göster",owned:"Sahip Olunan Öğeler",pcgw:"PCGagminWiki Linkleri Göster",profiles_link_group_game:"Oyuna özgü",profile_api_info:"Profillerde kullanıcı API linkini göster",profile_links:"Profil linkleri gösterilecek",profile_link_images:"Profil linki resimleri",profile_link_images_color:"Renkli",profile_link_images_gray:"Gri",profile_link_images_none:"Hiçbiri",profile_permalink:"Profillerde permalink göster",regional_hideworld:"Dünya göstergesini gizle",regional_price:"Bölgesel Fiyat Karşılaştırması",regional_price_mouse:"Fare üzerine geldiğinde",regional_price_on:"Karşılaştırmada bölgesel fiyatları göster",replace_account_name:"Hesap ismi yerine topluluk ismini göster",reset:"Seçenekleri sıfırla",reset_note:"Seçenekleri sıfırla",saved_note:"Seçenekler kaydedildi",send_age_info:"Yaş doğrulaması istendiğinde otomatik olarak gönder",showallachievements:"\"Tüm Oyunlar\" sayfasında başarım istatistiklerini göster",showspeechsearch:"Konuşma girdisinin arama çubuklarına ekle.",show_astatslink:"AStats linkini uygulama sayfalarında göster",show_early_access_text:"Erken Erişim simgesini göster",show_languagewarning:"Şu dilin dışında  geziniliyorsa uyarı göster",show_package_info:"Bütün Uygulamalar İçin Paket Bilgisi Göster",show_regionwarning:"Hesabımın dahil olduğu bölge dışında geziniyorsam uyar",show_steamchart_info:"SteamCharts.com Bilgisi Göster",show_sysreqcheck:"Uygulama sayfalarında sistem gereksinimleri butonunu göster (Deneysel!)",spamcommentregex:"Normal İfade dizisi:",steamcardexchange:"Rozetlerde SteamCardExchange linkleri göster",steamdb:"SteamDB Linkleri Göster",stores_all:"Bütün mağazaları karşılaştır",tag:"Etiketle",total_spent:"Hesap Sayfasında \"Toplam Harcanma\" Bilgisini Göster",wishlist:"İstek Listesindekiler",wlbuttoncommunityapp:"Kullanıcı topluluk uygulamasında \"İstek Listesine ekle\" butonu göster",wsgf:"WSGF (Geniş Ekran) Bilgisini Göster"},ready:{errormsg:"Enhanced Steam verilerini yüklerken hata oluştu",loading:"Enhanced Steam verileri yüklüyor...",ready:"Enhanced Steam hazır"},select:{none:"Hiçbirini Seçme",unowned_dlc:"Sahip olunmayan DLC Seç",wishlisted_dlc:"İstek Listesindeki DLC'yi seç"},tag:{coupon:"Kupon",friends_own:"__friendcount__ kişi sahip",friends_rec:"<a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\">__friendcount__ kişi öneriyor",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\">__friendcount__ kişi istiyor</a>",inv_gift:"Hediye",inv_guestpass:"Guestpass",owned:"Sahipsiniz",wishlist:"İstek Listesi"},wallet:{custom_amount:"Farklı bir miktar ekle"},wsgf:{gold:"Bu madalya; söz konusu oyunun __type__ desteği ve __type__ onaylı olması nedeniyle aldığı yüksek puanlamalardan dolayı, WSGF tarafından verilmiştir.",incomplete:"Tamamlanmamış",limited:"Bu madalya; söz konusu oyunun 3. sınıf __type__ desteği nedeniyle verilmiştir. Bu oyunların __type__ desteği olmasına rağmen azımsanamayacak derecede hataları bulunmaktadır.",silver:"Bu madalya; söz konusu oyunun 2. sınıf __type__ desteği nedeniyle verilmiştir. Bütün bu oyunların büyük kusurları olmamasıyla beraber sadece ufak hatalardan dolayı tam puanlık bir ödüle layık görülememişlerdir.",unsupported:"Bu puan; oyunun __type__ desteği olmaması nedeniyle verilmiştir. Oyun __type__ üzerinde çalışmayabilir ya da görüntünün ekrana sığması için genişletilmiş olabilir. Doğru en boy oranı korunmuyor."}},
			"ukr":{about:"Про додаток",activates:"Активується у Steam",add_selected_dlc_to_cart:"Додати виділені доповнення до кошика",add_to_cart:"До Кошика",add_to_wishlist:"Додати до списку бажаного",add_unowned_dlc_to_cart:"Додати в кошик доповнення, яких у мене немає",after_coupon:"після купона",all:"всі",all_friends_own:"Всі друзі, у яких це є (__friendcount__)",always:"Завжди",avg_price_3cards:"Приблизна вартість трьох карток",badges_all:"Всі значки",badges_drops:"Значків з можливістю випадання карток",badge_completion_avg:"Середня ціна завершення",badge_completion_cost:"Вартість завершення значка",badge_foil_progress:"Переглянути прогрес металевого значка",badge_not_unlocked:"не розблокований",badge_progress:"Переглянути прогрес значка",binder_view:"Вид «Папки»",birthday_message:"З днем народження, __username__! Вашого аккаунту виповнилося наступне кол-во років: __age__",bug_feature:"Провідомити про помилку / Запропонувати функцію",buy:"Купити",buying_total:"Повний порядок покупки",buy_wishlist:"Купити увесь список бажаного",cancel:"Вихід",cards_owned:"Є __owned__ карт з __possible__ можливих",card_drops_remaining:"Ще випаде карток: __drops__",check_system:"перевірити систему",clear_cache:"Очистити кешовану інформацію",common_label:"Приховати ігри яких у вас нема",community:"Спільнота",community_name_account_header:"аккаунт __username__",compare:"Порівняти",comparison_mode:"Включити, щоб побачити порівняння",contribute:"Долучитися (GitHub)",coupon_application_note:"При покупці купон буде використаний автоматично.",coupon_available:"У вас є купон!",coupon_learn_more:"Дізнатися більше про <a href=\"https://support.steampowered.com/kb_article.php?ref=4210-YIPC-0275\"> купони Steam </a>",credits:"автори",custom_background:"свій фон",custom_background_help:"Всі користувачі Enhanced Steam побачать цей фон у вашому профілі. Користувачі, у яких не встановлений Enhanced Steam, побачать обраний вами фон вище.",date_unlocked:"Дата розблокування",discount:"Знижка",dlc_data_header:"деталі доповнень",dlc_details:"Інформація завантаження контента",dlc_suggest:"Запропонувати нову категорію",donate:"Пожертва",drm_third_party:"Увага: ця гра використовує DRM-технологію сторонніх постачальників",drm_third_party_sub:"Увага: один або кілька продуктів в цьому наборі використовують DRM-технологію сторонніх постачальників",drops_value:"Найдорожча картка",drops_worth_avg:"Приблизна вартість",each:"Кожний",empty_cart:"Очистити кошик",empty_wishlist:"Очистити список бажаного",es_supporter:"Підтримав «Enhanced Steam»",events:"Події",family_sharing_notice:"<b> Notice: </ b> Ця гра недоступна в Family Sharing.",faqs:"Відповіді на часті запитання",forums:"форуми",games:"ігри",games_all:"Всі ігри",games_coupon:"Ігри з купонами",games_discount:"Ігри із знижками",games_installed:"Інстальовані ігри",games_with_booster:"Ігор, у яких випаде набір карток: __boostergames__",games_with_drops:"Ігор, в яких можуть випасти картки: __dropsgames__",game_name:"Назва гри",game_transactions:"Операції в іграх",gift_transactions:"Операції з подарунками",graphics:"Дизайн",hide:"Приховати",highlight:"В центрі уваги",historical_low:"Найнижча ціна за весь час",homepage_sidebar:"Бокова панель",hours_short:"__hours__ год.",info:"Інформація",item_type:"Тип елемента",language:"Мова",last_24:"Обсяг:  __sold__ продано за останні 24 години",library_menu:"Бібліотека",loading:"Завантаження...",lowest_price:"Найнижча ціна",market_transactions:"Операції на Торг. майданчику",more_information:"Більше інформації",most_drops:"більшість випадінь",net_gain:"чистий доход",net_spent:"витрачено",never:"Ніколи",news:"Новини",notcommon_label:"Приховати ігри які у вас є",no_results_found:"Нічого не знайдено",official_group:"Офіційна група",official_group_url:"steamcommunity.com/groups/enhancedsteam",package_info:"інформація набору",permalink:"Постійне посилання",popular:"Популярний",price:"Вартість",price_options:"Опції вартості",programming:"Програмування",purchase_date:"(Придбано __date__)",purchase_total:"всього покупок",rating_details:"Переглянути інформацію рейтингу",region_unavailable:"Недоступний в цьому регіоні",remove:"Прибрати",remove_owned_wishlist:"Видалити придбані ігри зі списку бажаного",reviews:"Огляди",sales_total:"всього продажів",save:"Зберегти",saved:"збережено",search:"Пошук",search_market:"Пошук на Торговому майданчику спільноти",search_names_only:"Шукати тільки за іменем",show:"Показати",show_all_steam_releases:"Показати всі релізи Steam",size:"Розмір",sort_by:"Сортувати за:",spam_comment_show:"__num__ спам-коментарів приховано на цій сторінці. Натисніть тут, щоб показати їх.",spam_comment_warn:"Тут мешкають дракони ...",starting_at:"починаючи від",store:"Крамниця",stores:"Магазини",store_transactions:"Операції в магазині",theworddefault:"за замовчуванням",thewordoptions:"Опції",total_size:"Загальний розмір",total_spent:"всього витрачено",total_time:"Загальний час",trading_cards:"Колекційні картки Steam",translate:"Переклад",translation:"Переклад",using_language:"Ви знаходитесь на сайті Steam, використовуючи __current__ мову.",using_language_return:"Натисніть тут, щоб користуватися Steam на __base__ мові.",using_store:"Зараз ви використовуєте магазин Steam для __current__ регіону.",using_store_return:"Натисніть тут, щоб повернутися в __base__ магазин.",view:"Переглянути",view_all:"ПЕРЕГЛЯНУТИ ВСЕ",view_astats:"Переглянути сторінку на AStats",view_badge:"переглянути значок",view_badge_foil:"Переглянути металевий значок",view_foil_badge:"Переглянути прогрес металевого значка",view_in:"переглянути в",view_in_market:"Переглянути на ринку спільноти",view_marketplace:"переглянути площадку",view_normal_badge:"Переглянути прогрес звичайного значка",view_stats:"Показати статистику",view_to_scale:"Перегляд в масштабі",visit_store:"Відвідати сторінку магазину",visit_trade_forum:"Відвідати Торговий Форум",website:"Сайт",wiki_article:"Переглянути статтю __pcgw__",wishlist:"Список бажаного",achievements:{achievements:"Досягнення",includes:"Включає __num__ Steam досягненнь",option:"Відображати досягнення на сторінках у магазині",view_all:"Показати всі досягнення"},bundle:{at_least:"Заплатити як мінімум",bundle_count:"Кількість разів, коли ця гра була в наборі",header:"Набори, в яких є ця гра",includes:"Включає в себе (__num__) продуктів",info:"Інформація про набір",offer_ends:"пропозиція закінчується",pwyw:"Плати скільки хочеш"},charts:{current:"Нинішні гравці",peakall:"пік за весь час",peaktoday:"сьогоднішній пік",playing_now:"грає зараз"},hltb:{compl:"На 100%",main:"Основна історія",main_e:"Історія та інше",submit:"Вислати свій час"},library:{categories:"Категорії",error_loading_library:"Неможливо завантажити вашу бібліотеку.",genres:"Жанри...",private_profile:"Щоб використовувати цю функцію, ви повинні <a href='http://steamcommunity.com/my/edit/settings'> зробити свій профіль відкритим для всіх </a>."},options:{about_text:"Про розширення «<a href=http://www.EnhancedSteam.com> Enhanced Steam </a>»: <p> «Enhanced Steam» - це розширення для Google Chrome, яке додає корисні особливості на сайт Steam. <P> особливості включають: <ul> <li> Підсвічування ігор, які вже у вас є <li> Підсвічування ігор, які є у вашому списку бажаного <li> Правильний підрахунок знижок наборів, заснованих на іграх, які у вас є <li> Відображення суми грошей, яку ви витратили за час існування вашого аккаунта <li> Підсвічування доповнень, які у вас є, на сторінці ігор <li> Заміна картинки «No Image Available», яка іноді відображається у ігор і доповнень <li> Попередження про використання ігор додаткових клієнтів і захисту (GFWL, Uplay і т.д.) </ ul> <p> Якщо ви вважаєте, що розширення дуже корисно, то, будь ласка, пожертвуйте будь-яку суму автору розширення.",api_key:"Ключ API",author_info:"створено jshackles",carousel_description:"Відображати описи на головній сторінці магазину Steam",changelog:"Список змін:",clear:"Ви впевнені, що хочете скинути ці настройки? Дія необоротно.",contscroll:"Включити нескінченну прокрутку на сторінці результатів пошуку",coupon:"Ігри з купонами",customizespamcommentregex:"(Налаштування)",drm:"Відображати попередження про DRM-технології сторонніх розробників (GFWL, Uplay і т.д.)",es_bg:"Вибрати користувальницький фон в розділі редагування профілю",excludef2p:"Не підсвічувати безкоштовні ігри",foot_link:"Додаток Enhanced Steam",friends_own:"Предмети, які є у ваших друзів",friends_rec:"Продукти, на які ваші друзі зробили огляди",friends_wishlist:"Ігри у списку бажаного ваших друзів",general:"головне",gift:"Подарунок",greenlight_banner:"Замінити банер Steam Greenlight",group_events:"Відображати події в перегляді груп",guest:"Ігри з гостьовими пропусками",header:"Заголовок",hideactivelistings:"Заховати активні лоти на майданчику за замовчуванням",hidedlcunownedgames:"Доповнення для ігор, яких у вас немає",hidespamcomments:"Заховати коментарі в Майстерні і профілях, помічені як спам",hidetmsymbols:"Символи торгової марки та авторського права у заголовках ігор",hide_about:"Заховати посилання «Про STEAM» в шапці",hide_early_access:"Заховати гри з раннім доступом з головної сторінки і пошуку",hide_install:"Сховати кнопку «Встановити Steam»",hide_owned:"Продукти, які є у вас, в результатах пошуку і сторінках міток",hide_owned_homepage:"Заховати те, що у вас вже є, на головній сторінці",hltb:"Відображати інформацію HowLongToBeat.com",html5video:"Показувати відео за допомогою HTML5 замість Flash",inventory_market_text:"Відображати ціну Торгової площадки на сторінці інвентарю",inventory_nav_text:"Відображати розширену навігацію на сторінці інвентарю",library:"Відображати кнопку «Бібліотека» в шапці",library_f2p:"Відображати безкоштовні ігри та демо-версії в бібліотеці",library_header:"Бібліотека (БЕТА)",lowestprice:"Відобразити",lowestprice_coupon:"Включати купони в цінові порівняння",lowestprice_header:"Інформація з історії цін",lowestprice_onwishlist:"Показувати у списку бажаного",market_total:"Відображати суму всіх операцій на Торговому майданчику",metacritic:"Відображувати користувацький рейтинг з Metacritic",owned:"У вашій власності",pcgw:"Відображати посилання на PCGamingWiki",profiles_link_group_game:"ексклюзив",profile_api_info:"Відображати посилання на користувальницькі API в профілях",profile_links:"Відображати посилання в профілі на:",profile_link_images:"Іконки в профілі",profile_link_images_color:"кольорові",profile_link_images_gray:"Чорно-білі",profile_link_images_none:"без картинок",profile_permalink:"Відображати постійне посилання на профілях",regional_hideworld:"Сховати іконку Землі",regional_price:"Порівняння цін в регіонах",regional_price_mouse:"При наведенні курсору",regional_price_on:"Відображати порівняння цін",replace_account_name:"Замінити ім'я аккаунта ім'ям в спільноті",reset:"скинути настройки",reset_note:"налаштування скинуті",saved_note:"налаштування збережені",send_age_info:"Автоматично надсилати вікову веріфікацію по запиту",showallachievements:"Відображати статистику досягнень на сторінці «Всі ігри»",showspeechsearch:"Додати значок голосового пошуку в поле пошуку",show_astatslink:"Відображати посилання на AStats на сторінках продуктів",show_early_access_text:"Відображати банери раннього доступу",show_languagewarning:"Відображати попередження, якщо сторінка відкрита на іншій мові",show_package_info:"Відображати інформацію про наборах для всіх продуктів",show_regionwarning:"Відображати попередження про невідповідність регіону",show_steamchart_info:"Відображати інформацію SteamCharts.com",show_sysreqcheck:"Відображати кнопку для перевірки системних вимог (Експериментальне!)",spamcommentregex:"Рядок регулярних виразів:",steamcardexchange:"Відображати посилання сайту SteamCardExchange на значках",steamdb:"Показати SteamDB",stores_all:"Порівняти всі магазини",tag:"Тег",total_spent:"Показати загальну суму",wishlist:"Предмети списку побажань",wlbuttoncommunityapp:"Відображати кнопку \"Додати в список бажаного\" ​​в центрах спільноти",wsgf:"Відображати інформацію про підтримку широкоекранних моніторів (WSGF)"},ready:{errormsg:"Помилка завантаження даних Enhanced Steam",loading:"Enhanced Steam завантажує дані...",ready:"Enhanced Steam готовий"},select:{none:"зняти вибір",unowned_dlc:"Вибрати не куплені доповнення",wishlisted_dlc:"Вибрати доповнення зі списку бажаного"},tag:{coupon:"Купон",friends_own:"У __friendcount__ є",friends_rec:"Друзів зробило огляд: <a href=\"http://store.steampowered.com/recommended/byfriends/__appid__\"> __friendcount__",friends_want:"<a href=\"http://steamcommunity.com/my/friendsthatplay/__appid__\"> Ваші друзі (__friendcount__) хочуть це </a>",inv_gift:"Подарунок",inv_guestpass:"Гостьова перепустка",owned:"Придбано",wishlist:"Список бажаного"},wallet:{custom_amount:"Додати певну кількість",custom_amount_text:"Додати будь-яку суму більш __minamount__"},wsgf:{gold:"Ця медаль видається іграм, які отримали «Відмінно» від WSGF за їх підтримку __type__ і сертифікат __type__.",incomplete:"Неповний",limited:"Ця оцінка присуджується іграм, які отримали «Середньо» за підтримку __type__. Всі ці ігри можуть підтримувати __type__, але також існує шанс, що з грою можуть виникнути проблеми.",silver:"Ця медаль присуджується іграм, які отримали «Добре» за підтримку __type__. Всі ці ігри не мають серйозних недоліків, але через деякі недоліків вищий бал отримати неможливо.",unsupported:"Ця оцінка видається іграм, які не мають підтримки __type__. Існує шанс, що гра буде не іграбельной в __type__, або саме зображення буде розтягнуто до розмірів вікна. Правильне співвідношення сторін не зберігається."}}
		};
		// Set english defaults.
		$.each(localized_strings, function (lang, strings) {
			if (lang!="eng"){
				$.each(localized_strings['eng'], function (key, val) {
					if (typeof val == "object" && !strings[key]) strings[key] = val;
					else if(typeof val == "object"){
						$.each(localized_strings['eng'][key], function (sub_key, sub_val) {
							if(!strings[key][sub_key]) strings[key][sub_key] = sub_val;
						});
					}
					else if(typeof val == "string" && !strings[key]) strings[key] = val;
				});
			}
		});
		deferred.resolve();
		return deferred.promise();
	})();

	// Check if the user is signed in
	var is_signed_in = false;
	var signed_in_promise = (function () {
		var deferred = new $.Deferred();
		if (window.location.protocol != "https:") {
			if ($("#global_actions").find(".playerAvatar").length > 0) {
				var user_name = $("#global_actions").find(".playerAvatar")[0].outerHTML.match(/\/id\/(.+?)"/);
				if (user_name) {
					if (getValue("steamID")) {
						is_signed_in = getValue("steamID");
						deferred.resolve();
					} else {
						get_http("http://steamcommunity.com/id/" + user_name[1], function(txt) {
							is_signed_in = txt.match(/steamid"\:"(.+)","personaname/)[1];
							setValue("steamID", is_signed_in);
							deferred.resolve();
						});
					}
				} else {
					deferred.resolve();
				}
			} else {
				deferred.resolve();
			}
		} else {
			deferred.resolve();
		}
		return deferred.promise();
	})();

	function runInPageContext(document_script){
		var script = document.createElement('script');
		script.textContent = '(' + document_script + ')();';
		document.documentElement.appendChild(script);
		script.parentNode.removeChild(script);
	}

	var currency_format_info = {
		"BRL": { places: 2, hidePlacesWhenZero: false, symbolFormat: "R$ ", thousand: ".", decimal: ",", right: false },
		"EUR": { places: 2, hidePlacesWhenZero: false, symbolFormat: "€", thousand: " ", decimal: ",", right: true },
		"GBP": { places: 2, hidePlacesWhenZero: false, symbolFormat: "£", thousand: ",", decimal: ".", right: false },
		"RUB": { places: 2, hidePlacesWhenZero: true,  symbolFormat: " pуб.", thousand: "", decimal: ",", right: true },
		"JPY": { places: 0, hidePlacesWhenZero: false, symbolFormat: "¥ ", thousand: ",", decimal: ".", right: false },
		"MYR": { places: 2, hidePlacesWhenZero: false, symbolFormat: "RM", thousand: ",", decimal: ".", right: false },
		"NOK": { places: 2, hidePlacesWhenZero: false, symbolFormat: " kr", thousand: ".", decimal: ",", right: true },
		"IDR": { places: 0, hidePlacesWhenZero: false, symbolFormat: "Rp ", thousand: " ", decimal: ".", right: false },
		"PHP": { places: 2, hidePlacesWhenZero: false, symbolFormat: "P", thousand: ",", decimal: ".", right: false },
		"SGD": { places: 2, hidePlacesWhenZero: false, symbolFormat: "S$", thousand: ",", decimal: ".", right: false },
		"THB": { places: 2, hidePlacesWhenZero: false, symbolFormat: "฿", thousand: ",", decimal: ".", right: false },
		"VND": { places: 2, hidePlacesWhenZero: false, symbolFormat: "₫", thousand: ",", decimal: ".", right: false },
		"KRW": { places: 2, hidePlacesWhenZero: false, symbolFormat: "₩", thousand: ",", decimal: ".", right: false },
		"TRY": { places: 2, hidePlacesWhenZero: false, symbolFormat: " TL", thousand: "", decimal: ",", right: true },
		"UAH": { places: 2, hidePlacesWhenZero: false, symbolFormat: "₴", thousand: "", decimal: ",", right: true },
		"MXN": { places: 2, hidePlacesWhenZero: false, symbolFormat: "Mex$ ", thousand: ",", decimal: ".", right: false },
		"CAD": { places: 2, hidePlacesWhenZero: false, symbolFormat: "CDN$ ", thousand: ",", decimal: ".", right: false },
		"AUD": { places: 2, hidePlacesWhenZero: false, symbolFormat: "A$ ", thousand: ",", decimal: ".", right: false },
		"NZD": { places: 2, hidePlacesWhenZero: false, symbolFormat: "NZ$ ", thousand: ",", decimal: ".", right: false },
		"USD": { places: 2, hidePlacesWhenZero: false, symbolFormat: "$", thousand: ",", decimal: ".", right: false }
	};

	function formatCurrency(number, type) {
		var info = currency_format_info[type];
		if (info.hidePlacesWhenZero && (number % 1 === 0)) {
			info.places = 0;
		}

		var negative = number < 0 ? "-" : "",
			i = parseInt(number = Math.abs(+number || 0).toFixed(info.places), 10) + "",
			j = (j = i.length) > 3 ? j % 3 : 0,
			formatted;

		formatted = negative +
					(j ? i.substr(0, j) + info.thousand : "") +
					i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + info.thousand) +
					(info.places ? info.decimal + Math.abs(number - i).toFixed(info.places).slice(2) : "");

		if (info.right)
			formatted += info.symbolFormat;
		else
			formatted = info.symbolFormat + formatted;

		return formatted;
	}

	function parse_currency(str) {
		var currency_symbol = currency_symbol_from_string(str);
		var currency_type = currency_symbol_to_type(currency_symbol);
		var currency_number = currency_symbol_to_number(currency_symbol);
		var info = currency_format_info[currency_type];

		// remove thousand sep, replace decimal with dot, remove non-numeric
		str = str.replace(info.thousand, '')
				 .replace(info.decimal, '.')
				 .replace(/[^\d\.]/g, '')
				 .trim();

		var value = parseFloat(str);

		if (isNaN(value))
			return null;

		return {
			value: value,
			currency_type: currency_type,
			currency_symbol: currency_symbol,
			currency_number: currency_number
		};
	}

	function currency_symbol_to_type (currency_symbol) {
		switch (currency_symbol) {
			case "pуб":
				return "RUB";
			case "€":
				return "EUR";
			case "£":
				return "GBP";
			case "R$":
				return "BRL";
			case "¥":
				return "JPY";
			case "kr":
				return "NOK";
			case "Rp":
				return "IDR";
			case "RM":
				return "MYR";
			case "P":
				return "PHP";
			case "S$":
				return "SGD";
			case "฿":
				return "THB";
			case "₫":
				return "VND";
			case "₩":
				return "KRW";
			case "TL":
				return "TRY";
			case "₴":
				return "UAH";
			case "Mex$":
				return "MXN";
			case "CDN$":
				return "CAD";
			case "A$":
				return "AUD";
			case "NZ$":
				return "NZD";
			default:
				return "USD";
		}
	}

	function currency_symbol_to_number (currency_symbol) {
		switch (currency_symbol) {
			case "pуб":
				return 5;
			case "€":
				return 3;
			case "£":
				return 2;
			case "R$":
				return 7;
			case "¥":
				return 8;
			case "kr":
				return 9;
			case "Rp":
				return 10;
			case "RM":
				return 11;
			case "P":
				return 12;
			case "S$":
				return 13;
			case "฿":
				return 14;
			case "₫":
				return 15;
			case "₩":
				return 16;
			case "TL":
				return 17;
			case "₴":
				return 18;
			case "Mex$":
				return 19;
			case "CDN$":
				return 20;
			case "A$":
				return 21;
			case "NZ$":
				return 22;
			default:
				return 1;
		}
	}

	function currency_symbol_from_string (string_with_symbol) {
		var re = /(?:R\$|S\$|\$|RM|kr|Rp|€|¥|£|฿|pуб|P|₫|₩|TL|₴|Mex\$|CDN\$|A\$|NZ\$)/;
		var match = string_with_symbol.match(re);
		return match ? match[0] : '';
	}

	// Session storage functions.
	function setValue(key, value) {
		window.sessionStorage.setItem(key, JSON.stringify(value));
	}

	function getValue(key) {
		var v = window.sessionStorage.getItem(key);
		if (v === undefined) return v;
		return JSON.parse(v);
	}

	function delValue(key) {
		localStorage.removeItem(key);
	}

	// Helper prototypes
	String.prototype.startsWith = function(prefix) {
		return this.indexOf(prefix) === 0;
	};

	function escapeHTML(str) {
		return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') ;
	}

	function getCookie(name) {
		var re = new RegExp(name + "=([^;]+)");
		var value = re.exec(document.cookie);
		return (value != null) ? unescape(value[1]) : null;
	}

	function get_http(url, callback) {
		total_requests += 1;
		$("#es_progress").attr({"max": 100, "title": localized_strings[language].ready.loading});
		$("#es_progress").removeClass("complete");
		var http = new XMLHttpRequest();
		http.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				processed_requests += 1;
				var complete_percentage = (processed_requests / total_requests) * 100;
				$("#es_progress").val(complete_percentage);
				if (complete_percentage == 100) { $("#es_progress").addClass("complete").attr("title", localized_strings[language].ready.ready); }
				callback(this.responseText);
			}

			if (this.readyState == 4 && this.status != 200) {
				$("#es_progress").val(100).addClass("error").attr({"title":localized_strings[language].ready.errormsg, "max":1});
			}
		};
		http.open('GET', url, true);
		http.send(null);
	}

	function get_appid(t) {
		if (t && t.match(/(?:store\.steampowered|steamcommunity)\.com\/app\/(\d+)\/?/)) return RegExp.$1;
		else return null;
	}

	function get_subid(t) {
		if (t && t.match(/(?:store\.steampowered|steamcommunity)\.com\/sub\/(\d+)\/?/)) return RegExp.$1;
		else return null;
	}

	function get_appid_wishlist(t) {
		if (t && t.match(/game_(\d+)/)) return RegExp.$1;
		else return null;
	}

	// colors the tile for owned games
	function highlight_owned(node) {
		node.classList.add("es_highlight_owned");
		if (getValue("hide_owned")) { hide_node(node); } else {
			highlight_node(node, "#5c7836");
		}
	}

	// colors the tile for wishlist games
	function highlight_wishlist(node) {
		node.classList.add("es_highlight_wishlist");

		if (getValue("hide_wishlist")) { hide_node(node); } else {
			highlight_node(node, "#496e93");
		}
	}

	function highlight_cart(node) {
		if (getValue("hide_cart")) { hide_node(node); }
	}

	function hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	function highlight_node(node, color) {
		var $node = $(node);				
		// Carousel item
		if (node.classList.contains("cluster_capsule")) {
			$node = $(node).find(".main_cap_content");
		}

		// Genre Carousel items
		if (node.classList.contains("large_cap")) {
			$node = $(node).find(".large_cap_content");
		}

		// App and community hub page headers
		if (node.classList.contains("apphub_HeaderTop") || node.classList.contains("apphub_HeaderStandardTop")) {
			$node = $(node).find(".apphub_AppName");
			$node.css("color", color);
			return;
		}

		// Blotter activity
		if ($node.parent().parent()[0].classList.contains("blotter_daily_rollup_line") || $node.parent().parent()[0].classList.contains("blotter_author_block") || $node.parent().parent()[0].classList.contains("blotter_gamepurchase") || $node.parent().parent()[0].classList.contains("blotter_recommendation")) {
			$node.css("color", color);
			return;
		}

		var rgb = hexToRgb(color);

		$node.css("backgroundImage", "none");
		$node.css("background", "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba("+rgb.r+","+rgb.g+","+rgb.b+",0.8) 100%)");

		$(node).find("img").css("opacity", "1");
		$(node).find(".search_capsule").css("opacity", "1");
		$(node).find(".ds_flag").remove();

		// Set text colour to not conflict with highlight
		if (node.classList.contains("tab_item")) $node.find("div").css("color", "lightgrey");
		if (node.classList.contains("search_result_row")) $node.find(".search_name").css("color", "lightgrey");
	}

	function hide_node(node) {
		$(node).css("display", "none");

		if (node.classList.contains("search_result_row")) {
			if ($(document).height() <= $(window).height()) {
				load_search_results();
			}
		}
	}

	// Remove all items from cart
	function add_empty_cart_button() {
		addtext = "<a href='javascript:document.cookie=\"shoppingCartGID=0; path=/\";location.reload();' class='es_empty btnv6_green_white_innerfade btn_medium continue' style='float: left;'><span>" + localized_strings[language].empty_cart + "</span></a>";

		jQuery('.checkout_content').each(function () {
			$(this).prepend(addtext);
			if ($(".cart_row").length === 0) {
				$(".es_empty").addClass("btn_disabled");
			}
		});
	}

	function add_wishlist_filter() {
		var html  = "<span>" + localized_strings[language].show + ": </span>";
			html += "<label class='es_sort' id='es_wl_all'><input type='radio' id='es_wl_all_box' name='es_wl_sort' checked><span><a>" + localized_strings[language].games_all + "</a></span></label>";
			html += "<label class='es_sort' id='es_wl_sale'><input type='radio' id='es_wl_sale_box' name='es_wl_sort'><span><a>" + localized_strings[language].games_discount + "</a></span></label>";
			html += "<label class='es_sort' id='es_wl_coupon'><input type='radio' id='es_wl_coupon_box' name='es_wl_sort'><span><a>" + localized_strings[language].games_coupon + "</a></span></label>";
			html += "</div>";

		$('#wishlist_sort_options').append("<p>" + html);


		$('#es_wl_all').on('click', function() {
			$(".es_lowest_price").remove();
			$('#es_wl_all_box').prop('checked', true);
			$('.wishlistRow').css('display', 'block');
		});

		$('#es_wl_sale').on('click', function() {
			$(".es_lowest_price").remove();
			$('#es_wl_sale_box').prop('checked', true);
			$('.wishlistRow').css('display', 'block');
			$('.wishlistRow').each(function () {
				if (!$(this).html().match(/discount_block_inline/)) {
					$(this).css('display', 'none');
				}
			});
		});

		$('#es_wl_coupon').on('click', function() {
			$(".es_lowest_price").remove();
			$('#es_wl_coupon_box').prop('checked', true);
			$('.wishlistRow').css('display', 'block');
			$('.wishlistRow').each(function () {
				if (!$(this)[0].outerHTML.match(/es_highlight_coupon/)) {
					$(this).css('display', 'none');
				}
			});
		});
	}

	// User profile pages
	function add_community_profile_links() {
		var steamID = document.getElementsByName("abuseID")[0].value;
		var htmlstr = '';
		htmlstr += '<div class="profile_count_link"><a href="http://steamrep.com/profiles/' + steamID + '" target="_blank"><span class="count_link_label">SteamRep</span>&nbsp;<span class="profile_count_link_total">';
		htmlstr += '<img src="http://www.enhancedsteam.com/standalone/images/ico/steamrep.png"></span></a></div>';	
		htmlstr += '<div class="profile_count_link"><a href="http://steamdb.info/calculator/?player=' + steamID + '" target="_blank"><span class="count_link_label">SteamDB</span>&nbsp;<span class="profile_count_link_total">';
		htmlstr += '<img src="http://www.enhancedsteam.com/standalone/images/ico/steamdb.png"></span></a></div>';	
		htmlstr += '<div class="profile_count_link"><a href="http://www.steamtrades.com/user/id/' + steamID + '" target="_blank"><span class="count_link_label">SteamTrades</span>&nbsp;<span class="profile_count_link_total">';
		htmlstr += '<img src="http://www.enhancedsteam.com/standalone/images/ico/steamtrades.png"></span></a></div>';	
		htmlstr += '<div class="profile_count_link"><a href="http://www.steamgifts.com/user/id/' + steamID + '" target="_blank"><span class="count_link_label">SteamGifts</span>&nbsp;<span class="profile_count_link_total">';
		htmlstr += '<img src="http://www.enhancedsteam.com/standalone/images/ico/steamgifts.png"></span></a></div>';	
		htmlstr += '<div class="profile_count_link"><a href="http://www.achievementstats.com/index.php?action=profile&playerId=' + steamID + '" target="_blank"><span class="count_link_label">Achievement Stats</span>&nbsp;<span class="profile_count_link_total">';
		htmlstr += '<img src="http://www.enhancedsteam.com/standalone/images/ico/achievementstats.png"></span></a></div>';	
		htmlstr += '<div class="profile_count_link"><a href="http://backpack.tf/profiles/' + steamID + '" target="_blank"><span class="count_link_label">Backpack.tf</span>&nbsp;<span class="profile_count_link_total">';
		htmlstr += '<img src="http://www.enhancedsteam.com/standalone/images/ico/backpacktf.png"></span></a></div>';
		
		if (htmlstr != '') { $(".profile_item_links").append(htmlstr); }
	}

	function add_wishlist_discount_sort() {
		if ($("#wishlist_sort_options").find("a[href$='price']").length > 0) {
			$("#wishlist_sort_options").find("a[href$='price']").after("&nbsp;&nbsp;<label id='es_wl_sort_discount'><a>Discount</a></label>");
		} else {
			$("#wishlist_sort_options").find("span[class='selected_sort']").after("&nbsp;&nbsp;<label id='es_wl_sort_discount'><a>Discount</a></label>");
		}

		$("#es_wl_sort_discount").on("click", function() {
			var wishlistRows = [];
			$('.wishlistRow').each(function () {
				var push = new Array();
				if ($(this).html().match(/discount_block_inline/)) {
					push[0] = this.outerHTML;
					push[1] = $(this).find(".discount_pct").html();
					push[2] = $(this).find(".discount_final_price").html();
				} else if ($(this).html().match(/div class=\"price/)) {
					push[0] = this.outerHTML;
					push[1] = "0";
					push[2] = $(this).find(".price").html();
				} else {
					push[0] = this.outerHTML;
					push[1] = "0";
					push[2] = "0";
				}
				wishlistRows.push(push);
				this.parentNode.removeChild(this);
			});

			wishlistRows.sort(function(a,b) {
				var discountA = parseInt(a[1],10);
				var discountB = parseInt(b[1],10);

				if (discountA > discountB) {
					return 1;
				} else if (discountA < discountB) {
					return -1;
				} else {
					var priceA = Number(a[2].replace(/[^0-9\.]+/g,""));
					var priceB = Number(b[2].replace(/[^0-9\.]+/g,""));

					if (priceA > priceB) {
						return 1;
					} else if (priceA < priceB) {
						return -1;
					} else {
						return 0;
					}
				}
			});

			$('.wishlistRow').each(function () { $(this).css("display", "none"); });

			$(wishlistRows).each(function() {
				$("#wishlist_items").append(this[0]);
			});

			$(this).html("<span style='color: #B0AEAC;'>Discount</span>");
			var html = $("#wishlist_sort_options").find("span[class='selected_sort']").html();
			html = "<a onclick='location.reload()'>" + html + "</a>";
			$("#wishlist_sort_options").find("span[class='selected_sort']").html(html);
		});
	}

	// Calculate total cost of all items on wishlist
	function add_wishlist_total() {
		var total = 0;
		var gamelist = "";
		var items = 0;
		var currency_symbol;
		var apps = "";

		function calculate_node($node, search) {
			var parsed = parse_currency($node.find(search).text().trim());

			if (parsed) {
				currency_symbol = parsed.currency_symbol;
				gamelist += $node.find("h4").text().trim() + ", ";
				items ++;
				total += parsed.value;
				apps += get_appid($node.find(".btnv6_blue_hoverfade").attr("href")) + ",";
			}
		}

		$('.wishlistRow').each(function () {
			var $this = $(this);

			if ($this.find("div[class='price']").length != 0 && $this.find("div[class='price']").text().trim() != "")
				calculate_node($this, "div[class='price']");

			if ($this.find("div[class='discount_final_price']").length != 0)
				calculate_node($this, "div[class='discount_final_price']");
		});
		gamelist = gamelist.replace(/, $/, "");
		
		currency_type = currency_symbol_to_type(currency_symbol);
		total = formatCurrency(parseFloat(total), currency_type);
		$(".games_list").after("<link href='http://store.akamai.steamstatic.com/public/css/v6/game.css' rel='stylesheet' type='text/css'><div class='game_area_purchase_game' style='width: 600px; margin-top: 15px;'><h1>" + localized_strings[language].wishlist + "</h1><p class='package_contents'><b>" + localized_strings[language].bundle.includes.replace("(__num__)", items) + ":</b> " + gamelist + "</p><div class='game_purchase_action'><div class='game_purchase_action_bg'><div class='game_purchase_price price'>" + total + "</div></div></div></div></div></div>");
	}

	function add_wishlist_profile_link() {
		if ($("#reportAbuseModal").length > 0) { var steamID = document.getElementsByName("abuseID")[0].value; }
		if (steamID === undefined) { var steamID = document.documentElement.outerHTML.match(/steamid"\:"(.+)","personaname/)[1]; }

		$(".profile_item_links").find(".profile_count_link:first").after("<div class='profile_count_link' id='es_wishlist_link'><a href='http://steamcommunity.com/profiles/" + steamID + "/wishlist'><span class='count_link_label'>Wishlist</span>&nbsp;<span class='profile_count_link_total' id='es_wishlist_count'></span></a></div>");

		// Get count of wishlisted items
		get_http("http://steamcommunity.com/profiles/" + steamID + "/wishlist", function(txt) {
			var html = $.parseHTML(txt);
			var count = ($(html).find(".wishlistRow").length);

			if (count) { $("#es_wishlist_count").text(count); } else { $('#es_wishlist_link').remove(); }
		});	
	}

	function pack_split(node, ways) {
		var price_text = $(node).find(".discount_final_price").html();
		var at_end, comma, places = 2;
		if (price_text == null) { price_text = $(node).find(".game_purchase_price").html(); }
		if (price_text.match(/,\d\d(?!\d)/)) {
			at_end = true;
			comma = true;
			price_text = price_text.replace(",", ".");
		}
		var currency_symbol = currency_symbol_from_string(price_text);
		var currency_type = currency_symbol_to_type(currency_symbol);
		var price = (Number(price_text.replace(/[^0-9\.]+/g,""))) / ways;
		price = (Math.ceil(price * 100) / 100);
		price_text = formatCurrency(price, currency_type);
		$(node).find(".btn_addtocart").last().before(
			"<div class='es_each_box'><div class='es_each_price'>" + price_text + "</div><div class='es_each'>"+localized_strings[language].each+"</div></div>"
		);
	}

	function add_pack_breakdown() {
		$(".game_area_purchase_game_wrapper").each(function() {
			var title = $(this).find("h1").text().trim();
			title = title.toLowerCase().replace(/-/g, ' ');
			if (title.match(/pack/) && title.match(/pack/).length > 0) {
				if (title.match(' 2 pack') && !title.match('bioshock')) { pack_split(this, 2); }
				else if (title.match(' two pack')) { pack_split(this, 2); }
				else if (title.match('tower wars friend pack')) { pack_split(this, 2); }

				else if (title.match(' 3 pack') && !title.match('doom 3')) { pack_split(this, 3); }
				else if (title.match(' three pack')) { pack_split(this, 3); }
				else if (title.match('tower wars team pack')) { pack_split(this, 3); }

				else if (title.match(' 4 pack')) { pack_split(this, 4); }
				else if (title.match(' four pack')) { pack_split(this, 4); }
				else if (title.match(' clan pack')) { pack_split(this, 4); }

				else if (title.match(' 5 pack')) { pack_split(this, 5); }
				else if (title.match(' five pack')) { pack_split(this, 5); }

				else if (title.match(' 6 pack')) { pack_split(this, 6); }
				else if (title.match(' six pack')) { pack_split(this, 6); }
			}
		});
	}

	function add_supporter_badges() {
		if ($("#reportAbuseModal").length > 0) { var steamID = document.getElementsByName("abuseID")[0].value; }
		if (steamID === undefined) { var steamID = document.documentElement.outerHTML.match(/steamid"\:"(.+)","personaname/)[1]; }

		get_http("http://api.enhancedsteam.com/supporter/?steam_id=" + steamID, function(txt) {
			var data = JSON.parse(txt);
			var badge_count = data["badges"].length;

			if (badge_count > 0) {
				var html = '<div class="profile_badges" id="es_supporter_badges"><div class="profile_count_link"><a href="http://www.EnhancedSteam.com"><span class="count_link_label">' + localized_strings[language].es_supporter + '</span>&nbsp;<span class="profile_count_link_total">' + badge_count + '</span></a></div>';

				for (i=0; i < data["badges"].length; i++) {
					if (data["badges"][i].link) {
						html += '<div class="profile_badges_badge "><a href="' + data["badges"][i].link + '" title="' + data["badges"][i].title + '"><img src="' + data["badges"][i].img + '"></a></div>';
					} else {
						html += '<div class="profile_badges_badge "><img src="' + data["badges"][i].img + '" title="' + data["badges"][i].title + '"></div>';
					}	
				}

				html += '<div style="clear: left;"></div></div>';
				$(".profile_badges").after(html);
				$("#es_supporter_badges .profile_badges_badge:last").addClass("last");
			}
		});
	}

	function appdata_on_wishlist() {
		$('a.btnv6_blue_hoverfade').each(function (index, node) {
			var app = get_appid(node.href);
			get_http('//store.steampowered.com/api/appdetails/?appids=' + app, function (data) {
				var storefront_data = JSON.parse(data);
				$.each(storefront_data, function(appid, app_data) {
					if (app_data.success) {
						// Add platform information
						if (app_data.data.platforms) {
							var htmlstring = "";
							var platforms = 0;
							if (app_data.data.platforms.windows) { htmlstring += "<span class='platform_img win'></span>"; platforms += 1; }
							if (app_data.data.platforms.mac) { htmlstring += "<span class='platform_img mac'></span>"; platforms += 1; }
							if (app_data.data.platforms.linux) { htmlstring += "<span class='platform_img linux'></span>"; platforms += 1; }

							if (platforms > 1) { htmlstring = "<span class='platform_img steamplay'></span>" + htmlstring; }

							$(node).parent().parent().parent().find(".bottom_controls").append(htmlstring);
						}
					}
				});
			});
		});
	}

	var processing = false;
	var search_page = 2;

	function load_search_results () {
		if (!processing) {
			processing = true;
			var search = document.URL.match(/(.+)\/(.+)/)[2].replace(/\&page=./, "").replace(/\#/g, "&");
			if ($(".LoadingWrapper").length === 0) {
				$(".search_pagination:last").before('<div class="LoadingWrapper"><div class="LoadingThrobber" style="margin-bottom: 15px;"><div class="Bar Bar1"></div><div class="Bar Bar2"></div><div class="Bar Bar3"></div></div><div id="LoadingText">' + localized_strings[language].loading + '</div></div>');
			}	
			$.ajax({
				url: 'http://store.steampowered.com/search/results' + search + '&page=' + search_page + '&snr=es'
			}).success(function(txt) {
				var html = $.parseHTML(txt);
				html = $(html).find("a.search_result_row");
				
				var added_date = +new Date();
				$('#search_result_container').attr('data-last-add-date', added_date);
				html.attr('data-added-date', added_date);

				$(".LoadingWrapper").remove();
				$(".search_result_row").last().after(html);
				search_page = search_page + 1;
				processing = false;

				var ripc = function () {
					var added_date = jQuery('#search_result_container').attr('data-last-add-date');
					GDynamicStore.DecorateDynamicItems(jQuery('.search_result_row[data-added-date="' + added_date + '"]'));
					BindStoreTooltip(jQuery('.search_result_row[data-added-date="' + added_date + '"] [data-store-tooltip]'));
				};

				runInPageContext(ripc);
			}).error(function() {
				$(".LoadingWrapper").remove();
				$(".search_pagination:last").before("<div style='text-align: center; margin-top: 16px;' id='es_error_msg'>" + localized_strings[language].search_error + ". <a id='es_retry' style='cursor: pointer;'>" + localized_strings[language].search_error_retry + ".</a></div>");

				$("#es_retry").click(function() {
					processing = false;
					$("#es_error_msg").remove();
					load_search_results();
				});
			});
		}
	}

	function is_element_in_viewport($elem) {
		// only concerned with vertical at this point
		var elem_offset = $elem.offset(),
			elem_bottom = elem_offset.top + $elem.height(),
			viewport_top = jQuery(window).scrollTop(),
			viewport_bottom = window.innerHeight + viewport_top;

		return (elem_bottom <= viewport_bottom && elem_offset.top >= viewport_top);
	}

	function endless_scrolling() {
		var result_count;
		$(document.body).append('<link rel="stylesheet" type="text/css" href="http://store.akamai.steamstatic.com/public/css/v6/home.css">');
		$(".search_pagination_right").css("display", "none");
		if ($(".search_pagination_left").text().trim().match(/(\d+)$/)) {
			result_count = $(".search_pagination_left").text().trim().match(/(\d+)$/)[0];
			$(".search_pagination_left").text(result_count + " Results");
		}

		$(window).scroll(function() {
			// if the pagination element is in the viewport, continue loading
			if (is_element_in_viewport($(".search_pagination_left"))) {
				if (result_count > $('.search_result_row').length) {
					load_search_results();
				} else {
					$(".search_pagination_left").text('All ' + result_count + ' results displayed');
				}
			}
		});
	}

	function add_hide_button_to_search() {
		$("#advsearchform").find(".rightcol").prepend("<div class='block'><div class='block_header'><div>" + localized_strings[language].hide + "</div></div><div class='block_content block_content_inner'><div class='tab_filter_control' id='es_owned_games'><div class='tab_filter_control_checkbox'></div><span class='tab_filter_control_label'>" + localized_strings[language].options.owned + "</span></div><div class='tab_filter_control' id='es_wishlist_games'><div class='tab_filter_control_checkbox'></div><span class='tab_filter_control_label'>" + localized_strings[language].options.wishlist + "</span></div><div class='tab_filter_control' id='es_cart_games'><div class='tab_filter_control_checkbox'></div><span class='tab_filter_control_label'>" + localized_strings[language].options.cart + "</span></div></div></div>")

		if (getValue("hide_owned")) {
			$("#es_owned_games").addClass("checked");
		}

		if (getValue("hide_wishlist")) {
			$("#es_wishlist_games").addClass("checked");
		}

		if (getValue("hide_cart")) {
			$("#es_cart_games").addClass("checked");
		}

		$("#es_owned_games").click(function() {
			if ($("#es_owned_games").hasClass("checked")) {
				$("#es_owned_games").removeClass("checked");
				$(".ds_owned").css("display", "block");
				setValue("hide_owned", false);
			} else {
				$("#es_owned_games").addClass("checked");
				$(".ds_owned").css("display", "none");
				setValue("hide_owned", true);
			}
		});

		$("#es_wishlist_games").click(function() {
			if ($("#es_wishlist_games").hasClass("checked")) {
				$("#es_wishlist_games").removeClass("checked");
				$(".ds_wishlist").css("display", "block");
				setValue("hide_wishlist", false);
			} else {
				$("#es_wishlist_games").addClass("checked");
				$(".ds_wishlist").css("display", "none");
				setValue("hide_wishlist", true);
			}
		});

		$("#es_cart_games").click(function() {
			if ($("#es_cart_games").hasClass("checked")) {
				$("#es_cart_games").removeClass("checked");
				$(".ds_incart").css("display", "block");
				setValue("hide_cart", false);
			} else {
				$("#es_cart_games").addClass("checked");
				$(".ds_incart").css("display", "none");
				setValue("hide_cart", true);
			}
		});
	}

	function add_popular_tab() {
		$(".home_tabs_row").find(".home_tab:last").after("<div class='home_tab' id='es_popular'><div class='tab_content'>" + localized_strings[language].popular + "</div></div>");
		var tab_html = "<div id='tab_popular_content' class='tab_content' style='display: none;'>";

		$(".home_tabs_content").append(tab_html);

		$("#es_popular").on("click", function() {
			$(".home_tabs_row").find(".active").removeClass("active");
			$(".home_tabs_content").find(".tab_content").hide();
			$("#es_popular").addClass("active");
			$("#tab_popular_content").show();

			if ($("#tab_popular_content").find("div").length == 0) {
				get_http("http://store.steampowered.com/stats", function(txt) {
					var return_text = $.parseHTML(txt);
					var i = 0;
					$(return_text).find(".player_count_row").each(function() {
						if (i < 10) {
							var appid = get_appid($(this).find("a").attr("href"));
							var game_name = $(this).find("a").text();
							var currently = $(this).find(".currentServers:first").text();
							var html = "<div class='tab_item app_impression_tracked' data-ds-appid='" + appid + "' onmouseover='GameHover( this, event, \"global_hover\", {\"type\":\"app\",\"id\":\"" + appid + "\",\"public\":0,\"v6\":1} );' onmouseout='HideGameHover( this, event, \"global_hover\" )' id='tab_row_popular_" + appid + "'>";
							html += "<a class='tab_item_overlay' href='http://store.steampowered.com/app/" + appid + "/?snr=1_4_4__106'><img src='http://store.akamai.steamstatic.com/public/images/blank.gif'></a><div class='tab_item_overlay_hover'></div>";
							html += "<img class='tab_item_cap' src='http://cdn.akamai.steamstatic.com/steam/apps/" + appid + "/capsule_184x69.jpg'>";
							html += "<div class='tab_item_content'><div class='tab_item_name'>" + game_name + "</div><div class='tab_item_details'>" + currently + " " + localized_strings[language].charts.playing_now + "</div><br clear='all'></div>";

							html += "</div>";
							$("#tab_popular_content").append(html);
							i++;
						}
					});
					$("#tab_popular_content").append("<div class='tab_see_more'>See more: <a href='http://store.steampowered.com/stats/' class='btnv6_blue_hoverfade btn_small_tall'><span>Popular Games</span></a></div>");
				});
			}
		});
	}

	function add_allreleases_tab() {
		var button_text = $("#tab_newreleases_content").find(".tab_see_more a:last").text();
		$(".home_tabs_row").find(".home_tab:first").after("<div class='home_tab' id='es_allreleases'><div class='tab_content'>" + button_text + "</div></div>");
		var tab_html = "<div id='tab_allreleases_content' class='tab_content' style='display: none;'>";

		$(".home_tabs_content").append(tab_html);

		function get_allreleases_results(search) {
			$("#tab_allreleases_content .tab_item, #tab_allreleases_content .tab_see_more").remove();
			get_http("http://store.steampowered.com/search/?sort_by=Released_DESC&category1=" + search, function(txt) {
				var return_text = $.parseHTML(txt);
				$(return_text).find(".search_result_row").each(function(i, item) {
					var appid = get_appid($(this).attr("href"));
					var game_name = $(this).find(".title").text();
					var platform = $(this).find(".search_name p:last").html();
					var release_date = $(this).find(".search_released").text();
					var discount_pct = $(this).find(".search_discount span:last").text();
					var price = $(this).find(".search_price").html();
					var html = "<div class='tab_item app_impression_tracked' data-ds-appid='" + appid + "' onmouseover='GameHover( this, event, \"global_hover\", {\"type\":\"app\",\"id\":\"" + appid + "\",\"public\":0,\"v6\":1} );' onmouseout='HideGameHover( this, event, \"global_hover\" )' id='tab_row_popular_" + appid + "'>";
					html += "<a class='tab_item_overlay' href='http://store.steampowered.com/app/" + appid + "/?snr=1_4_4__106'><img src='http://store.akamai.steamstatic.com/public/images/blank.gif'></a><div class='tab_item_overlay_hover'></div>";
					html += "<img class='tab_item_cap' src='http://cdn.akamai.steamstatic.com/steam/apps/" + appid + "/capsule_184x69.jpg'>";
					// price info
					if (discount_pct) {
						html += "<div class='discount_block tab_item_discount'><div class='discount_pct'>" + discount_pct + "</div><div class='discount_prices'>" + price + "</div></div>";
					} else {
						html += "<div class='discount_block tab_item_discount no_discount'><div class='discount_prices no_discount'><div class='discount_final_price'>" + price + "</div></div></div>";
					}

					html += "<div class='tab_item_content'><div class='tab_item_name'>" + game_name + "</div><div class='tab_item_details'> " + platform + "<div class='tab_item_top_tags'><span class='top_tag'>" + release_date + "</span></div></div><br clear='all'></div>";

					html += "</div>";
					$("#tab_allreleases_content").append(html);
					return i < 9;
				});
				var button = $("#tab_newreleases_content").find(".tab_see_more").clone();
				$("#tab_allreleases_content").append(button);
			});
		}

		function generate_search_string() {
			var return_str = "";
			if (getValue("show_allreleases_games")) { return_str += "998,"; }
			if (getValue("show_allreleases_video")) { return_str += "999,"; }
			if (getValue("show_allreleases_demos")) { return_str += "10,"; }
			if (getValue("show_allreleases_mods")) { return_str += "997,"; }
			if (getValue("show_allreleases_packs")) { return_str += "996,"; }
			if (getValue("show_allreleases_dlc")) { return_str += "21,"; }
			if (getValue("show_allreleases_guide")) { return_str += "995,"; }
			if (getValue("show_allreleases_softw")) { return_str += "994,"; }
			return return_str;
		}

		$("#es_allreleases").on("click", function() {
			$(".home_tabs_row").find(".active").removeClass("active");
			$(".home_tabs_content").find(".tab_content").hide();
			$("#es_allreleases").addClass("active");
			$("#tab_allreleases_content").show();

			if ($("#tab_allreleases_content").find("div").length == 0) {
				$("#tab_allreleases_content").append("<div id='es_allreleases_btn' class='home_actions_ctn' style='margin-bottom: 4px; display: none;'><div class='home_btn home_customize_btn' style='z-index: 13; position: absolute; right: -2px;'>" + localized_strings[language].customize + "</div></div>");

				if (getValue("show_allreleases_initialsetup") === null) {
					setValue("show_allreleases_games", true);
					setValue("show_allreleases_video", true);
					setValue("show_allreleases_demos", true);
					setValue("show_allreleases_mods", true);
					setValue("show_allreleases_packs", true);
					setValue("show_allreleases_dlc", true);
					setValue("show_allreleases_guide", true);
					setValue("show_allreleases_softw", true);				
					setValue("show_allreleases_initialsetup", true);
				}

				var html = "<div class='home_viewsettings_popup' style='display: none; z-index: 12; right: 0px; top: 58px;'><div class='home_viewsettings_instructions' style='font-size: 12px;'>" + localized_strings[language].allreleases_products + "</div>";

				// Games
				text = localized_strings[language].games;
				if (getValue("show_allreleases_games")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_games'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
				else { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_games'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }

				// Videos / Trailers
				text = localized_strings[language].videos;
				if (getValue("show_allreleases_video")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_video'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
				else { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_video'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";	}

				// Demos
				text = localized_strings[language].demos;
				if (getValue("show_allreleases_demos")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_demos'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
				else { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_demos'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }

				// Mods
				text = localized_strings[language].mods;
				if (getValue("show_allreleases_mods")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_mods'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
				else { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_mods'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }

				// Packs
				text = localized_strings[language].packs;
				if (getValue("show_allreleases_packs")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_packs'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
				else { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_packs'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";	}

				// Downloadable Content
				text = localized_strings[language].dlc;
				if (getValue("show_allreleases_dlc")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_dlc'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
				else { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_dlc'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }

				// Guides
				text = localized_strings[language].guides;
				if (getValue("show_allreleases_guide")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_guide'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
				else { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_guide'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }

				// Software
				text = localized_strings[language].software;
				if (getValue("show_allreleases_softw")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_softw'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
				else { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_allreleases_softw'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }

				$("#es_allreleases_btn").append(html);

				var search_string = generate_search_string();
				get_allreleases_results(search_string);

				$("#tab_allreleases_content").hover(function() {
					$("#es_allreleases_btn").show();
				}, function() {
					$("#es_allreleases_btn").hide();
					$("#es_allreleases_btn").find(".home_viewsettings_popup").hide();
					if ($("#es_allreleases_btn").find(".home_customize_btn").hasClass("active")) {
						$("#es_allreleases_btn").find(".home_customize_btn").removeClass("active");
					}
				});

				$("#es_allreleases_btn").find(".home_customize_btn").click(function() {
					if ($(this).hasClass("active")) {
						$(this).removeClass("active");
					} else {
						$(this).addClass("active");
					}

					if ($(this).parent().find(".home_viewsettings_popup").is(":visible")) {
						$(this).parent().find(".home_viewsettings_popup").hide();
					} else {
						$(this).parent().find(".home_viewsettings_popup").show();
					}
				});

				$("#es_allreleases_btn").find(".home_viewsettings_checkboxrow").click(function() {
					var setting_name = $(this).attr("id");
					if (getValue(setting_name)) {
						setValue(setting_name, false);
						$(this).find(".home_viewsettings_checkbox").removeClass("checked");
					} else {
						setValue(setting_name, true);
						$(this).find(".home_viewsettings_checkbox").addClass("checked");
					}

					var search_string = generate_search_string();
					get_allreleases_results(search_string);
				});
			}
		});
	}

	function add_dlc_page_link(appid) {
		if ($(".game_area_dlc_section").length > 0) {
			var html = $(".game_area_dlc_section").html();
			title = html.match(/<h2 class=\"gradientbg">(.+)<\/h2>/)[1];
			html = html.replace(title, "<a href='http://store.steampowered.com/dlc/" + appid + "'>" + title + "</a>");
			$(".game_area_dlc_section").html(html);
		}
	}

	// fixes "Image not found" in wishlist
	function fix_wishlist_image_not_found() {
		var items = document.getElementById("wishlist_items");
		if (items) {
				imgs = items.getElementsByTagName("img");
				for (var i = 0; i < imgs.length; i++)
				if (imgs[i].src == "http://media.steampowered.com/steamcommunity/public/images/avatars/33/338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif") {
						var gameurl = imgs[i].parentNode.href;
						imgs[i].src = "http://cdn.steampowered.com/v/gfx/apps/" + gameurl.substring(gameurl.lastIndexOf("/") + 1) + "/header.jpg";
				}
		}
	}

	function add_app_badge_progress(appid) {
		if ($(".icon").find('img[src$="/ico_cards.png"]').length > 0) {
			$("#category_block").after("<div class='block'><div class='block_header'><h4>Badge Progress</h4></div><div class='block_content_inner'><link rel='stylesheet' type='text/css' href='http://cdn.steamcommunity.com/public/css/skin_1/badges.css'><div class='es_badge_progress'></div><div class='es_foil_badge_progress'></div></div>");
			$(".es_badge_progress").load("http://steamcommunity.com/profiles/" + is_signed_in + "/gamecards/" + appid + "/ .badge_current", function(responseText) {
				if ($(responseText).find(".friendPlayerLevelNum").length != 1) {
					var card_num_owned = $(responseText).find(".badge_detail_tasks .owned").length;
					var card_num_total = $(responseText).find(".badge_detail_tasks .badge_card_set_card").length;
					var progress_text_length = $(responseText).find(".gamecard_badge_progress").text().trim().length;
					var next_level_empty_badge = $(responseText).find(".gamecard_badge_progress .badge_info").length;
					var show_card_num;
					var badge_completed;
					if(progress_text_length>0&&next_level_empty_badge==0){
						badge_completed=true;
					}
					if((card_num_owned>0&&progress_text_length==0)||(card_num_owned>0&&!badge_completed)){
						show_card_num=true;
					}
					if (badge_completed){
						$(".es_badge_progress").after("<div class='game_area_details_specs'><div class='icon'><img src='http://store.akamai.steamstatic.com/public/images/v6/ico/ico_cards.png' width=24 height=16 border=0 align=top></div><a href='http://steamcommunity.com/my/gamecards/" + appid + "/' class='name'>" + localized_strings[language].view_badge + "</a></div>");
					} else {
						$(".es_badge_progress").after("<div class='game_area_details_specs'><div class='icon'><img src='http://store.akamai.steamstatic.com/public/images/v6/ico/ico_cards.png' width=24 height=16 border=0 align=top></div><a href='http://steamcommunity.com/my/gamecards/" + appid + "/' class='name'>" + localized_strings[language].badge_progress + "</a></div>");
					}
					if(show_card_num){
						$(".es_badge_progress").after("<div style='padding-top: 2px; padding-bottom: 10px; margin-left: 44px; color: #67c1f5;'>" + localized_strings[language].cards_owned.replace("__owned__", card_num_owned).replace("__possible__", card_num_total) + "</div>");
					}
					$(".es_badge_progress").after("<div style='padding-top: 10px; padding-bottom: 10px; margin-left: 44px; color: #67c1f5;'>" + $(responseText).find(".progress_info_bold").text() + "</div>");
					$(".es_badge_progress").after("<div style=\"clear: both\"></div>");
					$(".es_badge_progress .badge_info_description").css({"width":"275px"});
					$(".es_badge_progress .badge_empty_circle").css({"margin":"0px 46px 14px 8px","border-radius":"46px"});
					$(".es_badge_progress .badge_empty_right div:last-child").remove();
					$(".es_badge_progress .badge_empty_right").append("<div class=\"badge_empty_name\">" + escapeHTML(localized_strings[language].badge_not_unlocked) + "</div>").append("<div style=\"clear: both\"></div>");
				} else {
					$(".es_badge_progress").remove();
				}
			});
			$(".es_foil_badge_progress").load("http://steamcommunity.com/profiles/" + is_signed_in +"/gamecards/" + appid + "/?border=1 .badge_current", function(responseText) {
				if ($(responseText).find(".friendPlayerLevelNum").length != 1) {
					var card_num_owned = $(responseText).find(".badge_detail_tasks .owned").length;
					var card_num_total = $(responseText).find(".badge_detail_tasks .badge_card_set_card").length;
					var progress_text_length = $(responseText).find(".gamecard_badge_progress").text().trim().length;
					var next_level_empty_badge = $(responseText).find(".gamecard_badge_progress .badge_info").length;
					var show_card_num;
					var badge_completed;
					if(progress_text_length>0&&next_level_empty_badge==0){
						badge_completed=true;
					}
					if((card_num_owned>0&&progress_text_length==0)||(card_num_owned>0&&!badge_completed)){
						show_card_num=true;
					}
					if ($(responseText).find(".badge_empty_circle").length != 1||card_num_owned>0) {
						$(".es_foil_badge_progress .badge_info_description").css({"width":"275px"});
						$(".es_foil_badge_progress .badge_empty_circle").css({"margin":"0px 46px 14px 8px","border-radius":"46px"});
						$(".es_foil_badge_progress .badge_empty_right div:last-child").remove();
						$(".es_foil_badge_progress .badge_empty_right").append("<div class=\"badge_empty_name\">" + escapeHTML(localized_strings[language].badge_not_unlocked) + "</div>")
						if (badge_completed){
							$(".es_foil_badge_progress").after("<div class='game_area_details_specs'><div class='icon'><img src='http://store.akamai.steamstatic.com/public/images/v6/ico/ico_cards.png' width=24 height=16 border=0 align=top></div><a href='http://steamcommunity.com/my/gamecards/" + appid + "/' class='name'>" + localized_strings[language].view_badge_foil + "</a><div>");
						} else {
							$(".es_foil_badge_progress").after("<div class='game_area_details_specs'><div class='icon'><img src='http://store.akamai.steamstatic.com/public/images/v6/ico/ico_cards.png' width=24 height=16 border=0 align=top></div><a href='http://steamcommunity.com/my/gamecards/" + appid + "/' class='name'>" + localized_strings[language].badge_foil_progress + "</a><div>");
						}
						if(show_card_num){
							$(".es_foil_badge_progress").after("<div style='padding-top: 2px; padding-bottom: 10px; margin-left: 44px; color: #67c1f5;'>" + localized_strings[language].cards_owned.replace("__owned__", card_num_owned).replace("__possible__", card_num_total) + "</div>");
						}
						$(".es_foil_badge_progress").after("<div style=\"clear: both\"></div>");
					} else {
						$(".es_foil_badge_progress").remove();
					}
				} else {
					$(".es_foil_badge_progress").remove();
				}
			});
		}
	}

	// Add Metacritic user scores to store page
	function add_metacritic_userscore() {
		if ($("#game_area_metascore")) {
			var metalink = $("#game_area_metalink").find("a").attr("href");
			get_http("http://api.enhancedsteam.com/metacritic/?mcurl=" + metalink, function (txt) {
				var metauserscore = parseFloat(txt)*10;
				var newmeta = '<div id="game_area_metascore" style="background-image: url( http://www.enhancedsteam.com/standalone/images/metacritic_bg.png );"><span>' + metauserscore + '</span><span class="ms_slash">/</span><span class="ms_base">100</span></div>';
				$("#game_area_metascore").after(newmeta);
			});
		}
	}

	// Add Steam user review score
	function add_steamreview_userscore(appid) {
		if ($(".game_area_dlc_bubble,.noReviewsYetTitle").length === 0) {
			var positive = 0,
				negative = 0;

			positive = parseFloat($("#ReviewsTab_positive").find("span:last").text().replace(/\(|\)|,/g, ""));
			negative = parseFloat($("#ReviewsTab_negative").find("span:last").text().replace(/\(|\)|,/g, ""));

			var pos_percent = ((positive / (positive + negative)) * 100).toFixed(0),
				neg_percent = ((negative / (positive + negative)) * 100).toFixed(0);

			if (!isNaN(pos_percent) && !isNaN(neg_percent)) {
				$(".game_details").find(".details_block:first").before('<div id="es_review_score"><div style="display: inline-block; margin-right: 25px;"><img src="http://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png" width="24" height="24" class="es_review_image"><span class="es_review_text"> ' + pos_percent + '%</span></div><div style="display: inline-block;"><img src="http://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown_v6.png" width="24" height="24" class="es_review_image"><span class="es_review_text"> ' + neg_percent + '%</span></div><div style="clear: both;"></div></div>');
			}
		}
	}

	function add_hltb_info(appid) {
		get_http("http://api.enhancedsteam.com/hltb/?appid=" + appid, function (txt) {
			if (txt.length > 0) {
				var data = JSON.parse(txt);
				if (data["hltb"]) {
					how_long_html = "<div class='block game_details underlined_links'>"
						+ "<div class='block_header'><h4>How Long to Beat</h4></div>"
						+ "<div class='block_content'><div class='block_content_inner'><div class='details_block'>";
					if (data["hltb"]["main_story"]){
						how_long_html += "<b>" + localized_strings[language].hltb.main + ":</b><span style='float: right;'>" + escapeHTML(data['hltb']['main_story']) + "</span><br>";
					}
					if (data["hltb"]["main_extras"]){
						how_long_html += "<b>" + localized_strings[language].hltb.main_e + ":</b><span style='float: right;'>" + escapeHTML(data['hltb']['main_extras']) + "</span><br>";
					}
					if (data["hltb"]["comp"]) {
						how_long_html += "<b>" + localized_strings[language].hltb.compl + ":</b><span style='float: right;'>" + escapeHTML(data['hltb']['comp']) + "</span><br>"
					}
					how_long_html += "</div>"
						+ "<a class='linkbar' href='" + escapeHTML(data['hltb']['url']) + "' target='_blank'>" + localized_strings[language].more_information + " <img src='http://cdn2.store.steampowered.com/public/images/v5/ico_external_link.gif' border='0' align='bottom'></a>"
						+ "<a class='linkbar' href='" + escapeHTML(data['hltb']['submit_url']) + "' target='_blank'>" + localized_strings[language].hltb.submit + " <img src='http://cdn2.store.steampowered.com/public/images/v5/ico_external_link.gif' border='0' align='bottom'></a>"
						+ "</div></div></div>";
					$("div.game_details:first").after(how_long_html);
				}
			}
		});
	}

	function add_pcgamingwiki_link(appid) {
		get_http("http://api.enhancedsteam.com/pcgw/?appid=" + appid, function (txt) {
			if (txt) {
				var data = JSON.parse(txt);
				for (var game_name in data["results"]) break;
				var url = data["results"][game_name]["fullurl"];
				$('#demo_block').prepend('<a class="btnv6_blue_hoverfade btn_medium pcgw_btn" target="_blank" href="' + url + '" style="display: block; margin-bottom: 6px;"><span><i class="ico16" style="background-image:url( http://www.enhancedsteam.com/standalone/images/pcgw.png )"></i>&nbsp;&nbsp; ' + localized_strings[language].wiki_article.replace("__pcgw__","PCGamingWiki") + '</span></a>');
			}
		});
	}

	// Display widescreen support information from wsgf.org
	function add_widescreen_certification(appid) {
		if (document.body.innerHTML.indexOf("<p>Requires the base game <a href=") <= 0) {
			// Check to see if game data exists
			get_http("http://api.enhancedsteam.com/wsgf/?appid=" + appid, function (txt) {
				found = 0;
				$(".game_details").each(function() {					
					node = this;				
					if (found == 0) {
						var data = JSON.parse(txt);
						if (data["node"]) {
							var path = data["node"]["Path"];
							var wsg = data["node"]["WideScreenGrade"];
							var mmg = data["node"]["MultiMonitorGrade"];
							var fkg = data["node"]["FourKGrade"];
							var uws = data["node"]["UltraWideScreenGrade"];
							var wsg_icon = "", wsg_text = "", mmg_icon = "", mmg_text = "";
							var fkg_icon = "", fkg_text = "", uws_icon = "", uws_text = "";

							switch (wsg) {
								case "A":
									wsg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/ws-gold.png";
									wsg_text = localized_strings[language].wsgf.gold.replace(/__type__/g, "Widescreen");
									break;
								case "B":
									wsg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/ws-silver.png";
									wsg_text = localized_strings[language].wsgf.silver.replace(/__type__/g, "Widescreen");
									break;
								case "C":
									wsg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/ws-limited.png";
									wsg_text = localized_strings[language].wsgf.limited.replace(/__type__/g, "Widescreen");
									break;
								case "Incomplete":
									wsg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/ws-incomplete.png";
									wsg_text = localized_strings[language].wsgf.incomplete;
									break;
								case "Unsupported":
									wsg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/ws-unsupported.png";
									wsg_text = localized_strings[language].wsgf.unsupported.replace(/__type__/g, "Widescreen");
									break;
							}

							switch (mmg) {
								case "A":
									mmg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/mm-gold.png";
									mmg_text = localized_strings[language].wsgf.gold.replace(/__type__/g, "Multi-Monitor");
									break;
								case "B":
									mmg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/mm-silver.png";
									mmg_text = localized_strings[language].wsgf.silver.replace(/__type__/g, "Multi-Monitor");
									break;
								case "C":
									mmg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/mm-limited.png";
									mmg_text = localized_strings[language].wsgf.limited.replace(/__type__/g, "Multi-Monitor");
									break;
								case "Incomplete":
									mmg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/mm-incomplete.png";
									mmg_text = localized_strings[language].wsgf.incomplete;
									break;
								case "Unsupported":
									mmg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/mm-unsupported.png";
									mmg_text = localized_strings[language].wsgf.unsupported.replace(/__type__/g, "Multi-Monitor");
									break;
							}

							switch (uws) {
								case "A":
									uws_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/uw-gold.png";
									uws_text = localized_strings[language].wsgf.gold.replace(/__type__/g, "Ultra-Widescreen");
									break;
								case "B":
									uws_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/uw-silver.png";
									uws_text = localized_strings[language].wsgf.silver.replace(/__type__/g, "Ultra-Widescreen");
									break;
								case "C":
									uws_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/uw-limited.png";
									uws_text = localized_strings[language].wsgf.limited.replace(/__type__/g, "Ultra-Widescreen");
									break;
								case "Incomplete":
									uws_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/uw-incomplete.png";
									uws_text = localized_strings[language].wsgf.incomplete;
									break;
								case "Unsupported":
									uws_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/uw-unsupported.png";
									uws_text = localized_strings[language].wsgf.unsupported.replace(/__type__/g, "Ultra-Widescreen");
									break;
							}

							switch (fkg) {
								case "A":
									fkg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/4k-gold.png";
									fkg_text = localized_strings[language].wsgf.gold.replace(/__type__/g, "4k UHD");
									break;
								case "B":
									fkg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/4k-silver.png";
									fkg_text = localized_strings[language].wsgf.silver.replace(/__type__/g, "4k UHD");
									break;
								case "C":
									fkg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/4k-limited.png";
									fkg_text = localized_strings[language].wsgf.limited.replace(/__type__/g, "4k UHD");
									break;
								case "Incomplete":
									fkg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/4k-incomplete.png";
									fkg_text = localized_strings[language].wsgf.incomplete;
									break;
								case "Unsupported":
									fkg_icon = "http://www.enhancedsteam.com/standalone/images/wsgf/4k-unsupported.png";
									fkg_text = localized_strings[language].wsgf.unsupported.replace(/__type__/g, "4k UHD");
									break;
							}

							var html = "<div class='block underlined_links'><div class='block_header'><h4>WSGF Widescreen Certifications</h4></div><div class='block_content'><div class='block_content_inner'><div class='details_block'><center>";

							if (wsg != "Incomplete") { html += "<a target='_blank' href='" + escapeHTML(path) + "'><img src='" + escapeHTML(wsg_icon) + "' height='120' title='" + escapeHTML(wsg_text) + "' border=0></a>&nbsp;&nbsp;&nbsp;"; }
							if (mmg != "Incomplete") { html += "<a target='_blank' href='" + escapeHTML(path) + "'><img src='" + escapeHTML(mmg_icon) + "' height='120' title='" + escapeHTML(mmg_text) + "' border=0></a>&nbsp;&nbsp;&nbsp;"; }
							if (uws != "Incomplete") { html += "<a target='_blank' href='" + escapeHTML(path) + "'><img src='" + escapeHTML(uws_icon) + "' height='120' title='" + escapeHTML(uws_text) + "' border=0></a>&nbsp;&nbsp;&nbsp;"; }
							if (fkg != "Incomplete") { html += "<a target='_blank' href='" + escapeHTML(path) + "'><img src='" + escapeHTML(fkg_icon) + "' height='120' title='" + escapeHTML(fkg_text) + "' border=0></a>&nbsp;&nbsp;&nbsp;"; }
							if (path) { html += "</center><br><a class='linkbar' target='_blank' href='" + escapeHTML(path) + "'>" + localized_strings[language].rating_details + " <img src='http://cdn2.store.steampowered.com/public/images/v5/ico_external_link.gif' border='0' align='bottom'></a>"; }
							html += "</div></div></div></div>";
							$(node).after(html);
						}
						found = 1;
					}
				});
			});
		}
	}

	function send_age_verification() {
		document.getElementsByName("ageYear")[0].value="1955";
		document.getElementsByClassName("btnv6_blue_hoverfade")[0].click();
	}

	// Add a link to options to the global menu (where is Install Steam button)
	function add_enhanced_steam_options() {
		$dropdown = $("<span class=\"pulldown global_action_link\" id=\"enhanced_pulldown\">Enhanced Steam</span>");
		$dropdown_options_container = $("<div class=\"popup_block_new\"><div class=\"popup_body popup_menu\" id=\"es_popup\"></div></div>");
		$dropdown_options = $dropdown_options_container.find(".popup_body");
		$dropdown_options.css("display", "none");

		// remove menu if click anywhere but on "Enhanced Steam". Commented out bit is for clicking on menu won't make it disappear either.
		$('body').bind('click', function(e) {
			if(/*$(e.target).closest(".popup_body").length == 0 && */$(e.target).closest("#enhanced_pulldown").length == 0) {
				if ($dropdown_options.css("display") == "block" || $dropdown_options.css("display") == "") {
					$dropdown_options.css("display", "none");
				}
			}
		});

		$dropdown.click(function(){
			$dropdown_options.toggle();
		});

		$website_link = $("<a class=\"popup_menu_item\" target=\"_blank\" href=\"http://www.enhancedsteam.com\">" + localized_strings[language].website + "</a>");
		$contribute_link = $("<a class=\"popup_menu_item\" target=\"_blank\" href=\"//github.com/jshackles/Enhanced_Steam\">" + localized_strings[language].contribute + "</a>");
		$translate_link = $("<a class=\"popup_menu_item\" target=\"_blank\" href=\"//translation.enhancedsteam.com\">" + localized_strings[language].translate + "</a>");
		$bug_feature_link = $("<a class=\"popup_menu_item\" target=\"_blank\" href=\"//github.com/jshackles/Enhanced_Steam/issues\">" + localized_strings[language].bug_feature + "</a>");
		$donation_link = $("<a class=\"popup_menu_item\" target=\"_blank\" href=\"//enhancedsteam.com/donate.php\">" + localized_strings[language].donate + "</a>");
		$group_link = $("<a class=\"popup_menu_item\" target=\"_blank\" href=\"//" + localized_strings[language].official_group_url + "\">" + localized_strings[language].official_group + "</a>");

		$clear_cache_link = $("<a class=\"popup_menu_item\" href=\"\">" + localized_strings[language].clear_cache + "</a>");
		$clear_cache_link.click(function(){
			localStorage.clear();
			location.reload();
		});

		$spacer = $("<div class=\"hr\"></div>");

		$dropdown_options.append($clear_cache_link);
		$dropdown_options.append($spacer.clone());
		$dropdown_options.append($contribute_link);
		$dropdown_options.append($translate_link);
		$dropdown_options.append($bug_feature_link);
		$dropdown_options.append($spacer.clone());
		$dropdown_options.append($website_link);
		$dropdown_options.append($group_link);
		$dropdown_options.append($donation_link);

		$("#global_action_menu")
			.before($dropdown)
			.before($dropdown_options_container);

		$("#global_actions").after("<progress id='es_progress' class='complete' value='1' max='1' title='" + localized_strings[language].ready.ready + "'></progress>");
	}

	function add_fake_country_code_warning() {
		var LKGBillingCountry = getCookie("LKGBillingCountry");
		var fakeCC = getCookie("fakeCC");

		if (fakeCC && LKGBillingCountry && LKGBillingCountry.length == 2 && LKGBillingCountry != fakeCC) {
			$("#global_header").after('<div class=content style="background-image: url( ' + self.options.img_red_banner + ' ); height: 21px; text-align: center; padding-top: 8px;">' + escapeHTML(localized_strings[language].using_store.replace("__current__", escapeHTML(fakeCC))) + '  <a href="#" id="reset_fake_country_code">' + escapeHTML(localized_strings[language].using_store_return.replace("__base__", escapeHTML(LKGBillingCountry))) + '</a></div>');
			$("#page_background_holder").css("top", "135px");
			$("#reset_fake_country_code").click(function(e) {
				e.preventDefault();
				document.cookie = 'fakeCC=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';
				window.location.replace(window.location.href.replace(/[?&]cc=.{2}/, ""));
			})
		}
	}

	// Remove the "Install Steam" button at the top of each page
	function remove_install_steam_button() {
		$('div.header_installsteam_btn').replaceWith('');
	}

	function show_pricing_history(appid, type) {
		storestring = "steam,amazonus,impulse,gamersgate,greenmangaming,gamefly,origin,uplay,indiegalastore,gametap,gamesplanet,getgames,desura,gog,dotemu,fireflower,gameolith,humblewidgets,adventureshop,nuuvem,shinyloot,dlgamer,humblestore,indiegamestand,squenix,bundlestars";

		// Get country code from Steam cookie
		var cookies = document.cookie;
		var matched = cookies.match(/fakeCC=([a-z]{2})/i);
		var cc = "us";
		if (matched != null && matched.length == 2) {
			cc = matched[1];
		} else {
			matched = cookies.match(/steamCC(?:_\d+){4}=([a-z]{2})/i);
			if (matched != null && matched.length == 2) {
				cc = matched[1];
			}
		}

		function get_price_data(lookup_type, node, id) {	
			get_http("http://api.enhancedsteam.com/pricev2/?search=" + lookup_type + "/" + id + "&stores=" + storestring + "&cc=" + cc + "&coupon=true", function (txt) {
				var data = JSON.parse(txt);
				if (data) {
					var activates = "", line1 = "", line2 = "", line3 = "", html, recorded, currency_symbol, comma = false, at_end = false;
					var currency_type = data[".meta"]["currency"];

					switch (data[".meta"]["currency"]) {
						case "GBP":
							currency_symbol = "£";
							break;
						case "EUR":
							currency_symbol = "€";
							comma = true;
							at_end = true;
							break;
						case "BRL":
							currency_symbol = "R$ ";
							comma = true;
							break;
						default:
							currency_symbol = "$";
					}
					
					// "Lowest Price"
					if (data["price"]) {
						if (data["price"]["drm"] == "steam") {
							activates = "(<b>" + escapeHTML(localized_strings[language].activates) + "</b>)";
							if (data["price"]["store"] == "Steam") {
								activates = "";
							}
						}

						line1 = escapeHTML(localized_strings[language].lowest_price) + ': ' + formatCurrency(escapeHTML(data["price"]["price"].toString()), currency_type) + ' at <a href="' + escapeHTML(data["price"]["url"].toString()) + '" target="_blank">' + escapeHTML(data["price"]["store"].toString()) + '</a> ' + activates + ' (<a href="' + escapeHTML(data["urls"]["info"].toString()) + '" target="_blank">' + escapeHTML(localized_strings[language].info) + '</a>)';
						
						if (data["price"]["price_voucher"]) {
							line1 = escapeHTML(localized_strings[language].lowest_price) + ': ' + formatCurrency(escapeHTML(data["price"]["price_voucher"].toString()), currency_type) + ' at <a href="' + escapeHTML(data["price"]["url"].toString()) + '" target="_blank">' + escapeHTML(data["price"]["store"].toString()) + '</a> ' + escapeHTML(localized_strings[language].after_coupon) + ' <b>' + escapeHTML(data["price"]["voucher"].toString()) + '</b> ' + activates + ' (<a href="' + escapeHTML(data["urls"]["info"].toString()) + '" target="_blank">' + escapeHTML(localized_strings[language].info) + '</a>)';
						}
					}

					// "Historical Low"
					if (data["lowest"]) {
						recorded = new Date(data["lowest"]["recorded"]*1000);
						line2 = escapeHTML(localized_strings[language].historical_low) + ': ' + formatCurrency(escapeHTML(data["lowest"]["price"].toString()), currency_type) + ' at ' + escapeHTML(data["lowest"]["store"].toString()) + ' on ' + escapeHTML(recorded.toDateString()) + ' (<a href="' + escapeHTML(data["urls"]["history"].toString()) + '" target="_blank">Info</a>)';
					}

					var html = "<div class='es_lowest_price' id='es_price_" + escapeHTML(id.toString()) + "'><div class='gift_icon' id='es_line_chart_" + escapeHTML(id.toString()) + "'><img src='http://www.enhancedsteam.com/standalone/images/line_chart.png'></div>";

					// "Number of times this game has been in a bundle"
					if (data["bundles"]["count"] > 0) {
						line3 = "<br>" + escapeHTML(localized_strings[language].bundle.bundle_count) + ": " + data["bundles"]["count"] + ' (<a href="' + escapeHTML(data["urls"]["bundle_history"].toString()) + '" target="_blank">Info</a>)';						
					}

					if (line1 && line2) {
						$(node).before(html + line1 + "<br>" + line2 + line3);
						$("#es_line_chart_" + id).css("top", (($("#es_price_" + id).outerHeight() - 20) / 2) + "px");
					}

					if (data["bundles"]["active"].length > 0) {
						var length = data["bundles"]["active"].length;
						for (var i = 0; i < length; i++) {
							var enddate;
							if (data["bundles"]["active"][i]["expiry"]) {
								enddate = new Date(data["bundles"]["active"][i]["expiry"]*1000);
							}
							var currentdate = new Date().getTime();
							if (!enddate || currentdate < enddate) {
								if (data["bundles"]["active"][i]["page"]) { purchase = '<div class="game_area_purchase_game_wrapper"><div class="game_area_purchase_game"><div class="game_area_purchase_platform"></div><h1>' + localized_strings[language].buy + ' ' + data["bundles"]["active"][i]["page"] + ' ' + data["bundles"]["active"][i]["title"] + '</h1>'; } 
								else { purchase = '<div class="game_area_purchase_game_wrapper"><div class="game_area_purchase_game"><div class="game_area_purchase_platform"></div><h1>' + localized_strings[language].buy + ' ' + data["bundles"]["active"][i]["title"] + '</h1>'; }
								if (enddate) purchase += '<p class="game_purchase_discount_countdown">' + localized_strings[language].bundle.offer_ends + ' ' + enddate + '</p>';
								purchase += '<p class="package_contents"><b>' + localized_strings[language].bundle.includes.replace("(__num__)", data["bundles"]["active"][i]["games"].length) + ':</b> '
								data["bundles"]["active"][i]["games"].forEach(function(entry) {
									purchase += entry + ", ";
								});
								purchase = purchase.replace(/, $/, "");
								purchase += '</p><div class="game_purchase_action"><div class="game_purchase_action_bg"><div class="btn_addtocart btn_packageinfo"><div class="btn_addtocart_left"></div><a class="btn_addtocart_content" href="' + data["bundles"]["active"][i]["details"] + '" target="_blank">' + localized_strings[language].bundle.info + '</a><div class="btn_addtocart_right"></div></div></div><div class="game_purchase_action_bg">';
								if (data["bundles"]["active"][i]["price"] > 0) {										
									if (data["bundles"]["active"][i]["pwyw"]) {
										purchase += '<div class="es_each_box" itemprop="price">';
										purchase += '<div class="es_each">' + localized_strings[language].bundle.at_least + '</div><div class="es_each_price" style="text-align: right;">' + formatCurrency(escapeHTML(data["bundles"]["active"][i]["price"].toString()), currency_type) + '</div>';
									} else {
										purchase += '<div class="game_purchase_price price" itemprop="price">';
										purchase += formatCurrency(escapeHTML(data["bundles"]["active"][i]["price"].toString()), currency_type);
									}
								 }
								purchase += '</div><div class="btn_addtocart"><div class="btn_addtocart_left"></div>';
								purchase += '<a class="btn_addtocart_content" href="' + data["bundles"]["active"][i]["url"] + '" target="_blank">';
								purchase += localized_strings[language].buy;
								purchase += '</a><div class="btn_addtocart_right"></div></div></div></div></div></div>';
								$("#game_area_purchase").after(purchase);
								
								$("#game_area_purchase").after("<h2 class='gradientbg'>" + localized_strings[language].bundle.header + " <img src='http://cdn3.store.steampowered.com/public/images/v5/ico_external_link.gif' border='0' align='bottom'></h2>");
							}
						}
					}
				}
			});
		}

		switch (type) {
			case "app":
				get_price_data(type, $(".game_area_purchase_game_wrapper:first"), appid);

				$(".game_area_purchase_game_wrapper").not(".game_area_purchase_game_wrapper:first").each(function() {
					var subid = $(this).find("input[name=subid]").val();
					get_price_data("sub", $(this), subid);
				});
				break;
			case "sub":
				get_price_data(type, $(".game_area_purchase_game:first"), appid);
				break;
		}
	}

	// pull DLC gamedata from enhancedsteam.com
	function dlc_data_from_site(appid) {
		if ($("div.game_area_dlc_bubble").length > 0) {
			var appname = $(".apphub_AppName").html();
			appname = appname.replace("&amp;", "and");
			appname = appname.replace("\"", "");
			appname = appname.replace("“", "");		
			get_http("http://www.enhancedsteam.com/gamedata/gamedata.php?appid=" + appid + "&appname=" + appname, function (txt) {
				var block = "<div class='block'><div class='block_header'><h4>Downloadable Content Details</h4></div><div class='block_content'><div class='block_content_inner'>" + txt + "</div></div></div>";
			
				var dlc_categories = document.getElementById('demo_block');
				dlc_categories.insertAdjacentHTML('afterend', block);
			});
		}
	}

	// Add a link to an item's page on steamdb.info
	function add_steamdb_links(appid, type) {
		switch (type) {
			case "gamehub":
				$(".apphub_OtherSiteInfo").append('<a class="btnv6_blue_hoverfade btn_medium steamdb_ico" target="_blank" href="http://steamdb.info/app/' + appid + '/"><span><i class="ico16" style="background-image:url( http://www.enhancedsteam.com/standalone/images/steamdb_store.png )"></i>&nbsp; Steam Database</span></a>');
				break;
			case "gamegroup":
				$('#rightActionBlock' ).append('<div class="actionItemIcon"><img src="http://www.enhancedsteam.com/standalone/images/steamdb.png") width="16" height="16" alt=""></div><a class="linkActionMinor" target="_blank" href="http://steamdb.info/app/' + appid + '/">' + localized_strings[language].view_in + ' Steam Database</a>');
				break;
			case "app":
				$('#demo_block').prepend('<a class="btnv6_blue_hoverfade btn_medium steamdb_ico" target="_blank" href="http://steamdb.info/app/' + appid + '/" style="display: block; margin-bottom: 6px;"><span><i class="ico16" style="background-image:url( http://www.enhancedsteam.com/standalone/images/steamdb_store.png )"></i>&nbsp; &nbsp;' + localized_strings[language].view_in + ' Steam Database</span></a>');
				break;
			case "sub":
				$(".share").before('<a class="btnv6_blue_hoverfade btn_medium steamdb_ico" target="_blank" href="http://steamdb.info/sub/' + appid + '/" style="display: block; margin-bottom: 6px;"><span><i class="ico16" style="background-image:url( http://www.enhancedsteam.com/standalone/images/steamdb_store.png )"></i>&nbsp; &nbsp;' + localized_strings[language].view_in + ' Steam Database</span></a>');
				break;
		}

		$(".steamdb_ico").hover(
			function() {
				$(this).find("i").css("background-image", "url( http://www.enhancedsteam.com/standalone/images/steamdb_store_black.png )");
			}, function() {
				$(this).find("i").css("background-image", "url( http://www.enhancedsteam.com/standalone/images/steamdb_store.png )");
			}
		)
	}

	function add_familysharing_warning(appid) {
		var exfgls_appids, exfgls_promise = (function () {
			var deferred = new $.Deferred();
			if (window.location.protocol != "https:") {
				// is the data cached?
				var expire_time = parseInt(Date.now() / 1000, 10) - 8 * 60 * 60;
				var last_updated = getValue("exfgls_appids_time") || expire_time - 1;
				
				if (last_updated < expire_time) {
					// if no cache exists, pull the data from the website
					get_http("//api.enhancedsteam.com/exfgls/", function(txt) {
						exfgls_appids = txt;
						setValue("exfgls_appids", exfgls_appids);
						setValue("exfgls_appids_time", parseInt(Date.now() / 1000, 10));
						deferred.resolve();	
					});
				} else {
					exfgls_appids = getValue("exfgls_appids");
					deferred.resolve();
				}
				
				return deferred.promise();
			} else {
				deferred.resolve();
				return deferred.promise();
			}
		})();

		exfgls_promise.done(function(){
			var exfgls = JSON.parse(getValue("exfgls_appids"));
			if (exfgls["exfgls"].indexOf(appid) >= 0) {
				$("#game_area_purchase").before('<div id="purchase_note"><div class="notice_box_top"></div><div class="notice_box_content">' + localized_strings[language].family_sharing_notice + '</div><div class="notice_box_bottom"></div></div>');
			}
		});
	}

	// Display information on current players from SteamCharts.com
	function add_steamchart_info(appid) {
		if ($(".game_area_dlc_bubble").length == 0) {
			get_http("http://api.enhancedsteam.com/charts/?appid=" + appid, function (txt) {
				if (txt.length > 0) {
					var data = JSON.parse(txt);
					if (data["chart"]) {
						var html = '<div id="steam-charts" class="game_area_description"><h2>' + localized_strings[language].charts.current + '</h2>';
						html += '<div id="chart-heading" class="chart-content"><div id="chart-image"><img src="http://cdn.akamai.steamstatic.com/steam/apps/' + appid + '/capsule_184x69.jpg" width="184" height="69"></div><div class="chart-stat">';
						html += '<span class="num">' + escapeHTML(data["chart"]["current"]) + '</span><br>' + localized_strings[language].charts.playing_now + '</div><div class="chart-stat">';
						html += '<span class="num">' + escapeHTML(data["chart"]["peaktoday"]) + '</span><br>' + localized_strings[language].charts.peaktoday + '</div><div class="chart-stat">';
						html += '<span class="num">' + escapeHTML(data["chart"]["peakall"]) + '</span><br>' + localized_strings[language].charts.peakall + '</div><span class="chart-footer">Powered by <a href="http://steamcharts.com/app/' + appid + '" target="_blank">SteamCharts.com</a></span></div></div>';

						$(".sys_req").parent().before(html);
					}
				}
			});
		}
	}

	// Add red warnings for 3rd party DRMs
	function drm_warnings(type) {
		var gfwl;
		var uplay;
		var securom;
		var tages;
		var stardock;
		var rockstar;
		var kalypso;
		var drm;

		var text = $("#game_area_description").html();
		text += $("#game_area_sys_req").html();
		text += $("#game_area_legal").html();
		text += $(".game_details").html();
		text += $(".DRM_notice").html();

		// Games for Windows Live detection
		if (text.toUpperCase().indexOf("GAMES FOR WINDOWS LIVE") > 0) { gfwl = true; }
		if (text.toUpperCase().indexOf("GAMES FOR WINDOWS - LIVE") > 0) { gfwl = true; }
		if (text.indexOf("Online play requires log-in to Games For Windows") > 0) { gfwl = true; }
		if (text.indexOf("INSTALLATION OF THE GAMES FOR WINDOWS LIVE SOFTWARE") > 0) { gfwl = true; }
		if (text.indexOf("Multiplayer play and other LIVE features included at no charge") > 0) { gfwl = true; }
		if (text.indexOf("www.gamesforwindows.com/live") > 0) { gfwl = true; }

		// Ubisoft Uplay detection
		if (text.toUpperCase().indexOf("CREATION OF A UBISOFT ACCOUNT") > 0) { uplay = true; }
		if (text.toUpperCase().indexOf("UPLAY") > 0) { uplay = true; }

		// Securom detection
		if (text.toUpperCase().indexOf("SECUROM") > 0) { securom = true; }

		// Tages detection			
		if (text.match(/\btages\b/i)) { tages = true; }
		if (text.match(/angebote des tages/i)) { tages = false; }
		if (text.match("/\bsolidshield\b/i")) { tages = true; }

		// Stardock account detection
		if (text.indexOf("Stardock account") > 0) { stardock = true; }

		// Rockstar social club detection
		if (text.indexOf("Rockstar Social Club") > 0) { rockstar = true; }
		if (text.indexOf("Rockstar Games Social Club") > 0) { rockstar = true; }

		// Kalypso Launcher detection
		if (text.indexOf("Requires a Kalypso account") > 0) { kalypso = true; }

		// Detect other DRM
		if (text.indexOf("3rd-party DRM") > 0) { drm = true; }
		if (text.indexOf("No 3rd Party DRM") > 0) { drm = false; }
		
		var string_type;
		var drm_string = "(";
		if (type == "app") { string_type = localized_strings[language].drm_third_party; } else { string_type = localized_strings[language].drm_third_party_sub; }
		
		if (gfwl) { drm_string += 'Games for Windows Live, '; drm = true; }
		if (uplay) { drm_string += 'Ubisoft Uplay, '; drm = true; }
		if (securom) { drm_string += 'SecuROM, '; drm = true; }
		if (tages) { drm_string += 'Tages, '; drm = true; }
		if (stardock) { drm_string += 'Stardock Account Required, '; drm = true; }
		if (rockstar) { drm_string += 'Rockstar Social Club, '; drm = true; }
		if (kalypso) { drm_string += "Kalypso Launcher, "; drm = true; }

		if (drm_string == "(") {
			drm_string = "";
		} else {
			drm_string = drm_string.substring(0, drm_string.length - 2);
			drm_string += ")";
		}

		if (drm) {
			if ($("#game_area_purchase").find(".game_area_description_bodylabel").length > 0) {
				$("#game_area_purchase").find(".game_area_description_bodylabel").after('<div class="game_area_already_owned es_drm_warning" style="background-image: url( \'http://www.enhancedsteam.com/standalone/images/game_area_warning.png\' );"><span>' + string_type + ' ' + drm_string + '</span></div>');
			} else {
				$("#game_area_purchase").prepend('<div class="game_area_already_owned es_drm_warning" style="background-image: url( \'http://www.enhancedsteam.com/standalone/images/game_area_warning.png\' );"><span>' + string_type + ' ' + drm_string + '</span></div>');
			}
		}
	}

	function start_friend_activity_highlights() {
		var selectors = [
			".blotter_author_block a",
			".blotter_gamepurchase_details a",
			".blotter_daily_rollup_line a"
		];

		$.each(selectors, function (i, selector) {
			$.each($(selector), function(j, node){
				var appid = get_appid(node.href);
				if (appid && !node.classList.contains("blotter_userstats_game")) {
					get_app_details(appid, node);
				}
			});
		});
	}

	function rewrite_string(string, websafe) {
		if (websafe) {
			string = encodeURIComponent(string);
		} else {
			string = decodeURI(string);
		}
		return string;
	}

	function add_app_page_highlights(appid) {
		if (window.location.host == "store.steampowered.com") node = $(".apphub_HeaderStandardTop")[0];
		if (window.location.host == "steamcommunity.com") node = $(".apphub_HeaderTop")[0];

		highlight_app(appid, node);
	}

	function add_badge_completion_cost() {
		$(".profile_xp_block_right").after("<div id='es_cards_worth'></div>");
		get_http("http://store.steampowered.com/app/220/", function(txt) {
			var currency_symbol = $(txt).find(".price, .discount_final_price").text().trim().match(/(?:R\$|\$|€|£|pуб)/)[0];
			var currency_type = currency_symbol_to_type(currency_symbol);		
			var total_worth = 0, count = 0;
			$(".badge_row").each(function() {
				var game = $(this).find(".badge_row_overlay").attr("href").match(/\/(\d+)\//);
				var foil = $(this).find("a:last").attr("href").match(/\?border=1/);
				var node = $(this);			
				if (game) {
					var url = "http://api.enhancedsteam.com/market_data/average_card_price/?appid=" + game[1] + "&cur=" + currency_type.toLowerCase();
					if (foil) { url = url + "&foil=true"; }
					get_http(url, function(txt) {
						if ($(node).find("div[class$='badge_progress_info']").text()) {
							var card = $(node).find("div[class$='badge_progress_info']").text().trim().match(/(\d+)\D*(\d+)/);
							var need = card[2] - card[1];
						}

						var cost = (need * parseFloat(txt)).toFixed(2);

						if ($(node).find(".progress_info_bold").text()) {
							var drops = $(node).find(".progress_info_bold").text().match(/\d+/);
							if (drops) { var worth = (drops[0] * parseFloat(txt)).toFixed(2); }
						}

						if (worth > 0) {
							total_worth = total_worth + parseFloat(worth);
						}

						cost = formatCurrency(cost, currency_type);
						card = formatCurrency(worth, currency_type);
						worth_formatted = formatCurrency(total_worth, currency_type);

						if (worth > 0) {
							$(node).find(".how_to_get_card_drops").after("<span class='es_card_drop_worth'>" + localized_strings[language].drops_worth_avg + " " + card + "</span>")
							$(node).find(".how_to_get_card_drops").remove();
						}

						$(node).find(".badge_empty_name:last").after("<div class='badge_info_unlocked' style='color: #5c5c5c;'>" + localized_strings[language].badge_completion_avg + ": " + cost + "</div>");
						$(node).find(".badge_empty_right").css("margin-top", "7px");
						$(node).find(".gamecard_badge_progress .badge_info").css("width", "296px");

						if (total_worth > 0) {
							$("#es_cards_worth").text(localized_strings[language].drops_worth_avg + " " + worth_formatted);
						}
					});
				}
			});
		});
	}

	function add_total_drops_count() {
		var drops_count = 0;
		var drops_games = 0;
		var booster_games = 0;
		$(".progress_info_bold").each(function(i, obj) {
			var parent = ($(obj).parent().parent().html().trim());
			if (!(parent.match(/^<div class="badge_title_stats">/))) {
				return false;
			}

			var obj_count = obj.innerHTML.match(/\d+/);
			if (obj_count) {
				drops_count += parseInt(obj_count[0]);
				drops_games = drops_games + 1;
			}
		});

		get_http("http://steamcommunity.com/my/ajaxgetboostereligibility/", function(txt) {
			var eligible = $.parseHTML(txt);
			$(eligible).find(".booster_eligibility_games").children().each(function(i, obj) {
				booster_games += 1;
			});

			$(".profile_xp_block_right").html("<span style='color: #fff;'>" + localized_strings[language].card_drops_remaining.replace("__drops__", drops_count) + "<br>" + localized_strings[language].games_with_drops.replace("__dropsgames__", drops_games) + "<br>" + localized_strings[language].games_with_booster.replace("__boostergames__", booster_games) + "</span>");
			if ($(".badge_details_set_favorite").find(".btn_grey_black").length > 0) { $(".badge_details_set_favorite").append("<div class='btn_grey_black btn_small_thin' id='es_faq_link'><span>" + localized_strings[language].faqs + "</span></div>"); }
			$("#es_faq_link").click(function() {
				window.location = "http://steamcommunity.com/tradingcards/faq";
			});
		});
	}

	function get_gamecard(t) {
		if (t && t.match(/(?:id|profiles)\/.+\/gamecards\/(\d+)/)) return RegExp.$1;
		else return null;
	}

	function add_cardexchange_links(game) {
		$(".badge_row").each(function () {
			var node = this;
			var gamecard = game || get_gamecard($(node).find(".badge_row_overlay").attr('href'));
			if(!gamecard) return;
			$(node).prepend('<div style="position: absolute; z-index: 3; top: 12px; right: 12px;" class="es_steamcardexchange_link"><a href="http://www.steamcardexchange.net/index.php?gamepage-appid-' + gamecard + '" target="_blank" alt="Steam Card Exchange" title="Steam Card Exchange"><img src="http://www.enhancedsteam.com/standalone/images/ico/steamcardexchange.png" width="24" height="24" border="0" /></a></div>');
			$(node).find(".badge_title_row").css("padding-right", "44px");
		});
	}

	function add_badge_filter() {
		if ( $(".profile_small_header_texture a")[0].href == window.location.origin + window.location.pathname.replace("/badges/", "")) {
			var html  = "<div style='text-align: right;'><span>" + localized_strings[language].show + ": </span>";
				html += "<label class='badge_sort_option whiteLink es_badges' id='es_badge_all'><input type='radio' name='es_badge_sort' checked><span>" + localized_strings[language].badges_all + "</span></label>";
				html += "<label class='badge_sort_option whiteLink es_badges' id='es_badge_drops'><input type='radio' name='es_badge_sort'><span>" + localized_strings[language].badges_drops + "</span></label>";
				html += "</div>";

			$('.profile_badges_header').append(html);

			var resetLazyLoader = function() { runInPageContext(function() { 
					// Clear registered image lazy loader watchers (CScrollOffsetWatcher is found in shared_global.js)
					CScrollOffsetWatcher.sm_rgWatchers = [];
					
					// Recreate registered image lazy loader watchers
					$J('div[id^=image_group_scroll_badge_images_gamebadge_]').each(function(i,e){
						// LoadImageGroupOnScroll is found in shared_global.js
						LoadImageGroupOnScroll(e.id, e.id.substr(19));
					});
				});
			};
			
			$('#es_badge_all').on('click', function() {
				$('.is_link').css('display', 'block');			
				resetLazyLoader();
			});

			$('#es_badge_drops').on('click', function() {
				$('.is_link').each(function () {
					if (!($(this).html().match(/progress_info_bold".+\d/))) {
						$(this).css('display', 'none');
					} else if (parseFloat($(this).html().match(/progress_info_bold".+?(\d+)/)[1]) == 0) {					
						$(this).css('display', 'none');				
					} else {
						if ($(this).html().match(/badge_info_unlocked/)) {
							if (!($(this).html().match(/badge_current/))) {
								$(this).css('display', 'none');
							}
						}
						// Hide foil badges too
						if (!($(this).html().match(/progress_info_bold/))) {
							$(this).css('display', 'none');
						}
					}
				});
				resetLazyLoader();
			});
		}
	}

	function add_badge_sort() {
		if ($(".profile_badges_sortoptions").find("a[href$='sort=r']").length > 0) {
			$(".profile_badges_sortoptions").find("a[href$='sort=r']").after("&nbsp;&nbsp;<a class='badge_sort_option whiteLink' id='es_badge_sort_drops'>" + localized_strings[language].most_drops + "</a>&nbsp;&nbsp;<a class='badge_sort_option whiteLink' id='es_badge_sort_value'>" + localized_strings[language].drops_value + "</a>");
		}

		var resetLazyLoader = function() { runInPageContext(function() { 
				// Clear registered image lazy loader watchers (CScrollOffsetWatcher is found in shared_global.js)
				CScrollOffsetWatcher.sm_rgWatchers = [];
				
				// Recreate registered image lazy loader watchers
				$J('div[id^=image_group_scroll_badge_images_gamebadge_]').each(function(i,e){
					// LoadImageGroupOnScroll is found in shared_global.js
					LoadImageGroupOnScroll(e.id, e.id.substr(19));
				});
			});
		};

		$("#es_badge_sort_drops").on("click", function() {
			var badgeRows = [];
			$('.badge_row').each(function () {
				var push = new Array();
				if ($(this).html().match(/progress_info_bold".+\d/)) {
					push[0] = this.outerHTML;
					push[1] = $(this).find(".progress_info_bold").html().match(/\d+/)[0];
				} else {
					push[0] = this.outerHTML;
					push[1] = "0";
				}
				badgeRows.push(push);
				this.parentNode.removeChild(this);
			});

			badgeRows.sort(function(a,b) {
				var dropsA = parseInt(a[1],10);
				var dropsB = parseInt(b[1],10);

				if (dropsA < dropsB) {
					return 1;
				} else {
					return -1;
				}	
			});

			$('.badge_row').each(function () { $(this).css("display", "none"); });

			$(badgeRows).each(function() {
				$(".badges_sheet:first").append(this[0]);
			});

			$(".active").removeClass("active");
			$(this).addClass("active");
			resetLazyLoader();
		});

		$("#es_badge_sort_value").on("click", function() {
			var badgeRows = [];
			$('.badge_row').each(function () {
				var push = new Array();
				if ($(this).find(".es_card_drop_worth").length > 0) {
					push[0] = this.outerHTML;
					push[1] = $(this).find(".es_card_drop_worth").html();
				} else {
					push[0] = this.outerHTML;
					push[1] = localized_strings[language].drops_worth_avg;
				}
				badgeRows.push(push);
				$(this).remove();
			});

			badgeRows.sort(function(a, b) {
				var worthA = a[1];
				var worthB = b[1];

				if (worthA < worthB) {
					return 1;
				} else {
					return -1;
				}
			});

			$('.badge_row').each(function () { $(this).css("display", "none"); });

			$(badgeRows).each(function() {
				$(".badges_sheet:first").append(this[0]);
			});

			$(".active").removeClass("active");
			$(this).addClass("active");
			resetLazyLoader();
		});	
	}

	function add_gamecard_market_links(game) {
		var foil;
		var url_search = window.location.search;
		var url_parameters_array = url_search.replace("?","").split("&");
		var cost = 0;

		$.each(url_parameters_array,function(index,url_parameter){
			if(url_parameter=="border=1"){
				foil=true;
			}
		});

		get_http("http://store.steampowered.com/app/220/", function(txt) {
			var currency_symbol = $(txt).find(".price, .discount_final_price").text().trim().match(/(?:R\$|\$|€|£|pуб)/)[0];
			var currency_type = currency_symbol_to_type(currency_symbol);

			get_http("http://api.enhancedsteam.com/market_data/card_prices/?appid=" + game, function(txt) {
				var data = JSON.parse(txt);
				$(".badge_card_set_card").each(function() {
					var node = $(this);
					var cardname = $(this).html().match(/(.+)<div style=\"/)[1].trim();			
					if (cardname == "") { cardname = $(this).html().match(/<div class=\"badge_card_set_text\">(.+)<\/div>/)[1].trim(); }

					var newcardname = cardname;
					if (foil) { newcardname += " (Foil)"; }

					for (var i = 0; i < data.length; i++) {
						if (data[i].name == newcardname) {
							var marketlink = "http://steamcommunity.com/market/listings/" + data[i].url;
							switch (currency_symbol) {
								case "R$":
									var card_price = formatCurrency(data[i].price_brl, currency_type);
									if ($(node).hasClass("unowned")) cost += parseFloat(data[i].price_brl);
									break;
								case "€":
									var card_price = formatCurrency(data[i].price_eur, currency_type); 
									if ($(node).hasClass("unowned")) cost += parseFloat(data[i].price_eur);
									break;
								case "pуб":
									var card_price = formatCurrency(data[i].price_rub, currency_type); 
									if ($(node).hasClass("unowned")) cost += parseFloat(data[i].price_rub);
									break;
								case "£":
									var card_price = formatCurrency(data[i].price_gbp, currency_type);
									if ($(node).hasClass("unowned")) cost += parseFloat(data[i].price_gbp);
									break;
								default:
									var card_price = formatCurrency(data[i].price, currency_type);
									if ($(node).hasClass("unowned")) cost += parseFloat(data[i].price);
									break;
							}
						}
					}

					if (!(marketlink)) { 
						if (foil) { newcardname = newcardname.replace("(Foil)", "(Foil Trading Card)"); } else { newcardname += " (Trading Card)"; }
						for (var i = 0; i < data.length; i++) {
							if (data[i].name == newcardname) {
								var marketlink = "http://steamcommunity.com/market/listings/" + data[i].url;
								switch (currency_symbol) {
									case "R$":
										var card_price = formatCurrency(data[i].price_brl, currency_type);
										if ($(node).hasClass("unowned")) cost += parseFloat(data[i].price_brl);
										break;
									case "€":
										var card_price = formatCurrency(data[i].price_eur, currency_type); 
										if ($(node).hasClass("unowned")) cost += parseFloat(data[i].price_eur);
										break;
									case "pуб":
										var card_price = formatCurrency(data[i].price_rub, currency_type); 
										if ($(node).hasClass("unowned")) cost += parseFloat(data[i].price_rub);
										break;
									case "£":
										var card_price = formatCurrency(data[i].price_gbp, currency_type); 
										if ($(node).hasClass("unowned")) cost += parseFloat(data[i].price_gbp);
										break;
									default:
										var card_price = formatCurrency(data[i].price, currency_type);						
										if ($(node).hasClass("unowned")) cost += parseFloat(data[i].price);
										break;
								}
							}
						}
					}

					if (marketlink && card_price) {
						var html = "<a class=\"es_card_search\" href=\"" + marketlink + "\">" + localized_strings[language].lowest_price + ": " + card_price + "</a>";
						$(this).children("div:contains('" + cardname + "')").parent().append(html);
					}
				});
				if (cost > 0  && $(".profile_small_header_name .whiteLink").attr("href") == window.location.origin + window.location.pathname.replace("/gamecards/" + game + "/", "")) {
					cost = formatCurrency(cost, currency_type);
					$(".badge_empty_name:last").after("<div class='badge_info_unlocked' style='color: #5c5c5c;'>" + localized_strings[language].badge_completion_cost+ ": " + cost + "</div>");
					$(".badge_empty_right").css("margin-top", "7px");
					$(".gamecard_badge_progress .badge_info").css("width", "296px");
				}
			});
		});
	}

	function inventory_market_prepare() {
		$("#es_market_helper").remove();
		var es_market_helper = document.createElement("script");
		es_market_helper.type = "text/javascript";
		es_market_helper.id = "es_market_helper";
		es_market_helper.textContent = 'jQuery("#inventories").on("click", ".itemHolder, .newitem", function() { window.postMessage({ type: "es_sendmessage", information: [iActiveSelectView,g_ActiveInventory.selectedItem.marketable,g_ActiveInventory.appid,g_ActiveInventory.selectedItem.market_hash_name,g_ActiveInventory.selectedItem.market_fee_app] }, "*"); });';
		document.documentElement.appendChild(es_market_helper);

		window.addEventListener("message", function(event) {
			if (event.source != window)
				return;

			if (event.data.type && (event.data.type == "es_sendmessage")) { inventory_market_helper(event.data.information); }
		}, false);
	}

	function inventory_market_prepare() {
		$("#es_market_helper").remove();
		var es_market_helper = document.createElement("script");
		es_market_helper.type = "text/javascript";
		es_market_helper.id = "es_market_helper";
		es_market_helper.textContent = 'jQuery("#inventories").on("click", ".itemHolder, .newitem", function() { window.postMessage({ type: "es_sendmessage", information: [iActiveSelectView,g_ActiveInventory.selectedItem.marketable,g_ActiveInventory.appid,g_ActiveInventory.selectedItem.market_hash_name,g_ActiveInventory.selectedItem.market_fee_app,g_ActiveInventory.selectedItem.type] }, "*"); });';
		document.documentElement.appendChild(es_market_helper);

		window.addEventListener("message", function(event) {
			if (event.data.type && (event.data.type == "es_sendmessage")) { inventory_market_helper(event.data.information); }
		}, false);
	}

	function inventory_market_helper(response) {
		var item = response[0];
		var marketable = response[1];
		var global_id = response[2];
		var hash_name = response[3];
		var appid = response[4];
		var gift = false;
		if (response[5] && response[5].match(/Gift/)) gift = true;
		var html;

		if (gift) {
			$("#es_item" + item).remove();
			if ($("#iteminfo" + item + "_item_actions").find("a").length > 0) {
				var gift_appid = get_appid($("#iteminfo" + item + "_item_actions").find("a")[0].href);
				get_http("http://store.steampowered.com/api/appdetails/?appids=" + gift_appid + "&filters=price_overview", function(txt) {
					var data = JSON.parse(txt);
					if (data[gift_appid].success && data[gift_appid]["data"]["price_overview"]) {
						var currency = data[gift_appid]["data"]["price_overview"]["currency"];
						var discount = data[gift_appid]["data"]["price_overview"]["discount_percent"];
						var price = formatCurrency(data[gift_appid]["data"]["price_overview"]["final"] / 100, currency);
						
						$("#iteminfo" + item + "_item_actions").css("height", "50px");
						if (discount > 0) {
							var original_price = formatCurrency(data[gift_appid]["data"]["price_overview"]["initial"] / 100, currency);
							$("#iteminfo" + item + "_item_actions").append("<div class='es_game_purchase_action' style='float: right;'><div class='es_game_purchase_action_bg'><div class='es_discount_block es_game_purchase_discount'><div class='es_discount_pct'>-" + discount + "%</div><div class='es_discount_prices'><div class='es_discount_original_price'>" + original_price + "</div><div class='es_discount_final_price'>" + price + "</div></div></div></div>");
						} else {						
							$("#iteminfo" + item + "_item_actions").append("<div class='es_game_purchase_action' style='float: right;'><div class='es_game_purchase_action_bg'><div class='es_game_purchase_price es_price'>" + price + "</div></div>");
						}	
					}
				});
			}
		} else {
			if ($(".profile_small_header_name .whiteLink").attr("href") !== $(".playerAvatar").find("a").attr("href")) {
				if ($('#es_item0').length == 0) { $("#iteminfo0_item_market_actions").after("<div class='item_market_actions es_item_action' id=es_item0></div>"); }
				if ($('#es_item1').length == 0) { $("#iteminfo1_item_market_actions").after("<div class='item_market_actions es_item_action' id=es_item1></div>"); }
				$('.es_item_action').html("");
				
				if (marketable == 0) { $('.es_item_action').remove(); return; }
				$("#es_item" + item).html("<img src='http://cdn.steamcommunity.com/public/images/login/throbber.gif'><span>"+ localized_strings[language].loading+"</span>");

				function inventory_market_helper_get_price(url) {
					get_http(url, function (txt) {
						data = JSON.parse(txt);
						$("#es_item" + item).html("");
						if (data.success) {
							html = "<div><div style='height: 24px;'><a href='http://steamcommunity.com/market/listings/" + global_id + "/" + hash_name + "'>" + localized_strings[language].view_in_market + "</a></div>";
							html += "<div style='min-height: 3em; margin-left: 1em;'>" + localized_strings[language].starting_at + ": " + data.lowest_price;
							if (data.volume) {
								html += "<br>" + localized_strings[language].last_24.replace("__sold__", data.volume);
							}

							$("#es_item" + item).html(html);
						} else {
							$("#es_item" + item).remove();
						}
					});
				}
				
				if (getValue("steam_currency_number")) {
					inventory_market_helper_get_price("http://steamcommunity.com/market/priceoverview/?currency=" + getValue("steam_currency_number") + "&appid=" + global_id + "&market_hash_name=" + hash_name);
				} else {
					get_http("http://store.steampowered.com/app/220/", function(txt) {
						var currency = parse_currency($(txt).find(".price, .discount_final_price").text().trim());
						setValue("steam_currency_number", currency.currency_number);
						inventory_market_helper_get_price("http://steamcommunity.com/market/priceoverview/?currency=" + currency.currency_number + "&appid=" + global_id + "&market_hash_name=" + hash_name);					
					});
				}
			} else {
				if (hash_name && hash_name.match(/Booster Pack/g)) {
					setTimeout(function() {					
						var currency_symbol = currency_symbol_from_string($("#iteminfo" + item + "_item_market_actions").text());
						var currency_type = currency_symbol_to_type(currency_symbol);
						var api_url = "http://api.enhancedsteam.com/market_data/average_card_price/?appid=" + appid + "&cur=" + currency_type.toLowerCase();

						get_http(api_url, function(price_data) {				
							var booster_price = parseFloat(price_data,10) * 3;					
							html = localized_strings[language].avg_price_3cards + ": " + formatCurrency(booster_price, currency_type) + "<br>";
							$("#iteminfo" + item + "_item_market_actions").find("div:last").css("margin-bottom", "8px");
							$("#iteminfo" + item + "_item_market_actions").find("div:last").append(html);
						});
					}, 1000);
				}
			}
		}
	}

	// Add checkboxes for DLC
	function add_dlc_checkboxes() {
		var session = decodeURIComponent(cookie.match(/sessionid=(.+?);/i)[1]);
		if ($("#game_area_dlc_expanded").length > 0) {
			$("#game_area_dlc_expanded").after("<div class='game_purchase_action game_purchase_action_bg' style='float: left; margin-top: 4px; margin-bottom: 10px; display: none;' id='es_selected_btn'><div class='btn_addtocart'><a class='btnv6_green_white_innerfade btn_medium' href='javascript:document.forms[\"add_selected_dlc_to_cart\"].submit();'><span>" + localized_strings[language].add_selected_dlc_to_cart + "</span></a></div></div>");
			$(".game_area_dlc_section").after("<div style='clear: both;'></div>");
		} else {
			$(".gameDlcBlocks").after("<div class='game_purchase_action game_purchase_action_bg' style='float: left; margin-top: 4px; display: none;' id='es_selected_btn'><div class='btn_addtocart'><a class='btnv6_green_white_innerfade btn_medium' href='javascript:document.forms[\"add_selected_dlc_to_cart\"].submit();'><span>" + localized_strings[language].add_selected_dlc_to_cart + "</span></a></div></div>");
		}
		$("#es_selected_btn").before("<form name=\"add_selected_dlc_to_cart\" action=\"http://store.steampowered.com/cart/\" method=\"POST\" id=\"es_selected_cart\">");
		$(".game_area_dlc_row").each(function() {
			if ($(this).find("input").val()) {
				$(this).find(".game_area_dlc_name").prepend("<input type='checkbox' class='es_dlc_selection' style='cursor: default;' id='es_select_dlc_" + $(this).find("input").val() + "' value='" + $(this).find("input").val() + "'><label for='es_select_dlc_" + $(this).find("input").val() + "' style='background-image: url( http://www.enhancedsteam.com/standalone/images/check_sheet.png );'></label>");
			} else {
				$(this).find(".game_area_dlc_name").css("margin-left", "23px");
			}	
		}).hover(function() { 
			$(this).find(".ds_flag").hide();
		}, function() { 
			$(this).find(".ds_flag").show();
		});
		function add_dlc_to_list() {
			$("#es_selected_cart").html("<input type=\"hidden\" name=\"action\" value=\"add_to_cart\"><input type=\"hidden\" name=\"sessionid\" value=\"" + session + "\">");
			$(".es_dlc_selection:checked").each(function() {
				var input = $("<input>", {type: "hidden", name: "subid[]", value: $(this).val() });
				$("#es_selected_cart").append(input);
			});
			if ($(".es_dlc_selection:checked").length > 0) {
				$("#es_selected_btn").show();
			} else {
				$("#es_selected_btn").hide();
			}
		}

		$(".game_area_dlc_section").find(".gradientbg").after("<div style='height: 28px; padding-left: 15px; display: none;' id='es_dlc_option_panel'></div>");

		$("#es_dlc_option_panel").append("<div class='es_dlc_option' id='unowned_dlc_check'>" + localized_strings[language].select.unowned_dlc + "</div>");
		$("#unowned_dlc_check").on("click", function() {		
			$(".game_area_dlc_section").find(".game_area_dlc_row").each(function() {
				if (!($(this).hasClass("es_highlight_owned"))) {
					$(this).find("input").prop("checked", true).change();				
				}
			});
		});

		$("#es_dlc_option_panel").append("<div class='es_dlc_option' id='wl_dlc_check'>" + localized_strings[language].select.wishlisted_dlc + "</div>");
		$("#wl_dlc_check").on("click", function() {		
			$(".game_area_dlc_section").find(".game_area_dlc_row").each(function() {
				if ($(this).hasClass("es_highlight_wishlist")) {
					$(this).find("input").prop("checked", true).change();
				}	
			});
		});

		$("#es_dlc_option_panel").append("<div class='es_dlc_option' id='no_dlc_check'>" + localized_strings[language].select.none + "</div>");
		$("#no_dlc_check").on("click", function() {		
			$(".game_area_dlc_section").find(".game_area_dlc_row").each(function() {
				$(this).find("input").prop("checked", false).change();
			});
		});

		$(".game_area_dlc_section").find(".gradientbg").append("<a id='es_dlc_option_button'>" + localized_strings[language].thewordoptions + " ▾</a>");
		
		$("#es_dlc_option_button").on("click", function() {
			$("#es_dlc_option_panel").toggle();
			if ($("#es_dlc_option_button").text().match("▾")) {
				$("#es_dlc_option_button").text(localized_strings[language].thewordoptions + " ▴");
			} else {
				$("#es_dlc_option_button").text(localized_strings[language].thewordoptions + " ▾");
			}
		});

		$(document).on( "change", ".es_dlc_selection", add_dlc_to_list );
	}

	var ea_appids, ea_promise = (function () {
		var deferred = new $.Deferred();
		if (window.location.protocol != "https:") {
			// is the data cached?
			var expire_time = parseInt(Date.now() / 1000, 10) - 1 * 60 * 60; // One hour ago
			var last_updated = getValue("ea_appids_time") || expire_time - 1;
			
			if (last_updated < expire_time) {
				// if no cache exists, pull the data from the website
				get_http("http://api.enhancedsteam.com/early_access/", function(txt) {
					ea_appids = txt;
					setValue("ea_appids", ea_appids);
					setValue("ea_appids_time", parseInt(Date.now() / 1000, 10));
					deferred.resolve();	
				});
			} else {
				ea_appids = getValue("ea_appids");
				deferred.resolve();
			}
			
			return deferred.promise();
		} else {
			deferred.resolve();
			return deferred.promise();
		}
	})();

	function check_early_access(node, image_name, image_left, selector_modifier, action) {
		ea_promise.done(function(){
			var href = ($(node).find("a").attr("href") || $(node).attr("href"));
			var appid = get_appid(href);
			if (appid === null) { 
				if ($(node).find("img").length > 0) {
					if ($(node).find("img").attr("src").match(/\/apps\/(\d+)\//)) {
						appid = $(node).find("img").attr("src").match(/\/apps\/(\d+)\//)[1];
					}
				}
			}
			var early_access = JSON.parse(ea_appids);
			if (early_access["ea"].indexOf(appid) >= 0) {
				var selector = "img";
				if (selector_modifier != undefined) selector += selector_modifier;
				var image;
				switch (image_name) {
					case "ea_sm_120.png":
						image = "http://www.enhancedsteam.com/standalone/images/overlay/ea_sm_120.png";
						break;
					case "ea_184x69.png":
						image = "http://www.enhancedsteam.com/standalone/images/overlay/ea_184x69.png";
						break;
					case "ea_231x87.png":
						image = "http://www.enhancedsteam.com/standalone/images/overlay/ea_231x87.png";
						break;
					case "ea_292x136.png":
						image = "http://www.enhancedsteam.com/standalone/images/overlay/ea_292x136.png";
						break;
					case "ea_467x181.png":
						image = "http://www.enhancedsteam.com/standalone/images/overlay/ea_467x181.png";
						break;
				}
				overlay_img = $("<img class='es_overlay' src='" + image + "'>");
				$(overlay_img).css({"left":image_left+"px"});
				$(node).find(selector.trim()).before(overlay_img);
			}
		});
	}

	function process_early_access() {
		ea_promise.done(function(){
			switch (window.location.host) {
				case "store.steampowered.com":
					switch (true) {
						case /^\/app\/.*/.test(window.location.pathname):
							$(".game_header_image").append("<a href='" + window.location.href + "'></a>");
							$(".game_header_image_ctn").each(function(index, value) { check_early_access($(this), "ea_292x136.png", $(this).position().left); });
							$(".small_cap").each(function(index, value) { check_early_access($(this), "ea_184x69.png", 15); });
							break;
						case /^\/(?:genre|browse|tag)\/.*/.test(window.location.pathname):
							$(".tab_item").each(function(index, value) { check_early_access($(this), "ea_231x87.png", 0, ":last"); });
							$(".special_tiny_cap").each(function(index, value) { check_early_access($(this), "ea_sm_120.png", 0); });
							$(".cluster_capsule").each(function(index, value) { check_early_access($(this), "ea_467x181.png", 0); });
							$(".game_capsule").each(function(index, value) { check_early_access($(this), "ea_sm_120.png", 0); });
							$(".dq_item:not(:first-child)").each(function(index, value) { check_early_access($(this), "ea_467x181.png", 0); });
							break;
						case /^\/search\/.*/.test(window.location.pathname):
							$(".search_result_row").each(function(index, value) { check_early_access($(this), "ea_sm_120.png", 0); });					
							break;
						case /^\/recommended/.test(window.location.pathname):
							$(".friendplaytime_appheader").each(function(index, value) { check_early_access($(this), "ea_292x136.png", $(this).position().left); });
							$(".header_image").each(function(index, value) { check_early_access($(this), "ea_292x136.png", 0); });
							$(".appheader").each(function(index, value) { check_early_access($(this), "ea_292x136.png", $(this).position().left); });
							$(".recommendation_carousel_item").each(function(index, value) { check_early_access($(this), "ea_184x69.png", $(this).position().left + 8); });
							$(".game_capsule_area").each(function(index, value) { check_early_access($(this), "ea_sm_120.png", $(this).position().left + 8); });
							$(".game_capsule").each(function(index, value) { check_early_access($(this), "ea_sm_120.png", $(this).position().left); });
							$(".similar_grid_capsule").each(function(index, value) { check_early_access($(this), "ea_292x136.png", 0); });
							break;
						case /^\/tag\/.*/.test(window.location.pathname):
							$(".cluster_capsule").each(function(index, value) { check_early_access($(this), "ea_467x181.png", 0); });
							$(".tab_row").each(function(index, value) { check_early_access($(this), "ea_184x69.png", 0); });
							$(".browse_tag_game_cap").each(function(index, value) { check_early_access($(this), "ea_292x136.png", $(this).position().left); });
							break;
						case /^\/$/.test(window.location.pathname):
							$(".home_smallcap").each(function(index, value) { check_early_access($(this), "ea_184x69.png", 15); });
							$(".cap").each(function(index, value) { check_early_access($(this), "ea_292x136.png", 0); });
							$(".special").each(function(index, value) { check_early_access($(this), "ea_sm_120.png", 0); });
							$(".game_capsule").each(function(index, value) { check_early_access($(this), "ea_sm_120.png", 0); });
							$("#home_main_cluster").find(".cluster_capsule").each(function(index, value) { check_early_access($(this), "ea_467x181.png", 0); });
							$(".recommended_spotlight_ctn").each(function(index, value) { check_early_access($(this), "ea_292x136.png", 0); });
							$(".curated_app_link").each(function(index, value) { check_early_access($(this), "ea_292x136.png", 0); });
							$(".tab_item").each(function(index, value) { check_early_access($(this), "ea_184x69.png", 0, ":last"); });
							$(".dailydeal_ctn").find("a").each(function(index, value) { check_early_access($(this), "ea_292x136.png", 0); });
							break;
					}
				case "steamcommunity.com":
					switch(true) {
						case /^\/(?:id|profiles)\/.+\/wishlist/.test(window.location.pathname):
							$(".gameLogo").each(function(index, value) { check_early_access($(this), "ea_184x69.png", 0); });
							break;
						case /^\/(?:id|profiles)\/(.+)\/games/.test(window.location.pathname):
							$(".gameLogo").each(function(index, value) { check_early_access($(this), "ea_184x69.png", 0); });
							break;
						case /^\/(?:id|profiles)\/(.+)\/followedgames/.test(window.location.pathname):
							$(".gameLogo").each(function(index, value) { check_early_access($(this), "ea_184x69.png", 4); });
							break;
						case /^\/(?:id|profiles)\/.+\/\b(home|myactivity|status)\b/.test(window.location.pathname):
							$(".blotter_gamepurchase_content").find("a").each(function(index, value) {
								check_early_access($(this), "ea_231x87.png", $(this).position().left);
							});
							break;
						case /^\/(?:id|profiles)\/.+\/\b(reviews|recommended)\b/.test(window.location.pathname):
							$(".leftcol").each(function(index, value) { check_early_access($(this), "ea_184x69.png", $(this).position().left + 8); });
							break;
						case /^\/(?:id|profiles)\/.+/.test(window.location.pathname):
							$(".game_info_cap").each(function(index, value) { check_early_access($(this), "ea_184x69.png", 0); });
							$(".showcase_slot").each(function(index, value) { check_early_access($(this), "ea_184x69.png", 0); });
							break;
						case /^\/app\/.*/.test(window.location.pathname):
							if ($(".apphub_EarlyAccess_Title").length > 0) {
								$(".apphub_StoreAppLogo:first").after("<img class='es_overlay' style='left: " + $(".apphub_StoreAppLogo:first").position().left + "px' src='http://www.enhancedsteam.com/standalone/images/overlay/ea_292x136.png'>");
							}
					}
			}
		});
	}

	// Display a regional price comparison
	function show_regional_pricing() {
		var api_url = "http://store.steampowered.com/api/packagedetails/";
		var countries = ["us","gb","eu1","eu2","ru","br","au","jp"];
		var pricing_div = "<div class='es_regional_container'></div>";
		var world = "http://www.enhancedsteam.com/standalone/images/flags/world.png";
		var currency_deferred = [];
		var local_country;
		var local_currency;
		var sale;
		var sub;
		var region_appended=0;
		var available_currencies = ["USD","GBP","EUR","BRL","RUB","JPY","NOK","IDR","MYR","PHP","SGD","THB","VND","KRW","TRY","UAH","MXN","CAD","AUD","NZD"];
		var conversion_rates = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		var currency_symbol;
		
		function process_data(conversion_array) {
			if (/^\/sale\/.*/.test(window.location.pathname)) {
				sale=true;
				pricing_div = $(pricing_div).addClass("es_regional_sale");
			}
			if (/^\/sub\/.*/.test(window.location.pathname)) {
				sub=true;
				pricing_div = $(pricing_div).addClass("es_regional_sub");
			}
			if (getCookie("fakeCC") != null || getCookie("LKGBillingCountry") != null) {
				if (getCookie("fakeCC")){
					local_country = getCookie("fakeCC");
					local_country = local_country.toLowerCase();
				} else {
					local_country = getCookie("LKGBillingCountry");
					local_country = local_country.toLowerCase();
				}
			}
			if(countries.indexOf(local_country)===-1){
				countries.push(local_country);
			}
			var all_game_areas = $(".game_area_purchase_game").toArray();
			if (sale) {
				all_game_areas = $(".sale_page_purchase_item").toArray();
			}
			var subid_info = [];
			var subid_array = [];

			function formatPriceData(sub_info,country,converted_price) {
				var flag_div = "<div class=\"es_flag\" style='background-image:url( http://www.enhancedsteam.com/standalone/images/flags/flags.png )'></div>";
				if (sub_info["prices"][country]){
					var price = sub_info["prices"][country]["final"]/100;
					var local_price = sub_info["prices"][local_country]["final"]/100;
					converted_price = converted_price/100;
					converted_price = converted_price.toFixed(2);
					var currency = sub_info["prices"][country]["currency"];
					var percentage;
					var formatted_price = formatCurrency(price, currency);
					var formatted_converted_price = formatCurrency(converted_price, local_currency);
					
					percentage = (((converted_price/local_price)*100)-100).toFixed(2);
					var arrows = "http://www.enhancedsteam.com/standalone/images/arrows.png";
					var percentage_span="<span class=\"es_percentage\"><div class=\"es_percentage_indicator\" style='background-image:url("+arrows+")'></div></span>";
					if (percentage<0) {
						percentage = Math.abs(percentage);
						percentage_span = $(percentage_span).addClass("es_percentage_lower");
					}else if (percentage==0) {
						percentage_span = $(percentage_span).addClass("es_percentage_equal");
					}else {
						percentage_span = $(percentage_span).addClass("es_percentage_higher");
					}
					percentage_span = $(percentage_span).append(percentage+"%");
					var regional_price_div = "<div class=\"es_regional_price\">"+formatted_price+"&nbsp;<span class=\"es_regional_converted\">("+formatted_converted_price+")</span></div>";
					flag_div = $(flag_div).addClass("es_flag_"+country.toLowerCase());
					regional_price_div = $(regional_price_div).prepend(flag_div);
					regional_price_div = $(regional_price_div).append(percentage_span);
					return regional_price_div;
				}
				else {
					var regional_price_div = "<div class=\"es_regional_price\"><span class=\"es_regional_unavailable\">"+localized_strings[language].region_unavailable+"</span></div>";
					flag_div = $(flag_div).addClass("es_flag_"+country.toLowerCase());
					regional_price_div = $(regional_price_div).prepend(flag_div);
					return regional_price_div;
				}
			}

			$.each(all_game_areas,function(index,app_package){
				var subid = $(app_package).find("input[name='subid']").val();
				if(subid>0){
					subid_info[index]=[];
					subid_info[index]["subid"]=subid;
					subid_info[index]["prices"]=[];
					subid_array.push(subid);
				}
			});
			if(subid_array.length>0){
				$.each(countries,function(index,country){
					switch (country) {
						case "eu1":
							cc="fr";
							break;
						case "eu2":
							cc="it";
							break;
						default:
							cc=country;
							break;
					}
					$.each(subid_info,function(subid_index,package_info){
						currency_deferred.push(
							$.ajax({
								url:api_url,
								data:{
									packageids:package_info["subid"],
									cc:cc
								}
							}).done(function(data){
								$.each(data,function(data_subid){
									if(package_info){
										if(package_info["subid"]===data_subid){
											if(data[data_subid]["data"]) {
												var price = data[data_subid]["data"]["price"];
												subid_info[subid_index]["prices"][country]=price;
												pricing_div=$(pricing_div).append(price);
											}
										}
									}
								});
							})
						);
					});
				});
				var format_deferred=[];
				var formatted_regional_price_array=[];
				$.when.apply(null,currency_deferred).done(function(){
					$.map(subid_info,function(subid,index){
						if(subid){
							var sub_formatted = [];
							var convert_deferred=[];
							var all_convert_deferred = $.Deferred();
							var app_pricing_div = $(pricing_div).clone();
							$(app_pricing_div).attr("id", "es_pricing_" + subid_info[index]["subid"].toString());
							$.each(countries,function(country_index,country){
								var regional_price_array=[];
								if(country!==local_country){
									if(subid["prices"][country]){
										var country_currency = subid["prices"][country]["currency"].toString().toUpperCase();
										var app_price = subid["prices"][country]["final"];
										var index = $.inArray(country_currency, available_currencies);
										var converted_price = parseFloat(app_price) / conversion_array[index];																					
										var regional_price = formatPriceData(subid,country,converted_price);
										regional_price_array[0]=country;
										regional_price_array[1]=regional_price;
										sub_formatted.push(regional_price_array);											
									}
									else {
										var regional_price = formatPriceData(subid,country);
										regional_price_array[0]=country;
										regional_price_array[1]=regional_price;
										sub_formatted.push(regional_price_array);
									}
								}
							});
							$.when.apply(null,convert_deferred).done(function(){
								if (sale){
									$(".sale_page_purchase_item").eq(index).find(".game_purchase_action_bg").after(app_pricing_div);
								} else {
									$(".game_area_purchase_game").eq(index).append(app_pricing_div);
									$(app_pricing_div).css("top", $(".game_area_purchase_game").eq(index).outerHeight(true));
									$(".game_area_purchase_game").css("z-index", "auto");
									$(".game_purchase_action").css("z-index", "1");
								}
								sub_formatted["subid"]=subid_info[index]["subid"].toString();
								formatted_regional_price_array.push(sub_formatted);
								all_convert_deferred.resolve();
							});
							format_deferred.push(all_convert_deferred.promise());
						}
					});
					$.when.apply(null,format_deferred).done(function(){
						var all_sub_sorted_divs=[];
						$.each(formatted_regional_price_array,function(formatted_div_index,formatted_div){
							var sorted_formatted_divs=[];
							$.each(countries,function(country_index,country){
								$.each(formatted_div,function(regional_div_index,regional_div){
									var sort_div_country = regional_div[0];
									if(country==sort_div_country){
										sorted_formatted_divs.push(regional_div[1]);
									}
								});
							});
							sorted_formatted_divs["subid"]=formatted_div["subid"];
							all_sub_sorted_divs.push(sorted_formatted_divs);
						});
						$.each(all_sub_sorted_divs,function(index,sorted_divs){
							var subid = subid_array[index];
							$.each(sorted_divs,function(price_index,regional_div){
								$("#es_pricing_"+sorted_divs["subid"]).append(regional_div);
								if(regional_div!=undefined){
									region_appended++;
								}
							});
							$("#es_pricing_"+subid).append("<div class='miniprofile_arrow right' style='position: absolute; top: 12px; right: -8px;'></div>");
							if(region_appended<=1){
								$("#es_pricing_"+subid).find(".miniprofile_arrow").css("top","6px");
							}
						});
						$.each(all_game_areas,function(index,app_package){
							var subid = $(app_package).find("input[name='subid']").val();
							if(subid){
								$(app_package).find(".price").css({"padding-left":"25px","background-image":"url("+world+")","background-repeat":"no-repeat","background-position":"5px 8px"});
								$(app_package).find(".discount_original_price").css({"position":"relative","float":"left"});
								$(app_package).find(".discount_block").css({"padding-left":"25px","background-image":"url("+world+")","background-repeat":"no-repeat","background-position":"77px 8px","background-color":"#000000"});
								$(app_package).find(".discount_prices").css({"background":"none"});

								$(app_package).find(".price, .discount_block")
								.mouseover(function() {
									var purchase_location = $(app_package).find("div.game_purchase_action_bg").offset();
									if (sale) {
										$("#es_pricing_" + subid).css("right", $(app_package).find(".game_purchase_action").width() + 25 +"px").css("top", "138px");
									} else if(sub) {
										$("#es_pricing_" + subid).css("right", $(app_package).find(".game_purchase_action").width() + 25 + "px").css("top", "70px");
									} else {
										$("#es_pricing_" + subid).css("right", $(app_package).find(".game_purchase_action").width() + 20 + "px");
									}
									$("#es_pricing_" + subid).show();
								})
								.mouseout(function() {
									$("#es_pricing_" + subid).hide();
								})
								.css("cursor","help");
							}
						});
					});
				});
			}
		}

		// Get user's Steam currency
		currency_symbol = currency_symbol_from_string($(".price:first, .discount_final_price:first").text().trim());
		if (currency_symbol == "") { return; }
		local_currency = currency_symbol_to_type(currency_symbol);

		var complete = 0;

		$.each(available_currencies, function(index, currency_type) {
			if (currency_type != local_currency) {
				if (getValue(currency_type + "to" + local_currency)) {
					var expire_time = parseInt(Date.now() / 1000, 10) - 24 * 60 * 60; // One day ago
					var last_updated = getValue(currency_type + "to" + local_currency + "_time") || expire_time - 1;

					if (last_updated < expire_time) {
						get_http("http://api.enhancedsteam.com/currency/?" + local_currency.toLowerCase() + "=1&local=" + currency_type.toLowerCase(), function(txt) {
							complete += 1;
							conversion_rates[available_currencies.indexOf(currency_type)] = parseFloat(txt);
							setValue(currency_type + "to" + local_currency, parseFloat(txt));
							setValue(currency_type + "to" + local_currency + "_time", parseInt(Date.now() / 1000, 10));
							if (complete == available_currencies.length - 1) { process_data(conversion_rates); }
						});
					} else {
						complete += 1;
						conversion_rates[available_currencies.indexOf(currency_type)] = getValue(currency_type + "to" + local_currency);
						if (complete == available_currencies.length - 1) { process_data(conversion_rates); }
					}	
				} else {
					get_http("http://api.enhancedsteam.com/currency/?" + local_currency.toLowerCase() + "=1&local=" + currency_type.toLowerCase(), function(txt) {
						complete += 1;
						conversion_rates[available_currencies.indexOf(currency_type)] = parseFloat(txt);
						setValue(currency_type + "to" + local_currency, parseFloat(txt));
						setValue(currency_type + "to" + local_currency + "_time", parseInt(Date.now() / 1000, 10));
						if (complete == available_currencies.length - 1) { process_data(conversion_rates); }
					});
				}
			}
		});
	}

	function customize_app_page() {
		// Add a "Customize" button
		$(".purchase_area_spacer:last").after("<link rel='stylesheet' type='text/css' href='http://store.akamai.steamstatic.com/public/css/v6/home.css'><div id='es_customize_btn' class='home_actions_ctn'><div class='home_btn home_customize_btn'>" + localized_strings[language].customize + "</div></div>");

		if (getValue("show_apppage_initialsetup") === null) {
			setValue("show_apppage_recommendedbycurators", true);
			setValue("show_apppage_recentupdates", true);
			setValue("show_apppage_reviews", true);
			setValue("show_apppage_playfire", true);
			setValue("show_apppage_about", true);
			setValue("show_apppage_current", true);
			setValue("show_apppage_sysreq", true);
			setValue("show_apppage_legal", true);
			setValue("show_apppage_morelikethis", true);
			setValue("show_apppage_customerreviews", true);
			setValue("show_apppage_initialsetup", true);
		}

		var html = "<div class='home_viewsettings_popup' style='display: none'><div class='home_viewsettings_instructions' style='font-size: 12px;'>" + localized_strings[language].apppage_sections + "</div>"
		html += "<div class='home_viewsettings_checkboxrow ellipsis disabled'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + localized_strings[language].apppage_purchase + "</div></div>";
		
		// Recommended by Curators
		if ($(".steam_curators_block").length > 0) {
			var text = $(".steam_curators_block").find("h2:first").text();
			if (getValue("show_apppage_recommendedbycurators")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_recommendedbycurators'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_recommendedbycurators'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$(".steam_curators_block").hide();
			}
		}
		
		// Recent updates
		if ($(".early_access_announcements").length > 0) {
			var text_search = $(".early_access_announcements").find("h2:first").clone();
			$("span", text_search).remove();
			text = $(text_search).text();
			if (getValue("show_apppage_recentupdates")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_recentupdates'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_recentupdates'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$(".early_access_announcements").hide();
			}
		}
		
		// Reviews
		if ($("#game_area_reviews").length > 0) {
			text = $("#game_area_reviews").find("h2:first").text();
			if (getValue("show_apppage_reviews")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_reviews'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_reviews'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$("#game_area_reviews").hide();
			}
		}

		// Rewards from Playfire
		if (getValue("show_apppage_playfire")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_playfire'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + localized_strings[language].playfire_heading + "</div></div>"; }
		else {
			html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_playfire'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + localized_strings[language].playfire_heading + "</div></div>";
		}

		// About this game
		if ($("#game_area_description").length > 0) {
			text = $("#game_area_description").find("h2:first").text();
			if (getValue("show_apppage_about")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_about'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_about'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$("#game_area_description").parent().parent().hide();
			}
		}

		// Steam charts
		if (getValue("show_apppage_current")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_current'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + localized_strings[language].charts.current + "</div></div>"; }
		else { 
			html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_current'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + localized_strings[language].charts.current + "</div></div>"; 
		}
		
		// System Requirements
		if ($(".sys_req").length > 0) {
			text = $(".sys_req").find("h2:first").text();
			if (getValue("show_apppage_sysreq")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_sysreq'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_sysreq'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$(".sys_req").parent().hide();
			}
		}

		// Legal Information
		if ($("#game_area_legal").length > 0) {
			if (getValue("show_apppage_legal")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_legal'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + localized_strings[language].apppage_legal + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_legal'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + localized_strings[language].apppage_legal + "</div></div>";
				$("#game_area_legal").hide();
			}
		}

		// More like this
		if ($("#recommended_block").length > 0) {
			text = $("#recommended_block").find("h4:first").text();
			if (getValue("show_apppage_morelikethis")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_morelikethis'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_morelikethis'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$("#recommended_block").hide();
			}
		}

		// Helpful customer reviews
		if ($(".user_reviews_header").length > 0) {
			text_search = $(".user_reviews_header:first").clone();
			$("div", text_search).remove();
			text = $(text_search).text();
			if (getValue("show_apppage_customerreviews")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_customerreviews'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_apppage_customerreviews'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$(".user_reviews_header").hide();
				$(".user_reviews_filter_bar").hide();
				$(".loading_more_reviews").hide();
				$(".user_reviews_container").hide();
				$("#app_reviews_hash").hide();
			}
		}

		$("#es_customize_btn").append(html);
		$("#es_customize_btn").after("<div style='clear: both;'></div>");

		$("#es_customize_btn").find(".home_customize_btn").click(function() {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
			} else {
				$(this).addClass("active");
			}

			if ($(this).parent().find(".home_viewsettings_popup").is(":visible")) {
				$(this).parent().find(".home_viewsettings_popup").hide();
			} else {
				var pos_top = $("#es_customize_btn").offset().top + 19;
				var pos_left = $("#es_customize_btn").offset().left - 152;
				$(this).parent().find(".home_viewsettings_popup").css("top", pos_top + "px").css("left", pos_left + "px");
				$(this).parent().find(".home_viewsettings_popup").show();
			}
		});

		$('body').bind('click', function(e) {
			if($(e.target).closest("#es_customize_btn").length == 0) {
				if ($("#es_customize_btn").find(".home_customize_btn").hasClass("active")) {
					$("#es_customize_btn").find(".home_customize_btn").removeClass("active");
				}
				if ($("#es_customize_btn").find(".home_viewsettings_popup").is(":visible")) {
					$("#es_customize_btn").find(".home_viewsettings_popup").hide();
				}
			}
		});

		$("#show_apppage_recommendedbycurators").click(function() {
			if (getValue("show_apppage_recommendedbycurators")) {
				setValue("show_apppage_recommendedbycurators", false);
				$(".steam_curators_block").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_apppage_recommendedbycurators", true);
				$(".steam_curators_block").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_apppage_recentupdates").click(function() {
			if (getValue("show_apppage_recentupdates")) {
				setValue("show_apppage_recentupdates", false);
				$(".early_access_announcements").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_apppage_recentupdates", true);
				$(".early_access_announcements").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_apppage_reviews").click(function() {
			if (getValue("show_apppage_reviews")) {
				setValue("show_apppage_reviews", false);
				$("#game_area_reviews").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_apppage_reviews", true);
				$("#game_area_reviews").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_apppage_playfire").click(function() {
			if (getValue("show_apppage_playfire")) {
				setValue("show_apppage_playfire", false);
				$("#es_playfire").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_apppage_playfire", true);
				$("#es_playfire").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}

			if (getValue("show_apppage_playfire") && $("#es_playfire").length == 0) {
				var appid = get_appid(window.location.host + window.location.pathname);
				get_playfire_rewards(appid);
			}
		});

		$("#show_apppage_about").click(function() {
			if (getValue("show_apppage_about")) {
				setValue("show_apppage_about", false);
				$("#game_area_description").parent().parent().hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_apppage_about", true);
				$("#game_area_description").parent().parent().show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_apppage_current").click(function() {
			if ($(this).find(".home_viewsettings_checkbox").hasClass("checked")) {
				setValue("show_apppage_current", false);
				$("#steam-charts").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_apppage_current", true);
				$("#steam-charts").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}

			if (showsteamchartinfo && $("#steam-charts").length == 0) {
				var appid = get_appid(window.location.host + window.location.pathname);
				add_steamchart_info(appid);
			}
		});

		$("#show_apppage_sysreq").click(function() {
			if (getValue("show_apppage_sysreq")) {
				setValue("show_apppage_sysreq", false);
				$(".sys_req").parent().hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_apppage_sysreq", true);
				$(".sys_req").parent().show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_apppage_legal").click(function() {
			if (getValue("show_apppage_legal")) {
				setValue("show_apppage_legal", false);
				$("#game_area_legal").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_apppage_legal", true);
				$("#game_area_legal").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_apppage_morelikethis").click(function() {
			if (getValue("show_apppage_morelikethis")) {
				setValue("show_apppage_morelikethis", false);
				$("#recommended_block").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_apppage_morelikethis", true);
				$("#recommended_block").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_apppage_customerreviews").click(function() {
			if (getValue("show_apppage_customerreviews")) {
				setValue("show_apppage_customerreviews", false);
				$(".user_reviews_header").hide();
				$(".user_reviews_filter_bar").hide();
				$(".loading_more_reviews").hide();
				$(".user_reviews_container").hide();
				$("#app_reviews_hash").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_apppage_customerreviews", true);
				$(".user_reviews_header").show();
				$(".user_reviews_filter_bar").show();
				$("#Reviews_all").show();
				$("#app_reviews_hash").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});
	}

	function customize_home_page() {
		$(".home_page_content:first").append("<div id='es_customize_btn' class='home_actions_ctn' style='margin-bottom: 4px;'><div class='home_btn home_customize_btn' style='z-index: 13;'>" + localized_strings[language].customize + "</div></div><div style='clear: both;'></div>");
		$(".home_page_body_ctn:first").css("min-height", "400px");
		$(".has_takeover").css("min-height", "600px");

		if (getValue("show_homepage_initialsetup") === null) {
			setValue("show_homepage_carousel", true);
			setValue("show_homepage_spotlight", true);
			setValue("show_homepage_newsteam", true);
			setValue("show_homepage_updated", true);
			setValue("show_homepage_recommended", true);
			setValue("show_homepage_explore", true);
			setValue("show_homepage_curators", true);
			setValue("show_homepage_tabs", true);
			setValue("show_homepage_specials", true);
			setValue("show_homepage_under10", true);
			setValue("show_homepage_sidebar", true);
			setValue("show_homepage_initialsetup", true);
		}

		var html = "<div class='home_viewsettings_popup' style='display: none; z-index: 12; right: 18px;'><div class='home_viewsettings_instructions' style='font-size: 12px;'>" + localized_strings[language].apppage_sections + "</div>"

		// Carousel
		if ($("#home_main_cluster").length > 0) {
			text = localized_strings[language].homepage_carousel;
			if (getValue("show_homepage_carousel")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_carousel'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_carousel'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$("#home_main_cluster").parent().hide();
			}
		}

		// Spotlight
		if ($("#spotlight_scroll").length > 0) {
			text = localized_strings[language].homepage_spotlight;
			if (getValue("show_homepage_spotlight")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_spotlight'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_spotlight'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$("#spotlight_scroll").parent().parent().hide();
			}
		}

		// New on Steam
		if ($(".new_on_steam").length > 0) {
			text = $(".new_on_steam").find("a:first").text();
			if (getValue("show_homepage_newsteam")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_newsteam'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_newsteam'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$(".new_on_steam").hide();
			}
		}

		// Recently Updated
		if ($(".recently_updated").length > 0) {
			text = $(".recently_updated").find("a:first").text();
			if (getValue("show_homepage_updated")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_updated'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_updated'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$(".recently_updated").hide();
			}
		}

		// Recommended For You
		if ($(".recommended").length > 0) {
			text = $(".recommended").find("h2:first").text();
			if (getValue("show_homepage_recommended")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_recommended'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_recommended'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$(".recommended").hide();
			}
		}

		// Explore Your Queue
		if ($(".discovery_queue_ctn").length > 0) {
			text = $(".discovery_queue_ctn").find("a:first").text();
			if (getValue("show_homepage_explore")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_explore'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_explore'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$(".discovery_queue_ctn").hide();
				$("#content_callout").hide();
				$("#content_loading").hide();
			}
		}

		// Steam Curators
		if ($(".apps_recommended_by_curators_ctn").length > 0) {
			text = $(".apps_recommended_by_curators_ctn").find("a:first").text();
			if (getValue("show_homepage_curators")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_curators'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_curators'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$(".apps_recommended_by_curators_ctn").hide();
				$(".steam_curators_ctn").hide();
			}
		}

		// Homepage Tabs
		if ($(".home_tab_col").length > 0) {
			text = localized_strings[language].homepage_tabs;
			if (getValue("show_homepage_tabs")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_tabs'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_tabs'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$(".home_tab_col").hide();
			}
		}

		var specials_section_parent = $(".dailydeal_ctn").parent();
		specials_section_parent.parent().find("h2:first, .dailydeal_ctn, .home_specials_grid:first, .home_block_footer:first, .home_specials_spacer").wrapAll("<div id='es_specials_section' />");
		specials_section_parent.parent().find("h2:last, .home_specials_grid:last, .home_block_footer:last").wrapAll("<div id='es_under_ten_section' />");

		// Specials
		if ($("#es_specials_section").length > 0) {
			text = $("#es_specials_section h2").text();
			if (getValue("show_homepage_specials")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_specials'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_specials'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$("#es_specials_section").hide();
			}
		}

		// Under 10
		if ($("#es_under_ten_section").length > 0) {
			text = $("#es_under_ten_section h2").text();
			if (getValue("show_homepage_under10")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_under10'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_under10'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$("#es_under_ten_section").hide();
			}
		}

		// Sidebar
		if ($(".home_page_gutter").length > 0) {
			text = localized_strings[language].homepage_sidebar;
			if (getValue("show_homepage_sidebar")) { html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_sidebar'><div class='home_viewsettings_checkbox checked'></div><div class='home_viewsettings_label'>" + text + "</div></div>"; }
			else {
				html += "<div class='home_viewsettings_checkboxrow ellipsis' id='show_homepage_sidebar'><div class='home_viewsettings_checkbox'></div><div class='home_viewsettings_label'>" + text + "</div></div>";
				$(".home_page_gutter").hide();
				$(".home_page_body_ctn").css("margin-left", "0px");
				$(".home_page_content").css("padding-left", "0px");
				$(".has_takeover").find(".page_background_holder").css("margin-left", "-202px");
			}
		}

		$("#es_customize_btn").append(html);

		$("#es_customize_btn").find(".home_customize_btn").click(function() {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
			} else {
				$(this).addClass("active");
			}

			if ($(this).parent().find(".home_viewsettings_popup").is(":visible")) {
				$(this).parent().find(".home_viewsettings_popup").hide();
			} else {
				$(this).parent().find(".home_viewsettings_popup").show();
			}
		});

		$('body').bind('click', function(e) {
			if($(e.target).closest("#es_customize_btn").length == 0) {
				if ($("#es_customize_btn").find(".home_customize_btn").hasClass("active")) {
					$("#es_customize_btn").find(".home_customize_btn").removeClass("active");
				}
				if ($("#es_customize_btn").find(".home_viewsettings_popup").is(":visible")) {
					$("#es_customize_btn").find(".home_viewsettings_popup").hide();
				}
			}
		});

		$("#show_homepage_carousel").click(function() {
			if (getValue("show_homepage_carousel")) {
				setValue("show_homepage_carousel", false);
				$("#home_main_cluster").parent().hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_homepage_carousel", true);
				$("#home_main_cluster").parent().show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_homepage_spotlight").click(function() {
			if (getValue("show_homepage_spotlight")) {
				setValue("show_homepage_spotlight", false);
				$("#spotlight_scroll").parent().parent().hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_homepage_spotlight", true);
				$("#spotlight_scroll").parent().parent().show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_homepage_newsteam").click(function() {
			if (getValue("show_homepage_newsteam")) {
				setValue("show_homepage_newsteam", false);
				$(".new_on_steam").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_homepage_newsteam", true);
				$(".new_on_steam").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_homepage_updated").click(function() {
			if (getValue("show_homepage_updated")) {
				setValue("show_homepage_updated", false);
				$(".recently_updated").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_homepage_updated", true);
				$(".recently_updated").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_homepage_recommended").click(function() {
			if (getValue("show_homepage_recommended")) {
				setValue("show_homepage_recommended", false);
				$(".recommended").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_homepage_recommended", true);
				$(".recommended").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_homepage_explore").click(function() {
			if (getValue("show_homepage_explore")) {
				setValue("show_homepage_explore", false);
				$(".discovery_queue_ctn").hide();
				$("#content_callout").hide();
				$("#content_loading").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_homepage_explore", true);
				$(".discovery_queue_ctn").show();
				$("#content_callout").show();
				$("#content_loading").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_homepage_curators").click(function() {
			if (getValue("show_homepage_curators")) {
				setValue("show_homepage_curators", false);
				$(".apps_recommended_by_curators_ctn").hide();
				$(".steam_curators_ctn").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_homepage_curators", true);
				if ($("#apps_recommended_by_curators").children().length > 0) {
					$(".apps_recommended_by_curators_ctn").show();
				} else {
					$(".steam_curators_ctn").show();
				}
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_homepage_tabs").click(function() {
			if (getValue("show_homepage_tabs")) {
				setValue("show_homepage_tabs", false);
				$(".home_tab_col").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_homepage_tabs", true);
				$(".home_tab_col").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_homepage_specials").click(function() {
			if (getValue("show_homepage_specials")) {
				setValue("show_homepage_specials", false);
				$(".dailydeal_ctn").parent().hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_homepage_specials", true);
				$(".dailydeal_ctn").parent().show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_homepage_under10").click(function() {
			if (getValue("show_homepage_under10")) {
				setValue("show_homepage_under10", false);
				$("#es_under_ten_section").hide();
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_homepage_under10", true);
				$("#es_under_ten_section").show();
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});

		$("#show_homepage_sidebar").click(function() {
			if (getValue("show_homepage_sidebar")) {
				setValue("show_homepage_sidebar", false);
				$(".home_page_gutter").hide();
				$(".home_page_body_ctn").css("margin-left", "0px");
				$(".home_page_content").css("padding-left", "0px");
				$(".has_takeover").find(".page_background_holder").css("margin-left", "-202px");
				$(this).find(".home_viewsettings_checkbox").removeClass("checked");
			} else {
				setValue("show_homepage_sidebar", true);
				$(".home_page_gutter").show();
				$(".home_page_content").css("padding-left", "204px");
				$(".has_takeover").find(".page_background_holder").css("margin-left", "0px");
				$(this).find(".home_viewsettings_checkbox").addClass("checked");
			}
		});
	}
	
	function bind_ajax_content_highlighting() {
		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				for (var i = 0; i < mutation.addedNodes.length; i++) {
					var node = mutation.addedNodes[i];
					// Check the node is what we want, and not some unrelated DOM change.
					if (node.classList && node.classList.contains("tab_item")) {
						runInPageContext("function() { GDynamicStore.DecorateDynamicItems( jQuery('.tab_item') ) }");
						start_highlighting_node(node);
						check_early_access(node, "ea_231x87.png", 0, ":last");
					}

					if (node.id == "search_result_container") {
						processing = false;
						endless_scrolling();
						start_highlights_and_tags();
						process_early_access();
					}

					if ($(node).children('div')[0] && $(node).children('div')[0].classList.contains("blotter_day")) {
						start_friend_activity_highlights();
						process_early_access();
					}

					if (node.classList && node.classList.contains("browse_tag_games")) {
						start_highlights_and_tags();
						process_early_access();
					}

					if (node.classList && node.classList.contains("match")) { 
						start_highlighting_node(node);
						check_early_access(node, "ea_184x69.png", 0);
					}

					if (node.classList && node.classList.contains("search_result_row")) {
						start_highlighting_node(node);
						check_early_access(node, "ea_sm_120.png", 0);
					}

					if (node.classList && node.classList.contains("market_listing_row_link")) highlight_market_items();
					if ($(node).parent()[0] && $(node).parent()[0].classList.contains("search_result_row")) start_highlighting_node($(node).parent()[0]);
				}
			});
		});
		observer.observe(document, { subtree: true, childList: true });
	}

	function start_highlighting_node(node) {
		var node_to_highlight = node;
		if ($(node).hasClass("item")) { node_to_highlight = $(node).find(".info")[0]; }
		if ($(node).hasClass("home_area_spotlight")) { node_to_highlight = $(node).find(".spotlight_content")[0]; }

		if ($(node).find(".ds_owned_flag").length > 0) {
			highlight_owned(node_to_highlight);
		}

		if ($(node).find(".ds_wishlist_flag").length > 0) {
			highlight_wishlist(node_to_highlight);
		}

		if ($(node).find(".ds_incart_flag").length > 0) {
			higlight_cart(node_to_highlight);
		}

		var appid = get_appid(node.href || $(node).find("a")[0].href) || get_appid_wishlist(node.id);
	}

	function add_custom_wallet_amount() {
		var addfunds = $(".addfunds_area_purchase_game:first").clone();
		$(addfunds).addClass("es_custom_funds");
		$(addfunds).find(".btnv6_green_white_innerfade").addClass("es_custom_button");
		$(addfunds).find("h1").text(localized_strings[language].wallet.custom_amount);
		$(addfunds).find("p").text(localized_strings[language].wallet.custom_amount_text.replace("__minamount__", $(addfunds).find(".price").text().trim()));
		var currency_symbol = currency_symbol_from_string($(addfunds).find(".price").text().trim());
		var minimum = $(addfunds).find(".price").text().trim().replace(/(?:R\$|\$|€|¥|£|pуб)/, "");
		var formatted_minimum = minimum;
		switch (currency_symbol) {
			case "€":
			case "pуб":
				$(addfunds).find(".price").html("<input id='es_custom_funds_amount' class='es_text_input' style='margin-top: -3px;' size=4 value='" + minimum +"'> " + currency_symbol);
				break;
			default:
				$(addfunds).find(".price").html(currency_symbol + " <input id='es_custom_funds_amount' class='es_text_input' style='margin-top: -3px;' size=4 value='" + minimum +"'>");
				break;
		}
		$("#game_area_purchase .addfunds_area_purchase_game:first").after(addfunds);
		$("#es_custom_funds_amount").change(function() {
			// Make sure two numbers are entered after the separator
			if (!($("#es_custom_funds_amount").val().match(/(\.|\,)\d\d$/))) { $("#es_custom_funds_amount").val($("#es_custom_funds_amount").val().replace(/\D/g, "")); }

			// Make sure the user entered decimals. If not, add 00 to the end of the number to make the value correct.
			if (currency_symbol == "€" || currency_symbol == "pуб" || currency_symbol == "R$") {
				if ($("#es_custom_funds_amount").val().indexOf(",") == -1) $("#es_custom_funds_amount").val($("#es_custom_funds_amount").val() + ",00");
			} else {
				if ($("#es_custom_funds_amount").val().indexOf(".") == -1) $("#es_custom_funds_amount").val($("#es_custom_funds_amount").val() + ".00");
			}

			var calculated_value = $("#es_custom_funds_amount").val().replace(/-/g, "0").replace(/\D/g, "").replace(/[^A-Za-z0-9]/g, '');
			$("#es_custom_funds_amount").val($("#es_custom_funds_amount").val().replace(/[A-Za-z]/g, ''));
			$(".es_custom_button").attr("href", "javascript:submitAddFunds( " + calculated_value + " );")
		});
	}

	function start_highlights_and_tags(){
		// Batch all the document.ready appid lookups into one storefront call.
		var selectors = [
			"div.tab_row",				// Storefront rows
			"div.dailydeal_ctn",
			"div.wishlistRow",			// Wishlist rows
			"a.game_area_dlc_row",			// DLC on app pages
			"a.small_cap",				// Featured storefront items and "recommended" section on app pages
			"a.home_smallcap",
			"a.search_result_row",			// Search result rows
			"a.match",				// Search suggestions rows
			"a.cluster_capsule",			// Carousel items
			"div.recommendation_highlight",		// Recommendation pages
			"div.recommendation_carousel_item",	// Recommendation pages
			"div.friendplaytime_game",		// Recommendation pages
			"div.dlc_page_purchase_dlc",		// DLC page rows
			"div.sale_page_purchase_item",		// Sale pages
			"div.item",				// Sale pages / featured pages
			"div.home_area_spotlight",		// Midweek and weekend deals
			"div.browse_tag_game",			// Tagged games
			"div.similar_grid_item",			// Items on the "Similarly tagged" pages
			"div.tab_item",			// Items on new homepage
			"div.special",			// new homepage specials
			"div.curated_app_item"	// curated app items!
		];
			
		setTimeout(function() {
			$.each(selectors, function (i, selector) {
				$.each($(selector), function(j, node){
					var node_to_highlight = node;
					if ($(node).hasClass("item")) { node_to_highlight = $(node).find(".info")[0]; }
					if ($(node).hasClass("home_area_spotlight")) { node_to_highlight = $(node).find(".spotlight_content")[0]; }

					if ($(node).find(".ds_owned_flag").length > 0) {
						highlight_owned(node_to_highlight);
					}

					if ($(node).find(".ds_wishlist_flag").length > 0) {
						highlight_wishlist(node_to_highlight);
					}

					if ($(node).find(".ds_incart_flag").length > 0) {
						highlight_cart(node_to_highlight);
					}

					var appid = get_appid(node.href || $(node).find("a").attr("href")) || get_appid_wishlist(node.id);
					if (appid) {
						if (getValue(appid + "guestpass")) highlight_inv_guestpass(node);
						if (getValue(appid + "coupon")) highlight_coupon(node, getValue(appid + "coupon_discount"));
						if (getValue(appid + "gift")) highlight_inv_gift(node);
					}
				});
			});
		}, 500);
	}

	function highlight_app(appid, node) {
		if (!(node.classList.contains("wishlistRow") || node.classList.contains("wishlistRowItem"))) {
			if (getValue(appid + "wishlisted")) highlight_wishlist(node);
		}

		if (getValue(appid + "owned")) highlight_owned(node);

		/*
		if (getValue(appid + "gift")) highlight_inv_gift(node);
		if (getValue(appid + "guestpass")) highlight_inv_guestpass(node);
		if (getValue(appid + "coupon")) highlight_coupon(node);
		if (getValue(appid + "friendswant")) highlight_friends_want(node, appid);
		if (getValue(appid + "friendsown")) tag_friends_own(node, appid);
		if (getValue(appid + "friendsrec")) tag_friends_rec(node, appid); 
		*/
	}
	
	function change_user_background() {
		var steamID;
		if ($("#reportAbuseModal").length > 0) { steamID = document.getElementsByName("abuseID")[0].value; }
		if (steamID === undefined) { steamID = document.documentElement.outerHTML.match(/steamid"\:"(.+)","personaname/)[1]; }

		get_http("http://api.enhancedsteam.com/profile/?steam64=" + steamID, function (txt) {
			if (txt) {
				$(".no_header")[0].style.backgroundImage = "url(" + txt + ")";
				if ($(".profile_background_image_content").length > 0) {
					$(".profile_background_image_content")[0].style.backgroundImage = "url(" + txt + ")";
				} else {
					$(".no_header").addClass("has_profile_background");
					$(".profile_content").addClass("has_profile_background");
					$(".profile_content").prepend('<div class="profile_background_holder_content"><div class="profile_background_overlay_content"></div><div class="profile_background_image_content " style="background-image: url(' + txt + ');"></div></div></div>');
				}
			}
		});
	}

	function add_es_background_selection() {
		if (window.location.pathname.indexOf("/settings") < 0) {
			var steam64 = $(document.body).html();
			steam64 = steam64.match(/g_steamID = \"(.+)\";/)[1];
			var html = "<form id='es_profile_bg' method='POST' action='http://www.enhancedsteam.com/gamedata/profile_bg_save.php'><div class='group_content group_summary'>";
			html += "<input type='hidden' name='steam64' value='" + steam64 + "'>";
			html += "<div class='formRow'><div class='formRowFields'><div class='profile_background_current'><div class='profile_background_current_img_ctn'><div class='es_loading'><img src='http://cdn.steamcommunity.com/public/images/login/throbber.gif'><span>"+ localized_strings[language].loading +"</div>";
			html += "<img id='es_profile_background_current_image' src=''>";
			html += "</div><div class='profile_background_current_description'><div id='es_profile_background_current_name'>";
			html += "</div></div><div style='clear: left;'></div><div class='background_selector_launch_area'></div></div><div class='background_selector_launch_area'>&nbsp;<div style='float: right;'><span id='es_background_save_btn' class='btn_grey_white_innerfade btn_small btn_disabled'><span>" + localized_strings[language].save + "</span></span></div></div><div class='formRowTitle'>" + localized_strings[language].custom_background + ":<span class='formRowHint' title='" + localized_strings[language].custom_background_help + "'>(?)</span></div></div></div>";
			html += "</form>";
			$(".group_content_bodytext").before(html);

			get_http("http://api.enhancedsteam.com/profile-select/?steam64=" + steam64, function (txt) {
				var data = JSON.parse(txt);
				var select_html = "<select name='es_background' id='es_background' class='gray_bevel dynInput' onchange=\"function image(obj){index=obj.selectedIndex; document.getElementById('es_profile_background_current_image').src=obj.options[index].id; } image(this);\"><option value='0' id='http://www.enhancedsteam.com/gamedata/icons/smallblacksquare.jpg'>None Selected / No Change</option>";

				var array = [];
				for (var key in data["backgrounds"]) {
					if (data["backgrounds"].hasOwnProperty(key)) {
					  array.push(data["backgrounds"][key]);
					}
				}

				array.sort(function(a,b) {
					if ( a.text == b.text ) return 0;
					return a.text < b.text ? -1 : 1;
				});

				$.each(array, function(index, value) {
					if (value["selected"]) {
						select_html += "<option id='" + escapeHTML(value['id'].toString()) + "' value='" + escapeHTML(value['index'].toString()) + "' SELECTED>" + escapeHTML(value['text'].toString()) + "</option>";
					} else {
						select_html += "<option id='" + escapeHTML(value['id'].toString()) + "' value='" + escapeHTML(value['index'].toString()) + "'>" + escapeHTML(value['text'].toString()) + "</option>";
					}
				});

				select_html += "</select>";
				$(".es_loading").remove();
				$("#es_background_save_btn").removeClass("btn_disabled");
				$("#es_background_save_btn").click(function(e) {
					$("#es_profile_bg").submit();
				});
				$("#es_profile_background_current_name").html(select_html);

				get_http("http://api.enhancedsteam.com/profile-small/?steam64=" + steam64, function (txt) {
					$("#es_profile_background_current_image").attr("src", escapeHTML(txt));
				});
			});
		}
	}

	function add_review_toggle_button() {
		$("#review_create").find("h1").append("<div style='float: right;'><a class='btnv6_lightblue_blue btn_mdium' id='es_review_toggle'><span>▲</span></a></div>");
		$("#review_container").find("p, .avatar_block, .content").wrapAll("<div id='es_review_section'></div>");

		if (getValue("show_review_section")) {
			$("#es_review_toggle").find("span").text("▼");
			$("#es_review_section").hide();
		}

		$("#es_review_toggle").on("click", function() {
			if (getValue("show_review_section") == true) {
				$("#es_review_toggle").find("span").text("▲");
				$("#es_review_section").slideDown();
				setValue("show_review_section", false);
			} else {
				$("#es_review_toggle").find("span").text("▼");
				$("#es_review_section").slideUp();
				setValue("show_review_section", true);
			}
		});
	}

	$(document).ready(function(){
		signed_in_promise.done(function(){
		localization_promise.done(function(){

			if (window.location.pathname.startsWith("/api")) return;

			add_enhanced_steam_options();
			add_fake_country_code_warning();
			remove_install_steam_button();
			process_early_access();

			switch (window.location.host) {
				case "store.steampowered.com":
					switch (true) {
						case /^\/cart\/.*/.test(window.location.pathname):
							add_empty_cart_button();
							break;

						case /^\/app\/.*/.test(window.location.pathname):
							var appid = get_appid(window.location.host + window.location.pathname);
							show_pricing_history(appid, "app");
							dlc_data_from_site(appid);
							
							drm_warnings("app");
							add_metacritic_userscore();
							add_steamreview_userscore(appid);

							add_widescreen_certification(appid);
							add_hltb_info(appid);
							add_pcgamingwiki_link(appid);
							add_app_page_highlights(appid);
							add_steamdb_links(appid, "app");
							add_familysharing_warning(appid);
							add_dlc_page_link(appid);
							add_pack_breakdown();
							add_steamchart_info(appid);
							add_app_badge_progress(appid);
							add_dlc_checkboxes();

							show_regional_pricing();
							add_review_toggle_button();

							customize_app_page();
							break;

						case /^\/sub\/.*/.test(window.location.pathname):
							var subid = get_subid(window.location.host + window.location.pathname);
							drm_warnings("sub");
							show_pricing_history(subid, "sub");
							add_steamdb_links(subid, "sub");

							show_regional_pricing();
							break;

						case /^\/agecheck\/.*/.test(window.location.pathname):
							send_age_verification();
							break;

						case /^\/steamaccount\/addfunds/.test(window.location.pathname):
							add_custom_wallet_amount();
							break;

						case /^\/search\/.*/.test(window.location.pathname):
							endless_scrolling();
							add_hide_button_to_search();
							break;

						case /^\/sale\/.*/.test(window.location.pathname):
							show_regional_pricing();
							break;

						case /^\/$/.test(window.location.pathname):
							add_popular_tab();
							add_allreleases_tab();
							window.setTimeout(function() { customize_home_page(); }, 1000);
							break;
					}

					start_highlights_and_tags();
					bind_ajax_content_highlighting();
					break;

				case "steamcommunity.com":
					switch (true) {
						case /^\/(?:id|profiles)\/.+\/wishlist/.test(window.location.pathname):
							appdata_on_wishlist();
							fix_wishlist_image_not_found();
							add_wishlist_filter();
							add_wishlist_discount_sort();
							add_wishlist_total();

							start_highlights_and_tags();
							break;

						case /^\/(?:id|profiles)\/.+\/\b(home|myactivity|status)\b/.test(window.location.pathname):
							start_friend_activity_highlights();
							bind_ajax_content_highlighting();
							break;

						case /^\/(?:id|profiles)\/.+\/edit/.test(window.location.pathname):
							add_es_background_selection();
							break;

						case /^\/(?:id|profiles)\/.+\/inventory/.test(window.location.pathname):
							bind_ajax_content_highlighting();
							inventory_market_prepare();
							break;

						case /^\/(?:id|profiles)\/.+\/badges/.test(window.location.pathname):
							add_badge_completion_cost();
							add_total_drops_count();
							add_cardexchange_links();
							add_badge_filter();
							add_badge_sort();
							break;

						case /^\/(?:id|profiles)\/.+\/gamecard/.test(window.location.pathname):
							var gamecard = get_gamecard(window.location.pathname);
							add_cardexchange_links(gamecard);
							add_gamecard_market_links(gamecard);							
							break;

						case /^\/(?:id|profiles)\/.+/.test(window.location.pathname):
							add_community_profile_links();
							add_wishlist_profile_link();
							add_supporter_badges();
							change_user_background();
							break;

						case /^\/app\/.*/.test(window.location.pathname):
							var appid = get_appid(window.location.host + window.location.pathname);
							add_steamdb_links(appid, "gamehub");
							break;
							
						case /^\/games\/.*/.test(window.location.pathname):
							var appid = document.querySelector( 'a[href*="http://steamcommunity.com/app/"]' );
							appid = appid.href.match( /(\d)+/g );
							add_steamdb_links(appid, "gamegroup");
							break;
					}
					break;
			}
		});
		});
	});
}