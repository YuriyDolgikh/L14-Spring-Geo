package ua.kiev.prog.json;

import lombok.Data;
import ua.kiev.prog.model.Location;

@Data
public class Rate {
    private long timestamp;
    private String date;
    private SingleRate rates;
//    private String ip;
    private Location location;
}
