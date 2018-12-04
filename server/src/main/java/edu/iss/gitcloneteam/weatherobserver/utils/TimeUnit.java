package edu.iss.gitcloneteam.weatherobserver.utils;

public enum TimeUnit {
    HOUR("h"), DAY("d");

    private String value;

    TimeUnit(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static TimeUnit getTimeUnitByValue(String value) {
        for (TimeUnit timeUnit : TimeUnit.values()) {
            if (timeUnit.value.equalsIgnoreCase(value)) {
                return timeUnit;
            }
        }
        return null;
    }
}
