---
layout: default
title: "ABEP Thruster Requirements and Cost Analysis"
date: 2025-07-01
---
---
## ✈️ Specific Power Comparison of Aviation Power Systems

| System                             | Specific Power (kW/kg) | Notes                                                        |
|-----------------------------------|------------------------|--------------------------------------------------------------|
| Rolls-Royce AE2100D3              | ~0.85–0.95             | Turboprop used in C-130J; optimized for thrust-to-weight     |
| Honeywell Turbogenerator          | ~1.2                   | Used in hybrid-electric demonstrators                        |
| Traditional CCGT (land-based)     | ~0.04–0.12             | Not airworthy due to HRSG & steam cycle weight               |
| 3-tier MHD–LMMHD–Fuel Cell Stack  | Potentially 0.6–1.0+   | Depends on NaK containment, compaction, and thermal integration |

---
---
## 💰 Cost per Kilogram Comparison of Aviation Power Systems

| System             | Total Cost (USD) | Weight (kg) | Cost per kg (USD/kg) |
|-------------------|------------------|-------------|-----------------------|
| Lightweight System | $500,000         | 500         | 1,000                 |
| Standard System    | $1,200,000       | 1,000       | 1,200                 |
| Heavy-Duty System  | $2,500,000       | 1,667       | 1,500                 |

---
---
## ⚙️ ABEP Thruster Requirements per Power System

**Assumptions:**
- Each ABEP thruster consumes ~100 kW
- Target output per system: 1,000 kW
- Power availability = specific power × 1,000 kg

| Power System                       | Specific Power (kW/kg) | Power Available (kW) | ABEP Thrusters Required         |
|-----------------------------------|------------------------|----------------------|----------------------------------|
| Rolls-Royce AE2100D3              | ~0.9                   | 900                  | 9                                |
| Honeywell Turbogenerator          | ~1.2                   | 1,200                | 12                               |
| 3-tier MHD–LMMHD–Fuel Cell Stack  | ~0.8 (est.)            | 800                  | 8                                |
| Traditional CCGT (land-based)     | ~0.08                  | 80                   | ⚠️ 80 (non-airworthy bulk unit) |

---
---
## 💸 Estimated ABEP Thruster Cost Breakdown

| Power System                       | Thrusters Needed | Est. Cost per Thruster (USD) | Total Thruster Cost (USD) |
|-----------------------------------|------------------|-------------------------------|----------------------------|
| Rolls-Royce AE2100D3              | 9                | $35,000                       | $315,000                   |
| Honeywell Turbogenerator          | 12               | $32,000                       | $384,000                   |
| 3-tier MHD–LMMHD–Fuel Cell Stack  | 8                | $38,000                       | $304,000                   |
| Traditional CCGT (land-based)     | 80               | $20,000                       | $1,600,000                 |

---
---
## 🛠️ Key Metrics & Test Bench Summary

| Subsystem          | Test Objective                              | Key Metric                          |
|--------------------|----------------------------------------------|-------------------------------------|
| Fuel Conversion    | Demonstrate direct energy-to-thrust conversion | Thrust-to-power ratio, energy stability |
| Thruster Module    | Validate thrust vectoring and rapid response | Response time, thrust modulation range |
| Thermal Management | Ensure effective heat dissipation and safe temps | Temperature uniformity, peak limits |
| Flight Control     | Confirm real-time adaptive control functionality | Control latency, stability margin   |

---

---
layout: default
title: "ABEP Thruster Power-to-Mass Breakdown"
date: 2025-07-01
---
---
## ⚖️ 800 kW ABEP System: Power-to-Mass Estimate

**Assumptions:**
- ABEP thrusters require ~100 kW each → 8 units = 800 kW
- Power system specific power = 0.8 kW/kg
- Estimated mass for power system, thrusters, and support infrastructure included

| Component           | Assumed Units        | Estimated Mass (kg) | Notes                                                  |
|--------------------|----------------------|---------------------|--------------------------------------------------------|
| Power Generation    | 1 (800 kW)           | 1,000               | 800 kW ÷ 0.8 kW/kg                                      |
| ABEP Thrusters      | 8 × 100 kW           | 480                 | ~60 kg per unit with EM channels + control hardware     |
| Support Systems     | N/A                  | 400                 | Includes cooling, fuel piping, avionics, mounting frame |
| **Total System Mass** | —                  | **1,880**           |                                                        |
| **Effective Power-to-Mass Ratio** | —        | **~0.425 kW/kg**    | Realistic system-level output, accounting for overhead  |

---

> This is an upper-baseline estimate for airborne ABEP system mass at ~800 kW output using a 3-tier hybrid MHD power system. With optimization, this could trend below 1,600 kg. Future iterations could reduce thruster weight (via lightweight inductors or AM ceramics), streamline cooling, or trade off redundancy for mass savings.

