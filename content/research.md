---
title: Research
description: Performative reinforcement learning, performative privacy, and long-term fairness in performative learning.
slug: research
menu:
    main:
        weight: 2
        params:
            icon: infinity
---

My research studies how learning systems change their environments, and what these feedback effects mean for optimal decision-making, privacy, and fairness.

{{< research-tabs >}}

## Performative Privacy

Performative privacy studies how privacy protection influences future data participation.  
When data leakage causes people to leave a system, privacy choices change the data available for subsequent learning.  
This feedback makes privacy a potential contributor to long-term utility, alongside its protective role.

### My contribution

Together with **Edwige Cyffers and Yann Chevaleyre**, I introduced a model of performative privacy in which agents repeatedly contribute data for mean estimation but may leave following data leakage. We studied the trade-off between noise introduced by differential privacy and the preservation of future participation. Through theoretical analysis and numerical experiments, we showed that a finite privacy budget can yield better long-term utility than non-private estimation when the leakage–participation feedback is sufficiently strong.

### Paper

**[Performative Privacy: When Differential Privacy Maximizes Utility](https://arxiv.org/abs/2608.28198)**  
**Uddalak Mukherjee**, Edwige Cyffers, and Yann Chevaleyre  
**Accepted at the NeurIPS 2026 AI4Good Workshop.**

[Read the paper on arXiv →](https://arxiv.org/abs/2608.28198)

## Performative Reinforcement Learning

Performative reinforcement learning studies agents whose deployed policies reshape the environments they learn from.  
In this setting, rewards or transition dynamics can depend on the policy itself.  
The goal is to learn policies that account for this feedback when optimizing long-term performance.

### My contribution

Together with **Debabrota Basu, Udvas Das, and Brahim Driss**, I coauthored work on **performative optimality** in reinforcement learning. We derived performative versions of the performance difference lemma and the policy gradient theorem, and introduced the **Performative Policy Gradient (PePG)** algorithm. Under softmax parameterization and the paper's assumptions, we established convergence to performatively optimal policies, with and without entropy regularization. Experiments showed improvements over existing approaches targeting performative stability.

### Paper

**[Performative Policy Gradient: Optimality in Performative Reinforcement Learning](https://proceedings.mlr.press/v306/basu26a.html)**  
Debabrota Basu, Udvas Das, Brahim Driss, and **Uddalak Mukherjee**  
**ICML 2026** · Proceedings of Machine Learning Research, Volume 306, pp. 6939–6983.

[Read the paper in the ICML proceedings →](https://proceedings.mlr.press/v306/basu26a.html)

## Long-Term Fairness in Performative Learning

A model's decisions can change the population and opportunities on which future decisions depend.  
Consequently, fairness measured at deployment may not persist as the environment responds.  
Studying long-term fairness requires accounting for this interaction between learning, decisions, and distribution shifts.

### Master’s Thesis

**[Achieving Long-Term Fairness in Performative Reinforcement Learning](https://zenodo.org/records/18073907)**

My master’s thesis at **RKMVERI**, supervised by **Debabrota Basu** at **Inria, Lille**, studies the connection between performative prediction and long-term fairness through performative Markov decision processes. This work laid the foundation for my subsequent research on performative policy gradients and fairness in sequential decision-making.

[Read my master’s thesis / research report →](https://zenodo.org/records/18073907)

## Other Interests

### Performative Bandits with Nash Regret

An ongoing project extending performative learning to multi-armed bandits, with Nash regret as a way to study equitable reward allocation under performative shifts. I am working on the problem formulation with **Sayak Ray Chowdhury** and **Debabrota Basu**.

Background reading: [Regret Minimization with Performative Feedback](https://arxiv.org/abs/2202.00628).

### Statistical Study of Social Awareness

An analysis of survey data on social awareness among young people in **South 24 Parganas and Purulia**, using statistical hypothesis testing. This work is in collaboration with **Kuntal Ghosh, Rabindranath Jana, and Sanjoy Ganguly**.

[Read the preprint →](https://zenodo.org/records/20451002)

### Remotal and Uniquely Remotal Sets in Normed Linear Spaces

A follow-up to my undergraduate thesis, with **Sumit Som**, studying sufficient conditions for remotality and unique remotality of bounded subsets of Banach spaces through alpha–beta statistical convergence.

[Read “A note on remotal and uniquely remotal sets in normed linear spaces” →](https://arxiv.org/abs/2510.10992)

### Transformer Hawkes Processes for Failure-Time Forecasting

A project modeling pipe failure data with temporal point processes, including a covariate-based Transformer Hawkes variant and comparisons with recurring Cox-type hazards and Neural Hawkes models. Supervised by **Sudipta Das** at **RKMVERI**.

[Read the research report →](https://zenodo.org/records/18073702)

### Asian Option Valuation with a Geometric Poisson Process

A project incorporating abrupt price jumps into Asian option pricing through a Geometric Poisson framework, with Monte Carlo and martingale-based valuation methods. Supervised by **Indranil Sengupta** at **Hunter College, CUNY**.

[Read the research report →](https://zenodo.org/records/18074003)

### Beyond Local Queries on Graphs

A survey project on graph property testing and streaming, including an investigation of query algorithms for finding global minimum cuts. Supervised by **Arijit Ghosh** at **ACMU, ISI Kolkata**. The project report is not yet available.

Background reading: [Query Complexity of Global Minimum Cut](https://arxiv.org/abs/2007.09202).

{{< /research-tabs >}}
