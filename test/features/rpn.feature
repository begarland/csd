Feature: Test RPN

Scenario: rpn numbers from string
    Given a string "1 2 +"
    When I operate with the calculator
    Then the result should be 3

Scenario: rpn numbers from string 
    Given a string "7 3 -"
    When I operate with the calculator
    Then the result should be 4
    
Scenario: rpn numbers from string 
    Given a string "7 3 - 10 +"
    When I operate with the calculator
    Then the result should be 14
    
Scenario: rpn numbers from string 
    Given a string "7 3 - 10 + 10 *"
    When I operate with the calculator
    Then the result should be 140

Scenario: rpn numbers from string 
    Given a string "7 3 - 10 + 10 * 1 +"
    When I operate with the calculator
    Then the result should be 141
