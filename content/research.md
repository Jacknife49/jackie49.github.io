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

## Long-Term Fairness in Performative Learning

A model's decisions can change the population and opportunities on which future decisions depend.  
Consequently, fairness measured at deployment may not persist as the environment responds.  
Studying long-term fairness requires accounting for this interaction between learning, decisions, and distribution shifts.

### Research direction

I am interested in connecting long-term fairness with performative learning and reinforcement learning. My aim is to understand how policy-induced environmental changes affect fairness over time, and how learning algorithms can account for those changes when making sequential decisions.

{{< /research-tabs >}}
