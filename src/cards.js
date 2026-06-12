export const cards = [
  {
    "topic": "4. Functional limits",
    "title": "Definition 4.3 — Limit point",
    "front": "Definition 4.3 — Limit point.\r\nLet ___ ⊆ ℝ and ___ ∈ ℝ.\r\n___ is a limit point of ___ iff:\r\n(∀ ___ > 0)(∃ ___ ∈ ___) 0 < |___ − ___| < ___.",
    "back": "Let E ⊆ ℝ and a ∈ ℝ.\r\na is a limit point of E iff for every δ > 0 there exists x ∈ E such that 0 < |x − a| < δ.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Functional limits",
    "title": "Theorem 4.6 — Sequential criterion for limit points",
    "front": "Theorem 4.6 — Sequential criterion for limit points.\r\nLet ___ ⊆ ℝ and ___ ∈ ℝ.\r\n___ is a limit point of ___ ⇔ (∃ sequence (___)) such that ___ → ___ and (∀ ___ ∈ ℕ) ___ ∈ ___ and ___ ≠ ___.",
    "back": "Let E ⊆ ℝ and a ∈ ℝ.\r\na is a limit point of E iff there exists a sequence (x_n) such that x_n → a, and for every n ∈ ℕ, x_n ∈ E and x_n ≠ a.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Functional limits",
    "title": "Definition 4.7 — Function limit",
    "front": "Definition 4.7 — Function limit.\r\nLet ___ ⊆ ℝ, ___ be a limit point of ___, ___: ___ → ℝ, and ___ ∈ ℝ.\r\nlim_{x→___} ___(x) = ___ iff:\r\n(∀ ___ > 0)(∃ ___ > 0) [___ ∈ ___ and 0 < |___ − ___| < ___ ⇒ |___(___) − ___| < ___].",
    "back": "Let E ⊆ ℝ, let a be a limit point of E, let f: E → ℝ, and let L ∈ ℝ.\r\nlim_{x→a} f(x) = L iff for every ε > 0 there exists δ > 0 such that if x ∈ E and 0 < |x − a| < δ, then |f(x) − L| < ε.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Functional limits",
    "title": "Theorem 4.10 — Sequential criterion for function limits",
    "front": "Theorem 4.10 — Sequential criterion for function limits.\r\nLet ___ ⊆ ℝ, ___ be a limit point of ___, ___: ___ → ℝ, ___ ∈ ℝ.\r\nlim_{x→___} ___(x) = ___ ⇔\r\n(∀ sequences (___)) [___ ∈ ___\\{___} for all ___ and ___ → ___ ⇒ ___(___) → ___].",
    "back": "Let E ⊆ ℝ, a ∈ ℝ be a limit point of E, f: E → ℝ, and L ∈ ℝ.\r\nlim_{x→a} f(x) = L iff for every sequence (a_n) with a_n ∈ E\\{a} for all n and a_n → a, we have f(a_n) → L.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Functional limits",
    "title": "Theorem 4.11 — Algebra of Limits",
    "front": "Theorem 4.11 — Algebra of Limits.\r\nAssume lim ___ = ___ and lim ___ = ___. Then:\r\n(a) lim (___ + ___) = ___ + ___\r\n(b) lim (___ · ___) = ___ · ___\r\n(c) lim ___/___ = ___/___ if ___ ≠ 0.",
    "back": "Let E ⊆ ℝ, a be a limit point of E, and f,g: E → ℝ. If lim_{x→a} f(x)=α and lim_{x→a} g(x)=β, then:\r\n(a) lim_{x→a}(f+g)(x)=α+β;\r\n(b) lim_{x→a}(fg)(x)=αβ;\r\n(c) lim_{x→a} f(x)/g(x)=α/β if β ≠ 0.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Functional limits",
    "title": "Theorem 4.12 — Inequalities and Limits",
    "front": "Theorem 4.12 — Inequalities and Limits.\r\nLet lim ___ = ___ and lim ___ = ___.\r\nIf (∀ ___ ∈ ___) ___(___) ≤ ___(___), then ___ ≤ ___.",
    "back": "Let E ⊆ ℝ, a be a limit point of E, and f,g: E → ℝ with lim_{x→a} f(x)=α and lim_{x→a} g(x)=β.\r\nIf f(x) ≤ g(x) for all x ∈ E, then α ≤ β.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Functional limits",
    "title": "Corollary 4.13 — Bounds pass to limits",
    "front": "Corollary 4.13 — Bounds pass to limits.\r\nIf ___ ≤ ___(x) for all x, then ___ ≤ lim ___.\r\nIf ___(x) ≤ ___ for all x, then lim ___ ≤ ___.",
    "back": "If b ∈ ℝ satisfies b ≤ f(x) for all x ∈ E, then b ≤ α, where α = lim_{x→a} f(x).\r\nIf c ∈ ℝ satisfies f(x) ≤ c for all x ∈ E, then α ≤ c.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Functional limits",
    "title": "Definition 4.15 — Infinite limit",
    "front": "Definition 4.15 — Infinite limit.\r\nlim_{x→___} ___(x) = ∞ iff:\r\n(∀ ___ ∈ ℝ)(∃ ___ > 0) [___ ∈ ___ and 0 < |___ − ___| < ___ ⇒ ___(___) > ___].",
    "back": "Let E ⊆ ℝ, a be a limit point of E, and f: E → ℝ.\r\nlim_{x→a} f(x)=∞ iff for every r ∈ ℝ there exists δ > 0 such that if x ∈ E and 0 < |x−a| < δ, then f(x) > r.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Functional limits",
    "title": "Definition 4.17 — Limit at infinity",
    "front": "Definition 4.17 — Limit at infinity.\r\nlim_{x→∞} ___(x) = ___ iff:\r\n(∀ ___ > 0)(∃ ___ ∈ ℝ) [___ ∈ ___ and ___ > ___ ⇒ |___(___) − ___| < ___].",
    "back": "Let E ⊆ ℝ be not bounded above, f: E → ℝ, and L ∈ ℝ.\r\nlim_{x→∞} f(x)=L iff for every ε > 0 there exists M ∈ ℝ such that if x ∈ E and x > M, then |f(x)−L| < ε.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Definition 4.19 — Continuity at a point",
    "front": "Definition 4.19 — Continuity at a point.\r\nLet ___ ⊆ ℝ, ___: ___ → ℝ, ___ ∈ ___.\r\n___ is continuous at ___ iff:\r\n(∀ ___ > 0)(∃ ___ > 0) [___ ∈ ___ and |___ − ___| < ___ ⇒ |___(___) − ___(___)| < ___].",
    "back": "Let E ⊆ ℝ, f: E → ℝ, and a ∈ E.\r\nf is continuous at a iff for every ε > 0 there exists δ > 0 such that if x ∈ E and |x−a| < δ, then |f(x)−f(a)| < ε.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Negation — Not continuous at a point",
    "front": "Negation — Not continuous at a point.\r\n¬ continuous at ___ means:\r\n(∃ ___ > 0)(∀ ___ > 0)(∃ ___ ∈ ___) [|___ − ___| < ___ and |___(___) − ___(___)| ___ ___].",
    "back": "f is not continuous at a iff there exists ε > 0 such that for every δ > 0 there exists x ∈ E with |x−a| < δ and |f(x)−f(a)| ≥ ε.\r\nYour notes use > ε in the example; the logically standard negation of < ε is ≥ ε.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Theorem 4.23 — Limit criterion for continuity",
    "front": "Theorem 4.23 — Limit criterion for continuity.\r\nLet ___ ⊆ ℝ, ___: ___ → ℝ, ___ ∈ ___ be a limit point of ___.\r\n___ continuous at ___ ⇔ lim_{x→___} ___(x) = ___(___).",
    "back": "Let E ⊆ ℝ, f: E → ℝ, and a ∈ E be a limit point of E.\r\nf is continuous at a iff lim_{x→a} f(x) = f(a).",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Theorem 4.24 — Algebra of Continuity",
    "front": "Theorem 4.24 — Algebra of Continuity.\r\nIf ___ and ___ are continuous at ___, then:\r\n(a) ___ + ___ continuous at ___\r\n(b) ___·___ continuous at ___\r\n(c) ___/___ continuous at ___ if ___(___) ≠ 0.",
    "back": "Let E ⊆ ℝ, f,g: E → ℝ, and a ∈ E. If f and g are continuous at a, then f+g and fg are continuous at a, and f/g is continuous at a if g(a) ≠ 0.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Corollary 4.25 — Polynomial continuity",
    "front": "Corollary 4.25 — Polynomial continuity.\r\nAll ___ functions ℝ → ℝ are ___.",
    "back": "All polynomial functions ℝ → ℝ are continuous.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Theorem 4.26 — Sequential criterion for continuity",
    "front": "Theorem 4.26 — Sequential criterion for continuity.\r\nLet ___ ⊆ ℝ, ___: ___ → ℝ, ___ ∈ ___.\r\n___ continuous at ___ ⇔\r\n(∀ sequences (___) in ___) [___ → ___ ⇒ ___(___) → ___(___)].",
    "back": "Let E ⊆ ℝ, f: E → ℝ, and a ∈ E.\r\nf is continuous at a iff for every sequence (a_n) in E with a_n → a, we have f(a_n) → f(a).",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Theorem 4.27 — Composition and Continuity",
    "front": "Theorem 4.27 — Composition and Continuity.\r\nLet ___: ___ → ℝ and ___: ___ → ℝ with ___(___) ⊆ ___.\r\nIf ___ continuous at ___ and ___ continuous at ___(___), then ___∘___ continuous at ___.",
    "back": "Let A,B ⊆ ℝ, f: A → ℝ and g: B → ℝ with f(A) ⊆ B. Let a ∈ A.\r\nIf f is continuous at a and g is continuous at f(a), then g∘f is continuous at a.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Definition 4.28 — Bounded function",
    "front": "Definition 4.28 — Bounded function.\r\n___ is bounded above/below/bounded iff the set ___(___) is bounded above/below/bounded in ℝ.",
    "back": "Let E ⊆ ℝ and f: E → ℝ.\r\nf is bounded above/below/bounded iff the image set f(E) is bounded above/below/bounded in ℝ.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Lemma 4.30 — Local boundedness of continuous functions",
    "front": "Lemma 4.30 — Local boundedness.\r\nIf ___: [___,___] → ℝ is continuous, then for every ___ ∈ (___,___), (∃ ___ > 0) such that ___ is bounded on [___−___, ___+___].",
    "back": "Let f: [a,b] → ℝ be continuous. For every c ∈ (a,b), there exists δ > 0 such that f is bounded on [c−δ, c+δ].",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Theorem 4.31 — Continuous on closed interval implies bounded",
    "front": "Theorem 4.31 — Boundedness theorem.\r\nIf ___: [___,___] → ℝ is continuous, then ___ is ___.",
    "back": "Let f: [a,b] → ℝ. If f is continuous, then f is bounded.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Theorem 4.32 — Extreme Value Theorem",
    "front": "Theorem 4.32 — Extreme Value Theorem.\r\nIf ___: [___,___] → ℝ is continuous, then (∃ ___, ___ ∈ [___,___]) such that\r\n___(___) ≤ ___(___) ≤ ___(___) for all ___ ∈ [___,___].",
    "back": "Let f: [a,b] → ℝ be continuous. There exist c,d ∈ [a,b] such that f(c) ≤ f(x) ≤ f(d) for all x ∈ [a,b].",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Lemma 4.33 — Zero crossing lemma",
    "front": "Lemma 4.33 — Zero crossing.\r\nLet ___: [___,___] → ℝ be continuous.\r\nIf ___(___) < 0 < ___(___), then (∃ ___ ∈ (___,___)) ___(___) = 0.",
    "back": "Let h: [a,b] → ℝ be continuous. If h(a) < 0 < h(b), then there exists c ∈ (a,b) such that h(c)=0.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Continuity",
    "title": "Theorem 4.34 — Intermediate Value Theorem",
    "front": "Theorem 4.34 — Intermediate Value Theorem.\r\nLet ___: [___,___] → ℝ be continuous.\r\nIf ___ is strictly between ___(___) and ___(___), then (∃ ___ ∈ (___,___)) ___(___) = ___.",
    "back": "Let f: [a,b] → ℝ be continuous. If y ∈ ℝ is strictly between f(a) and f(b), then there exists c ∈ (a,b) such that f(c)=y.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Sequences of functions",
    "title": "Definition 4.38 — Pointwise convergence",
    "front": "Definition 4.38 — Pointwise convergence.\r\n(___) converges pointwise to ___ iff:\r\n(∀ ___ ∈ ___)(∀ ___ > 0)(∃ ___ ∈ ℕ) [___ > ___ ⇒ |___(___) − ___(___)| < ___].\r\nHint: ___ may depend on ___ and ___.",
    "back": "Let E ⊆ ℝ, f_n: E → ℝ, and f: E → ℝ.\r\nf_n → f pointwise iff for every x ∈ E, f_n(x) → f(x). Equivalently: (∀x∈E)(∀ε>0)(∃M∈ℕ) n>M ⇒ |f_n(x)−f(x)|<ε. M may depend on x and ε.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Sequences of functions",
    "title": "Definition 4.40 — Uniform convergence",
    "front": "Definition 4.40 — Uniform convergence.\r\n(___) converges uniformly to ___ iff:\r\n(∀ ___ > 0)(∃ ___ ∈ ℕ)(∀ ___ ∈ ___) [___ > ___ ⇒ |___(___) − ___(___)| < ___].\r\nHint: same ___ works for all ___ ∈ ___.",
    "back": "Let E ⊆ ℝ, f_n: E → ℝ, and f: E → ℝ.\r\nf_n → f uniformly iff (∀ε>0)(∃M∈ℕ)(∀x∈E) n>M ⇒ |f_n(x)−f(x)|<ε. Here M depends only on ε, not on x.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "4. Sequences of functions",
    "title": "Theorem 4.42 — Uniform Limit Continuity Theorem",
    "front": "Theorem 4.42 — Uniform Limit Continuity Theorem.\r\nLet (___) be continuous functions ___: ___ → ℝ.\r\nIf ___ → ___ uniformly on ___, then ___ is ___.",
    "back": "Let E ⊆ ℝ and let (f_n) be a sequence of continuous functions f_n: E → ℝ. If f_n converges uniformly to f: E → ℝ, then f is continuous.",
    "source": "limits-sol.pdf"
  },
  {
    "topic": "5. Differentiation",
    "title": "Definition 5.1 — Derivative",
    "front": "Definition 5.1 — Derivative.\r\nLet ___ ⊆ ℝ be an interval, ___: ___ → ℝ, ___ ∈ ___.\r\n___ differentiable at ___ iff (∃ ___ ∈ ℝ) such that\r\nlim_{x→___} [___(___) − ___(___)]/[___ − ___] = ___.",
    "back": "Let I ⊆ ℝ be an interval, f: I → ℝ, and c ∈ I.\r\nf is differentiable at c iff there exists L_c ∈ ℝ such that lim_{x→c} (f(x)−f(c))/(x−c) = L_c. The derivative is f′(c)=L_c.",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Differentiation",
    "title": "Theorem 5.4 — Differentiability implies continuity",
    "front": "Theorem 5.4 — Differentiability ⇒ Continuity.\r\nLet ___ ⊆ ℝ, ___: ___ → ℝ, ___ ∈ ___.\r\nIf ___ is differentiable at ___, then ___ is continuous at ___.",
    "back": "Let I ⊆ ℝ be an interval, f: I → ℝ, and c ∈ I. If f is differentiable at c, then f is continuous at c.",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Differentiation",
    "title": "Theorem 5.5 — Linearity of derivative",
    "front": "Theorem 5.5 — Linearity.\r\nIf ___ and ___ are differentiable at ___, then:\r\n(___+___)′(___) = ___′(___) + ___′(___)\r\nand (___·___)′(___) = ___ ___′(___) for scalar ___.",
    "back": "Let I ⊆ ℝ, c ∈ I, and f,g: I → ℝ be differentiable at c. Then f+g is differentiable at c with (f+g)′(c)=f′(c)+g′(c), and for λ ∈ ℝ, λf is differentiable at c with (λf)′(c)=λf′(c).",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Differentiation",
    "title": "Theorem 5.6 — Product Rule",
    "front": "Theorem 5.6 — Product Rule.\r\nIf ___ and ___ are differentiable at ___, then ___·___ is differentiable at ___ and\r\n(___·___)′(___) = ___′(___)___(___) + ___(___)___′(___).",
    "back": "Let I ⊆ ℝ, c ∈ I, and f,g: I → ℝ be differentiable at c. Then fg is differentiable at c and (fg)′(c)=f′(c)g(c)+f(c)g′(c).",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Differentiation",
    "title": "Power rule — integer powers",
    "front": "Power rule.\r\nFor ___ ∈ ℤ with ___ > 1, ___(x)=x^___ is differentiable on ℝ and ___′(x)= ___ x^{___−1}.",
    "back": "For each n ∈ ℤ with n > 1, f(x)=x^n is differentiable on ℝ with derivative f′(x)=n x^{n−1}.",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Differentiation",
    "title": "Definition 5.8 — Local maximum/minimum",
    "front": "Definition 5.8 — Local extrema.\r\nLocal maximum at ___ means (∃ ___ > 0)(∀ ___) |___−___| < ___ ⇒ ___(___) ≤ ___(___).\r\nLocal minimum at ___ means (∃ ___ > 0)(∀ ___) |___−___| < ___ ⇒ ___(___) ≥ ___(___).",
    "back": "Let f: [a,b] → ℝ and c ∈ (a,b).\r\nf has a local maximum at c iff there exists δ>0 such that for all x∈[a,b], |x−c|<δ ⇒ f(x)≤f(c).\r\nf has a local minimum at c iff there exists δ>0 such that for all x∈[a,b], |x−c|<δ ⇒ f(x)≥f(c).",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Differentiation",
    "title": "Theorem 5.9 — Fermat—s theorem for local extrema",
    "front": "Theorem 5.9 — Local extremum ⇒ derivative zero.\r\nLet ___: [___,___] → ℝ be continuous and differentiable at ___ ∈ (___,___).\r\nIf ___ has a local maximum or minimum at ___, then ___′(___) = ___.",
    "back": "Let f: [a,b] → ℝ be continuous, and suppose f is differentiable at c ∈ (a,b). If f has a local maximum or local minimum at c, then f′(c)=0.",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Differentiation",
    "title": "Theorem 5.10 — Mean Value Theorem",
    "front": "Theorem 5.10 — Mean Value Theorem.\r\nLet ___ < ___. If ___ is continuous on [___,___] and differentiable on (___,___), then\r\n(∃ ___ ∈ (___,___)) ___′(___) = [___(___)−___(___)]/[___−___].",
    "back": "Let a < b and f: [a,b] → ℝ be continuous on [a,b] and differentiable on (a,b). There exists c ∈ (a,b) such that f′(c) = (f(b)−f(a))/(b−a).",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Differentiation",
    "title": "Theorem 5.12 — Rolle—s Theorem",
    "front": "Theorem 5.12 — Rolle.\r\nLet ___ < ___. If ___ is continuous on [___,___], differentiable on (___,___), and ___(___) = ___(___) = 0, then\r\n(∃ ___ ∈ (___,___)) ___′(___) = 0.",
    "back": "Let a < b and f: [a,b] → ℝ be continuous on [a,b] and differentiable on (a,b). If f(a)=f(b)=0, then there exists c ∈ (a,b) such that f′(c)=0.",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Definition 5.13 — Partition",
    "front": "Definition 5.13 — Partition.\r\nA partition of [___,___] is ___ = {___, …, ___} with ___ = ___ ≤ ___ ≤ ⋯ ≤ ___ = ___.",
    "back": "A partition of [a,b] is a set P={x_0,x_1,…,x_n} where a=x_0 ≤ x_1 ≤ … ≤ x_n=b. The intervals [x_{i−1},x_i] are subintervals.",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Definition 5.15 — Lower and upper Riemann sums",
    "front": "Definition 5.15 — Lower/upper sums.\r\nFor bounded ___ on [___,___] and partition ___:\r\nL(___,___)=Σ ___(x_k−x_{k−1}), where ___ = inf{___(___): ___ in subinterval}.\r\nU(___,___)=Σ ___(x_k−x_{k−1}), where ___ = sup{___(___): ___ in subinterval}.",
    "back": "Let f: [a,b] → ℝ be bounded and P={x_0,…,x_n}.\r\nL(f,P)=Σ_{k=1}^n m_k(x_k−x_{k−1}), where m_k=inf{f(x): x∈[x_{k−1},x_k]}.\r\nU(f,P)=Σ_{k=1}^n M_k(x_k−x_{k−1}), where M_k=sup{f(x): x∈[x_{k−1},x_k]}.",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Lemma 5.17 — Lower sum ≤ upper sum",
    "front": "Lemma 5.17 — Same partition inequality.\r\nFor bounded ___ and every partition ___ of [___,___],\r\nL(___,___) ≤ U(___,___).",
    "back": "Let f: [a,b] → ℝ be bounded. For every partition P of [a,b], L(f,P) ≤ U(f,P).",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Definition 5.18 — Refinement",
    "front": "Definition 5.18 — Refinement.\r\nIf ___ and ___ are partitions of [___,___], then ___ is a refinement of ___ iff ___ ⊆ ___.",
    "back": "If P and Q are partitions of [a,b], Q is a refinement of P iff P ⊆ Q.",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Lemma 5.20 — One-point refinement improves sums",
    "front": "Lemma 5.20 — One-point refinement.\r\nIf ___ refines ___ by one point, then\r\nL(___,___) ≤ L(___,___) and U(___,___) ≤ U(___,___).",
    "back": "Let f be bounded on [a,b], R a partition, and Q a refinement of R with Q\\R having one element. Then L(f,R) ≤ L(f,Q) and U(f,Q) ≤ U(f,R).",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Lemma 5.21 — Refinement improves sums",
    "front": "Lemma 5.21 — Refinement.\r\nIf ___ refines ___, then\r\nL(___,___) ≤ L(___,___) and U(___,___) ≤ U(___,___).",
    "back": "Let f be bounded on [a,b], P a partition, and Q a refinement of P. Then L(f,P) ≤ L(f,Q) and U(f,Q) ≤ U(f,P).",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Theorem 5.22 — Any lower sum ≤ any upper sum",
    "front": "Theorem 5.22 — Lower sums sit below upper sums.\r\nFor bounded ___ and any partitions ___, ___′ of [___,___],\r\nL(___,___) ≤ U(___,___′).",
    "back": "Let f: [a,b] → ℝ be bounded and P,P′ partitions of [a,b]. Then L(f,P) ≤ U(f,P′).",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Definition 5.23 — Lower/upper Riemann integrals",
    "front": "Definition 5.23 � Lower/upper integrals.\r\nL(___) = sup{L(___,___): ___ partition}\r\nU(___) = inf{U(___,___): ___ partition}.",
    "back": "For bounded f: [a,b] → ℝ, the lower Riemann integral is L(f)=sup{L(f,P): P is a partition of [a,b]}, and the upper Riemann integral is U(f)=inf{U(f,P): P is a partition of [a,b]}.",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Theorem 5.24 — Lower integral ≤ upper integral",
    "front": "Theorem 5.24 — Integral inequality.\r\nFor bounded ___: [___,___] → ℝ,\r\nL(___) ≤ U(___).",
    "back": "Let f: [a,b] → ℝ be bounded. Then L(f) ≤ U(f).",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Definition 5.26 — Riemann integrable",
    "front": "Definition 5.26 — Riemann integrable.\r\n___ is Riemann integrable on [___,___] iff L(___) = U(___).\r\nThen ∫ ___ = ___ = ___.",
    "back": "A bounded function f: [a,b] → ℝ is Riemann integrable on [a,b] iff L(f)=U(f). In that case ∫_a^b f(x)dx = L(f)=U(f).",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Theorem 5.27 — Riemann integrability criterion",
    "front": "Theorem 5.27 — Integrability criterion.\r\nBounded ___ is Riemann integrable on [___,___] ⇔\r\n(∀ ___ > 0)(∃ partition ___ε) U(___,___ε) − L(___,___ε) < ___.",
    "back": "Let f: [a,b] → ℝ be bounded. f is Riemann integrable on [a,b] iff for every ε > 0 there exists a partition P_ε of [a,b] such that U(f,P_ε) − L(f,P_ε) < ε.",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Theorem 5.28 — Continuous functions are integrable",
    "front": "Theorem 5.28 — Continuity ⇒ Integrability.\r\nIf ___: [___,___] → ℝ is continuous on [___,___], then ___ is integrable on [___,___].",
    "back": "Let f: [a,b] → ℝ. If f is continuous on [a,b], then f is integrable on [a,b].",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Theorem 5.29 — Properties of integrals",
    "front": "Theorem 5.29 — Algebra/order of integrals.\r\nIf ___, ___ integrable and ___ ∈ ℝ, then:\r\n∫_a^b ___ = ∫_a^c ___ + ∫_c^b ___;\r\n∫(___+___)=∫___+∫___;\r\n∫ ___·___ = ___∫___;\r\n|∫___| ≤ ∫|___|;\r\n___ ≤ ___ ⇒ ∫___ ≤ ∫___.",
    "back": "Let f,g: [a,b] → ℝ be integrable and λ∈ℝ. Then:\r\n(a) ∫_a^b f = ∫_a^c f + ∫_c^b f for all c∈[a,b];\r\n(b) ∫_a^b(f+g)=∫_a^b f + ∫_a^b g;\r\n(c) ∫_a^b λf = λ∫_a^b f;\r\n(d) |∫_a^b f| ≤ ∫_a^b |f|;\r\n(e) if f≤g on [a,b], then ∫_a^b f ≤ ∫_a^b g.",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Theorem 5.30 — Fundamental Theorem of Calculus I",
    "front": "Theorem 5.30 — FTC I.\r\nLet ___: [___,___] → ℝ be integrable. Let ___: [___,___] → ℝ be differentiable with ___′(___) = ___(___) for all ___.\r\nThen ∫_a^b ___(___) d___ = ___(___) − ___(___).",
    "back": "Let f: [a,b] → ℝ be integrable. Let F: [a,b] → ℝ be differentiable with F′(x)=f(x) for all x∈[a,b]. Then ∫_a^b f(x)dx = F(b) − F(a).",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "5. Integration",
    "title": "Theorem 5.31 — Fundamental Theorem of Calculus II",
    "front": "Theorem 5.31 — FTC II.\r\nLet ___: [___,___] → ℝ be integrable and define ___(___) = ∫_a^x ___(___) d___.\r\nThen ___ is continuous. If ___ is continuous at ___, then ___ is differentiable at ___ and ___′(___) = ___(___).",
    "back": "Let g: [a,b] → ℝ be integrable and define G(x)=∫_a^x g(t)dt. Then G is continuous on [a,b]. If g is continuous at c∈[a,b], then G is differentiable at c and G′(c)=g(c).",
    "source": "deriv_int-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Definition 6.1 — Series and partial sums",
    "front": "Definition 6.1 — Series.\r\nGiven sequence (___), define partial sums ___n = Σ_{k=0}^n ___.\r\nThe expression Σ_{k=0}^∞ ___ is called a ___.",
    "back": "Let (a_n) be a sequence. Define A_n=Σ_{k=0}^n a_k. The expression Σ_{k=0}^∞ a_k is the series with partial sums A_n.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Definition 6.3/6.4 — Series convergence/divergence",
    "front": "Definition 6.3/6.4 — Convergence/divergence.\r\nΣ ___ converges to ___ iff lim ___n = ___.\r\nΣ ___ diverges iff the partial sums ___n ___.",
    "back": "The series Σ_{k=0}^∞ a_k converges to L iff lim_{n→∞} A_n=L, where A_n are partial sums. It diverges if the partial sums diverge; it diverges to ±∞ if A_n → ±∞.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Theorem 6.6 — Terms of a convergent series go to zero",
    "front": "Theorem 6.6 — Necessary term test.\r\nIf Σ ___ converges, then ___ → ___.",
    "back": "If the series Σ_{k=0}^∞ a_k converges, then a_k → 0.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Corollary 6.7 — Divergence test",
    "front": "Corollary 6.7 — Divergence criterion.\r\nIf (___) does not converge to ___, then Σ ___ ___.",
    "back": "If the sequence (a_n) does not converge to 0, then the series Σ_{n=0}^∞ a_n diverges.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Definition 6.9 — Alternating series",
    "front": "Definition 6.9 — Alternating series.\r\nAn alternating series has form Σ ___^n ___n = ___0 − ___1 + ___2 − …, with ___n ≥ 0.",
    "back": "An alternating series is a series of the form Σ_{n=0}^∞ (−1)^n b_n = b_0 − b_1 + b_2 − …, where b_n ≥ 0 for all n.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Theorem 6.10 — Alternating Series Test",
    "front": "Theorem 6.10 — Alternating Series Test.\r\nLet (___n) be monotone decreasing.\r\nΣ (−1)^n ___n converges ⇔ ___n → ___.",
    "back": "Let (b_n) be monotone decreasing with b_n ≥ 0. The alternating series Σ_{n=0}^∞ (−1)^n b_n converges iff b_n → 0.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Definition 6.12 — Geometric series",
    "front": "Definition 6.12 — Geometric series.\r\nGiven ___ ∈ ℝ, the geometric series with ratio ___ is Σ ___^k = 1 + ___ + ___^2 + …",
    "back": "Given r ∈ ℝ, the geometric series with ratio r is Σ_{k=0}^∞ r^k = 1+r+r^2+…",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Theorem 6.13 — Geometric Series Test",
    "front": "Theorem 6.13 — Geometric Series Test.\r\nΣ ___^k converges ⇔ |___| < ___.\r\nWhen it converges, Σ ___^k = 1/(1−___).",
    "back": "The geometric series Σ_{k=0}^∞ r^k converges iff |r|<1. When it converges, its sum is 1/(1−r).",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Theorem 6.14 — Algebra of Series",
    "front": "Theorem 6.14 — Algebra of Series.\r\nIf Σ ___ = ___ and Σ ___ = ___, then\r\nΣ(___+___)=___+___ and Σ ___·___ = ___·___.",
    "back": "If Σ a_n=α and Σ b_n=β, and λ∈ℝ, then Σ(a_n+b_n)=α+β and Σλa_n=λα.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Definition 6.15 — Absolute convergence",
    "front": "Definition 6.15 — Absolute convergence.\r\nΣ ___ converges absolutely iff Σ |___| ___.",
    "back": "A series Σ a_k converges absolutely iff the series Σ |a_k| converges.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Theorem 6.16 — Absolute convergence implies convergence",
    "front": "Theorem 6.16 — Absolute convergence.\r\nIf Σ ___ converges absolutely, then Σ ___ ___.\r\nAlso, all rearrangements converge to the same ___.",
    "back": "If a series converges absolutely, then it converges. Moreover, all rearrangements of an absolutely convergent series converge to the same value.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Theorem 6.17 — Positive series criterion",
    "front": "Theorem 6.17 — Positive series.\r\nIf ___k ≥ 0 for all k, then Σ ___k converges ⇔ the partial sums ___n are bounded ___.",
    "back": "Let (a_k) satisfy a_k ≥ 0 for all k. The series Σ_{k=0}^∞ a_k converges iff the sequence of partial sums (A_n) is bounded above.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Theorem 6.18 — Integral Test",
    "front": "Theorem 6.18 — Integral Test.\r\nLet ___: [1,∞) → ℝ be positive, decreasing, and integrable on [1,___] for all ___ > 1.\r\nΣ_{k=1}^∞ ___(k) converges ⇔ ∫_1^∞ ___(u) du converges.",
    "back": "Let f: [1,∞) → ℝ be positive, decreasing, and integrable on [1,b] for all b>1. Then Σ_{k=1}^∞ f(k) converges iff the improper integral ∫_1^∞ f(u)du converges.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Corollary 6.19 — p-series Test",
    "front": "Corollary 6.19 — p-series Test.\r\nFor ___ ≥ 0, Σ 1/k^___ converges for ___ > ___ and diverges for 0 ≤ ___ ≤ ___.",
    "back": "Let p ∈ ℝ with p ≥ 0. The p-series Σ_{k=1}^∞ 1/k^p converges for p>1 and diverges for 0≤p≤1.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Theorem 6.21 — Limit Ratio Test",
    "front": "Theorem 6.21 — Limit Ratio Test.\r\nIf lim |___{k+1}/___k| = ___ ≥ 0, then:\r\n___ < 1 ⇒ Σ ___k converges absolutely;\r\n___ > 1 ⇒ Σ ___k diverges;\r\n___ = 1 ⇒ test says ___.",
    "back": "Let (a_k) be a sequence with a_k≠0 eventually and lim_{k→∞}|a_{k+1}/a_k|=r≥0. If r<1, then Σ a_k converges absolutely. If r>1, then Σ a_k diverges. If r=1, the test is inconclusive.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Definition 6.24 — Conditional convergence",
    "front": "Definition 6.24 — Conditional convergence.\r\nΣ ___ is conditionally convergent iff it is ___ but not ___ convergent.",
    "back": "A series is conditionally convergent iff it is convergent but not absolutely convergent.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Series of numbers",
    "title": "Theorem 6.25 — Rearrangement of conditionally convergent series",
    "front": "Theorem 6.25 — Rearrangement theorem.\r\nIf Σ ___ is conditionally convergent, then for every ___ ∈ ℝ ∪ {−∞,∞}, there exists a bijection ___: ℕ → ℕ such that Σ ___{___(n)} = ___.",
    "back": "If a series Σ a_n is conditionally convergent, then for every L ∈ ℝ ∪ {−∞,∞}, there exists a rearrangement of the series that converges to L; i.e. a bijection φ: ℕ→ℕ with Σ a_{φ(n)}=L.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Function series",
    "title": "Theorem 6.26 — Cauchy uniform convergence criterion for sequences",
    "front": "Theorem 6.26 — Uniform Cauchy criterion.\r\n(___n) converges uniformly on ___ ⇔\r\n(∀ ___ > 0)(∃ ___ ∈ ℕ)(∀ ___,___ > ___)(∀ ___ ∈ ___) |___m(___) − ___n(___)| < ___.",
    "back": "Let E ⊆ ℝ and f_n: E → ℝ. The sequence (f_n) converges uniformly on E iff for every ε>0 there exists M∈ℕ such that for all m,n>M, |f_m(x)−f_n(x)|<ε for all x∈E.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Function series",
    "title": "Corollary 6.27 — Cauchy uniform criterion for series",
    "front": "Corollary 6.27 — Uniform Cauchy criterion for series.\r\nΣ ___k converges uniformly on ___ ⇔\r\n(∀ ___ > 0)(∃ ___)(∀ ___,___ with ___ > ___ > ___)(∀ ___ ∈ ___) |___{m+1}(___) + ⋯ + ___n(___)| < ___.",
    "back": "Let E ⊆ ℝ and f_k: E → ℝ. The series Σ f_k converges uniformly on E iff for every ε>0 there exists M∈ℕ such that for all n>m>M, |f_{m+1}(x)+⋯+f_n(x)|<ε for all x∈E.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Function series",
    "title": "Corollary 6.28 — Weierstrass M-test",
    "front": "Corollary 6.28 — Weierstrass M-test.\r\nIf |___k(___)| ≤ ___k for all ___ ∈ ___ and Σ ___k converges, then Σ ___k converges ___ on ___.",
    "back": "Let (M_k) be positive real numbers with |f_k(x)| ≤ M_k for all x∈E and all k. If Σ M_k converges, then Σ f_k converges uniformly on E.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Function sequences",
    "title": "Theorem 6.30 — Uniform convergence of derivatives",
    "front": "Theorem 6.30 — Passing derivative through limit.\r\nLet ___n be differentiable on [___,___]. If (___n(___0)) converges for some ___0 and (___n′) converges uniformly to ___, then ___n converges uniformly to differentiable ___ and ___′ = ___.",
    "back": "For each n, let f_n: [a,b] → ℝ be differentiable. Suppose there exists x_0∈[a,b] such that f_n(x_0) converges, and f_n′ converges uniformly to g: [a,b]→ℝ. Then f_n converges uniformly to a differentiable function f, and f′=g.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Function sequences",
    "title": "Theorem 6.31 — Uniform limit of integrable functions",
    "front": "Theorem 6.31 — Integrals and uniform limits.\r\nIf each ___n is Riemann integrable on [___,___] and ___n → ___ uniformly, then ___ is integrable and\r\n∫ ___ = lim ∫ ___n.",
    "back": "For each n, let f_n: [a,b] → ℝ be Riemann integrable. If f_n converges uniformly to f: [a,b]→ℝ, then f is Riemann integrable and ∫_a^b f(x)dx = lim_{n→∞} ∫_a^b f_n(x)dx.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Power series",
    "title": "Definition 6.32 — Power series",
    "front": "Definition 6.32 — Power series.\r\nGiven (___n) and centre ___, the power series is Σ ___n(___−___)^n.\r\nIts domain of convergence is the set of ___ where the series ___.",
    "back": "Let (a_n) be a sequence in ℝ and c∈ℝ. The power series at c is Σ_{n=0}^∞ a_n(x−c)^n. Its domain of convergence is the set of all x∈ℝ for which the series converges.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Power series",
    "title": "Theorem 6.33 — Power series converge inside a known point",
    "front": "Theorem 6.33 — Power series inside convergence.\r\nIf Σ ___n(x−___)^n converges at ___0, then it converges absolutely at every ___ satisfying |___−___| < |___0−___|.",
    "back": "If the power series Σ a_n(x−c)^n converges at x_0, then it converges absolutely at every x satisfying |x−c| < |x_0−c|.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Power series",
    "title": "Corollary 6.34 — Interval/radius of convergence",
    "front": "Corollary 6.34 — Radius of convergence.\r\nThe domain of convergence of a power series at ___ is one of:\r\n(___−R,___+R), half-closed variants, closed variant, or ℝ.\r\n___ is called the radius of convergence.",
    "back": "The domain of convergence of a power series at c is one of (c−R,c+R), (c−R,c+R], [c−R,c+R), [c−R,c+R], or ℝ. The number R is the radius of convergence; for ℝ, set R=∞.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Power series",
    "title": "Lemma 6.36 — Uniform convergence inside power series radius",
    "front": "Lemma 6.36 — Uniform convergence on closed subinterval.\r\nIf Σ ___n(x−___)^n converges absolutely at ___0, then it converges uniformly on [___−___0, ___+___0] where ___0 = |___0−___|.",
    "back": "If the power series Σ a_n(x−c)^n converges absolutely at x_0, then it converges uniformly on the closed interval [c−r_0, c+r_0], where r_0=|x_0−c|.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Power series",
    "title": "Theorem 6.37 — Termwise differentiation/integration of power series",
    "front": "Theorem 6.37 — Power series calculus.\r\nIf f(x)=Σ ___n(x−___)^n has radius ___ > 0, then on (___−___,___+___):\r\n(a) f is differentiable and f′(x)=Σ n___n(x−___)^{n−1}.\r\n(b) ∫ from ___ to x f = Σ ___n(x−___)^{n+1}/(n+1).",
    "back": "If f(x)=Σ_{n=0}^∞ a_n(x−c)^n has radius of convergence R>0, then f is differentiable on (c−R,c+R) with f′(x)=Σ_{n=1}^∞ n a_n(x−c)^{n−1}. Also, for every x in the interval, ∫_c^x f(t)dt = Σ_{n=0}^∞ a_n(x−c)^{n+1}/(n+1).",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Power series",
    "title": "Theorem 6.39 — Algebra of Power Series",
    "front": "Theorem 6.39 — Algebra of Power Series.\r\nIf f=Σ ___n(x−___)^n and g=Σ ___n(x−___)^n, then on ___f ∩ ___g:\r\nf+g = Σ(___n+___n)(x−___)^n, and λf = Σ λ___n(x−___)^n.",
    "back": "Let f(x)=Σ a_n(x−c)^n and g(x)=Σ b_n(x−c)^n with intervals of convergence E_f and E_g. Then f(x)+g(x)=Σ(a_n+b_n)(x−c)^n for x∈E_f∩E_g, and λf(x)=Σλa_n(x−c)^n for x∈E_f.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Power series",
    "title": "Theorem 6.40 — Cauchy product of series",
    "front": "Theorem 6.40 — Cauchy product.\r\nIf Σ ___n = ___ and Σ ___n = ___ and at least one converges absolutely, then the Cauchy product Σ ___n converges to ___·___, where ___n = Σ_{k=0}^n ___k ___{n−k}.",
    "back": "If Σ a_n=α and Σ b_n=β and at least one of the two series converges absolutely, then their Cauchy product Σ d_n converges to αβ, where d_n=Σ_{k=0}^n a_k b_{n−k}.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Power series",
    "title": "Theorem 6.41 — Product of Power Series",
    "front": "Theorem 6.41 — Product of Power Series.\r\nIf f=Σ ___n(x−___)^n and g=Σ ___n(x−___)^n, then on ___f ∩ ___g:\r\nf(x)g(x)=Σ ___n(x−___)^n, where ___n=Σ_{k=0}^n ___k ___{n−k}.",
    "back": "Let f(x)=Σ a_n(x−c)^n and g(x)=Σ b_n(x−c)^n with intervals E_f and E_g. Then f(x)g(x)=Σ d_n(x−c)^n for x∈E_f∩E_g, where d_n=Σ_{k=0}^n a_k b_{n−k}.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Taylor series",
    "title": "Definition 6.43 — Taylor polynomial",
    "front": "Definition 6.43 — n-th Taylor polynomial.\r\nT_{n,___}(x)=Σ_{k=0}^n ___^{(k)}(___)/k! · (x−___)^k.",
    "back": "Let c∈(a,b) and f be at least n times differentiable at c. The n-th Taylor polynomial of f at c is T_{n,c}(x)=Σ_{k=0}^n f^{(k)}(c)/k! · (x−c)^k.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Taylor series",
    "title": "Theorem 6.44 — Taylor polynomial derivative matching",
    "front": "Theorem 6.44 — Derivative matching.\r\nFor 0 ≤ ___ ≤ ___,\r\nT_{___,___}^{(___)}(___) = ___^{(___)}(___).",
    "back": "For the Taylor polynomial T_{n,c}, we have T_{n,c}^{(k)}(c)=f^{(k)}(c) for all 0≤k≤n.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Taylor series",
    "title": "Definition 6.45 — Taylor series",
    "front": "Definition 6.45 — Taylor series.\r\nThe Taylor series of ___ at ___ is\r\nlim_{n→∞} T_{n,___}(x) = Σ_{k=0}^∞ ___^{(k)}(___)/k! · (x−___)^k.",
    "back": "Let c∈(a,b) and f be sufficiently differentiable at c. The Taylor series of f at c is Σ_{k=0}^∞ f^{(k)}(c)/k! · (x−c)^k, the formal limit of T_{n,c}(x).",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Taylor series",
    "title": "Theorem 6.47 — Taylor—s Theorem with remainder",
    "front": "Theorem 6.47 — Taylor’s Theorem.\r\nIf ___ is (n+1)-times differentiable and ___ ≠ ___, then (∃ ___ between ___ and ___) such that\r\n___(x) − T_{n,___}(x) = ___^{(n+1)}(___)/(n+1)! · (x−___)^{n+1}.",
    "back": "Let c∈(a,b) and f be at least n+1 times differentiable. For every x∈(a,b) with x≠c, there exists ξ between c and x such that f(x)−T_{n,c}(x)= f^{(n+1)}(ξ)/(n+1)! · (x−c)^{n+1}.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Taylor series",
    "title": "Corollary 6.48 — Taylor error bound",
    "front": "Corollary 6.48 — Taylor error bound.\r\nIf |___^{(n+1)}(t)| ≤ ___ for all t between ___ and ___, then\r\n|___(x) − T_{n,___}(x)| ≤ ___/(n+1)! · |x−___|^{n+1}.",
    "back": "Under Taylor’s theorem assumptions, if |f^{(n+1)}(t)| ≤ M for all t between c and x, then |f(x)−T_{n,c}(x)| ≤ M/(n+1)! · |x−c|^{n+1}.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Fourier series",
    "title": "Definition 6.51 — Fourier series",
    "front": "Definition 6.51 — Fourier series.\r\nFor integrable, 2π-periodic ___, the Fourier series is\r\n___0 + Σ_{k=1}^∞ (___k cos(kx)+___k sin(kx)),\r\nwith coefficients defined by integrals over [−π,π].",
    "back": "Let f: ℝ→ℝ be integrable on [−π,π] and 2π-periodic. Its Fourier series is a_0 + Σ_{k=1}^∞(a_k cos(kx)+b_k sin(kx)), where a_0=(1/2π)∫_{−π}^{π}f(x)dx, a_k=(1/π)∫_{−π}^{π}f(x)cos(kx)dx, and b_k=(1/π)∫_{−π}^{π}f(x)sin(kx)dx.",
    "source": "series-sol.pdf"
  },
  {
    "topic": "6. Fourier series",
    "title": "Theorem 6.53 — Fourier convergence theorem",
    "front": "Theorem 6.53 — Fourier convergence.\r\nLet ___ be bounded, 2π-periodic, piecewise continuous and piecewise monotone.\r\nAt continuity points, Fourier series → ___(___).\r\nAt discontinuities, Fourier series → 1/2( left limit + right limit ).",
    "back": "Let f: ℝ→ℝ be bounded and 2π-periodic. If f is piecewise continuous and piecewise monotone, then its Fourier series converges pointwise to f(x) at every continuity point x. At a discontinuity, it converges to ½(lim_{t→x−} f(t)+lim_{t→x+} f(t)).",
    "source": "series-sol.pdf"
  }
];
