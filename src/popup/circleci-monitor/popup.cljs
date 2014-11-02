(ns circleci-monitor.popup
  (:require [circleci-monitor.chrome :as chrome]))

(def background chrome/background-page.circleci-monitor.view)

(background.start-popup (. js/document (getElementById "app0")))

(defn shutdown []
  (background.shutdown-popup (. js/document (getElementById "app0"))))

(js/addEventListener "unload" shutdown)
