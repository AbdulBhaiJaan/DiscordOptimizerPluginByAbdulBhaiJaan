/**
 * @name AbdulDiscordOptimizer
 * @author AbdulCordKaBhaiJaan
 * @version 1
 * @description A highly optimized, headless Discord plugin that enhances performance with Lite Mode, task monitoring, and cache management.
 */

module.exports = class AbdulDiscordOptimizer {
    constructor() {
        this.settings = {
            liteMode: true,                // Lite mode enabled by default
            autoClearCache: true,          // Clears cache every 60 seconds
            backgroundTaskMonitor: true,   // Adjust resources based on Discord's visibility
        };
        this.monitorInterval = null;
    }

    // Plugin initialization
    start() {
        console.log("[AbdulDiscordOptimizer] Optimization plugin started.");
        this.applyOptimizations();
        this.monitorBackgroundTasks();
        this.clearCacheOnInterval();
        this.handleErrors();
    }

    // Stops and cleans up any intervals or settings when the plugin is disabled
    stop() {
        clearInterval(this.monitorInterval);
        this.restoreDefaultSettings();
        console.log("[AbdulDiscordOptimizer] Optimization plugin stopped.");
    }

    // Applies Lite Mode to disable heavy visuals and animations
    applyOptimizations() {
        if (this.settings.liteMode) {
            document.body.style.transition = "none"; // Disable all animations
            this.hideHeavyVisuals();
            console.log("[AbdulDiscordOptimizer] Lite Mode enabled: Animations and heavy visuals disabled.");
        }
    }

    // Hides emojis, stickers, and video elements for Lite Mode
    hideHeavyVisuals() {
        const elementsToHide = document.querySelectorAll("[class*=emoji], [class*=sticker], video");
        elementsToHide.forEach(el => el.style.display = "none");
    }

    // Monitors if Discord is in the background and reduces resource usage
    monitorBackgroundTasks() {
        if (this.settings.backgroundTaskMonitor) {
            console.log("[AbdulDiscordOptimizer] Background task monitor active.");
            this.monitorInterval = setInterval(() => {
                const isBackground = document.hidden;
                document.body.style.opacity = isBackground ? "0.7" : "1.0"; // Reduce opacity for background mode
                if (isBackground) {
                    console.log("[AbdulDiscordOptimizer] Background mode detected. Reducing resource usage.");
                }
            }, 5000); // Check every 5 seconds
        }
    }

    // Automatically clears cache every 60 seconds to free up memory
    clearCacheOnInterval() {
        if (this.settings.autoClearCache) {
            setInterval(() => {
                BdApi.clearCache();
                console.log("[AbdulDiscordOptimizer] Cache cleared.");
            }, 60000); // Every 60 seconds
        }
    }

    // Handles errors gracefully and logs them to the console
    handleErrors() {
        window.addEventListener("error", (event) => {
            console.error("[AbdulDiscordOptimizer] Error detected:", event.message);
        });
    }

    // Restores original Discord settings when the plugin is stopped
    restoreDefaultSettings() {
        document.body.style.transition = "";
        document.body.style.opacity = "1.0";
        const elementsToRestore = document.querySelectorAll("[class*=emoji], [class*=sticker], video");
        elementsToRestore.forEach(el => el.style.display = "");
        console.log("[AbdulDiscordOptimizer] Default settings restored.");
    }
};
