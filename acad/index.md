---
title: Ruixuan Tu | トゥ・ルイシュェン
html:
  embed_local_images: false
  embed_svg: false
  offline: false
---

<div class="invisible">

@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
@import "https://turx.asia/acad/acad.css"
@import "acad.js"

</div><div id="header">

# Ruixuan Tu （トゥ・ルイシュェン）

<div id="profile">
  <img src="profile.jpg" alt="伊豆半島 だるま山高原展望台 にて">
</div>

アメリカ ウィスコンシン大学マディソン校（University of Wisconsin--Madison） B4
情報科学（Honors）・数学（Honors）・データ科学・統計学・日本語専攻
ruixuan@cs.wisc.edu

[[GitHub](https://github.com/TURX)] [[Google Scholar](https://scholar.google.com/citations?user=V6hzHoQAAAAJ)] [[履歴書](https://direct.turx.asia/resume-ja.pdf)]
[[English Page (英語)](https://turx.asia/acad)]

</div>

<div id="content">

アメリカ ウィスコンシン大学マディソン校の情報科学（Honors）・数学（Honors）・データ科学・統計学・日本語専攻の４年生のトゥ・ルイシュェン（zh_CN: 涂 睿轩, en: Ruixuan Tu）です。2025年5月に卒業予定で、**自然言語処理（NLP）と大規模言語モデル（LLM）に関する修士・博士（５年）課程の機会を積極的に探しています**。

アイオワ州立大学情報科学科およびVectara社機械学習主任の[Forrest Sheng Bao](https://forrestbao.github.io/)教授、ウィスコンシン大学マディソン校電気・コンピュータ工学科・情報科学科・統計学科の[Ramya Korlakai Vinayak](https://ramyakv.github.io/)教授、ウィスコンシン大学マディソン校生物医学情報科学科・情報科学科の[Junjie Hu](https://junjiehu.github.io/)教授の指導のもと研究を行っています。以前はウィスコンシン大学マディソン校情報科学科の[Jerry Zhu](https://pages.cs.wisc.edu/~jerryzhu/)教授とも研究を行っていました。

## 研究分野

**人間のようなLLM** 2018年以降、LLMは大きな進歩を遂げ、人々の間で人気を集めていますが、幻覚、偏見、事実の不正確さなどの問題を考慮すると、必ずしも人間と同様のパフォーマンスを発揮するとは限りません。LLMを人間の期待と行動に合わせるため、以下のようなプロジェクトに取り組んでいます：
- 参照不要の要約評価方法：[[EMNLP'23](https://aclanthology.org/2023.findings-emnlp.87/)]
- 要約の幻覚検出：[[arXiv preprint](https://arxiv.org/abs/2410.13210)]
- 意味的なチャンキングを用いた検索拡張生成：[[arXiv preprint](https://arxiv.org/abs/2410.13070)]
- Transformerモデルの文脈内学習の一般化可能性と多元的アライメントへの応用：（進行中）[Ramya Korlakai Vinayak](https://ramyakv.github.io/)教授と博士課程の[Daiwei Chen](https://chendaiwei-99.github.io/)との進行中の卒業論文研究
- LLMエージェントにおける意見動態のアライメント：（進行中）[Junjie Hu](https://junjiehu.github.io/)教授と[Yun-Shiuan (Sean) Chuang](https://yunshiuan.github.io/)博士との進行中の独立研究

**多言語NLPと計算言語学（日本語NLP）** 日本語を専攻の一つとしていることから、NLPの知識と日本語言語学・古典日本語の授業を結びつけています。WakaGPTでは現代日本語から古典日本語への多言語転移学習を適用し、日本文学における形態素起源の分析には計算言語学のツールを応用しました。また、計算社会言語学の観点から、日本のメディア（ゲームやアニメ）における[役割語](https://en.wikipedia.org/wiki/Yakuwarigo)をクラスタリング手法を用いて分析しました。

## 論文

### 査読あり

1. **Is Semantic Chunking Worth the Computational Cost?**
Renyi Qu, **Ruixuan Tu**, Forrest Sheng Bao
*Findings of the 2025 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#rag-abstract" aria-expanded="false" aria-controls="rag-abstract">Abstract</button> [[arXiv](https://arxiv.org/abs/2410.13070)] [[PDF](https://arxiv.org/pdf/2410.13070)]

  <div class="collapse" id="rag-abstract">

  &emsp; Recent advances in Retrieval-Augmented Generation (RAG) systems have popularized **semantic chunking**, which aims to improve retrieval performance by dividing documents into semantically coherent segments. Despite its growing adoption, the actual benefits over simpler **fixed-size chunking**, where documents are split into consecutive, fixed-size segments, remain unclear. This study systematically evaluates the effectiveness of semantic chunking using three common retrieval-related tasks: document retrieval, evidence retrieval, and retrieval-based answer generation. The results show that the computational costs associated with semantic chunking are not justified by consistent performance gains. These findings challenge the previous assumptions about semantic chunking and highlight the need for more efficient chunking strategies in RAG systems.

  </div>

2. **FaithBench: A Diverse Hallucination Benchmark for Summarization by Modern LLMs**
Forrest Sheng Bao, Miaoran Li, Renyi Qu, Ge Luo, Erana Wan, Yujia Tang, Weisi Fan, Manveer Singh Tamber, Suleman Kazi, Vivek Sourabh, Mike Qi, **Ruixuan Tu**, Chenyu Xu, Matthew Gonzales, Ofer Mendelevitch, Amin Ahmad
*Proceedings of the 2025 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#faithbench-abstract" aria-expanded="false" aria-controls="faithbench-abstract">Abstract</button> [[arXiv](https://arxiv.org/abs/2410.13210)] [[PDF](https://arxiv.org/pdf/2410.13210)] [[GitHub Repo](https://github.com/vectara/FaithBench)]

  <div class="collapse" id="faithbench-abstract">

  &emsp; Summarization is one of the most common tasks performed by large language models (LLMs), especially in applications like Retrieval-Augmented Generation (RAG). However, existing evaluations of hallucinations in LLM-generated summaries, and evaluations of hallucination detection models both suffer from a lack of diversity and recency in the LLM and LLM families considered. This paper introduces FaithBench, a summarization hallucination benchmark comprising challenging hallucinations made by 10 modern LLMs from 8 different families, with ground truth annotations by human experts. "Challenging" here means summaries on which popular, state-of-the-art hallucination detection models, including GPT-4o-as-a-judge, disagreed on. Our results show GPT-4o and GPT-3.5-Turbo produce the least hallucinations. However, even the best hallucination detection models have near 50\% accuracies on FaithBench, indicating lots of room for future improvement.

  </div>

3. **DocAsRef: An Empirical Study on Repurposing Reference-based Summary Quality Metrics as Reference-free Metrics**
Forrest Sheng Bao\*, **Ruixuan Tu**\*, Ge Luo, Yinfei Yang, Hebi Li, Minghui Qiu, Youbiao He, and Cen Chen
*Findings of the Association for Computational Linguistics: EMNLP 2023*
(Presented the paper and the poster orally at 4th NewSumm Workshop in person as co-first-author)
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#docasref-abstract" aria-expanded="false" aria-controls="docasref-abstract">Abstract</button> [[ACL Anthology](https://aclanthology.org/2023.findings-emnlp.87/)] [[PDF](https://aclanthology.org/2023.findings-emnlp.87.pdf)] [[Poster](https://direct.turx.asia/docasref_poster.pdf)] [[GitHub Repo](https://github.com/SigmaWe/DocAsRef)]
[Video](https://aclanthology.org/2023.findings-emnlp.87.mp4)

  <div class="collapse" id="docasref-abstract">

  &emsp; Automated summary quality assessment falls into two categories: reference-based and reference-free. Reference-based metrics, historically deemed more accurate due to the additional information provided by human-written references, are limited by their reliance on human input. In this paper, we hypothesize that the comparison methodologies used by some reference-based metrics to evaluate a system summary against its corresponding reference can be effectively adapted to assess it against its source document, thereby transforming these metrics into reference-free ones. Experimental results support this hypothesis. After being repurposed reference-freely, the zero-shot BERTScore using the pretrained DeBERTa-large-MNLI model of <0.5B parameters consistently outperforms its original reference-based version across various aspects on the SummEval and Newsroom datasets. It also excels in comparison to most existing reference-free metrics and closely competes with zero-shot summary evaluators based on GPT-3.5.

  </div>

4. **Funix - The laziest way to build GUI apps in Python**
Forrest Sheng Bao, Mike Qi, **Ruixuan Tu**, Erana Wan
*Proceedings of the Python in Science Conference 2024*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#funix-abstract" aria-expanded="false" aria-controls="funix-abstract">Abstract</button> [[SciPy Proceedings](https://proceedings.scipy.org/articles/JFYN3740)] [[PDF](https://pub.curvenote.com/0192d974-5e0f-7a5b-959a-07c7835a1d2f/public/full_text-63ece1ce5a4ce92019ecb895571b14f7.pdf)] [[GitHub Repo](https://github.com/TexteaInc/funix)]

  <div class="collapse" id="funix-abstract">

  &emsp; The rise of machine learning (ML) and artificial intelligence (AI), especially the generative AI (GenAI), has increased the need for wrapping models or algorithms into GUI apps. For example, a large language model (LLM) can be accessed through a string-to-string GUI app with a textbox as the primary input. Most of existing solutions require developers to manually create widgets and link them to arguments/returns of a function individually. This low-level process is laborious and usually intrusive. Funix automatically selects widgets based on the types of the arguments and returns of a function according to the type-to-widget mapping defined in a theme, e.g., bool to a checkbox. Consequently, an existing Python function can be turned into a GUI app without any code changes. As a transcompiler, Funix allows type-to-widget mappings to be defined between any Python type and any React component and its props, liberating Python developers to the frontend world without needing to know JavaScript/TypeScript. Funix further leverages features in Python or its ecosystem for building apps in a more Pythonic, intuitive, and effortless manner. With Funix, a developer can **make it (a functional app) before they (competitors) fake it (in Figma or on a napkin)**.

  **Keywords**: type hints, docstrings, transcompiler, frontend development

  </div>

5. **A review in the core technologies of 5G: device-to-device communication, multi-access edge computing and network function virtualization**
**Ruixuan Tu**\*, Ruxun Xiang\*, Yang Xu, Yihan Mei
*International Journal of Communications, Network and System Sciences, 2019*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#5g-abstract" aria-expanded="false" aria-controls="5g-abstract">Abstract</button> [[SCIRP](https://www.scirp.org/journal/paperinformation?paperid=95497)] [[PDF](https://www.scirp.org/pdf/IJCNS_2019092914040589.pdf)]

  <div class="collapse" id="5g-abstract">

  &emsp; 5G is a new generation of mobile networking that aims to achieve unparalleled speed and performance. To accomplish this, three technologies, Device-to-Device communication (D2D), multi-access edge computing (MEC) and network function virtualization (NFV) with ClickOS, have been a significant part of 5G, and this paper mainly discusses them. D2D enables direct communication between devices without the relay of base station. In 5G, a two-tier cellular network composed of traditional cellular network system and D2D is an efficient method for realizing high-speed communication. MEC unloads work from end devices and clouds platforms to widespread nodes, and connects the nodes together with outside devices and third-party providers, in order to diminish the overloading effect on any device caused by enormous applications and improve users’ quality of experience (QoE). There is also a NFV method in order to fulfill the 5G requirements. In this part, an optimized virtual machine for middle-boxes named ClickOS is introduced, and it is evaluated in several aspects. Some middle boxes are being implemented in the ClickOS and proved to have outstanding performances.

  </div>

### プレプリント

現時点ではなし

### 授業のプロジェクト

1. **WakaGPT: Classical Japanese Poem Generator**
**Ruixuan Tu**
*Full-mark final paper for STAT 453 (Deep Learning) @ UW--Madison, Spring 2024*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#wakagpt-abstract" aria-expanded="false" aria-controls="wakagpt-abstract">Abstract</button> [[PDF](https://direct.turx.asia/wakagpt.pdf)] [[Slide](https://direct.turx.asia/wakagpt_slide.pdf)]

  <div class="collapse" id="wakagpt-abstract">

  &emsp; Waka is a traditional Japanese poem that is usually in a certain mora sequence format. However, generating waka is challenging for general-purpose LLMs like GPT-4 due to lack of data in classical Japanese and this kind of poetry, as well as the usual format restrictions. In this paper, we present WakaGPT, a waka composer based on Japanese GPT-2 and the base models it is fine-tuned on. By self-supervised and semi-supervised training, we are able to generate waka poems with correct grammar and format.

  </div>

2. **Analysis of Post-Meiji Word Origins in Japanese Literature: An approach in computational linguistics**
**Ruixuan Tu**
*A-mark final paper for ASIAN 434 (Japanese Linguistics) @ UW--Madison, Fall 2023*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#morpheme-summary" aria-expanded="false" aria-controls="morpheme-summary">Summary</button> [[PDF](https://direct.turx.asia/as434_paper.pdf)] [[Slide](https://direct.turx.asia/as434_slide.pdf)]

  <div class="collapse" id="morpheme-summary">

  &emsp; We have analyzed the distribution of origins of morphemes on Aozora Bunko dataset over all morphemes, parts of speech, and origins. For the analysis, we have used morpheme analysis tools MeCab and Juman++ by Kyoto University, and based on UniDic data, we fine-tuned DeBERTa-v2-base-Japanese to classify the origins of morphemes into three categories: native, Sino-Japanese (SJ), and mixed. The hypothesis was that the Japanese government advocates the usage of SJ and native words before/in WWII, and western culture becomes more popular after WWII, but as a result from this analysis, we can even see some preferences toward native words, contradicting the hypothesis.

  </div>

3. **Cluster Analysis of Role Languages in Visual Novel Game *AIR***
**Ruixuan Tu**
*A-mark final paper for ASIAN 358 (Japanese Sociolinguistics) @ UW--Madison, Fall 2024*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#yakuwarigo-summary" aria-expanded="false" aria-controls="yakuwarigo-summary">Summary</button> [[PDF](https://direct.turx.asia/as358_paper.pdf)] [[Slide](https://direct.turx.asia/as358_slide.pdf)]

  <div class="collapse" id="yakuwarigo-summary">

  &emsp; Through our analysis of the visual novel game *AIR*, most keywords “特徴語” from our method could be recognized as“yakuwarigo” that represents characteristics of specific individuals or groups, but might not the reverse side (not all “yakuwarigo” are keywords that could be found). From our method, we have observed non-female language, casual female language, formal and polite female language, and dialectal language as clusters. We also found that different groups of script authors might affect extracted keywords.

  **Method:** We apply agglomerative hierarchical clustering (Ward's method + euclidean distance) on word frequency vectors for every speaker, and then extract significant keywords by CoS (coefficient of specialization) >2.

  </div>

4. **Optimizing Bike-Sharing Systems: A Machine Learning Approach to Predict Station Imbalances**
**Ruixuan Tu**, Larissa Xia, Steven Haworth, Jackson Wegner
*1st Most Creative or Interesting Project and 2nd Best Visualizations for STAT 451 (Machine Learning) @ UW--Madison, Summer 2024*
<button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#divvy-summary" aria-expanded="false" aria-controls="divvy-summary">Summary</button> [[PDF](https://direct.turx.asia/stat451_paper.pdf)] [[Slide](https://direct.turx.asia/stat451_slide.pdf)]

  <div class="collapse" id="divvy-summary">

  &emsp; This study analyzes Divvy Bike Station, Trip Data, and American Community Survey Data to predict bike station flow imbalances (overflow/underflow). The key questions are: How can demographic data and machine learning predict bike availability? Is the status of existing stations a reliable indicator for nearby stations? Using Logistic Regression, Decision Tree, SVM for demographic data, and kNN for geographic data, with Recursive Feature Elimination and Grid Search with Cross-Validation, SVM was the most effective. The status of existing Divvy stations reliably predicts the status of nearby stations.

  </div>

## 職歴

**[Textea Inc](https://github.com/TexteaInc)**
ソフトウェア開発エンジニア インターン（2022年5月 --- 2022年9月）

- [Funix](https://funix.io/)のリード開発者：Python関数からサーバーレスウェブインスタンスを生成するNodeJSジェネレーター。ML研究者のアプリデプロイを支援 [[PyCon US 2024 ポスター](https://us.pycon.org/2024/schedule/posters/list/)] [[SciPy Conference 2024](https://proceedings.scipy.org/articles/JFYN3740)]
- ウェブバックエンドのリード開発者：ユーザー認証、権限、管理者、RPCおよびHTTPリモートコール用のAPI
- NLPバックエンド開発者：Pythonでの自然言語処理タスクの実装、APIマイグレーション

**ウィスコンシン大学マディソン校**

- **[COMP SCI 577 Honors（アルゴリズム）](https://pages.cs.wisc.edu/~dieter/Courses/index.html) 採点者**：Dieter van Melkebeek教授の授業で、分割統治法、動的計画法、貪欲法、ネットワークフロー、計算困難性などについて課題採点（2025年1月 --- 現在）
- **[COMP SCI 540（人工知能）](https://pages.cs.wisc.edu/~jphanna/teaching/2023spring_cs540/teaching_team.html) ピアメンター（学部生TA）**：オフィスアワーで機械学習、数学、ゲーム、探索について学生の質問に対応（2022年9月 --- 2024年5月）
  - 情報科学科への貢献に対して[Golden Bricks Award（2023）](https://www.cs.wisc.edu/2023-cs-department-awards-and-thank-yous/#GOLDEN%20BRICK%20AWARDS)を受賞
- **学生寮 微積分チューター**：多変数微積分、線形代数、解析学などの数学コースを履修する学生に個別およびグループチュータリングを提供（2022年9月 --- 現在）


## プロジェクト

**[KDE Connect](https://kdeconnect.kde.org/)** ([Apple Continuity](https://www.apple.com/macos/continuity/)のような体験) (2018年11月 --- 現在)

- 最新の安定版をダウンロード：[[App Store](https://apps.apple.com/us/app/kde-connect/id1580245991)] [[TestFlight](https://testflight.apple.com/join/vxCluwBF)]
- データ：通常App Storeダウンロード 40.6万件、アクティブテスター 1万人、インプレッション 168万回（2025年1月時点）
- Appleプラットフォーム（iOSとmacOS）のリードデベロッパーおよび保守者  [[GitHub Repo](https://github.com/KDE/kdeconnect-ios)] [[GitLab Repo](https://invent.kde.org/network/kdeconnect-ios)]
- リリースとトラブルシューティングのためのApp Store Connectメンテナー
- AndroidとLinux版への貢献


## 所属学会

- Phi Beta Kappa（2024年 ---）
- 計算言語学会（Association for Computational Linguistics）（2024年）

## 受賞歴

- 三浦昭・シャーリー記念日本語・TESOL研究奨学金（2024）[[公表](https://alc.wisc.edu/undergraduate-studies/department-scholarships/)]
- 情報科学科への貢献に対するGolden Bricks Award（2023）[[公表](https://www.cs.wisc.edu/2023-cs-department-awards-and-thank-yous/#GOLDEN%20BRICK%20AWARDS)]
- ウィスコンシン大学マディソン校サマーセッション奨学金（2023・2024）
- ACM-ICPC北中部地区大会2021 銀メダル（チーム：THREE_PUPILS）

</div>
