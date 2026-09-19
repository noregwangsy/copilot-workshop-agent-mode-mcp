![工作坊完成徽章](https://img.shields.io/badge/GitHub_Copilot_實戰工作坊-已完成-1F883D?style=for-the-badge&logo=githubcopilot&logoColor=white)

# 待辦清單 Web App

這是在 GitHub Copilot 實戰工作坊中完成的待辦清單 Web App。專案以簡潔、離線可用的方式，提供日常待辦事項的建立、整理與完成管理，並透過版本控制與 agentic workflow 記錄開發過程。

## 線上展示

[GitHub Pages](https://noregwangsy.github.io/copilot-workshop-agent-mode-mcp/)

> 請將上述佔位網址替換成實際的 GitHub Pages 網址。

## 功能

- 新增待辦事項，並防止輸入空白內容。
- 勾選待辦事項為已完成，完成項目會顯示刪除線並淡化。
- 刪除單筆待辦事項。
- 顯示整體清單的未完成項目數量。
- 清單為空或篩選結果為空時，顯示對應提示文字。
- 使用「全部」、「未完成」與「已完成」篩選待辦事項。
- 一次清除所有已完成項目，並在刪除前顯示確認對話框。
- 沒有已完成項目時停用「清除已完成」按鈕。
- 支援淺色與深色模式切換，按鈕會顯示對應的圖示與文字。
- 深色模式會記住使用者偏好；沒有手動設定時，會跟隨作業系統的深淺色設定。
- 待辦資料與主題偏好保存於 `localStorage`，重新整理後仍可保留。
- 具備響應式版面，可支援手機螢幕。

## 技術

- 使用純 HTML、CSS 與原生 JavaScript。
- 不使用任何前端框架、套件或外部 CDN。
- 使用 CSS 變數管理主題色彩，並以原生 CSS 完成響應式版面。
- 使用 `localStorage` 保存待辦資料與使用者的主題偏好。
- 透過 `prefers-color-scheme` 讀取作業系統的深淺色偏好。

## 開發方式

這個專案在 GitHub Copilot 實戰工作坊中，透過 GitHub Copilot Agent Mode、MCP 與 `.github/prompts` 的 agentic workflow 逐步完成：

- 使用 GitHub Copilot Agent Mode 協助探索程式碼、規劃修改、實作功能與驗證結果。
- 透過 MCP 連接 Microsoft Learn 與 GitHub，查詢官方文件、讀取 Issue，並建立與推送 Pull Request。
- 使用 `.github/prompts/fix-issue.prompt.md` 定義處理 GitHub Issue 的固定流程，包含讀取 Issue、提出計畫、建立分支、修改、驗證、提交推送與建立 PR。
- 以 GitHub Issue 與 Pull Request 追蹤需求、修復與功能開發，維持變更範圍清楚可追蹤。

## 我學到什麼

- 如何用原生 JavaScript 管理 DOM、事件與 `localStorage`，完成不依賴框架的互動式 Web App。
- 如何設計篩選與空狀態提示，讓資料被篩選後的畫面行為仍然清楚。
- 如何使用 CSS 變數與 `prefers-color-scheme` 實作可持久化的淺色／深色模式。
- 如何透過 GitHub Copilot Agent Mode、MCP 與 prompt workflow，將 Issue 到 PR 的開發流程具體化。
- 如何使用 Microsoft Learn 文件與開發者工具的建議檢查深色模式及色彩對比的無障礙風險。
